import Wrec, { css, html } from "./wrec";

//import type { Product, ProductReview } from "./types";

class WrecModal extends Wrec {
  static properties = {
    open: { type: Boolean },
    product: { type: Object },
    reviews: { type: Array<object> },
  };

  static css = css`
    /* Tailwind utilities used in this component */
    .hidden { display: none; }
    .fixed { position: fixed; }
    .inset-0 { inset: 0px; }
    .bg-black\\/60 { background-color: rgb(0 0 0 / 0.6); }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .items-start { align-items: flex-start; }
    .z-50 { z-index: 50; }
    .bg-white { background-color: rgb(255 255 255); }
    .rounded-xl { border-radius: 0.75rem; }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1); }
    .max-w-xl { max-width: 36rem; }
    .w-full { width: 100%; }
    .p-6 { padding: 1.5rem; }
    .relative { position: relative; }
    .mb-6 { margin-bottom: 1.5rem; }
    .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    .font-semibold { font-weight: 600; }
    .text-gray-900 { color: rgb(17 24 39); }
    .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
    .font-medium { font-weight: 500; }
    .text-rose-700 { color: rgb(190 18 60); }
    .leading-tight { line-height: 1.25; }
    .text-gray-400 { color: rgb(156 163 175); }
    .hover\\:text-rose-500:hover { color: rgb(244 63 94); }
    .font-bold { font-weight: 700; }
    .space-y-4 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(1rem * var(--tw-space-y-reverse)); }
    .max-h-80 { max-height: 20rem; }
    .overflow-y-auto { overflow-y: auto; }
    .pr-1 { padding-right: 0.25rem; }
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
