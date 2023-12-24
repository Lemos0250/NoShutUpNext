import React, { useState } from "react";

export function Pagination() {

    let [num, setNum] = useState(1)

    const pages = [
        { page: num },
        { page: num + 1 },
        { page: num + 2 },
        { page: num + 3 }
    ]

    function Next() {
        setNum(++num)
    }

    function Back() {
        num > 1 && setNum(--num)
    }

    return (
        <div className="text-center items-center gap-3 flex flex-row">
            {
                pages.map((pg, i) => (
                    <button key={i} >{pg.page}</button>
                ))
            }
           
        </div>

    )
}