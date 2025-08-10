import Wrec, { html } from "./wrec";
import type { Product, ProductReview } from "./types";

import ProductJSON from "./products.json";

class WrecMain extends Wrec {
  static properties = {
    cart: { type: Array<Product> },
    products: { type: Array<Product> },
    reviews: { type: Array<ProductReview> },
  };

  static css = `
    ul { list-style-type: none; }
    .bg-gray-100 { background-color: rgb(243 244 246); }
    .text-gray-800 { color: rgb(31 41 55); }
    .max-w-4xl { max-width: 56rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .p-8 { padding: 2rem; }
    .space-y-6 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(1.5rem * var(--tw-space-y-reverse)); }
  `;

  static html = html`
    <body class="bg-gray-100 text-gray-800" onOpenModal="open = true">
      <main class="max-w-4xl mx-auto p-8" onAddToCart="count++">
        <wrec-header count="this.cart.length"></wrec-header>
        <ul class="space-y-6">
          this.products.map(this.makeProduct.bind(this)).join('')
        </ul>
        <wrec-modal></wrec-modal>
        <wrec-footer></wrec-footer>
      </main>
    </body>
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.products = ProductJSON;
  }

  makeProduct(product: Product) {
    const id = crypto.randomUUID();
    Wrec.idToPropertyMap.set(id, { product });
    // We can't set an attribute to an object value,
    // so we put it in a map to be set later as a component property.
    return html`<wrec-product id=${id}></wrec-product>`;
  }
}

WrecMain.register();
