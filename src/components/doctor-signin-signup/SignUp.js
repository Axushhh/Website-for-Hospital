import { useState } from "react"
import { Header } from "../Header/Header"
import axios from "axios";
import apis from '../apis/ApiEndPoints';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(); 

  const SignUp = async(event)=>{
    try{
      event.preventDefault();
      let response = await axios.post(apis.doctorSignUp,{name,phoneNumber,email,password})
      if(response.data.status){
        navigate("/signin");
      }
      else{
        toast.error("Oops  something went wrong...");
      }
    }
    catch(err){
      window.alert("Oops! something went wrong....");
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
          <form>
            <h4>
              Sign <span>Up</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Name</label>
                <input onChange={(event)=>setName(event.target.value)} type="text" className="form-control" id="inputPatientName" placeholder="Enter your Name "/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Phone Number</label>
                <input onChange={(event)=>setPhoneNumber(event.target.value)} type="number" className="form-control" id="inputPatientName" placeholder="Enter your Phone number "/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Email Id</label>
                <input onChange={(event)=>setEmail(event.target.value)}type="email" className="form-control" id="inputPatientName" placeholder="Enter your Email Id "/>
              </div>
              
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Password</label>
                <input onChange={(event)=>setPassword(event.target.value)}type="password" className="form-control" id="inputPatientName" placeholder="Enter password "/>
              </div>
            </div>
            <div className="btn-box">
              <button type="submit" className="btn ">Sign-Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
}