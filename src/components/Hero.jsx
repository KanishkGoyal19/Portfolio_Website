import { BsArrowDownCircle } from "react-icons/bs";
import TsParticles from "../clientcomponents/TsParticles";
import TypingAnimationComponent from "../clientcomponents/TypingAnimation.jsx";

export default function Hero() {
   return (
      <section
         id="hero"
         className="relative bg-secondaryBackground"
      >
         <TsParticles />

         <div className="sm:block top-10 2xl:top-12 left-8 2xl:left-12 z-40 sm:absolute hidden">
            <img
               src="/Images/thoughtbubblenew.webp"
               className="w-24 2xl:w-28"
               alt="coding icon"
            />
         </div>

         <div className="z-50 lg:flex justify-center items-center bg-secondaryBackground px-10 2xl:px-32  lg:h-screen HeroContainer">

            <div className="flex justify-end items-center pt-6 sm:pt-32 md:pt-0 2xl:pl-20 w-full lg:w-[50%] h-1/12 lg:h-full text-center">
               <div className="relative w-80 md:w-96 2xl:w-100 h-80 md:h-96 2xl:h-100 lg:mr-[15%] animate-ProfileAnimate">
                  <img
                     src="/Images/image.jpg"
                     alt="Freelance Developer Icon Art"
                     className="bg-secondaryBackground rounded-full w-full h-full object-cover"
                  />
               </div>
            </div>


            <div className="z-50 flex justify-center items-center lg:pt-0 pb-20 lg:pb-0 w-full lg:w-[50%] h-[45%] lg:h-full text-left ">
               <div className="bg-secondaryBackground md:w-96 lg:w-full">
                  <div className="flex items-end space-x-2  animate-slideBottom">
                     <h1 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] mt-0 mb-0 font-extralight text-2xl text-left text-transparent md:text-3xl lg:text-4xl 2xl:text-5xl bg-clip-text from-orange-500 via-orange-300 to-orange-100">
                        Hi, I&apos;M
                     </h1>
                     <TypingAnimationComponent />
                  </div>
                  <h1 className="bg-clip-text bg-gradient-to-r from-orange-300 via-orange-100 to-orange-400 mt-0 lg:mb-2 py-2 sm:py-0 font-bold text-5xl text-left text-textprimary text-transparent md:text-7xl lg:text-8xl 2xl:text-9xl">
                     Kanishk
                  </h1>
                  <h1 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]   font-light text-left text-lg text-transparent md:text-lg lg:text-xl 2xl:text-2xl bg-clip-text from-orange-500 via-orange-300 to-orange-100 ">
                     A Full Time Student and an Aspiring Software Developer
                     {/*&nbsp; <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] px-1 font-medium text-black from-orange-500 via-orange-300 to-orange-100 animate-gradientX   text-nowrap">
                        React / Next.js
                     </span>&nbsp; */}
                  </h1>

                  <div className="flex justify-start items-center lg:my-10 my-6  text-black text-xs lg:text-sm no-underline">
                     <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]  from-orange-500 via-orange-300 to-orange-100 button button--pandora">
                        <a
                           className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 text-primaryBackground no-underline"
                           href="#portfolio"
                        >
                           &lt; View My Work /&gt;
                        </a>
                     </div>
                     <div className="flex items-center   ml-5 sm:ml-12  text-base text-white hover:underline cursor-pointer">
                        <a
                           href="#contactme"
                           className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 pr-2 font-semibold text-transparent no-underline"
                        >
                           Contact Me
                        </a>

                        <BsArrowDownCircle className="text-orange-200" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
