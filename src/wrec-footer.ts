import Wrec, { css, html } from "./wrec";

class WrecFooter extends Wrec {
  static properties = {
    open: { type: Boolean },
  };

  static css = css`
    @import "./public/my-tailwind.css";
  `;

  static html = html`
    <div class="mt-6 flex justify-end">
      <button
        onclick="this.open = false"
        class="px-4 py-2 text-sm font-medium bg-rose-600 text-white rounded-full hover:bg-rose-700 transition shadow-sm border-none"
        aria-label="Dismiss"
      >
        Close
      </button>
    </div>
  `;
}

WrecFooter.register();
