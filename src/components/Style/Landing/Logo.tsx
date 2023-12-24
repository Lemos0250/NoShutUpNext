import Image from "next/image";

import Logo from '@/img/Fundo Mulher.png'

export function Imagem(){
    return(
        <div className="flex justify-center mt-[20%] 
        object-fill">
            <Image src={Logo} alt='Logotipo' width={250} className="flex lg:hidden" />
            <Image src={Logo} alt='Logotipo' width={350} className="hidden lg:flex" />
      </div>
    )
}