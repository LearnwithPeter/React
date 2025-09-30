import { useEffect,useState } from "react";

function usecurrencyinfo(currency){
  const [data,setdata]=useState({})
  useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/5c45cf67d4a3774c9754ade7/latest/${currency}`)
    .then((res)=> {res.json})
    .then((res)=> res[currency])
    console.log(data);

  },[currency])

  return data 
}
export default usecurrencyinfo;