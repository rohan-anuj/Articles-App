import React, {useEffect, useState} from 'react'
import axios from "axios"
import Product from "./Product"

function Home() {
    const [Data,setData]=useState()
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=AasIhf4dW4DTHVni1wLcGsgAgBj3yAxr")
        .then(res=>setData(res.data.response.docs))
        .catch(err=>console.log(err))
    },[])
    console.log(Data)
    return (
        <div className=" mt-32 h-max flex m-2  mb-20  flex-wrap justify-evenly items-center ">
        {Data?Data.map(Articles=><Product image={"https://static01.nyt.com/"+Articles.multimedia[0].url} web={Articles.web_url} Publish={Articles.pub_date} abstract={Articles.abstract} />):<div className="shadow-xl animate-pulse border border-gray-100 p-2 h-96    flex-col justify-between items-center">
        <div className="object-fit h-40 w-96 rounded animate-pulse bg-gray-300 mb-2 " ></div>     <h1 className="font-san rounded h-20 animate-pulse m-3 bg-gray-300"> </h1>

            
        </div>}
        
        </div>
    )
}

export default Home
