import { Gabarito } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import tailwindConfig from "@/tailwind.config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-24 px-2">
     <div className="flex flex-col items-start justify-start gap-12 max-w-xl p-4">

      {/* Logo aqui */}
      <div className="flex align-center justify-start">
        <img className="h-32 w-full object-contain" src="vitorpic.png" ></img>  
      </div>

      {/* Heading e Description */}

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">
          Vitor Botelho
        </h1>
        <p className="font-normal text-md leading-7">
          Brand and Product Designer | Great Florianópolis, Brazil. 🇧🇷
        </p>
      </div>

      {/* Subheading */}

      <div className="flex flex-col gap-2" >
        <h3 className="text-lg">
          Who is Vitor?
        </h3>
        <p className="font-normal text-md leading-7 text-slate-500">
          I create intuitive, user-centered designs that blend my expertise in graphic, interface, and user experience design, aiming to exceed expectations and deliver joyful, impactful solutions.
        </p>
      </div>

      {/* Lista de Item */}
      
    <div className="flex flex-col md:sm:flex-row sm:flex-row gap-2 w-full my-12">

      <div className="flex align-end justify-start w-full flex-col pr-6 pt-14 pl-4 pb-4 gap-4 rounded-2xl border-slate-900 border-2">
        <img src="icon-product-01.png" className="object-contain h-12 w-12"></img>
        <h5 className="text-xl w-full leading-6">
          Websites, apps, interfaces and user focused design work.
        </h5>
        <a href="#ux" className="text-md text-slate-500">See more</a>
      </div>

      <div className="flex align-end justify-start w-full flex-col pr-6 pt-14 pl-4 pb-4 gap-4 rounded-2xl border-slate-900 border-2">
        <img src="icon-product-02.png" className="object-contain h-12 w-12"></img>
        <h5 className="text-xl w-full leading-6">
          Brand, social media, editorial and graphic design work.
        </h5>
        <a href="#brand" className="text-md text-slate-500">See more</a>
      </div>

    </div>

    <div id="ux" className="flex flex-col gap-4 w-full sm:flex-row">
      <div className="flex w-fit">
        <img className="w-7 h-7 object-contain rounded-md bg-slate-900 p-1" src="dna.png" ></img>  
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col justify-beetween w-full min-h-7 mb-2 sm:flex-row align-center">
          <p className="text-md w-full leading-6">App <span className="text-slate-500">for</span> <a className="underline decoration-1 hover:decoration-2" href="https://clincard.com.br/">Clincard</a></p>
          <p className="text-md w-full text-right leading-6 text-slate-500">Made in 2024 
            <span className="bg-green-900 text-green-200 ml-2 px-1 py-0 border-green-800 border-2 rounded-md">On App Store</span></p>
        </div>
        <p className="text-md w-full leading-6 text-slate-500">
        Revitalized the Clincard app, focusing on user-friendly navigation, clear personal data control, and seamless feature access, tailored for the Holder&apos;s experience.
        </p>
        <img className="w-full rounded-lg bg-slate-900 max-h-80 my-4 object-cover border-2 border-slate-500" src="clincard - 02.png"></img>
        <img className="w-full rounded-lg bg-slate-900 max-h-80 my-4 object-cover border-2 border-slate-500" src="clincard - 01.png"></img>
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full sm:flex-row">
      <div className="flex w-fit">
        <img className="w-7 h-7 object-contain rounded-md bg-slate-900 p-1" src="airplane.png" ></img>  
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col justify-beetween w-full min-h-7 mb-2 sm:flex-row align-center">
          <p className="text-md w-full leading-6">Webapp <span className="text-slate-500">for</span> <a className="underline decoration-1 hover:decoration-2" href="https://www.harpa.global/en">Harpa Global</a></p>
          <p className="text-md w-full text-right leading-6 text-slate-500">Made in 2024 
            <span className="bg-green-900 text-green-200 ml-2 px-1 py-0 border-green-800 border-2 rounded-md">On Live</span></p>
        </div>
        <p className="text-md w-full leading-6 text-slate-500">
        The Harpa Global web app was a solid challenge in managing user flows and collaborating with developers long-term. It helped me better understand and address user needs in a hands-on way.
        </p>
        <img className="w-full rounded-lg bg-slate-900 max-h-80 my-4 object-cover border-2 border-slate-500" src="harpa - 01.png"></img>
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full sm:flex-row">
      <div className="flex w-fit">
        <img className="w-7 h-7 object-contain rounded-md bg-slate-900 p-1" src="jelly.png" ></img>  
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col justify-beetween w-full min-h-7 mb-2 sm:flex-row align-center">
          <p className="text-md w-full leading-6">Website <span className="text-slate-500">for</span> <a className="underline decoration-1 hover:decoration-2" href="https://devops.inf.br/">Devops</a></p>
          <p className="text-md w-full text-right leading-6 text-slate-500">Made in 2022</p>
        </div>
        <p className="text-md w-full leading-6 text-slate-500">
          Created a professional, user-friendly website for Devops Partner, enhancing their online presence and showcasing their services.
        </p>
        <img className="w-full rounded-lg bg-slate-900 max-h-80 my-4 object-cover border-2 border-slate-500" src="devops - 01.png"></img>
      </div>
    </div>
<div className="flex w-full">
    <h3 className="text-4xl w-full mt-24 leading-10 text-center">
      Let&apos;s make internet <span className="text-blue-300">beautiful</span> and <span className="text-pink-300">better</span> together.
    </h3>
</div>
  <div className="flex w-full justify-center my-4 flex-row gap-2">
    <a  href="https://www.linkedin.com/in/vitorbotelhoo/"
        className="bg-slate-900 text-slate-400 hover:text-slate-300 px-2 py-1 border-slate-800 hover:border-slate-700 border-2 rounded-lg">
      LinkedIn
    </a>

    <a  href="https://read.cv/vitorbotelhoo"
        className="bg-slate-900 text-slate-400 hover:text-slate-300 px-2 py-1 border-slate-800 hover:border-slate-700 border-2 rounded-lg">
      Read.cv
    </a>

    <a  href="mailto:vitor@correnteza.com"
        className="bg-slate-900 text-slate-400 hover:text-slate-300 px-2 py-1 border-slate-800 hover:border-slate-700 border-2 rounded-lg">
      vitor@correnteza.com
    </a>
  </div>
    

      {/* Final */}
     </div> 
    </main>
  );
}
