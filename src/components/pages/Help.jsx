import Header from "../shared/Header";

const Help = () => {
  return (
    <div className="bg-navy-900 min-h-screen flex flex-col w-full px-4 sm:px-8">
      <Header />
      <div className="flex-grow container mx-auto flex px-5 py-24 items-center justify-center">
        <div className="text-center max-w-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-[#219ebc] mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="mb-6 whitespace-normal text-sm sm:text-base lg:text-lg text-[#f3ede4] font-normal">
            <span className="font-bold text-lg text-[#ff8e00]" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}>
              Suno Bosdiwalo!
            </span>{" "}
            Yeh sab mazak ke liye hai! Isko seriously mat lena, kyunki hum sirf
            hansi aur masti spread karne ke liye hain! Toh agar aap chahte hain
            ki Meme Aatank hamesha hansi aur mazak ka zariya bane rahe, toh aaj
            hi donate karein! Aapka har contribution is mission ko aage badhane
            mein madad karega. Shukriya!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-[#ff8e00] mt-8 mb-6"></span>
          <h2 className="text-[#219ebc] font-medium title-font tracking-wider text-sm">
            Thank You Very Much
          </h2>
          <p className="text-[#f3ede4]">&quot;Sheer h aap&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default Help;