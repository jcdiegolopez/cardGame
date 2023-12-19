export default function BackCard({handleClick, name, id}){
    return (
        <div className="w-40 " onClick={()=> handleClick(id)}>
        <div className="flex justify-center items-center h-full">
        <div className="max-w-sm rounded overflow-hidden  shadow-xl shadow-sky-500/50 bg-sky-600 h-full">
            <div className="flex justify-center items-center mt-10">
                <svg className="w-20 fill-sky-900 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512">
                <path d="M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z"/>
                </svg>
            </div>
            <div className="flex justify-center px-6 py-4 ">
                <div className="font-bold text-xl mb-2 text-sky-900">Lol Champs</div>
            </div>
        </div>
        </div>
        </div>
    )
}