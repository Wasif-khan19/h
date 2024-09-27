import { CircleDollarSign } from "lucide-react";
import Header from "../shared/Header";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="bg-navy-900 min-h-screen flex flex-col w-full px-4 sm:px-8 mt-10">
      <Header />
      <div className="flex-grow container mx-auto flex px-5 items-center justify-center">
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:block sm:w-1/2 justify-center">
              <video
                className="object-cover object-center shadow-2xl bg-black border-black border-4 rounded-md mx-auto w-full max-w-md"
                controls
              >
                <source src="/rj.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full lg:w-1/2 pt-3">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-center lg:center text-[#219ebc]"
                style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}
              >
                DONATE <span className="text-white">US</span>
              </h1>
              <p className="mb-6 whitespace-normal text-sm sm:text-base lg:text-lg text-[#f3ede4] font-normal text-center lg:text-left">
                Aapki Madad Se Hoga Meme Aatank Aur Bhi Behtareen! Agar aapko{" "}
                <span className="font-bold text-lg text-[#ff8e00]" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>Meme Aatank</span>{" "}
                pasand hai aur aap chahte hain ki yeh aur bhi behtar ho, toh aapki
                madad ki zaroorat hai! Aapka har chhota sa yogdaan humare liye bahut
                maayne rakhta hai. Aapke donations se hum meme quality ko aur bhi
                behtar banane mein safalta prapt karte hain.
                </p>

              <div className="flex justify-center lg:justify-center">
                <Button className="bg-[#ff8e00] gap-2 items-center justify-center py-4 sm:py-6 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-white text-lg sm:text-xl font-black tracking-normal hover:shadow-lg hover:bg-[#ff8e00]">
                  DONATE NOW  <CircleDollarSign/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;