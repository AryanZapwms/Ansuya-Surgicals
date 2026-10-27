# Ansuya Surgicals Ltd. — Website

Product catalogue website for Ansuya Surgicals Ltd., a manufacturer of medical and
surgical dressings. It is a static React site (React 19 + Vite) with no backend:
products, brands and contact details are plain JavaScript files in `src/`.
Enquiries go through WhatsApp or phone links.

Pages: Home (`/`), Products (`/products`, optionally `?category=<slug>`),
product detail (`/products/:id`), About (`/about`), Contact (`/contact`), and a 404 page.

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
  .htaccess            Apache rewrite rules (copied into dist/ on build)
  favicon.svg
src/
  config/siteConfig.js Company name, address, phones, WhatsApp, email, GST
  data/
    products.js        The product catalogue
    categories.js      The 5 product categories (filter tabs)
    brands.js          Brand names and colours
    images.js          Local images used outside the product catalogue
  components/          Header, Footer, ProductCard, ProductListing, PageHero, ...
  pages/               Home, Products, ProductDetail, About, Contact, NotFound
  assets/images/       Logo, product photos, brand logos
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

## Edit contact details

Everything is in `src/config/siteConfig.js`: company name, address lines, phone
numbers (display text and `tel:` links), primary "Call Us" number, WhatsApp number,
email and GST number. The Header, Footer, Contact page and buttons all read from it.

## Deploy (Apache / cPanel shared hosting)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` (not the folder itself) to `public_html`,
   including the hidden `.htaccess` file. In cPanel File Manager, enable
   "Show Hidden Files" to check it is there.

The `.htaccess` file sends every URL to `index.html`, so links such as `/about` keep
working when a page is refreshed or opened directly. The site is built to be served
from the domain root.
