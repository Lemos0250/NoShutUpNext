import { FaSearch } from 'react-icons/fa';
import React from 'react';
import { useEffect, useState } from 'react'
import Client from '../data/client'


export function SearchBar() {

    const [info, setInfo] = useState<any>({});
    const [text, setText] = useState('');
    console.log(text);

    useEffect(() => {
        console.log(text);
        if (text) {
            fetch(`${Client}texto?filter[text]=${text}`)
                .then((response) => response.json())
                .then((info) => {
                    console.log(info)
                    setInfo(info)
                })
        }
    }, [text]);


    return (
        <div className=" hidden bg-white items-center lg:flex shadow-lg border-2 hover:border-pink-500 rounded-full text-black p-2 transition-colors lg:w-64 lg:my-5">
            <FaSearch className="text-lg" />

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="hover:border-pink-500 focus:outline-none text-black p-2 transition-colors ml-0" />
            {
                info.data && (
                    <ul>
                        {info.data.map((texto: any) => (
                            <li key={texto.id}>
                                {texto.attributes.canonicalTitle}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}