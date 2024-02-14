import { useState } from "react";
import { Header } from "../Header/Header";
import apis from '../apis/ApiEndPoints';
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";


export const SignIn = ()=>{
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const SignIn = async (event)=>{
        try{
           event.preventDefault();
           let response =  await axios.post(apis.doctorSignIn,{email,password});
           if(response.data.status){
            // save user information in session storage
            let currentUserData = response.data.data;
            delete currentUserData.password;
            console.log(currentUserData);
            sessionStorage.setItem("current-user",JSON.stringify(currentUserData));
            sessionStorage.setItem("")
            navigate("/dashboard");
           }
           else
           toast.error("invalid error")
        }
        catch(err){
            toast.error("oops ! something went wrong ")
        }
    }

    return <>
    <ToastContainer/>
    <div className="hero_area">
        <Header/>
    </div>
    <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={SignIn}>
            <h4>
              Sign <span>In</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Email ID</label>
                <input onChange={(event)=>setEmail(event.target.value)} type="text" className="form-control" id="inputPatientName" placeholder="Enter Email Id"/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Password</label>
                <input onChange={(event)=>setPassword(event.target.value)}type="password" className="form-control" id="inputPatientName" placeholder="Enter password"/>
              </div>
            </div>
            <div className="btn-box">
              <button type="submit" className="btn ">Sign-In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </>
}