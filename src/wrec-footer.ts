import Wrec, { html } from "./wrec";

class WrecModal extends Wrec {
  static properties = {
    open: { type: Boolean },
  };

  static css = `
    /* Tailwind utilities used in this component */
    .mt-6 { margin-top: 1.5rem; }
    .flex { display: flex; }
    .justify-end { justify-content: flex-end; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .font-medium { font-weight: 500; }
    .bg-rose-600 { background-color: rgb(225 29 72); }
    .text-white { color: rgb(255 255 255); }
    .rounded-full { border-radius: 9999px; }
    .hover\\:bg-rose-700:hover { background-color: rgb(190 18 60); }
    .transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
    .shadow-sm { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); }
  `;

  static html = html` <div class="mt-6 flex justify-end">
    <button
      @click="this.open = false"
      class="px-4 py-2 text-sm font-medium bg-rose-600 text-white rounded-full hover:bg-rose-700 transition shadow-sm"
      aria-label="Dismiss"
    >
      Close
    </button>
  </div>`;
}

WrecModal.register();
