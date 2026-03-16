import { For } from "solid-js";

export default function Gallery() {
  const images = Array.from(
    { length: 15 },
    (_, i) => `/images/tiles/image${String(i + 1).padStart(2, "0")}.png`,
  );

  return (
    <section>
      <div class="w-full h-32 bg-black"></div>
      <div class="relative w-full min-h-screen">
        <div class="absolute top-0 left-0 w-full">
          <svg
            width="1440"
            height="85"
            viewBox="0 0 1440 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-full h-auto"
          >
            <path d="M1440 0H0L718.764 84.375L1440 0Z" fill="black" />
          </svg>
        </div>

        <div class="flex justify-center w-full">
          <div class="grid grid-cols-5 w-full">
            <For each={images}>
              {(src, index) => (
                <div>
                  <img src={src} alt={`Tile ${index() + 1}`} class="block w-full" loading="lazy" />
                </div>
              )}
            </For>
          </div>
        </div>

        <div class="absolute -bottom-1 left-0 w-full">
          <svg
            width="1440"
            height="90"
            viewBox="0 0 1440 90"
            fill="none"
            class="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M718.764 86.04L0 0V90H1440V0L718.764 86.04Z" fill="black" />
          </svg>
        </div>
      </div>
      <div class="w-full bg-black"></div>
    </section>
  );
}
