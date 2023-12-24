import { Topbar } from '@/components/Style/Apages/Topbar'
import { Footer } from '@/components/Style/Apages/Footer'
import { MulheresUnidas } from '@/components/icons'
import AboutPart from '@/components/Style/Template/AboutPart2'


export default function About() {
    return (
        <div>
            <Topbar />
            <div className="flex flex-col md:flex-row justify-center bg-[#FFDEF6]">

                <div className={`
                bg-white 
                border-solid shadow-xl rounded-lg
                lg:h-[85%] 
                lg:w-[80%] 
                lg:my-[2.5%]          
                `}>

                <div className='flex flex-row my-[5%]'>

                    <div className='flex flex-col 2xl:w-[40%] xl:w-[50%]  2xl:gap-4 xl:gap-2 2xl:mx-[8%] xl:mx-[7%] my-[5%]'>
                        <span className='font-bold text-[#6b0023] 2xl:text-3xl xl:text-2xl'>Sobre Nós</span>
                        <p className='font-semibold text-zinc-800 2xl:text-4xl xl:text-2xl'>
                        Não se Cale é um ambiente acolhedor que conscientiza sobre a violência contra as mulheres.
                        </p>
                        <p className='font-semibold text-zinc-500 2xl:text-xl xl:text-md'>
                        O Não se Cale Mulher é um site comprometido em abordar e combater a violência contra as mulheres.
                        Nosso espaço oferece uma plataforma informativa, acolhedora e solidária, buscando conscientizar,
                        empoderar e amplificar as vozes femininas. Promovemos a discussão, fornecemos recursos e apoiamos
                        aqueles que enfrentam situações de violência, contribuindo para construir um ambiente mais seguro
                        e igualitário para todas as mulheres.
                        </p>
                        <button 
                        className={`
                        text-white bg-[#6b0023] 
                        font-semibold 
                        border rounded-2xl

                        2xl:w-[35%] xl:w-[40%] 
                        2xl:py-4 xl:py-3
                        2xl:text-xl xl:text-base
                        `}>Volte ao Início</button>
                    </div>

                    <div className=''>
                        {MulheresUnidas}
                    </div>

                </div>
                    
                <AboutPart />
                </div>
            </div>
        <Footer />
        </div>
    )
}