import { Topbar } from '../components/Topbar'
import { Footer } from '../components/Footer'

export default function About() {
    return (
        <div>
            <Topbar />
            <div className="flex flex-col lg:flex-row items-center justify-between shadow-xl bg-[#FFDEF6]">

                <div className="border-solid shadow-xl lg:m-96 lg:my-14 bg-white rounded-lg">

                    <div className="flex flex-col w-full items-center lg:flex-row lg:m-20 lg:ml-56 lg:mt-15 text-4xl mt-[10%]">
                        <span>Sobre</span>
                        <input type="text" className="hidden lg:flex shadow-lg border-2 hover:border-pink-500 ml-20 rounded-full text-black transition-colors margin lg:w-60 lg:ml-10 text-2xl" />
                    </div>

                    <div className="border-solid border-2 p-40 lg:m-20 shadow-xl  "></div>

                    <div className="lg:m-20 lg:mt-30 mt-[15%] ">
                        <a>O que nos motivou a produzir o projeto com esse tema é que existem muitas informações sobre a violência contra a mulher, porém mesmo com tantas informações, por diversas vezes é algo que fica implícito para muitas mulheres que sofrem violência doméstica e ainda não sabem o que fazer ou têm medo que seu agressor saia impune do crime cometido, então o objetivo deste projeto é tornar mais explícito para que cada vez mais mulheres estejam cientes do que fazer caso sofram violência doméstica.

                        Os integrantes do Grupo são João Victor, Matheus Plácio, Paola Andrade e Arthur Cavalcanti.</a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}