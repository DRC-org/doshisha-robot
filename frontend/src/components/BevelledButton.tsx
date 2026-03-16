import { splitProps, JSX } from "solid-js";

interface BevelledButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function BevelledButton(props: BevelledButtonProps) {
  const [local, others] = splitProps(props, ["text", "class"]);

  return (
    <button
      {...others}
      class={`relative inline-flex items-center justify-center min-w-[320px] pl-12 pr-4 py-4 text-white font-[Matisse_Pro] text-2xl tracking-widest outline-none [clip-path:polygon(16px_0,100%_0,100%_100%,0_100%,0_16px)] ${
        local.class || ""
      }`}
    >
      <div class="absolute inset-0 bg-white/20 pointer-events-none"></div>

      <div class="absolute inset-0 border border-white pointer-events-none"></div>

      <div
        class="absolute bg-white pointer-events-none origin-top-left"
        style={{
          width: "26px",
          height: "1px",
          top: "17px",
          left: "-1px",
          transform: "rotate(-45deg)",
        }}
      ></div>

      <div class="relative z-10 flex items-center justify-end w-full h-full">
        <span class="absolute left-1/2 top-1/2 translate-x-[calc(-50%-8px)] -translate-y-1/2 whitespace-nowrap">
          {local.text}
        </span>
        <svg
          class="shrink-0"
          width="66"
          height="16"
          viewBox="355 20 66 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M356.202 27.2561L355.202 27.2561L355.202 29.2561L356.202 29.2561L356.202 28.2561L356.202 27.2561ZM420.909 28.9632C421.3 28.5727 421.3 27.9395 420.909 27.549L414.545 21.185C414.155 20.7945 413.522 20.7945 413.131 21.185C412.741 21.5756 412.741 22.2087 413.131 22.5993L418.788 28.2561L413.131 33.913C412.741 34.3035 412.741 34.9367 413.131 35.3272C413.522 35.7177 414.155 35.7177 414.545 35.3272L420.909 28.9632ZM356.202 28.2561L356.202 29.2561L420.202 29.2561L420.202 28.2561L420.202 27.2561L356.202 27.2561L356.202 28.2561Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
}
