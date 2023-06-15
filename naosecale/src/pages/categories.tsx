import { Topbar } from '../components/Topbar'
import { SearchBar } from '../components/SearchBar'
import { Footer } from '../components/Footer'
import { BoxCategory } from '../components/BoxCategory'
import React, { useState, useEffect } from 'react'

export default function Categories() {
    const [listCategorias, setListPosters] = useState<any[]>([]);

    useEffect(() => {
        setListPosters([{
            id: '1',
            nomeCategoria: 'Categoria 1',
            nomeTag: 'Tag 1'
        }])
    }, [])

    return (
        <div>
            <Topbar />
            <div className="flex flex-col w-full h-screen lg:flex-row items-center justify-center shadow-xl bg-[#FFDEF6]">

                <div className="flex items-start justify-center h-[85%] lg:w-[50%] 
                        w-[90%] shadow-xl bg-white rounded-lg">

                    <div className="flex flex-col w-full items-center justify-center py-10 ">
                        <div className="lg:my-6 justify-center text-center text-4xl mt-[-5%]">
                            <span className="font-semibold">Categorias</span>
                        </div>

                        <SearchBar />

                        <div className="flex flex-col w-[80%] justify-center items-center gap-3 lg:mt-[2.5%] mt-[5%]">
                            {listCategorias.map((categoria) => (
                                <BoxCategory
                                    key={categoria.id}
                                    id={categoria.id}
                                    nomeCategoria={categoria.nomeCategoria}
                                    nomeTag={categoria.nomeTag}
                                />
                            ))}
                            <div className="lg:mt-[2.5%]">
                                <div >
                                    <button >2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}