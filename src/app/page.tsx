import { Carouselcomponent } from "@/components/carouselcomponent";
import Card from "@/components/card";
import MyCarousel from "@/components/MyCarousel";


export default function Home() {
  return (
    <main className="w-screen flex flex-col text-black gap-4">
      <nav>
        <h1 className=" h-10">bar1</h1>
        <h1 className=" h-10 bg-black text-white">bar2</h1>
      </nav>
      <section className=" flex flex-col py-4 rounded-lg">
        <Carouselcomponent />
      </section>
      <h1 className=" font-extrabold text-3xl text-center">
        デバイスのことは、ハヤランドにお任せください。
      </h1>
      <section className="flex justify-center gap-4">
        <Card
          title="card1"
          imageUrl="./hayaland-icons/hayaru1.svg"
          item1="item1"
          item2="item2"
        />
        <Card
          title="card1"
          imageUrl="./hayaland-icons/hayaru2.svg"
          item1="item1"
          item2="item2"
        />
      </section>
      <h1 className=" font-extrabold text-3xl text-center">
        ハヤランドで買うと、いいことあります。​
      </h1>
    </main>
  );
}
