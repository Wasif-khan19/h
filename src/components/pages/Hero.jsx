import { Button } from "../ui/button";
import { AnimatedTooltipPreview } from "../ui/users";

const Hero = () => {
  return (
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="text-center">
        <h1
          className="sm:text-6xl text-3xl font-black tracking-tight text-[#55dd4a]"
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
        <div className="mt-10">
          <div className="flex justify-center">
            <Button className="bg-[#55dd4a] py-6 rounded-2xl text-[#122315] text-xl font-bold hover:bg-[#77e46e]">
              MESSAGE LIKHAY GA?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
