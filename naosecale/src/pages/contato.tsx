import { Topbar } from '@/components/Style/Topbar'
import { Footer } from '@/components/Style/Footer'

export default function Contact() {
    return (
        <>
            <div>
                <Topbar/>
                <div className="flex flex-col w-screen h-screen lg:h-screen lg:flex-row items-center justify-center shadow-xl bg-[#FFDEF6]">
        
                    <div className="flex flex-col items-start justify-center lg:mt-[0%] lg:w-[50%] h-[85%] w-[90%] h-shadow-xl bg-white rounded-lg shadow-xl">

                        <div className="flex lg:flex-row lg:m-[10%] lg:ml-[25%] lg:mt-[1%] flex-col w-full items-start justify-start text-4xl ml-[30%] lg:mb-[5%]">
                            <span>Contato</span>
                            <input type="text" className="hidden lg:grid lg:flex-row shadow-lg border-2 hover:border-pink-500 ml-20 rounded-full text-black transition-colors margin lg:ml-20 lg:w-60 lg:ml-10 lg:text-2xl"/>
                        </div>

                    </div>
                </div>
            <Footer/>
        
            </div>
        </>
    )
}