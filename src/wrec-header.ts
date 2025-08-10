import Wrec, { css, html } from "./wrec";

class WrecHeader extends Wrec {
  static properties = {
    count: { type: Number, required: true },
  };

  static css = css`
    .-right-1 {
      right: -0.25rem;
    }
    .-top-1 {
      top: -0.25rem;
    }
    .absolute {
      position: absolute;
    }
    .bg-rose-600 {
      background-color: rgb(225 29 72);
    }
    .bg-white {
      background-color: rgb(255 255 255);
    }
    .border {
      border-width: 1px;
    }
    .border-gray-200 {
      border-color: rgb(229 231 235);
    }
    .flex {
      display: flex;
    }
    .font-bold {
      font-weight: 700;
    }
    .font-semibold {
      font-weight: 600;
    }
    .hover\\:shadow-md:hover {
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .items-center {
      align-items: center;
    }
    .justify-between {
      justify-content: space-between;
    }
    .mb-8 {
      margin-bottom: 2rem;
    }
    .p-2 {
      padding: 0.5rem;
    }
    .px-1\\.5 {
      padding-left: 0.375rem;
      padding-right: 0.375rem;
    }
    .py-0\\.5 {
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
    }
    .relative {
      position: relative;
    }
    .rounded-full {
      border-radius: 9999px;
    }
    .shadow {
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
    .shadow-sm {
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
    .text-rose-600 {
      color: rgb(225 29 72);
    }
    .text-rose-700 {
      color: rgb(190 18 60);
    }
    .text-white {
      color: rgb(255 255 255);
    }
    .text-xs {
      font-size: 0.75rem;
      line-height: 1rem;
    }
    .tracking-tight {
      letter-spacing: -0.025em;
    }
    .transition {
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
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
