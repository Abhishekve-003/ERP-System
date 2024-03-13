import { Outlet } from "react-router-dom"
import NavBarTop from "../components/navbar/main"

export default function Dashboard(){
    return <div>
        <NavBarTop>
            <Outlet/>
        </NavBarTop>
    </div>
}