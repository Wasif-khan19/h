import Header from "../shared/Header";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="bg-navy-900 min-h-screen flex flex-col w-full px-4 sm:px-8 mt-10">
      <Header />
      <div className="flex-grow container mx-auto flex px-5 py-20 items-center justify-center">
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="hidden lg:block w-1/2 pr-8">
              <video
                className="object-cover object-center rounded mx-auto w-full max-w-md"
                controls
              >
                <source src="/rj.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-full lg:w-1/2">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-center lg:text-left text-[#ff8e00]"
                style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}
              >
                DONATE <span className="text-white">US</span>
              </h1>
              <p className="mb-6 whitespace-normal text-sm sm:text-base lg:text-lg text-[#f3ede4] font-normal text-center lg:text-left">
                Aapki Madad Se Hoga Meme Aatank Aur Bhi Behtareen! Agar aapko{" "}
                <span className="font-bold text-[#ffee52]">Meme Aatank</span>{" "}
                pasand hai aur aap chahte hain ki yeh aur bhi behtar ho, toh aapki
                madad ki zaroorat hai! Aapka har chhota sa yogdaan humare liye bahut
                maayne rakhta hai. Aapke{" "}
                <span className="font-bold text-[#ffee52]">donation</span> se
                hum naye features develop kar sakte hain, app ko update kar sakte
                hain, aur aapko{" "}
                <span className="font-bold text-[#ffee52]">
                  bhtreen user experience
                </span>{" "}
                dene ki koshish kar sakte hain. Aapki support se hi hum is fun-filled
                journey ko aage badha sakte hain. Toh agar aap chahte hain ki Meme
                Aatank hamesha
                <span className="font-bold text-[#ffee52]">
                  {" "}
                  hansi aur masti
                </span>{" "}
                ka zariya bane rahe, toh aaj hi donate karein! Aapka har contribution
                is mission ko aage badhane mein madad karega. Shukriya!
              </p>

              <div className="flex justify-center lg:justify-center">
                <Button className="bg-[#55dd4a] items-center justify-center py-4 sm:py-6 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-white text-lg sm:text-xl font-black tracking-normal hover:shadow-lg hover:bg-[#4dcc42]">
                  DONATE NOW
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