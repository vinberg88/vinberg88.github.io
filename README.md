# I love Code =]

## Contact form configuration

The project exports a static site for GitHub Pages, so there is no Node.js runtime available in production. To keep the contact form functional you must point the client-side request to an external email service.

1. Pick a static-friendly provider (for example [FormSubmit](https://formsubmit.co/) or [StaticForms](https://www.staticforms.xyz/)) and follow their verification flow for the recipient address you want to use.
2. Copy the HTTPS endpoint that the provider exposes for submissions.
3. Create a `.env.local` file (or update your existing one) and add:

   ```env
   NEXT_PUBLIC_CONTACT_ENDPOINT=https://formsubmit.co/ajax/you@example.com
   ```

   Replace the URL with the endpoint you obtained in step 2.
4. Restart the dev server so the new environment variable is picked up.

Locally, or when the public endpoint is not configured, the form falls back to the built-in `/api/contact` route which uses Nodemailer with Ethereal test inboxes. In production you should always configure `NEXT_PUBLIC_CONTACT_ENDPOINT`; otherwise submissions will fail because GitHub Pages cannot execute the API route.
