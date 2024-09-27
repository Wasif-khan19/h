import Header from "../shared/Header";
import { Button } from "../ui/button";

const AboutSection = () => {
  return (
    <div className="bg-navy-900 min-h-screen flex flex-col w-full px-4 sm:px-8 mt-10">
      <Header />
      <div className="flex-grow container mx-auto flex px-5 py-20 items-center justify-center">
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="hidden lg:block w-1/2 pr-8">
              <img
                className="object-cover object-center mx-auto rounded-full border-4 border-black shadow-2xl shadow-black w-96 h-96"
                src="I.PNG"
                alt="Profile"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-center lg:text-left text-[#219ebc]"
                style={{ textShadow: "4px 4px 3px rgba(0, 0, 0, 0.5)" }}
              >
                BHOOL TAU <span className="text-[#f3ede4]">NAHI GAYE</span>
              </h1>
              <p className="mb-6 whitespace-normal text-sm sm:text-base lg:text-lg text-[#f3ede4] font-normal text-center lg:text-left">
                <span className="font-bold text-lg text-[#ff8e00]" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>
                  Meme Aatank{" "}
                </span>
                mein swagat hai, jahan aapke shabd bante hain hansi ka bawaal! Bas apna sandesh likhiye, aur dekhiye kaise hum aapke
                liye ek dhamakedar meme voice generate karte hain jo sabko LOL kar
                dega! Quirky{" "}
                <span className="font-bold text-lg text-[#ff8e00]" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>
                  characters aur funny{" "}
                </span>{" "}
                accents mein se chuniye, taaki aapke messages ko mile ek naya spice.
                Apne meme creations ko social media par share karein ya seedha doston
                ko bhejein, aur hansi baatne mein maza lein! Simple aur intuitive
                design ke saath, aap seconds mein meme banana shuru kar sakte hain,
                bina kisi jhanjhat ke. Toh aaj hi meme ke is{" "}
                <span className="font-bold text-lg text-[#ff8e00]" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>
                  bawaal mein shamil
                </span>{" "}
                ho jayein
              </p>

              <div className="flex justify-center lg:justify-center">
                <Button className="bg-[#ff8e00] items-center justify-center py-4 sm:py-6 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-white text-lg sm:text-xl font-black tracking-normal hover:shadow-lg hover:bg-[#ff8e00]">
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;