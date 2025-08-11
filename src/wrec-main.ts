import Wrec, { css, html } from "./wrec";
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
    ul {
      list-style-type: none;
    }
  `;

  static html = html`
    <body class="bg-gray-100 text-gray-800">
      <main
        class="max-w-4xl mx-auto p-8"
        onadd-to-cart="addToCart"
        onopen-reviews="openReviews"
      >
        <wrec-header count="this.cart.length"></wrec-header>
        <ul class="space-y-6">
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

  openReviews(event: CustomEvent) {
    this.selectedProduct = event.detail;
    console.log(
      "wrec-main.ts openReviews: this.selectedProduct =",
      this.selectedProduct
    );
    this.open = true;
  }
}

WrecMain.register();
