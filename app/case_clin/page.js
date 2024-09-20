import Anchor from "@/components/socialsanchor";
import Structure from "@/components/structure";
import NeutralCard from "@/components/neutralcard";

{/*
    Essa é a página do Case da Clincard.
    Ela renderiza um componente Structure com os dados da página.
    Para alterar visualmente, altere o componente Structure.  
*/}

export default function CaseClin() {   
    return (
        <>
          <Structure
            PageLabel="Go Back"
            PageHeadline="Mobile App for Clincard"
            PageDescription="2023"
            PageText="
              I create intuitive, user-centered designs that blend my expertise in graphic, interface, and user experience design, aiming to exceed expectations and deliver joyful, impactful solutions.
            "
            ButtonArea={
              <>
                <Anchor
                  Link="https://www.clincard.com.br/"
                  Content="Clincard"
                />
                <Anchor
                  Link="https://www.clincard.com.br/"
                  Content="Clincard"
                />
              </>
            }
            ColunaCards={
              <>
                <NeutralCard
                    Tagline="Product Case"
                    Headline="Clincard"
                    Date="2023"
                    Desc="2 line brief description. 2 line brief description. 2 line brief description. 2 line brief description."
                    ImagemUm="clincard - 01.png"
                    ImagemDois="clincard - 02.png"
                    LinkCase="#"
                />

              </>
            }
          />
        </>
      )
}