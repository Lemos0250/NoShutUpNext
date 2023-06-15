import React, { useState } from "react";
import { Categorias, Tags } from "./Tags";
import Img from "../img/Mulher.png"
import Image from 'next/image'

interface PostsProps {
    id: number;
    titulo: string;
    descricao: string;
    dataDaPublicacao: string;
    categorias: Categorias[];
}

export function Posts(props: PostsProps) {

    return (
        <div key={props.id} className="flex flex-col gap-5">
            <div className="border-solid border-2 p-40 shadow-md">
                <Image className="object-cover" src={Img} alt="imagem" />
            </div>

            <div className="font-weight: 900">
                <div className="font-weight:900 text-lg  font-bold"><span>&quot{props.titulo}&quot</span></div>
                <span className="font-light">{props.dataDaPublicacao}</span>
            </div>

            <div className="">
                <a className="font-light">{props.descricao}</a>
            </div>
            <Tags categorias={props.categorias} />
        </div>
    )
}