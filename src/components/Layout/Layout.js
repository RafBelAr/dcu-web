import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
function Layout () {
    return (
        <div>
            <Header />
            <div className="flex flex-col sm:flex-row">
                <div className="basis-1/6">
                    <NavBar />
                </div>
                <div className="basis-10/12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;