import { Carouselcomponent } from "@/components/carouselcomponent";
import Card from "@/components/card";
import LongCard from "@/components/longCard";


export default function Home() {
  return (
    <main className="flex flex-col text-black gap-4">
      <nav>
        <h1 className=" h-10">bar1</h1>
        <h1 className=" h-10 bg-black text-white">bar2</h1>
      </nav>
      
      <section className=" flex flex-col py-4 rounded-lg">
        <Carouselcomponent />
      </section>

      <section className="flex flex-col justify-center gap-4 mt-8">
        <h1 className=" font-extrabold text-3xl text- text-center">
          デバイスのことは、ハヤランドにお任せください。
        </h1>
        <div className="flex flex-wrap items-center gap-8 justify-center">
          <Card
            title="買う​"
            imageUrl="./hayaland-icons/hayaru1.svg"
            item1="ショップ​"
            item2="アウトレット​"
            icon1="./hayaland-icons/4.svg"
            icon2="./hayaland-icons/3.svg"
          />
          <Card
            title="売る​"
            imageUrl="./hayaland-icons/hayaru2.svg"
            item1="Webで売る​"
            item2="Lineで売る​"
            icon1="./hayaland-icons/5.svg"
            icon2="./hayaland-icons/6.svg"
          />
        </div>
      </section>
      <section className="mt-12">
        <h1 className=" font-extrabold text-3xl text-center">
          ハヤランドで買うと、いいことあります。​
        </h1>
        <div className="flex flex-wrap items-center gap-8 justify-center">
          <LongCard
            imageUrl="./hayaland-icons/7.svg"
            text1="最短で翌日にお届け​"
            text2="お好みのデバイスをより速く​ より簡単に受け取れます。"
          />
          <LongCard
            imageUrl="./hayaland-icons/8.svg"
            text1="透明な機能検査で品質保証​"
            text2="ハヤランドの中古スマホは​
魅力的な品質です。"
          />
          <LongCard
            imageUrl="./hayaland-icons/9.svg"
            text1="サービスもサポートもお任せ​"
            text2="中古品には1年間の保証が付き​
お客様をサポートします。"
          />
        </div>
      </section>
    </main>
  );
}
