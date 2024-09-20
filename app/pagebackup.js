{/* 

<div className="flex flex-col items-start justify-start gap-12 max-w-md mt-8 py-8 px-6">

      {/* Logo aqui */}
      <div className="flex align-center justify-start">
        <img className="h-36 w-36 object-contain shadow-4xl shadow-[#0093FF]/50" src="vitorpic.png" ></img>  
      </div>

      {/* Heading e Description */}

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">
          Vitor Botelho
        </h1>
        <div className="flex flex-row flex-wrap">
          <p className="font-normal text-md leading-6">
            Product and Brand Designer
          </p>
          <p className="font-normal text-md text-[var(--vtr-neutral-30)] leading-6">
            at Great Florianópolis, Brazil. 🇧🇷
          </p>
        </div>
      </div>

      {/* Subheading */}

      <div className="flex flex-col gap-2" >
        <h3 className="text-lg">
          Who is Vitor?
        </h3>
        <p className="font-normal text-md leading-7 text-[var(--vtr-neutral-30)]">
          I create intuitive, user-centered designs that blend my expertise in graphic, interface, and user experience design, aiming to exceed expectations and deliver joyful, impactful solutions.
        </p>
      </div>

      <div className="w-full flex flex-wrap align-center justify-start">
        <Image src="/logocliente-01.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-02.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-03.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-04.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-06.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-05.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-07.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-08.png" width={70} height={60} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-09.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-10.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-11.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-12.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-13.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-14.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>
        <Image src="/logocliente-15.png" width={70} height={40} alt="logo-cliente" style={{objectFit: "contain"}}	/>

      </div>

      {/* Lista de Item 
      
    <div className="flex flex-col md:sm:flex-row sm:flex-row gap-2 w-full my-12">

      <div className="flex align-end justify-start w-full flex-col pr-6 pt-14 pl-4 pb-4 gap-4 rounded-2xl border-slate-900 border-2">
        <img src="icon-product-01.png" className="object-contain h-12 w-12"></img>
        <h5 className="text-xl w-full leading-6">
          Websites, apps, interfaces and user focused design work.
        </h5>
        <a href="#ux" className="text-md text-neutral-30 hover:text-slate-400">See more</a>
      </div>

      <div className="flex align-end justify-start w-full flex-col pr-6 pt-14 pl-4 pb-4 gap-4 rounded-2xl border-slate-900 border-2">
        <img src="icon-product-02.png" className="object-contain h-12 w-12"></img>
        <h5 className="text-xl w-full leading-6">
          Brand, social media, editorial and graphic design work.
        </h5>
        <a href="#brand" className="text-md text-neutral-30 hover:text-slate-400">See more</a>
      </div>

    </div>
    */}

<div className="flex w-full">
    <h3 className="text-2xl w-full leading-8 text-left">
      Let&apos;s make internet <span className="text-[var(--vtr-corrente)]">beautiful</span> and <span className="text-[var(--vtr-rosa)]">better</span> together.
    </h3>
</div>
  <div className="flex w-full justify-start my-4 flex-row gap-2">
    <Anchor
      Link="https://www.linkedin.com/in/vitorbotelhoo/"
      Content="LinkedIn"
    />
    <Anchor
      Link="https://read.cv/vitorbotelhoo/"
      Content="Read.cv"
    />
    <Anchor
      Link="mailto:vitor@correnteza.com"
      Content="vitor@correnteza.com"
    />
  </div>
    

      {/* Final */}
      </div>
      <div id="wrapper" className="w-full flex-wrap lg:flex-nowrap align-top justify-center flex flex-row gap-4 h-fit lg:max-h-screen max-w-4xl">
        <div  id="listScroller"
              className="w-full px-1 overflow-x-hidden flex justify-center align-items overflow-y-scroll h-100 py-4 md:py-24">

          <CaseList
          Label="Product Design"
          Content={
            
            <>

            <Case
              IconeGuia="dna.png"
              Tipo="Mobile App"
              Cliente="Clincard"
              Date="2024"
              GreenSpan=""
              Desc="Revitalized the Clincard app, focusing on user-friendly navigation, clear personal data control, and seamless feature access, tailored for the Holder's experience."
              ImagemUm="clincard - 01.png"
              ImagemDois="clincard - 02.png"
              LinkCase="/full_clincard"
              />
            
            <Case
              IconeGuia="airplane.png"
              Tipo="Webapp"
              Cliente="Harpa Global"
              Date="2024"
              GreenSpan="Live"
              Desc="The Harpa Global web app was a solid challenge in managing user flows and collaborating with developers long-term. It helped me better understand and address user needs in a hands-on way."
              ImagemUm="harpa - 01.png"
              />
            
            <Case
              IconeGuia="necktie.png"
              Tipo="Website"
              Cliente="Ampe Metropolitana"
              Date="2023"
              GreenSpan="Live"
              Desc="The Harpa Global web app was a solid challenge in managing user flows and collaborating with developers long-term. It helped me better understand and address user needs in a hands-on way."
              ImagemUm="ampe - 01.png"
              />
            
          </>
            
           }
          />
          
        </div>

        <div  id="listScroller"
              className="w-full px-1 overflow-x-hidden flex justify-center align-items overflow-y-scroll h-100 py-4 md:py-24">

          <CaseList
          Label="Branding"
          Content={
            
            <>

            <Case
              IconeGuia="dna.png"
              Tipo="Mobile App"
              Cliente="Clincard"
              Date="2024"
              GreenSpan=""
              Desc="Revitalized the Clincard app, focusing on user-friendly navigation, clear personal data control, and seamless feature access, tailored for the Holder's experience."
              ImagemUm="clincard - 01.png"
              ImagemDois="clincard - 02.png"
              LinkCase="123"
              />
            
          </>
            
          }
          />
          
        </div>

      </div>

*/}



--------------





-----------
----------





-----------



<div className="flex flex-col gap-4 w-full my-4 flex-wrap md:flex-row">
<div className="flex w-fit px-4">
  <img
    className="w-7 h-7 object-contain rounded-md bg-slate-900 p-1"
    src={IconeGuia}
  ></img>
</div>
<div className="flex flex-col w-full gap-1 gap-2">
  <div className="flex flex-col px-4 flex-wrap justify-between w-full min-h-7 sm:flex-row align-center">
    <p className="text-md w-fit leading-6">
      {Tipo} <span className="text-neutral-30">for</span> {Cliente}
    </p>
    <div className="w-fit flex justify-end gap-sm align-center">
      <p className="text-md w-fit text-right leading-6 text-neutral-30">
        Made in {Date}
      </p>
      {GreenSpan && (
        <p className="bg-green-900/25 text-green-200 w-fit h-fit ml-2 px-1 py-0 border-green-800/25 border-2 rounded-md">
          {GreenSpan}
        </p>
      )}
    </div>
  </div>
  <p className="text-md w-full leading-6 px-4 text-[var(--vtr-neutral-30)]">{Desc}</p>
  
  {/* Área de imagens */}
  <div
    id="draggimage"
    ref={dragRef}
    className="flex px-4 flex-row my-2 gap-2 h-fit overflow-x-auto cursor-grab"
    style={{ cursor: isDragging ? "grabbing" : "grab" }}
  >
    <img
      className="w-[90%] rounded-lg bg-slate-900 max-h-80 object-cover border-2 border-slate-500"
      src={ImagemUm}
      draggable="false"
      onClick={() => openPopup(ImagemUm)} // Abre o pop-up com a primeira imagem
    />
    {ImagemDois && (
      <img
        className="w-[90%] rounded-lg bg-slate-900 max-h-80 object-cover border-2 border-slate-500"
        src={ImagemDois}
        draggable="false"
        onClick={() => openPopup(ImagemDois)} // Abre o pop-up com a segunda imagem
      />
    )}
  </div>
  {LinkCase && (
    <div className="flex px-4 w-full justify-end h-fit">
      <Anchor Content="Full Case" Link={LinkCase} />
    </div>
  )}
</div>

{/* Pop-up para exibir a imagem em tela cheia */}
{popupImage && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-[123123]">
    <div className="relative rounded-xl">
      <img
        src={popupImage}
        className="maxx-w-full z-50 max-h-screen object-contain p-12 rounded-xl"
        alt="Imagem em tela cheia"
        ></img>
      <button
        className=  "absolute bottom-10 left-1/2 transform -translate-x-1/2
                    bg-[var(--vtr-noite)] hover:bg-[var(--vtr-baleia)]
                    text-[var(--vtr-neutral-20)] hover:text-[var(--vtr-poca)]
                    border-[1px] border-[var(--vtr-neutral-70)]
                    rounded-xl transition all duration-300 px-3 p-2"

        onClick={closePopup}
      >Fechar</button>
    </div>
  </div>
)}
</div>




