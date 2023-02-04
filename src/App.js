import React from "react";
import axois from "axios";
import { useState, useEffect } from "react";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";
import "./Navbar.css"



function App() {
  const [coins, setCoin] = useState([]);
  const Api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=49&page=1&sparkline=false  "
  useEffect(()=>{
       axois.get(Api).then((response)=>{
        setCoin (response.data)
        console.log(response.data[0])
       }).catch((error)=>{

       })
  },[])
  return (
   <>
   <Navbar/>
   <Coin coins={coins} />
   </>
  );
}

export default App;
