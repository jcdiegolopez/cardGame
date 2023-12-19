
export default function Card({name,image, handleClick,id}) {
    return (
        <div className="w-40" onClick={()=> handleClick(id)}>
        <div className="flex justify-center items-center h-full">
        <div className="max-w-sm rounded overflow-hidden  shadow-xl shadow-sky-500/50 bg-sky-600 h-full ">
            <div className="flex justify-center items-center mt-4 mx-4 h-2/3">
                <img className=" object-cover h-full rounded-md" src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${image}`} alt="champ image"/>
            </div>
            <div className="flex justify-center px-6 py-4 ">
                <div className="font-bold text-xl mb-2 text-sky-900">{name}</div>
            </div>
        </div>
        </div>
        </div>
    )
}