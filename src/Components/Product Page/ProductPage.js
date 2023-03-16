import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage(){

    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:1234/Products/${id}`)
        .then((resp)=>console.log(resp))
        .catch((err)=>console.log(err))
    },[])

    return(
        <>sdfgsdfgsdfgsdfgsdfgdfg</>
    )
}