import { Outlet } from "react-router"
import Navbar from "./Components/NabVar/Navbar"


const MainLayOut = () => {
  return (
    <div className="min-h-screen ">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayOut