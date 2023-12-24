export interface Categorias {
    nomeTag: string;
}

interface TagsProps {
    categorias: Categorias[];
}

export function Tags(props: TagsProps) {
    return (
        <div>
            {props.categorias.length > 0 &&
                props.categorias.map((c, index) => (
                    <span key={index} className="inline-flex items-center rounded-md bg-[#6b0023] px-2 py-1 text-xs font-medium text-white">
                        {c.nomeTag}
                    </span>
                ))}
        </div>
    )
}
