
import { ExpandableCardDemo } from "../ui/scan";

const About = () => {
  return (
    <div className="bg-navy-900 min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <video
          className="object-cover object-center rounded"
          controls
          width="720"
          height="600"
        >
          <source src="/rj.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="md:w-1/2">
        <h1
          className="text-4xl font-black mb-4 text-center text-[#55dd4a]"
          style={{ textShadow: "7px 7px 4px rgba(0, 0, 0, 0.5)" }}
        >
          DONATE <span className="text-[#f3ede4]">US</span>
        </h1>
        <p className="mb-4 whitespace-normal px-8 sm:text-lg text-xs text-[#f3ede4] font-normal text-center">
          Aapki Madad Se Hoga Meme Aatank Aur Bhi Behtareen! Agar aapko{" "}
          <span className="font-bold text-1xl text-[#ffee52]">Meme Aatank</span>{" "}
          pasand hai aur aap chahte hain ki yeh aur bhi behtar ho, toh aapki
          madad ki zaroorat hai! Aapka har chhota sa yogdaan humare liye bahut
          maayne rakhta hai. Aapke{" "}
          <span className="font-bold text-1xl text-[#ffee52]">donation</span> se
          hum naye features develop kar sakte hain, app ko update kar sakte
          hain, aur aapko{""}
          <span className="font-bold text-1xl text-[#ffee52]">
            bhtreen user experience
          </span>{" "}
          dene ki koshish kar sakte hain. Aapki support se hi hum is fun-filled
          journey ko aage badha sakte hain. Toh agar aap chahte hain ki Meme
          Aatank hamesha
          <span className="font-bold text-1xl text-[#ffee52]">
            {" "}
            hansi aur masti
          </span>{" "}
          ka zariya bane rahe, toh aaj hi donate karein! Aapka har contribution
          is mission ko aage badhane mein madad karega. Shukriya!x
        </p>

        {/* Center the button */}
        <div className="flex justify-center items-center">
          <ExpandableCardDemo/>
        </div>

        <div className="mt-6 flex justify-center space-x-4 text-center"></div>
      </div>
    </div>
  );
};

export default About;
