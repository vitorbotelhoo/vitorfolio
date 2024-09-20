'use client'

import { useRouter } from 'next/navigation';

export default function Structure({
    PageLabel,
    PageHeadline,
    PageDescription,
    PageText,
    ButtonArea,
    ColunaCards,
}) {
    const router = useRouter();

    return (
        <main className="flex px-[24px] py-[120px] justify-center align-start">

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
                  onClick={() => router.back()}
                  className="bg-[var(--vtr-poca)] rounded-[10px] cursor-pointer">
                  { PageLabel }
                </a>
            </div>
  
            <div
              id="heading_container"
              className="flex flex-col gap-[16px] pt-[80px]">
              <h1
                className="vtr-heading">{ PageHeadline}</h1>
              <p>{ PageDescription }</p>
            </div>
  
            <div
              id="desc_container"
              className="flex flex-col gap-[16px]">
              <p>{ PageText}</p>
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
  
              { ColunaCards}
            
          </div>
  
        </div>
        
      </main>
    )
}