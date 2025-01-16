import { Outlet } from "react-router"
import Navbar from "./Components/NabVar/Navbar"


const MainLayOut = () => {
  return (
    <div className="min-h-screen overflow-hidden ">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayOut