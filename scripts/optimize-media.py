"""Rebuild uncropped responsive images (Pillow 13+) and faststart H.264 (FFmpeg)."""
from pathlib import Path
from PIL import Image, ImageOps
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,subprocess,re
ROOT=Path(__file__).resolve().parents[1];PUBLIC=ROOT/'public';OUT=PUBLIC/'optimized';OUT.mkdir(exist_ok=True)
images=[p for p in PUBLIC.rglob('*') if p.is_file() and OUT not in p.parents and p.suffix.lower() in {'.png','.jpg','.jpeg','.webp','.avif'}]
def optimize(p):
 digest=hashlib.sha256(p.read_bytes()+b'fev-webp-q88-v1').hexdigest()[:12]
 with Image.open(p) as source:
  im=ImageOps.exif_transpose(source).convert('RGBA' if 'A' in source.getbands() else 'RGB');w,h=im.size
  widths=sorted({min(w,x) for x in [480,960,1600]});variants=[]
  for width in widths:
   stem=re.sub(r'[^a-zA-Z0-9._-]+','-',p.stem)
   target=OUT/f'{stem}-{digest}-{width}.webp';im.resize((width,round(h*width/w)),Image.Resampling.LANCZOS).save(target,'WEBP',quality=88,method=4)
   variants.append({'src':'/'+str(target.relative_to(PUBLIC)),'width':width,'bytes':target.stat().st_size})
  return '/'+str(p.relative_to(PUBLIC)),{'width':w,'height':h,'variants':variants,'originalBytes':p.stat().st_size}
with ThreadPoolExecutor(max_workers=4) as pool:result=dict(pool.map(optimize,sorted(images)))
(ROOT/'scripts/image-size-report.json').write_text(json.dumps(result,indent=2)+'\n')
compact={k:{'width':v['width'],'height':v['height'],'base':v['variants'][0]['src'].rsplit('-',1)[0],'widths':[x['width'] for x in v['variants']]} for k,v in result.items()}
(ROOT/'src/data/image-manifest.json').write_text(json.dumps(compact,separators=(',',':'))+'\n')
print('Images:',len(result),'Original bytes:',sum(v['originalBytes'] for v in result.values()),'Largest variant bytes:',sum(v['variants'][-1]['bytes'] for v in result.values()),flush=True)
videos={}
for p in sorted(PUBLIC.rglob('*.mp4')):
 if OUT in p.parents:continue
 digest=hashlib.sha256(p.read_bytes()+b'h264-crf20-v1').hexdigest()[:12];target=OUT/f'{p.stem}-{digest}.mp4'
 args=['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(p),'-map','0:v:0','-map','0:a?','-c:v','libx264','-preset','slow','-crf','20','-pix_fmt','yuv420p','-threads','4','-c:a','copy','-movflags','+faststart']
 if 'scrub' in p.stem:
  # The supplied motor source has only 168 decodable frames of 192 declared.
  # Hold the last available frame, as native playback does, to retain its 8s timing.
  args+=['-g','12','-keyint_min','12','-sc_threshold','0','-vf','tpad=stop_mode=clone:stop_duration=1','-t','8']
 subprocess.run(args+[str(target)],check=True)
 # Keep already efficient encodings rather than increasing transfer size.
 chosen=target if target.stat().st_size<p.stat().st_size else p
 if chosen==p:target.unlink()
 poster=OUT/f'{p.stem}-{digest}-poster.webp'
 subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(p),'-frames:v','1','-vf','scale=960:-2','-c:v','libwebp','-quality','88',str(poster)],check=True)
 videos['/'+str(p.relative_to(PUBLIC))]={'src':'/'+str(chosen.relative_to(PUBLIC)),'poster':'/'+str(poster.relative_to(PUBLIC)),'originalBytes':p.stat().st_size,'bytes':chosen.stat().st_size}
 print(p.name,p.stat().st_size,'->',chosen.stat().st_size,flush=True)
(ROOT/'src/data/video-manifest.json').write_text(json.dumps(videos,indent=2)+'\n')
