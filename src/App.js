
import Header from "./components/Header";

import axios from 'axios';

const HeaderParams={
     text:"MY FAVORITE GAMES"
};
const B=({text,onClick})=>{

   return(
    <>
       <button onClick={onClick}>{text}</button>
    </>
   );
};

const click=function(){
 

    const fetchData=async()=>{

      try{
        const res= await axios.get("https://kawkaw.wuaze.com/api/game/getGames");
        alert(res.data);

      }catch(error)
      {
        alert(error);
      }

    }

    fetchData();

};

export default function App()
{
    return(
      <>
        <div className="container">
        <Header  HeaderParams={HeaderParams}   />
        <B text="click me" onClick={click} />
        </div>
      </>
    );
}
