import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
function Layout () {
    return (
        <div>
            <Header />
            <div className="flex flex-col sm:flex-row">
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;