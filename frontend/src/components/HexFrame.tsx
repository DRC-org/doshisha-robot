export function HexFrame({ title, body, color, textColor }: { title: string; body: string; color: string; textColor: string }) {
  return (
    <div class={`relative h-64 w-64 text-[${textColor}]`}>
      <svg
        width="217"
        height="245"
        viewBox="0 0 217 245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full absolute"
      >
        <path
          d="M216 61.833V183.166L108.5 243.852L1 183.166V61.833L108.5 1.14746L216 61.833Z"
          stroke={color}
          stroke-width="2"
        />
        <path
          d="M108.422 15L203.843 68.6881V176.064L108.422 229.753L13 176.064V68.6881L108.422 15Z"
          fill={color}
        />
      </svg>
      <div class="relative flex flex-col w-full h-full justify-center items-center font-[Matisse_Pro] gap-4 z-10">
        <p class="text-4xl">{title}</p>
        <p class="text-2xl">{body}</p>
      </div>
    </div>
  );
}
