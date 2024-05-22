import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/about.jpg"
          fill
          alt="About image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          About Us
        </h1>
      </div>
      <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p>
          Texto qualquer que será aplicado aqui. Texto qualquer que será
          aplicado aqui. Texto qualquer que será aplicado aqui. Texto qualquer
          que será aplicado aqui. Texto qualquer que será aplicado aqui
        </p>

        <div className="w-full items-center flex justify-center">
            <Image src="/assets/signature.png" width={500} height={500} alt="Signature"/>
        </div>
      </div>
    </div>
  );
};

export default Page;
