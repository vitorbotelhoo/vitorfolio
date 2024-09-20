import { Gabarito } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import tailwindConfig from "@/tailwind.config";
import Anchor from "@/components/socialsanchor";
import Structure from "@/components/structure";
import NeutralCard from "@/components/neutralcard";
import AboutCard from "@/components/aboutcard";
{/*
  Essa é a página Home.
  Ela renderiza um componente Structure com os dados da página.
  Para alterar visualmente, altere o componente Structure.  
*/}

export default function Home() {
  
  return (
    <>
      <Structure
        PageLabel="Portfolio"
        PageHeadline="Vitor Botelho"
        PageDescription="Product Designer @ Brazil"
        PageText="
          I create intuitive, user-centered designs that blend my expertise in graphic, interface, and user experience design, aiming to exceed expectations and deliver joyful, impactful solutions.
        "
        ButtonArea={
          <>
            <Anchor
              Content="LinkedIn"
              Link="https://www.linkedin.com/in/vitorbotelhoo/"
            />
            <Anchor
              Content="Read.cv"
              Link="https://read.cv/vitorbotelhoo"
            />
          </>
        }
        ColunaCards={
          <>
            <NeutralCard
                Tagline="Product Case"
                Headline="Mobile App for Clincard"
                Date="2024"
                Desc="Revitalized the Clincard app, focusing on user-friendly navigation, clear personal data control, and seamless feature access, tailored for the Holder's experience."
                ImagemUm="clincard - 01.png"
                ImagemDois="clincard - 02.png"
            />
            <NeutralCard
                Tagline="Product Case"
                Headline="Webapp for Harpa Global"
                Date="2023"
                Desc="The Harpa Global web app was a solid challenge in managing user flows and collaborating with developers long-term. It helped me better understand and address user needs in a hands-on way."
                ImagemUm="harpa - 01.png"
            />
            <NeutralCard
                Tagline="Product Case"
                Headline="Site for Devops Partner"
                Date="2022"
                Desc="Created a professional, user-friendly website for Devops Partner, enhancing their online presence and showcasing their services."
                ImagemUm="devops - 01.png"
            />
            <AboutCard
                Tagline="About me"
                Headline="Vitor Botelho"
                Date="2024"
                Desc="I create intuitive, user-centered designs that blend my expertise in graphic, interface, and user experience design, aiming to exceed expectations and deliver joyful, impactful solutions."
                ImagemUm="vitorpic.png"
            />
          </>
        }
      />
    </>
  );
}
