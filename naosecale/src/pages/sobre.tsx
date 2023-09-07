import { Topbar } from '@/components/Style/Topbar'
import { Footer } from '@/components/Style/Footer'
import { FaSearch } from 'react-icons/fa'

export default function About() {
    return (
        <div>
            <Topbar />
            <div className="flex flex-col md:flex-row 
            bg-[#FFDEF6] justify-center items-center">

                <div className={`
                bg-white 
                border-solid shadow-xl rounded-lg
                md:h-[85%] md:my-[2.5%] max-sm:my-[10%]
                md:w-[50%] max-sm:w-screen             
                `}>

                    <div className={`
                    flex
                    md:p-[5%] max-sm:p-[10%] 
                    md:gap-10 max-sm:gap-2
                    items-stretch justify-center
                    text-4xl
                    `}>
                        <span>Sobre</span>
                        <input type="text" className={`
                        text-2xl 
                        shadow-lg border-2 rounded-full 
                        hover:border-pink-500 transition-colors
                        md:w-[40%] max-sm:w-[65%]
                        `} />
                    </div>

                    <div className="border-solid border-2 p-[20%] shadow-xl"></div>

                    <div className=" p-[5%] ">
                        <a>Um dos principais objetivos do nosso blog é conscientizar as pessoas sobre a realidade da violência contra a mulher. Muitas vezes, essa é uma questão que permanece nas sombras, ignorada ou minimizada. No entanto, a violência de gênero afeta milhões de mulheres em todo o mundo, em diferentes formas, como abuso físico, psicológico, sexual e econômico.
                        <br/><br/>
                        Nossos artigos, postagens e recursos estão aqui para educar o público sobre os diferentes aspectos dessa violência, desde suas raízes profundamente enraizadas na sociedade até as maneiras pelas quais ela se manifesta em nossas comunidades e relacionamentos. Acreditamos que o conhecimento é a chave para a mudança, e nosso blog busca fornecer informações valiosas e baseadas em evidências para promover uma compreensão mais profunda dessa questão crítica.</a>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}