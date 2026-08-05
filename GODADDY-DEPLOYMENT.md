# GoDaddy deployment

This is a Node.js server-rendered website. Deploy it with **GoDaddy Node.js Hosting**. A basic shared hosting plan that only accepts files in `public_html` will not run this project correctly.

## Before uploading

1. Install Node.js 20 or newer on your computer.
2. In the project folder, set the production domain if it differs from `https://www.franklinev.co.in`:

   ```powershell
   $env:VITE_SITE_URL = "https://www.your-domain.com"
   ```

3. Create the production build:

   ```powershell
   npm ci
   npm run build:godaddy
   ```

4. Create a ZIP whose root contains `package.json`, `package-lock.json`, and the generated `dist` folder. Include the source files too, so GoDaddy can reinstall dependencies if needed.

   Do not include `node_modules`, `.git`, `.claude`, or the existing `franklin-ev.zip` archive.

## Deploy in GoDaddy Node.js Hosting

1. Open **GoDaddy Node.js Hosting** in your GoDaddy account.
2. Choose **Upload ZIP**, select the ZIP created above, and deploy it.
3. Connect the production domain in the hosting dashboard and enable HTTPS.

The project root already contains the required `start` command. It starts `dist/server/index.mjs`, which listens on the `PORT` provided by GoDaddy.

## cPanel alternative

If your GoDaddy product uses cPanel's **Setup Node.js App** instead of the Node.js Hosting dashboard, create an application using Node.js 20 or newer and configure its startup command to run `npm start`. Upload the same pre-built application folder (including `dist`) and restart the application after each update.

If that panel only accepts a startup *file* and does not let you run a command, use GoDaddy Node.js Hosting or a VPS rather than placing this app directly in `public_html`.

For a shell-based cPanel setup, install only production dependencies after uploading the pre-built `dist` folder:

```bash
npm ci --omit=dev
npm start
```

Use the **Restart** control after each upload. The start command listens on GoDaddy's assigned `PORT` automatically.

## Important notes

- The site address used for SEO tags and `sitemap.xml` is built from `VITE_SITE_URL`. Rebuild before deploying if the domain changes.
- TLS/HTTPS should be enabled in GoDaddy before pointing visitors to the site.
- The enquiry endpoint currently validates a submission and returns a success response, but it does not save enquiries or send email. Connect it to an email service, CRM, or database before relying on it for leads.
- If your GoDaddy package does not offer **Setup Node.js App**, upgrade to a Node-capable GoDaddy plan/VPS or use a deployment service that supports Node.js.
