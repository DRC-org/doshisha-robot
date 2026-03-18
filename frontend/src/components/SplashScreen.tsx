import { Show, createSignal, onCleanup, onMount } from "solid-js";

type SplashScreenProps = {
  enabled?: boolean;
};

const MINIMUM_SPLASH_MS = 1000;

export default function SplashScreen(props: SplashScreenProps) {
  let overlayRef: HTMLDivElement | undefined;
  let logoRef: HTMLImageElement | undefined;
  let glowRef: HTMLDivElement | undefined;
  let labelRef: HTMLParagraphElement | undefined;

  const [visible, setVisible] = createSignal(Boolean(props.enabled));

  onMount(() => {
    if (!props.enabled) {
      setVisible(false);
      return;
    }

    let cleanup = () => {};
    let ready = false;
    let minimumElapsed = false;
    let closed = false;

    const tryClose = () => {
      if (!ready || !minimumElapsed || closed || !overlayRef || !logoRef || !labelRef) return;
      closed = true;

      void (async () => {
        const { gsap } = await import("gsap");

        gsap
          .timeline({
            onComplete: () => {
              setVisible(false);
            },
          })
          .to(labelRef, {
            y: -8,
            autoAlpha: 0,
            duration: 0.28,
            ease: "power2.in",
          })
          .to(
            logoRef,
            {
              scale: 1.08,
              autoAlpha: 0,
              duration: 0.42,
              ease: "power2.inOut",
            },
            "<",
          )
          .to(
            glowRef,
            {
              scale: 1.2,
              autoAlpha: 0,
              duration: 0.42,
              ease: "power2.inOut",
            },
            "<",
          )
          .to(
            overlayRef,
            {
              autoAlpha: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.08",
          );
      })();
    };

    const handleLoad = () => {
      ready = true;
      tryClose();
    };

    const minimumTimer = window.setTimeout(() => {
      minimumElapsed = true;
      tryClose();
    }, MINIMUM_SPLASH_MS);

    void (async () => {
      if (!overlayRef || !logoRef || !glowRef || !labelRef) return;

      const { gsap } = await import("gsap");

      const ctx = gsap.context(() => {
        gsap.set([logoRef, glowRef, labelRef], { autoAlpha: 0 });
        gsap.set(logoRef, { scale: 0.86, y: 18 });
        gsap.set(glowRef, { scale: 0.72 });
        gsap.set(labelRef, { y: 14 });

        gsap
          .timeline()
          .to(glowRef, {
            autoAlpha: 0.45,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          })
          .to(
            logoRef,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.72,
              ease: "power3.out",
            },
            "-=0.62",
          )
          .to(
            labelRef,
            {
              autoAlpha: 0.68,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.38",
          );

        gsap.to(glowRef, {
          scale: 1.08,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, overlayRef);

      cleanup = () => ctx.revert();
    })();

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    onCleanup(() => {
      cleanup();
      window.clearTimeout(minimumTimer);
      window.removeEventListener("load", handleLoad);
    });
  });

  return (
    <Show when={visible()}>
      <div
        ref={overlayRef}
        class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_42%)]"></div>
        <div
          ref={glowRef}
          class="invisible absolute h-[18rem] w-[18rem] rounded-full border border-white/12 bg-white/8 opacity-0 blur-3xl"
        ></div>
        <div class="relative flex flex-col items-center gap-6 px-8">
          <img
            ref={logoRef}
            src="/images/kuma.svg"
            alt="Kuma logo"
            class="invisible w-[10rem] max-w-[38vw] opacity-0 drop-shadow-[0_0_32px_rgba(255,255,255,0.16)]"
          />
          <p
            ref={labelRef}
            class="invisible font-[Jost] text-xs tracking-[0.5em] text-white/70 opacity-0 uppercase"
          >
            Doshisha Robotics
          </p>
        </div>
      </div>
    </Show>
  );
}
