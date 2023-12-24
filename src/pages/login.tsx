import React, { useState } from "react";
import UseAuth from "@/services/hooks/UseAuth";

import { Imagem } from "@/components/Style/Landing/Logo";
import { Imagem2 } from "@/components/Style/Landing/PurpleLine";
import { Enter } from "@/components/Logic/Enter";
import { Oritems } from "@/components/Style/Landing/OrItems";

import { signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth";
import { auth } from "@/Firebase/firebase";
import { AuthProvider } from "@/services/context/AuthContext";

    export default function Login() {
        const { loginUser } = UseAuth();

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
    

    async function handleLoginSubmit() {
        if (email === '' || password === '') {
            alert('S !')
        } else {
        
        }
    }

    async function loginWithGoogle(){
        const provider = new GoogleAuthProvider()
        
        signInWithPopup(auth, provider)
			.then((result) => {
				console.log({
					name: result.user.displayName ?? '',
					email: result.user.email ?? ''
				})
			}).catch((error) => {
				console.log(error.message)
			})
    }

    async function loginWithFacebook() {
        const provider = new FacebookAuthProvider();
    
        try {
            const result = await signInWithPopup(auth, provider);
            console.log({
                name: result.user.displayName ?? '',
                email: result.user.email ?? ''
            });

        } .catch((error}) => {
            console.log(error.message)
        })
    }

    const handleFacebookLogin=()=>{
        signInWithPopup(auth, provider).then((result)=>{
            setUser(result.user);
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>

            {/* Início da Primeira Parte*/}

            <div className="flex flex-row">

                <div className={`
                h-screen w-[50%]
                bg-[#FFDEF6] text-center
                italic font-extrabold text-5xl text-[#6b0023]
                max-sm:hidden md:visible
                `}> 
                    <Imagem/>
                    
                    <span>HerVoice Blog</span>
                </div>

                {/* Início da Segunda Parte*/}

                <div className="flex md:flex-row min-sm:flex-col
                items-center justify-center shadow-xl
                h-screen md:w-[50%] max-sm:w-full">
                    
                    <div className={`flex flex-col 
                    rounded-lg w-full text-center text-ml
                    max-sm:w-[75%] lg:w-[50%] md:w-[75%]
                    `}>

                        <div className={`
                        italic font-extrabold text-3xl text-[#6b0023] md:my-[10%] max-sm:my-[10%]
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
                            <div 
                            onClick={handleLoginSubmit} 
                            className=
                            {`
                            cursor-pointer text-white
                            border-solid border-2 rounded-lg  
                            p-2 bg-[#a6024f] text-2xl my-[5%]
                            `}>
                                <span>Entrar</span>
                            </div>

                            <Oritems/>
                            <Enter loginFunction={loginWithGoogle}/>
                        </div>
                        <Imagem2/>
                    </div>
                </div>      
            </div>        
        </div>

    )
}