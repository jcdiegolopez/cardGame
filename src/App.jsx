import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Timer from './components/Timer'
import Points from './components/Points'
import BackCard from './components/BackCard'
import Card from './components/Card'




function App() {
  const [data, setData] = useState();
  const [cards, setCards] = useState([]);
  const [points, setPoints] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [status, setStatus] = useState('playing');
  const [seconds, setSeconds] = useState(0);
  let count = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetcData = async () => {

      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json');
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetcData();
  },[]);

  useEffect(() => { 
    let newCards = []; 
    if(data || status=='losed'){
    let count = 0;
    while( count  < 20 ){
      let keys = Object.keys(data);
      let champ = data[keys[ keys.length * Math.random() << 0]]
      newCards.push({id:count, name: champ.name , image: champ.image.full, selected:false});
      count++;
      setStatus('playing')
    }
    
    setCards(newCards);
  }
  }, [data, status]);



  function shuffleCards(){
    setCards((p) => {
      const newOrder = p.slice();
      for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
      }

      return newOrder;
    });
    
  }

  function showCard(id){
    
    setCards(cards.map((card) => {
      if(card.id == id && card.selected === false){
        setPoints(p=>p+1)
        return {...card, selected:true}
        
      }else if(card.id == id && card.selected === true){
        if(points>bestScore){
          setBestScore(points);
        }
        setPoints(0);
        setStatus('losed');
        setSeconds(0);
        return {...card};
      }
      else{
        return {...card}
      }
    }));
    
    shuffleCards();
    
    
  }

  return (

    
    <div className="bg-neutral-800 flex flex-col items-stretch pb-12 min-h-screen">
      <Header/>
      <div className="self-center flex w-full max-w-[1030px] flex-col mt-20 mb-9 items-start max-md:max-w-full max-md:mt-10">
        <Points points={points} bestScore={bestScore}/>
        <Timer time={seconds}/>        
      </div>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-4 gap-4">
        {cards.length!==0 ? cards.map((card) => {
          console.log(count)
          count++;  
          if(count<9){
            return( <Card id={card.id} key={card.id} handleClick={showCard} name={card.name} image={card.image}/>);
          }
          
            }) : <h1 className='text-white font-bold text-3xl'>Loading Cards...</h1>}
        </div>
      </div>
    </div>
  )
}

export default App
