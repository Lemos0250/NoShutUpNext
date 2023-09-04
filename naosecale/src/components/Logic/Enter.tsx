export function Enter () {
    return(
    <div className="flex flex-col gap-3">
        <div className={`
            flex
            justify-center items-center
            border-solid border-2 rounded-lg
            border-purple-700 
            hover:bg-gray-100
            p-2 gap-2 cursor-pointer
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg>
                    <span>Continuar com Google</span>
        </div>

        <div className={`
            flex
            justify-center items-center
            border-solid border-2 rounded-lg
            border-purple-700
            hover:bg-gray-100
            p-2 gap-2 cursor-pointer
            `}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                    <span>Continuar com Facebook</span>
        </div>

        <span className="text-center">Não tem uma conta? <span className="text-purple-700">Registre-se</span></span>
    </div>
    )
}