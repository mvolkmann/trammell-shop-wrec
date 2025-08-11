import Wrec, { css, html } from "./wrec.min.js";
import type { Product } from "./types";

import ProductJSON from "./products.json";

class WrecMain extends Wrec {
  static properties = {
    open: { type: Boolean },
    cart: { type: Array<Product> },
    products: { type: Array<Product> },
    selectedProduct: { type: Object },
  };

  static css = css`
    @import "./public/my-tailwind.css";
  `;

  static html = html`
    <body class="bg-gray-100 text-gray-800">
      <main
        class="max-w-4xl mx-auto p-8"
        onAdd-to-cart="addToCart"
        onOpen-reviews="openReviews"
      >
        <wrec-header count="this.cart.length"></wrec-header>
        <ul class="list-none space-y-6">
          this.products.map(this.makeProduct.bind(this)).join('')
        </ul>
        <wrec-modal
          open="this.open"
          product="this.selectedProduct"
        ></wrec-modal>
      </main>
    </body>
  `;

  addToCart(event: CustomEvent) {
    const { product } = event.detail;
    this.cart = [...this.cart, product];
  }

  /**
   * Set the products property to the list of products
   * defined in the products.json file.
   * This is done once, when the component is connected to the DOM.
   */
  connectedCallback(): void {
    super.connectedCallback();
    this.products = ProductJSON;
  }

  makeProduct(product: Product) {
    // We can't set an attribute to an object value, so we
    // store it by id so it can be set later as a component property.
    const id = Wrec.dataForId({ product });
    return html`<wrec-product id=${id}></wrec-product>`;
  }

  openReviews(event: CustomEvent) {
    this.selectedProduct = event.detail;
    this.open = true;
  }
}

WrecMain.register();
