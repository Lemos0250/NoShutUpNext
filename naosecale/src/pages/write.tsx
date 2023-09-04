import { Box } from '../components/Box'
import { Footer } from '../components/Footer'
import { Topbar } from '../components/Topbar'
import { FaTrashAlt } from 'react-icons/fa';
import { ImParagraphLeft } from 'react-icons/im';
import { AiOutlineGif, AiOutlineCamera } from 'react-icons/ai';
import { useState } from 'react';

export default function Write() {

    const [image, setImage] = useState('')
    
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
                    h-[85%] w-[50%] my-[2.5%]
                
                    rounded-lg
                    `}>
                        <div className={`
                        flex flex-col
                        h-full justify-center items-center
                        gap-4
                        `}>
                            
                            <span className="font-semibold text-3xl">Administração</span>
                           
                            <div className={`
                            lg:w-[70%] h-[35%] 
                            text-xl 
                            `}>
                                <textarea placeholder="Escrever..." className={`
                                w-full h-full
                                
                                border-black 
                                hover:border-pink-500 
                                border-4 shadow-xl transition-colors rounded-3xl resize-none bg-[#efe3ec]
                                `} />
                            </div>


                            <div className="justify-start flex flex-row items-center gap-5 h-[15%]">
                                <div className="lg:ml-[-70%]">
                                    <FaTrashAlt className="text-2xl hover:text-[#6b0023]" />
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
                            lg:justify-end items-start 
                            flex w-[60%] h-[15%] 
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

