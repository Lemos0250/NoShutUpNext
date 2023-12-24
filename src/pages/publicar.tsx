import { Box } from '../components/Style/Landing/Box'
import { Footer } from '../components/Style/Apages/Footer'
import { Topbar } from '../components/Style/Apages/Topbar'
import { FaTrashAlt } from 'react-icons/fa';
import { ImParagraphLeft } from 'react-icons/im';
import { AiOutlineGif, AiOutlineCamera } from 'react-icons/ai';
import { useState } from 'react';

export default function Write() {

    const [image, setImage] = useState('')
    const [text, setText] = useState('')

    function clearArea() {
     setText('')   
    }
    
    return (
        
        <div>
            <Topbar />

                <div className={`flex flex-col 
                w-full h-screen lg:flex-row 
                items-center justify-center 
                shadow-xl bg-[#FFDEF6]`}>

                    <div className={`
                    bg-white 
                    border-solid shadow-xl 
                    h-[85%] w-[50%] 
                    md:my-[2.5%]
                    max-sm:w-screen rounded-lg
                    `}>
                        <div className={`
                        flex flex-col
                        h-full justify-center items-center
                        gap-4
                        `}>
                            
                            <span className="font-semibold text-3xl">Administração</span>
                           
                            <div className={`
                            md:w-[70%] md:h-[35%]
                            max-sm:w-screen max-sm:h-[25%]
                            text-2xl
                            `}>
                                <textarea 
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                placeholder="Escrever..." 
                                className={`
                                w-full h-full
                                border-black 
                                hover:border-pink-500 
                                border-4 shadow-xl transition-colors rounded-3xl resize-none bg-[#efe3ec]
                                `} />
                            </div>


                            <div className={`
                            flex flex-row 
                            items-center justify-start 
                            md:gap-5 max-sm:gap-14 h-[15%]
                            `}>
                                <div className="lg:ml-[-70%]">
                                    <FaTrashAlt 
                                    onClick={clearArea}
                                    className="text-2xl hover:text-[#6b0023]" />
                                </div>

                                <div className="text-pink-500 hover:text-[#6b0023] lg:ml-[150%]">
                                    <span>Rascunho</span>
                                </div>

                                <div className={`
                                text-white border-2
                                bg-[#6b0023] hover:border-pink-500 
                                
                                p-3 rounded-2xl
                                `}>
                                    <span>Enviar</span>
                                </div>

                            </div>

                            <div className={`
                            flex md:justify-end max-sm:justify-end
                            items-start 
                            md:w-[70%] max-sm:w-[85%]
                            gap-2 
                            `}>
                                <ImParagraphLeft className="text-3xl hover:text-[#6b0023] hover:box-content" />
                                <AiOutlineGif className="text-3xl border-2 border-black hover:text-[#6b0023]  " />
                                <input id="dropzone-file" type="file" className="hidden" onChange={e => setImage(e.target.value)} />
                                <AiOutlineCamera className="text-3xl hover:text-[#6b0023]" />
                            </div>

                        </div>

                    </div>

                </div>

            <Footer />

        </div>
    )
}

