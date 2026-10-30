# Ansuya Surgicals Ltd. — Website

Product catalogue website for Ansuya Surgicals Ltd., a manufacturer of medical and
surgical dressings. It is a static React 19 + Vite site with no backend: products,
brands and contact details are plain JavaScript files in `src/`. Enquiries go through
WhatsApp and phone links.

## Pages

| Page | Route |
|---|---|
| Home | `/` |
| Products | `/products` (optionally `/products?category=<slug>` to preselect a category) |
| Product detail | `/products/:id` |
| About | `/about` |
| Contact | `/contact` |
| Not found | any other URL |

Category slugs: `absorbent-dressings`, `bandages`, `dressings`, `medicated-dressing`,
`protective-equipment`.

## Run it

Requires Node.js 20.19+ or 22.12+.

```bash
npm install       # first time only
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the dist/ build locally
npm run lint      # oxlint
```

## Folder layout

```
public/
  .htaccess            Apache rewrite rules and old-site redirects (copied into dist/ on build)
  favicon.svg
src/
  config/siteConfig.js Company name, addresses, phones, WhatsApp, email, GST
  data/
    products.js        The product catalogue
    categories.js      The 5 product categories (filter tabs)
    brands.js          Brand names and colours
  components/          Header, Footer, ProductCard, ProductListing, PageHero, ...
  pages/               Home, Products, ProductDetail, About, Contact, NotFound
  assets/images/       Logo, product photos, brand logos, certificates
  App.jsx              Routes
  index.css            Colours, fonts and shared styles (:root variables)
```

## Edit products

Products live in `src/data/products.js`. To add one:

1. Put its photos in `src/assets/images/home-products/`.
2. Import them at the top of `products.js`.
3. Add an entry to the `products` array:
   - `id`: a unique number (it becomes the URL, `/products/<id>`)
   - `name`, `description`
   - `category`: one or more slugs from `categories.js`
   - `brand`: a brand slug from `brands.js`
   - `image`: main photo; `hoverImage` (optional): photo shown on hover;
     `gallery` (optional): extra photos for the product page
   - `sizes`: list of available sizes, shown as written on the product page
   - `details`: list of short factual points shown on the product page

An empty `sizes` or `details` list (`[]`) shows nothing for that section.

## Edit contact details

Everything is in `src/config/siteConfig.js`: company name, the corporate office and
factory addresses, phone numbers (display text and `tel:` links), the primary
"Call Us" number, the WhatsApp number, email and GST number. The Header, Footer,
Contact page and buttons all read from it.

## Deploy (Apache shared hosting: cPanel / hPanel)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` (not the folder itself) to `public_html`,
   including the hidden `.htaccess` file. In the cPanel or hPanel File Manager,
   enable "Show Hidden Files" to check it is there.

The `.htaccess` file sends every URL to `index.html`, so links such as `/about` keep
working when a page is refreshed or opened directly. It also holds 301 redirects from
the old WordPress URLs. The site is built to be served from the domain root.
