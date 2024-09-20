"use client"

import { useRouter } from 'next/navigation';
import Image from "next/image";
import tailwindConfig from "@/tailwind.config";
import Anchor from "@/components/socialsanchor";
import Case from "@/components/case";
import Link from 'next/link';

export default function CasePage({
  Tipo,
  Cliente,
  Date,
  GreenSpan,
  Desc,
  ImagemUm,
  ImagemDois,
  ButtonArea,
}
) {
    const router = useRouter();

    return (
        <div
        className="flex flex-row flex-wrap justify-center align-start gap-[40px] w-full max-w-[1000px]">
      
        <div
          id="coluna_principal"
          className="flex flex-col gap-[48px] h-fill w-full min-w-[300px]
                      lg:max-w-[300px] md:max-w-[660px] sm:max-w-[360px]">

          <div
            className="h-fit sticky top-[120px]
                        flex flex-col gap-[48px]">    

          <div
            className="absolute py-[18px]">
              <a
              className="bg-[#E3EBF2] text-[#000000] rounded-[10px] cursor-pointer"
              onClick={() => router.back()}
              >
              Go back
              </a>
          </div>

          <div
            id="heading_container"
            className="flex flex-col gap-[16px] pt-[80px]">
            <h1
              className="vtr-heading">{ Tipo } for { Cliente }</h1>
            <p>{ Date }</p>
          </div>

          <div
            id="desc_container"
            className="flex flex-col gap-[16px]">
            <p>{ Desc }</p>
          </div>

          <div
            id="heading_container"
            className="flex flex-row gap-[8px]">
              { ButtonArea }
          </div>

          </div>

        </div>

        <div
          id="coluna_cards"
          className="flex flex-wrap flex-row gap-[20px] h-fit w-full lg:min-w-[660px] max-w-[660px]
                    justify-center md:justify-start">
          <Case
            Tipo={Tipo}
            Cliente={Cliente}
            Date={Date}
            GreenSpan={GreenSpan}
            Desc={Desc}
            ImagemUm={ImagemUm}
            ImagemDois={ImagemDois}
          />
        </div>

      </div>
    )
}