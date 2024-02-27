import { Header } from "../Header/Header"

export const DashBoard = ()=>{
  let currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    return <>
    <div className="hero_area">
        <Header/>
    </div>
    <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <h4>
              PROFILE
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label for="inputPatientName">ID</label>
                <input type="text" className="form-control" id="inputPatientName" value={currentUser.user.id}/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Phone Number</label>
                <input type="number" value={currentUser.user.phoneNumber} className="form-control" id="inputPatientName" placeholder="Enter your Phone number "/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Email Id</label>
                <input type="email" value={currentUser.user.email} className="form-control" id="inputPatientName" placeholder="Enter your Email Id "/>
              </div>
              
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Name</label>
                <input type="text" value={currentUser.user.name} className="form-control" id="inputPatientName" placeholder="Enter password "/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
}