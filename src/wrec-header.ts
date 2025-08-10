import Wrec, { css, html } from "./wrec";

class WrecHeader extends Wrec {
  static properties = {
    count: { type: Number, required: true },
  };

  static css = css`
    @import "./public/my-tailwind.css";
  `;

  static html = html`
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold tracking-tight text-rose-700">
        Shop Beauty Picks
      </h1>
      <div class="relative">
        <button
          class="bg-white rounded-full p-2 shadow-sm hover:shadow-md transition border border-gray-200"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-rose-600"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
              fill="currentColor"
            />
            <path
              d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
              fill="currentColor"
            />
            <path
              d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <span
          class="absolute -top-1 -right-1 bg-rose-600 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 shadow"
        >
          this.count
        </span>
      </div>
    </div>
  `;
}

WrecHeader.register();
