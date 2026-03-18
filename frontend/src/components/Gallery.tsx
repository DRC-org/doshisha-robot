export default function Gallery() {
  return (
    <section>
      <div class="w-full h-32 bg-black"></div>
      <div class="relative w-full">
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

        <video
          class="w-full h-[50vh] object-cover"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          poster="/images/catchrobo_2025_0.png"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

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
    </section>
  );
}
