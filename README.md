This is a starter template for [Learn Next.js](https://nextjs.org/learn).


1. File system routing and Navigation
- folder pages
- Link (next/link) => client-side navigation
# Code splitting and prefetching
Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you have hundreds of pages.

Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

2. Assets, Metadata, and CSS
# Image
- create public/images folder
- Image (next/image)
## Using the Image Component
Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.

Here's an example using next/image to display our profile picture. The height and width props should be the desired rendering size, with an aspect ratio identical to the source image.

# Metadata
- Head (next/head)
=> adding title and 3rd-party js library
- Script (next/script) (strategy and onLoad props)

# CSS styling
styling methods Next.js has built-in support for `CSS Modules`, `Sass`, `styled-jsx`
create components/layout.js
you only can import global CSS files in pages/_app.js
CSS Modules are useful because They scope styles at the component level
using clsx
```javascript
<div
	className={clsx({
		[styles.success]: type === 'success',
		[styles.error]: type === 'error',
	})}
>
	{children}
</div>
```
- Customizing PostCSS Config
npm install -D tailwindcss autoprefixer postcss
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
};
```
- Using Sass
npm install -D sass

3. Pre-rendering and Data Fetching
- Next.js’ pre-rendering feature.
- The two forms of pre-rendering: Static Generation and Server-side Rendering.
- Static Generation with data, and without data.
- getStaticProps and how to use it to import external blog data into the index page.
- Some useful information on getStaticProps.
By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)
## Two Forms of Pre-rendering:
  - Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
  - Server-side Rendering is the pre-rendering method that generates the HTML on each request.

Importantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

## You can use Static Generation for many types of pages, including:

Marketing pages
Blog posts
E-commerce product listings
Help and documentation

You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data.

## Static Generation (with and without data)

