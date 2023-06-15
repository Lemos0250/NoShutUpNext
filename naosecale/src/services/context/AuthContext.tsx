import { createContext, useEffect, useState } from "react"
import api from '@/data/client'
import Cookie from 'js-cookie'
import decode from 'jwt-decode'
import Router from "next/router"

interface User {
    name: string
    email: string
    password: string
    gender: string
    nick: string
}

interface AuthContextProps {
    createUser(user: User): Promise<void>
    loginUser(email: string, password: string): Promise<void>
    user: User
}

const AuthContext = createContext<AuthContextProps>({
    createUser: () => Promise.resolve(),
    loginUser: () => Promise.resolve(),
    user: {
        email: '',
        name: '',
        password: '',
        gender: '',
        nick: ''
    },
})

function setCookieIdUser(token: string) {
    Cookie.set('Admin-cookie-naosecalse', token, {
        expires: 7,
    });
}

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>({
        email: '',
        name: '',
        password: '',
        gender: '',
        nick: ''
    })
    const token = Cookie.get('Admin-cookie-naosecalse')

    async function createUser(data: User) {
        try {
            const token = await (await api.post('/user/create', data)).data
            setCookieIdUser(token)
        } catch (error) {
            console.log(error)
        }
    }

    async function loginUser(email: string, password: string) {
        const data = {
            email,
            password
        }
        try {
            const token = await (await api.post('/user/login', data)).data
            if (token.message === 'User not found!') {
                alert('Usuário não existe, ou, senha errada!')
            } else {
                setCookieIdUser(token)
                Router.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     if (token) {
    //         const user = decode(token) as any
    //         setUser(user.payload as User)
    //     } else {
    //         Router.push("/login")
    //     }
    // }, [token])

    return (
        <AuthContext.Provider value={{ createUser, user, loginUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext