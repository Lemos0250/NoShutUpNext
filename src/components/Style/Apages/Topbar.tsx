import { Hamburguer } from '@/components/Logic/HamburguerBtn'
import { SearchBar } from '@/components/Style/Template/SearchBar'
import { IconExclamation, IconHome, IconInfo, IconLabel, IconPhone } from '../../icons';

import React from "react";
import Link from 'next/link';

export function Topbar() {
    function copyToClipboard() {
        navigator.clipboard.writeText('180')
        alert('O número 180 foi copiado!')
    }

    return (
        <div className={`
        flex flex-row 
        w-full  items-center justify-between 
        shadow-xl text-white bg-[#6b0023] 
        md:px-10
        `}>
            <div className="italic font-extrabold items-center text-xl 2xl:text-2xl xl:text-xl">
                <Link href="/"><span className="hidden lg:flex">Não Se Cale Mulher</span></Link>
                <Link href="/"><span className="flex lg:hidden">Não Se Cale Mulher</span></Link>
            </div>

            <SearchBar />

            <div className="hidden lg:flex gap-4">
                <Link href="/">
                    <div 
                    className={`underline flex flex-row 
                    items-center gap-1 2xl:text-base xl:text-sm`}>
                        {IconHome}
                        <span>Home</span>
                    </div>
                </Link>

                <Link href="/categories">
                    <div className={`underline flex flex-row 
                    items-center gap-1 2xl:text-base xl:text-sm`}>
                        {IconLabel}
                        <span>Categorias</span>
                    </div>
                </Link>

                <Link href="/sobre">
                    <div className={`underline flex flex-row 
                    items-center gap-1 2xl:text-base xl:text-sm`}>
                        {IconInfo}
                        <span>Sobre</span>
                    </div>
                </Link>

                <Link href="/contato">
                    <div className={`underline flex flex-row 
                    items-center gap-1 2xl:text-base xl:text-sm`}>
                        {IconPhone}
                        <span>Contato</span>
                    </div>
                </Link>

                <div onClick={() => copyToClipboard()} 
                className=
                {`
                underline flex flex-row 
                items-center gap-1 2xl:text-base xl:text-sm
                `}>
                    {IconExclamation}
                    <span>Ligue 180</span>
                </div>
            </div>

            <div className="flex lg:hidden">
                <Hamburguer />
            </div>
        </div>
    )
}