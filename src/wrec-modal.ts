import Wrec, { css, html } from "./wrec";

class WrecModal extends Wrec {
  static properties = {
    open: { type: Boolean },
    product: { type: Object },
    reviews: { type: Array<object> },
  };

  static css = css`
    .bg-black\\/60 {
      background-color: rgb(0 0 0 / 0.6);
    }
    .bg-white {
      background-color: rgb(255 255 255);
    }
    .fixed {
      position: fixed;
    }
    .flex {
      display: flex;
    }
    .font-bold {
      font-weight: 700;
    }
    .font-medium {
      font-weight: 500;
    }
    .font-semibold {
      font-weight: 600;
    }
    .hidden {
      display: none;
    }
    .hover\\:text-rose-500:hover {
      color: rgb(244 63 94);
    }
    .inset-0 {
      inset: 0px;
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
    .leading-tight {
      line-height: 1.25;
    }
    .max-h-80 {
      max-height: 20rem;
    }
    .max-w-xl {
      max-width: 36rem;
    }
    .mb-6 {
      margin-bottom: 1.5rem;
    }
    .overflow-y-auto {
      overflow-y: auto;
    }
    .p-6 {
      padding: 1.5rem;
    }
    .pr-1 {
      padding-right: 0.25rem;
    }
    .relative {
      position: relative;
    }
    .rounded-xl {
      border-radius: 0.75rem;
    }
    .shadow-lg {
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -2px rgb(0 0 0 / 0.1);
    }
    .space-y-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
    .text-gray-400 {
      color: rgb(156 163 175);
    }
    .text-gray-900 {
      color: rgb(17 24 39);
    }
    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    .text-rose-700 {
      color: rgb(190 18 60);
    }
    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .w-full {
      width: 100%;
    }
    .z-50 {
      z-index: 50;
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
