import { useEffect } from "react"
import { Header } from "../Header/Header"
import axios from "axios";
import apis from "../apis/ApiEndPoints";

export const ReceptionList = ()=>{
    useEffect(()=>{
        // never use async() in useEffect it will always give an error thats why we have created it seperatly 
        loadReceptionList();
    },[]);

    const loadReceptionList = async()=>{
        try{
        let token = sessionStorage.getItem("token");
        console.log("token",token)
        let response = await axios.get(apis.receptionList,{
            headers: { Authorization: `Bearer `+token }
        });
         console.log(response);
        }
        catch(err){
         console.log(err);
        }
    }
    return <>
    <div className="hero_area">
        <Header/>
    </div>
    <h1>The ReceptionList will be visible here </h1>
    </>
}