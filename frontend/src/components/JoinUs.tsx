import { For } from "solid-js";
import { BevelledButton } from "~/components/BevelledButton";

export default function JoinUs() {
  const temp_images = Array.from(
    { length: 15 },
    (_, i) => `/images/tiles/image${String(i + 1).padStart(2, "0")}.png`,
  );
  const images = [...temp_images, ...temp_images];
  return (
    <section class="relative overflow-hidden px-12 py-60">
      <div class="w-full absolute top-0 left-0">
        <svg
          width="1440"
          height="67"
          viewBox="0 0 1440 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto"
        >
          <path d="M1440 67L0 9.20133V0H1440V67Z" fill="black" />
        </svg>
      </div>
      <div class="w-full h-screen absolute top-0 left-0 -z-10 brightness-50">
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
      <div class="z-10 text-white">
        <h2 class="text-8xl font-[Matisse_Pro] font-extrabold">入会案内</h2>
        <div class="flex flex-col items-center">
          <p class="text-5xl font-[Matisse_Pro] font-extrabold text-center mt-12">
            ロボット製作に興味がある人、集まれ！
          </p>
          <p class="text-xl font-[Noto_Sans_JP] mt-6 text-center w-160">
            同志社大学ロボット研究会は、一緒にロボットを製作する仲間をいつでも募集しています。
          </p>
          <p class="text-xl font-[Noto_Sans_JP] mt-6 text-center w-160">
            <span class="font-bold text-2xl">未経験者・初心者大歓迎です！</span>
            <br />
            毎年入会者の7割以上は未経験者ですが、先輩のサポートや数々のロボコン経験を通して、誰もが一年後には欠かせない仲間に成長しています。
          </p>
          <p class="text-xl font-[Noto_Sans_JP] mt-6 text-center w-160">
            入会に必要なのは、やる気と、たった一歩を踏みだす勇気だけです！ 見学・体験だけでも
            OK！質問も受けつけています。{" "}
          </p>
          <p class="text-xl font-[Noto_Sans_JP] mt-6 text-center w-160">
            少しでも興味のある方は、X または Instagram の DM からお問い合わせください。
          </p>
          <div class="mt-12 flex flex-col items-center px-2 gap-4">
            <BevelledButton text="公式Xアカウント" />
            <BevelledButton text="公式Instagramアカウント" />
          </div>
        </div>
      </div>
      <div class="w-full absolute -bottom-1 left-0">
        <svg
          width="1440"
          height="71"
          viewBox="0 0 1440 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-full h-auto"
        >
          <path d="M1440 8.39233e-05L0 61.0158V70.7292H1440V8.39233e-05Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
