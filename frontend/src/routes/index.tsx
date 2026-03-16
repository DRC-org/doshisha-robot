import About from "~/components/About";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";

const tiles = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/tiles/image${String(index + 1).padStart(2, "0")}.png`,
  alt: `活動風景 ${index + 1}`,
}));

const features = [
  { title: "創部", body: ["西暦2002年"], tone: "purple" },
  { title: "部員", body: ["47名"], tone: "purple" },
  { title: "活動場所", body: ["京田辺", "キャンパス"], tone: "cyan" },
  { title: "区分", body: ["公認団体"], tone: "purple" },
];

const competitions = [
  { month: "March", title: "関西春ロボコン" },
  { month: "June", title: "NHK学生ロボコン" },
  { month: "August", title: "関西夏ロボコン" },
  { month: "September", title: "キャチロボバトルコンテスト" },
  { month: "September", title: "全日本学生室内飛行ロボットコンテスト" },
  { month: "December", title: "全日本ロボット相撲大会" },
];

const recruitText = [
  "同志社大学ロボット研究会は、一緒にロボットを製作する仲間をいつでも募集しています。",
  "未経験者・初心者大歓迎です！毎年入会者の7割以上は未経験者ですが、先輩のサポートや数々のロボコン経験を通して、誰もが一年後には欠かせない仲間に成長しています。",
  "入会に必要なのは、やる気と、たった一歩を踏みだす勇気だけです！",
  "見学・体験だけでも OK！質問も受けつけています。少しでも興味のある方は、X または Instagram の DM からお問い合わせください。",
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
    </main>
  );
}
