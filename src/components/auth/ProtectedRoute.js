import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Auth"

// (imp) the dashboard is the children from app.js 
// public route / private route / protected route

export const ProtectedRoute = ({children})=>{  
    if(isLoggedIn())
      return children;
    else
      return<Navigate to = "/"/>
}