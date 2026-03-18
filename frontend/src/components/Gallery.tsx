import { onCleanup, onMount } from "solid-js";

export default function Gallery() {
  let sectionRef: HTMLElement | undefined;
  let videoRef: HTMLVideoElement | undefined;

  onMount(() => {
    let cleanup = () => {};

    void (async () => {
      if (!sectionRef || !videoRef) return;

      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.set(videoRef, { y: -240 });

        gsap.to(videoRef, {
          y: 240,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    onCleanup(() => {
      cleanup();
    });
  });

  return (
    <section ref={sectionRef}>
      <div class="relative w-full overflow-hidden">
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

        <div class="h-[50vh] overflow-hidden">
          <video
            ref={videoRef}
            class="h-[calc(50vh+6rem)] w-full object-cover will-change-transform"
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
    </section>
  );
}
