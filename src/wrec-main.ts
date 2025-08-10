import Wrec, { css, html } from "./wrec";
import type { Product, ProductReview } from "./types";

import ProductJSON from "./products.json";

class WrecMain extends Wrec {
  static properties = {
    cart: { type: Array<Product> },
    products: { type: Array<Product> },
    reviews: { type: Array<ProductReview> },
  };

  static css = css`
    @import "./public/my-tailwind.css";
    ul {
      list-style-type: none;
    }
  `;

  static html = html`
    <body class="bg-gray-100 text-gray-800" onOpenModal="open = true">
      <main class="max-w-4xl mx-auto p-8" onAddToCart="count++">
        <wrec-header count="this.cart.length"></wrec-header>
        <ul class="space-y-6">
          this.products.map(this.makeProduct.bind(this)).join('')
        </ul>
        <wrec-modal></wrec-modal>
      </main>
    </body>
  `;

  /**
   * Set the products property to the list of products defined in the products.json file.
   * This is done once, when the component is connected to the DOM.
   */
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
