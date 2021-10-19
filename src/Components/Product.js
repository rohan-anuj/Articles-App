import React, {useState} from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


function Product({image, abstract,web, Publish}) {
    const [appear,setAppear]=useState(false)
    const [buttons,setButtons]=useState(false)
    return (
        <div className="shadow-md p-2 h-96  w-80 m-2   flex-col justify-around items-center">
        {buttons?<div ><img src={image}  className="object-fit h-48 opacity-50  w-80 relative rounded  "  onMouseOver={()=>setButtons(false)} alt=""/> <a   className="absolute   -mt-28 ml-32  font-bold rounded bg-blue-700  text-white p-2 " rel="noreferrer" href={web} target="_blank">Visit</a></div>:<div><img src={image} className="object-fit h-48 w-80 relative rounded"  onMouseOver={()=>setButtons(true)} alt=""/> <button className="absolute -mt-10 font-bold rounded bg-red-700  text-white p-2 "> News</button></div>}
        <p className="  leading-tight m-2 font-serif text-justify tracking-tight  font-medium text-gray-500">{abstract}</p>
        {appear?<FavoriteOutlinedIcon className="text-red-600  cursor-pointer ml-60"  onClick={()=>setAppear(false)} />:<FavoriteBorderIcon className="text-gray-500 cursor-pointer ml-60" onClick={()=>setAppear(true)}/>

      } 
      <p className="leading text-gray-500">Source: NewYork Times</p>        
        </div>
    )
}

export default Product
