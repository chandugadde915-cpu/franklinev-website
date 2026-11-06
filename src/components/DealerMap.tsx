import { useEffect, useState, type ReactElement } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
// ---------- MAP COORDINATES ----------
const cityCoordinates: Record<string, [number, number]> = {
  "AS Rao Nagar": [17.4589, 78.5738],
  Kanajiguda: [17.4567, 78.5521],
  Boduppal: [17.4285, 78.5739],
  Chintal: [17.4817, 78.4104],
  Champapet: [17.3659, 78.5405],
  Malkajgiri: [17.4519, 78.5432],
  "Hayath Nagar": [17.3278, 78.6044],
  Manikonda: [17.4079, 78.3747],
  Nalgonda: [17.0517, 79.2676],
  Karimnagar: [18.4392, 79.129],
  Mancherial: [18.8709, 79.4386],
  Vikarabad: [17.3388, 77.904],
  Kothagudem: [17.5533, 80.6186],
  Bhupalpally: [18.4345, 79.8584],
  Khammam: [17.2473, 80.1514],
  Kollapur: [16.1202, 78.2826],
  Vemulawada: [18.5534, 78.7931],
  Jammikunta: [18.3456, 79.0566],
  Srikakulam: [18.2985, 83.8978],
  Visakhapatnam: [17.6868, 83.2185],
};

const allCities = Object.keys(cityCoordinates);

// ---------- Client‑only Premium Map Component ----------
export default function DealerMap() {
  const [isClient, setIsClient] = useState(false);
  const [MapComponent, setMapComponent] = useState<(() => ReactElement) | null>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsClient(true);

    const loadMap = async () => {
      try {
        const leafletModule = await import("react-leaflet");
        const LModule = await import("leaflet");

        if (!isMounted) return;

        const { MapContainer, TileLayer, Marker, Popup, useMap } = leafletModule;
        const L = LModule.default;

        // Premium custom marker
        const createCustomMarker = (color: string = "#e67e22") => {
          return L.divIcon({
            className: "custom-marker custom-marker-shadow", // ✅ merged classes
            html: `<svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.268 0 0 6.268 0 14c0 9 14 26 14 26s14-17 14-26c0-7.732-6.268-14-14-14z" fill="${color}" stroke="white" stroke-width="2.5"/>
      <circle cx="14" cy="14" r="5" fill="white"/>
      <circle cx="14" cy="14" r="2.5" fill="${color}" opacity="0.6"/>
    </svg>`,
            iconSize: [28, 40],
            iconAnchor: [14, 40],
            popupAnchor: [0, -40],
          });
        };

        const ScrollZoomControl = () => {
          const map = useMap();
          const [active, setActive] = useState(false);

          useEffect(() => {
            map.scrollWheelZoom.disable();

            const container = map.getContainer();
            const enable = () => {
              map.scrollWheelZoom.enable();
              setActive(true);
            };
            const disable = () => {
              map.scrollWheelZoom.disable();
              setActive(false);
            };

            container.addEventListener("click", enable);
            container.addEventListener("mouseleave", disable);

            return () => {
              container.removeEventListener("click", enable);
              container.removeEventListener("mouseleave", disable);
            };
          }, [map]);

          if (active) {
            return null;
          }

          return (
            <div className="map-scroll-hint" aria-hidden="true">
              Click map to zoom &amp; pan
            </div>
          );
        };

        const Map = () => (
          <MapContainer
            center={[17.385, 78.4867]}
            zoom={9}
            scrollWheelZoom={false}
            wheelPxPerZoomLevel={140}
            zoomControl={true}
            className="w-full h-full min-h-[400px] rounded-3xl"
            style={{ background: "#e8ecf1" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              maxZoom={19}
            />
            <ScrollZoomControl />

            <>
              {allCities.map((city) => {
                const coords = cityCoordinates[city];
                if (!coords) return null;
                return (
                  <Marker key={city} position={coords} icon={createCustomMarker("#e67e22")}>
                    <Popup closeButton={false} className="dealer-popup">
                      <div className="flex flex-col items-start gap-0.5 px-1 py-0.5">
                        <strong className="text-ink text-base font-bold">{city}</strong>
                        <span className="text-xs text-muted-foreground">📍 Franklin EV Dealer</span>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${coords.join(",")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 text-xs font-semibold text-primary hover:underline"
                        >
                          Get Directions →
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </>
          </MapContainer>
        );

        setMapComponent(() => Map);
      } catch (error) {
        console.error("Failed to load dealer map", error);
        if (isMounted) setMapError(true);
      }
    };

    loadMap();

    return () => {
      isMounted = false;
    };
  }, []);

  if (mapError) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-4 bg-muted/20 rounded-3xl p-6 text-center">
        <MapPin className="h-10 w-10 text-primary" />
        <div>
          <h3 className="font-display text-xl font-bold text-ink">Dealer map is unavailable</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Franklin EV dealers are listed across Hyderabad, Telangana and Andhra Pradesh.
          </p>
        </div>
        <Link to="/contact" className="cinema-btn cinema-btn-primary">
          View dealer locations
        </Link>
      </div>
    );
  }

  if (!isClient || !MapComponent) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-muted/20 rounded-3xl">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm text-muted-foreground">Loading map…</span>
        </div>
      </div>
    );
  }

  return <MapComponent />;
}
