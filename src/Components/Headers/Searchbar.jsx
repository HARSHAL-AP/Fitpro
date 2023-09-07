import React,{useState,useEffect} from 'react'
import Style from "./Searchbar.module.css"
import {FaSearch} from "react-icons/fa"

const Searchbar = ({queryhandler}) => {
const [query,setquery]=useState("")

useEffect(()=>{
  
  queryhandler(query)
  
},[query])


  return (
    <div className={Style.inputcontener }> 
        <input type="text"  placeholder='Search Video heare....' value={query} onChange={(e)=> setquery(e.target.value)}/>
        <FaSearch className={Style.serchicon}/>
    </div>
  )
}

export default Searchbar