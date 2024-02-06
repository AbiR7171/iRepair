import NavBar from "@/Shared/NavBar";
import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayouts;