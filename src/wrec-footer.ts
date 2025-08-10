import Wrec, { html } from "./wrec";

class WrecModal extends Wrec {
  static properties = {
    open: { type: Boolean },
  };

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
