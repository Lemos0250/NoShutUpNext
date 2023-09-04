interface BoxCategoryProps {
    nomeCategoria: string
    nomeTag: string
    id: string
}

export function BoxCategory(props: BoxCategoryProps) {
    return (
        <div className="flex flex-col w-full text-2xl border-2 p-2 items-start border-[#6b0023]">
            <span>{props.nomeCategoria}</span>
            <a className="text-sm">{props.nomeTag}</a>
        </div>
    )
}