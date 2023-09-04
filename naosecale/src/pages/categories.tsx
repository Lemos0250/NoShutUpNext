import { Topbar } from '../components/Style/Topbar'
import { SearchBar } from '../components/SearchBar'
import { Footer } from '../components/Style/Footer'
import { BoxCategory } from '../components/Style/BoxCategory'
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
            <div className={`
            flex flex-col 
            w-full h-screen lg:flex-row 
            items-center justify-center 
            shadow-xl bg-[#FFDEF6]
            `}>

                <div className={`
                bg-white 
                border-solid shadow-xl 
                h-[85%] w-[50%]
                rounded-lg>
                `}>

                    <div className={`
                    flex flex-col 
                    items-center justify-center py-[10%]
                    font-semibold
                    `}>
                        
                        <div className="text-center text-4xl">
                            <span>Categorias</span>
                        </div>

                        <SearchBar />

                        <div className={`
                        flex flex-col 
                        items-center 
                        w-[80%] mt-[5%]
                        `}>
                            {listCategorias.map((categoria) => (
                                <BoxCategory
                                    key={categoria.id}
                                    id={categoria.id}
                                    nomeCategoria={categoria.nomeCategoria}
                                    nomeTag={categoria.nomeTag}
                                />
                            ))}
                            
                            <button>2</button>
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
            
            <Footer />
        </div>
    )
}