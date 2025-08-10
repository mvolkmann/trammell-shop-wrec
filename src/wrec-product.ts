import Wrec, { css, html } from "./wrec";
//import type { Product } from "./types";

class WrecProduct extends Wrec {
  static properties = {
    product: { type: Object },
  };

  static css = css`
    p {
      color: purple;
    }
  `;

  static html = html`
    <li
      class="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div class="flex gap-6">
        <div
          class="bg-gray-50 p-2 rounded-lg flex-shrink-0 flex items-center justify-center w-36"
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
