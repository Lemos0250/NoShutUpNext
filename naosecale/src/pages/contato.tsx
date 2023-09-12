import { Topbar } from '@/components/Style/Topbar'
import { Footer } from '@/components/Style/Footer'

export default function Contact() {
    return (
        <>
            <div>
                <Topbar/>
                <div className={`
                flex flex-col lg:flex-row
                h-screen items-center justify-center 
                shadow-xl bg-[#FFDEF6]
                `}>
        
                    <div className={`
                    bg-white 
                    rounded-lg shadow-xl
                    md:h-[85%] max-sm:h-[85%]
                    md:w-[50%] max-sm:w-screen
                    `}>

                        <div className={`
                        flex flex-col
                        items-center gap-5
                        md:my-[5%] max-sm:my-[10%]
                        `}>
                            <span className="text-4xl">Contato</span>
                            <input type="text" className={`
                            md:w-[35%] max-sm:w-[70%] 
                            p-[1%] lg:grid items-center
                            shadow-lg border-2 rounded-full hover:border-pink-500 ml-20 transition-colors
                            `}/>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        <span>Nome da Pessoa.........................................(99)9 9999-9999</span>
                        
                        </div>

                    </div>
                </div>
            <Footer/>
        
            </div>
        </>
    )
}