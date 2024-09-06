import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
          <h1 className="absolute right-10 md:right-40 bottom-0 z-[10]/">My portfolio</h1>
          <Image
            src='/assets/MoustacheMan.png'
            alt="'MoustacheMan"
            width={560}
            height={560}
            className="w-[300px] h-[300px] z-[1] md:h-[560px] md:w-[560px]"
          />
          <Image
            src='/assets/top-left-img.png'
            alt="'paint"
            width={230}
            height={230}
            className="absolute left-0 top-0"
          />
          <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
            <h1 className="text-[50px] text-white max-w-[500px]">Transforming ideas into <span className="text-red-500">Digital Reality</span></h1>
          </div>
    </main>
  );
}
