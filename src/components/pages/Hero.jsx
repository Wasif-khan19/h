import { MicVocal } from "lucide-react";
import Header from "../shared/Header";
import { Button } from "../ui/button";
import { AnimatedTooltipPreview } from "../ui/users";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col w-full ml-8 mr-8">
      <Header />
      <div className="flex-grow container mx-auto flex px-5 py-24 items-center justify-center">
        <div className="text-center">
          <h1
            className="sm:text-6xl text-4xl font-black tracking-tight text-[#219ebc]"
            style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}
          >
            TU BOLAY GA <span className="text-[#f3ede4]">MA SOCHONGA</span>
          </h1>
          <p className="mt-2 text-xl font-medium text-gray-300">
            Message Daal, Meme Ka Dhamaka Nikaal
          </p>
          <div className="mt-10">
            <AnimatedTooltipPreview />
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center space-y-10">
              <Button className="bg-[#ff8e00] space-x-2 gap-2 tracking-widest hover:bg-[#ff8e00] py-6 rounded-2xl text-white text-xl font-black hover:shadow-lg shadow-[#ff8e00]">
                GET VOICE <MicVocal />
              </Button>
              <Button className="bg-[#219ebc] space-x-2 gap-2 hover:bg-[#219ebc] py-6 rounded-2xl text-white text-xl font-black tracking-normal hover:shadow-lg ">
                LETS&apos;S GO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
