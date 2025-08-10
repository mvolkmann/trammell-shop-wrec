import Wrec, { css, html } from "./wrec";

//import type { Product, ProductReview } from "./types";

class WrecModal extends Wrec {
  static properties = {
    open: { type: Boolean },
    product: { type: Object },
    reviews: { type: Array<object> },
  };

  static css = css`
    .hidden {
      display: none;
    }
  `;

  static html = html`
    <div
      class="(this.open ? '' : 'hidden') + ' fixed inset-0 bg-black/60 flex items-center justify-center z-50'"
    >
      <div class="bg-white rounded-xl shadow-lg max-w-xl w-full p-6 relative">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">Reviews for:</h3>
            <p class="text-lg font-medium text-rose-700 leading-tight">
              this.product.title
            </p>
          </div>
          <button
            @click="open = false"
            class="text-gray-400 hover:text-rose-500 text-xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <ul class="space-y-4 max-h-80 overflow-y-auto pr-1">
          this.reviews.map(this.makeReview.bind(this)).join('')
        </ul>

        <wrec-footer></wrec-footer>
      </div>
    </div>
  `;

  makeReview(review: object) {
    return html`<wrec-review review=${review} />`;
  }
}

WrecModal.register();
