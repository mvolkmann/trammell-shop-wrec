import Wrec, { css, html } from "./wrec";
//import type { ProductReview } from "./types";

class WrecReview extends Wrec {
  static properties = {
    review: { type: Object },
  };

  static css = css`
    @import "./public/my-tailwind.css";
  `;

  static html = html`
    <li
      class="flex items-start gap-4 border border-gray-100 rounded-lg mb-4 p-4 bg-gray-50 shadow-sm"
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
}

WrecReview.register();
