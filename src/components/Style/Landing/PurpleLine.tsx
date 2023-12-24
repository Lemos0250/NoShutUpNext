import Image from "next/image";

import PurpleLine from '@/img/PurpleLine.png'

export function Imagem2(){
    return(
        <div className="md:hidden max-sm:visible">
            <Image src={PurpleLine} alt='Logotipo' width={350} className="flex lg:hidden" />
            <Image src={PurpleLine} alt='Logotipo' width={350} className="hidden lg:flex" />
      </div>
    )
}