import Wrec, { css, html } from "./wrec";
//import type { Product } from "./types";

class WrecProduct extends Wrec {
  static properties = {
    product: { type: Object },
  };

  static css = css`
    /* Tailwind utilities used in this component */
    .box-border {
      box-sizing: border-box;
    }
    .bg-white {
      background-color: rgb(255 255 255);
    }
    .border {
      border-width: 1px;
    }
    .border-gray-200 {
      border-color: rgb(229 231 235);
    }
    .border-rose-600 {
      border-color: rgb(225 29 72);
    }
    .rounded-xl {
      border-radius: 0.75rem;
    }
    .rounded-lg {
      border-radius: 0.5rem;
    }
    .rounded-full {
      border-radius: 9999px;
    }
    .shadow-sm {
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .hover\\:shadow-md:hover {
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .hover\\:bg-rose-50:hover {
      background-color: rgb(255 241 242);
    }
    .hover\\:bg-rose-700:hover {
      background-color: rgb(190 18 60);
    }
    .transition-shadow {
      transition-property: box-shadow;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .transition {
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    .p-6 {
      padding: 1.5rem;
    }
    .p-2 {
      padding: 0.5rem;
    }
    .px-3 {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .py-1 {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
    .py-2 {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    .flex {
      display: flex;
    }
    .flex-1 {
      flex: 1 1 0%;
    }
    .flex-col {
      flex-direction: column;
    }
    .flex-shrink-0 {
      flex-shrink: 0;
    }
    .gap-6 {
      gap: 1.5rem;
    }
    .items-center {
      align-items: center;
    }
    .items-start {
      align-items: flex-start;
    }
    .justify-between {
      justify-content: space-between;
    }
    .justify-center {
      justify-content: center;
    }
    .justify-end {
      justify-content: flex-end;
    }
    .bg-gray-50 {
      background-color: rgb(249 250 251);
    }
    .bg-rose-600 {
      background-color: rgb(225 29 72);
    }
    .w-36 {
      width: 9rem;
    }
    .w-full {
      width: 100%;
    }
    .h-full {
      height: 100%;
    }
    .max-h-48 {
      max-height: 12rem;
    }
    .object-contain {
      object-fit: contain;
    }
    .mb-3 {
      margin-bottom: 0.75rem;
    }
    .mb-6 {
      margin-bottom: 1.5rem;
    }
    .mt-4 {
      margin-top: 1rem;
    }
    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .text-xs {
      font-size: 0.75rem;
      line-height: 1rem;
    }
    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .text-base {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .font-semibold {
      font-weight: 600;
    }
    .font-medium {
      font-weight: 500;
    }
    .text-gray-900 {
      color: rgb(17 24 39);
    }
    .text-gray-600 {
      color: rgb(75 85 99);
    }
    .text-rose-600 {
      color: rgb(225 29 72);
    }
    .text-white {
      color: rgb(255 255 255);
    }

    /* Custom styles */
    p {
      color: purple;
    }
  `;

  static html = html`
    <li
      class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow mb-6 p-6"
    >
      <div class="flex gap-6">
        <div
          class="bg-gray-50 box-border p-2 rounded-lg flex-shrink-0 flex items-center justify-center w-36"
        >
          <img
            src="this.product.thumbnail"
            alt="this.product.title"
            class="w-full object-contain h-full max-h-48"
          />
        </div>
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-3">
              <h2 class="text-xl font-semibold text-gray-900">
                this.product.title
              </h2>
              <button
                onclick="$dispatch('open-modal', {reviews: product.reviews, productName: product.title})"
                class="text-xs font-medium border border-rose-600 text-rose-600 bg-white px-3 py-1 rounded-full hover:bg-rose-50 transition shadow-sm"
              >
                Reviews (<span>this.product.reviews.length</span>)
              </button>
            </div>
            <p class="text-sm text-gray-600 mb-3">this.product.description</p>
            <span class="text-base font-semibold text-gray-900"
              >$<span>this.product.price</span></span
            >
          </div>
          <div class="mt-4 flex justify-end">
            <button
              onclick="$dispatch('add-to-cart')"
              class="text-sm font-medium bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </li>
  `;
}

WrecProduct.register();
