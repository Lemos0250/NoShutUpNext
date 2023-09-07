import React, { useState } from "react";
import { Footer } from '@/components/Style/Footer';
import UseAuth from "@/services/hooks/UseAuth";
import { Imagem } from "@/components/Style/Logo";
import { Enter } from "@/components/Logic/Enter";
import { Oritems } from "@/components/Style/OrItems";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/Firebase/firebase";

    export default function Register() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [apelido, setApelido] = useState("");
    const [gender, setGender] = useState("")
    const { createUser } = UseAuth()

    async function actionResgister() {
        const data = {
            name: nome,
            email,
            password: senha,
            gender,
            nick: apelido
        }

        await createUser(data)
    }
          
        interface EnterProps{
            loginFunction?: () => Promise<void>
        }

    return (
        <div>

            <div className="flex flex-row">

                <div className={`
                    h-screen w-[50%]
                    bg-[#FFDEF6] text-center
                    italic font-extrabold text-5xl text-[#6b0023]                
                    `}>
                    <Imagem/>
                    <span>Não se Cale !</span>
                </div>
            

                <div className={`
                flex flex-col
                h-screen w-[50%]
                items-center justify-center shadow-xl`}>

                    <div className={`
                    justify-center items-center rounded-lg 
                    lg:w-[50%] w-full`}>

                        <div className={`
                        italic font-extrabold text-3xl text-[#6b0023] text-center
                        `}>
                            <span>Não se Cale !</span>
                        </div>

                            <div className=" flex flex-col 
                            gap-2 gap-5 py-[5%]">
                        
                                <input type='text' onChange={(e) => setNome(e.target.value)} placeholder="Nome"
                                className="border-2 rounded-lg p-2"/>

                                <input type='text' onChange={(e) => setApelido(e.target.value)} placeholder="Apelido"
                                className="border-2 rounded-lg p-2"/>

                                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                                className="border-2 rounded-lg p-2"/>

                                <input type='password' onChange={(e) => setSenha(e.target.value)} placeholder="Senha"
                                className="border-2 rounded-lg p-2"/>
                            </div>

                        <div className="flex items-Stretch justify-center gap-8">
                            
                            <div className="flex flex-col items-start">
                                <span>Data de nascimento</span>

                                <input type="date" placeholder="Paloma" className="w-full border-2 rounded-lg p-2" />
                                
                            </div>

                            <div className={`
                            flex flex-col items-start
                            `}>
                                <span>Gênero</span>
                                <select onChange={(e) => setGender(e.target.value)}
                                className="w-full border-2 rounded-lg p-2.5"
                                >                          
                                <option value="masc">Masculino</option>
                                <option value="fem">Feminino</option>
                                <option value="fem">Papa</option>
                                <option value="fem">Outro</option>

                                </select>
                            </div>
                        </div>

                        <div className="my-[5%]">  
                            <div onClick={actionResgister}      className="text-center cursor-pointer border-solid border-2 rounded-lg p-2 bg-[#a6024f] text-white text-2xl">

                                <span>Cadastrar</span>
                            </div>
                        </div>
                        <Oritems/>
                        <Enter/> 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
    

