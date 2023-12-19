export default function Points({points, bestScore}){

    return(
        <div>
        <div className="items-stretch flex gap-3">
          <div className="text-white text-2xl font-semibold capitalize grow whitespace-nowrap">
            Points:
          </div>
          <div className="text-white text-2xl font-semibold capitalize whitespace-nowrap">
            {points}
          </div>
        </div>
        <div className="items-stretch flex gap-3">
          <div className="text-white text-2xl font-semibold capitalize grow whitespace-nowrap">
            BestScore:
          </div>
          <div className="text-white text-2xl font-semibold capitalize whitespace-nowrap">
            {bestScore}
          </div>
        </div>
        </div>
    );
}