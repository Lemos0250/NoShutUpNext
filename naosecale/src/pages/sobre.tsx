import { Topbar } from '@/components/Style/Topbar'
import { Footer } from '@/components/Style/Footer'
import { FaSearch } from 'react-icons/fa'

export default function About() {
    return (
        <div>
            <Topbar />
            <div className="flex flex-col lg:flex-row bg-[#FFDEF6] justify-center">

                <div className={`
                bg-white 
                border-solid shadow-xl 
                h-[85%] w-[50%] my-[2.5%]
                
                rounded-lg
                `}>

                    <div className={`
                    flex flex-col 
                    lg:flex-row lg:m-20 lg:ml-56 lg:mt-15 text-4xl
                    `}>
                        <span>Sobre</span>
                        <input type="text" className={`
                        "hidden lg:flex shadow-lg border-2 hover:border-pink-500 ml-20 rounded-full transition-colors
                        w-[60%]
                        lg:ml-10 text-2xl"
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