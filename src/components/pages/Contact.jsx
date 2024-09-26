import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <div className="bg-navy-900 min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <img
          className="object-cover object-center rounded"
          src="J.png"
          width="720"
          height="600"
        />
      </div>
      <div className="md:w-1/2 space-y-5">
        <h1
          className="text-4xl font-black mb-4 text-center text-[#55dd4a]"
          style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}
        >
          BHOOL TAU <span className="text-[#f3ede4]">NAHI GAYE</span>
        </h1>
        <p className="mb-4 whitespace-normal px-8 sm:text-lg text-xs text-[#f3ede4] font-normal text-center">
          <span className="font-bold text-1xl text-[#ffee52]">
            Meme Aatank{" "}
          </span>
          mein swagat hai, jahan aapke shabd bante hain hansi ka bawaal! Yeh app
          aapke simple messages ko hilarious meme voices mein badal deta hai,
          chahe aap mazak karna chahte ho ya apne
          <span className="font-bold text-1xl text-[#ffee52]">
            {" "}
            jazbat bayaan{" "}
          </span>{" "}
          karna chahte ho. Bas apna sandesh likhiye, aur dekhiye kaise hum aapke
          liye ek dhamakedar meme voice generate karte hain jo sabko LOL kar
          dega! Quirky{" "}
          <span className="font-bold text-1xl text-[#ffee52]">
            characters aur funny{" "}
          </span>{" "}
          accents mein se chuniye, taaki aapke messages ko mile ek naya spice.
          Apne meme creations ko social media par share karein ya seedha doston
          ko bhejein, aur hansi baatne mein maza lein! Simple aur intuitive
          design ke saath, aap seconds mein meme banana shuru kar sakte hain,
          bina kisi jhanjhat ke. Toh aaj hi meme ke is{" "}
          <span className="font-bold text-1xl text-[#ffee52]">
            bawaal mein shamil
          </span>{" "}
          ho jayein, aur apne shabdon se hansi aur masti failaayein! Get ready
          for some serious Meme Aatank!
        </p>

        {/* Center the button */}
        <div className="flex justify-center items-center">
          <Button className="bg-[#55dd4a] items-center justify-center py-6 rounded-2xl text-[#122315] text-xl font-bold hover:bg-[#77e46e]">
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
