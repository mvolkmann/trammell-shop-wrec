import Wrec, { html } from "./wrec";
//import type { ProductReview } from "./types";

class WrecReview extends Wrec {
  static properties = {
    review: { type: Object, required: true },
  };

  static css = `
    /* Tailwind utilities used in this component */
    .flex { display: flex; }
    .items-start { align-items: flex-start; }
    .gap-4 { gap: 1rem; }
    .border { border-width: 1px; }
    .border-gray-100 { border-color: rgb(243 244 246); }
    .border-gray-200 { border-color: rgb(229 231 235); }
    .rounded-lg { border-radius: 0.5rem; }
    .rounded-full { border-radius: 9999px; }
    .p-4 { padding: 1rem; }
    .bg-gray-50 { background-color: rgb(249 250 251); }
    .bg-white { background-color: rgb(255 255 255); }
    .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
    .w-10 { width: 2.5rem; }
    .h-10 { height: 2.5rem; }
    .flex-shrink-0 { flex-shrink: 0; }
    .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .text-xs { font-size: 0.75rem; line-height: 1rem; }
    .italic { font-style: italic; }
    .text-gray-800 { color: rgb(31 41 55); }
    .text-gray-500 { color: rgb(107 114 128); }
    .mt-1 { margin-top: 0.25rem; }
  `;

  static html = html`
    <li
      class="flex items-start gap-4 border border-gray-100 rounded-lg p-4 bg-gray-50 shadow-sm"
    >
      <img
        src="'https://api.dicebear.com/7.x/croodles/svg?seed=' + this.review.reviewerName"
        alt="this.review.reviewerName + ' Avatar'"
        class="w-10 h-10 rounded-full bg-white border border-gray-200 flex-shrink-0"
      />
      <div>
        <p class="text-sm italic text-gray-800">this.review.comment</p>
        <p class="text-xs text-gray-500 mt-1">
          — <span>this.review.reviewerName</span>
        </p>
      </div>
    </li>
  `;

  connectedCallback(): void {
    super.connectedCallback();
    console.log("wrec-review.ts connectedCallback: this.review =", this.review);
  }
}

WrecReview.register();
