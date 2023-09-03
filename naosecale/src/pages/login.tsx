import React, { useState } from "react";
import { Box } from '../components/Box'
import { Footer } from '../components/Footer'
import { Topbar } from '../components/Topbar'
import axios from '../data/client'
import Cookie from 'js-cookie'
import Router from "next/router";
import Link from "next/link";
import UseAuth from "@/services/hooks/UseAuth";
import Image from 'next/image'
import { Imagem } from "@/components/Logo";

export default function Login() {
    const { loginUser } = UseAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e: any) {
        e.preventDefault();

        await loginUser(email, password)
    }

    return (
        <div>

            {/* Início da Primeira Parte*/}

            <div className="flex flex-row">

                <div className={`
                h-screen w-[50%]
                bg-[#FFDEF6] text-center
                italic font-extrabold text-5xl text-[#6b0023]
                
                `}> 
                    <Imagem/>
                    
                    <span>Não se Cale !</span>
                </div>

                {/* Início da Segunda Parte*/}

                <div className="flex flex-row lg:flex-row
                h-screen w-[50%] items-center justify-center shadow-xl">
                    
                    <div className={`flex flex-col 
                    rounded-lg lg:w-[50%] w-full text-center text-ml
                    `}>

                        <div className={`
                        italic font-extrabold text-3xl text-[#6b0023] lg:my-[10%] 
                        `}>
                            <span>Não se Cale !</span>
                        </div>

                        <div className="justify-center items-center">

                            <div className="flex flex-col gap-5">
                                <input type='text' placeholder="Email" onChange={((e) => setEmail(e.target.value))} 
                                className={`lg:w-[100%] border-2 rounded-lg p-2`}/>

                                <input type='text' placeholder="Senha" onChange={((e) => setPassword(e.target.value))} 
                                className="lg:w-[100%] border-2 rounded-lg p-2" />
                            </div>

                            {/* <Link to="/"> */}
                            <div onClick={login} className={`
                            cursor-pointer text-white
                            border-solid border-2 rounded-lg 
                            
                            p-2 bg-[#a6024f] text-2xl my-[5%]
                            `}>
                                <span>Entrar</span>
                            </div>

                            <Link href="/register">
                                <div className="
                                border-solid border-2 rounded-lg 

                                p-2 bg-[#a6024f] text-white text-2xl">
                                    <span>Criar uma Conta</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>           
        </div>

    )
}