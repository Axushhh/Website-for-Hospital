import { Header } from "../Header/Header"
import { Banner } from "../banner/Banner"
import { BookAppointment } from "../bookAppointment/BookAppointment"
import { Footer } from "../footer/Footer"

export const Home = ()=>{
    return (<div>
    <div className="hero_area">
         <Header/>
        <Banner/>
    </div>
    <BookAppointment/>
    <Footer/>


   </div>)
}