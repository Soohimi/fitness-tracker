import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

function Layout() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#e9e4e0] to-[#d3cce3] flex flex-col rounded-lg">
        <div className="flex-1">        
            <Outlet />
        </div>
        <div className="bg-gradient-to-r from-[#d3cce3] to-[#e9e4e0] h-20 flex justify-between items-center px-10 rounded-3xl">
            <Link to="/calendar"><img className="w-10 h-10" src="/icons/calendar.svg" alt="calender" /></Link>
            <Link to="/"><img className="w-10 h-10" src="/icons/dumbbell.svg" alt="dumbell" /></Link>
            <Link to="/reports"><img className="w-10 h-10" src="/icons/heart.svg" alt="heart" /></Link>
        </div>
    </div>
  )
}

export default Layout