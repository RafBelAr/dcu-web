import homeIcon from "../../images/icons/home.svg";
import bookOpen from "../../images/icons/book.svg";
import bookClosed from "../../images/icons/book-closed.svg";
import calendarIcon from "../../images/icons/calendar.svg";
import chartAltIcon from "../../images/icons/chart-alt.svg";
import chartIcon from "../../images/icons/chart.svg";
import orderIcon from "../../images/icons/order.svg";
import userIcon from "../../images/icons/user-1.svg";

function NavBar () {

    return (
        <div className="p-3 mr-4 flex flex-row space-x-4 overflow-auto sm:p-4 sm:flex-col sm:space-y-4 sm:space-x-0">

                <a href="/Home">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={homeIcon} alt="Home Icon" />
                        <p className="ml-2 self-center">Home</p>
                    </div>
                </a>

                <a href="/Cursos">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={bookOpen} alt="Book Icon" />
                        <p className="ml-2 self-center">Cursos</p>
                    </div>
                </a>

                <a href="/Calendario">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={calendarIcon} alt="Calendar Icon" />
                        <p className="ml-2 self-center">Calendario</p>
                    </div>
                </a>

                <a href="/Calificaciones">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={chartIcon} alt="Chart Icon" />
                        <p className="ml-2 self-center">Calificaciones</p>
                    </div>
                </a>

                <a href="/Pruebas">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={orderIcon} alt="Order Icon" />
                        <p className="ml-2 self-center">Pruebas</p>
                    </div>
                </a>

                <a href="/Materiales">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={bookClosed} alt="Book Icon" />
                        <p className="ml-2 self-center">Materiales</p>
                    </div>
                </a>

                <a href="/Asesoramiento">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={userIcon} alt="User Icon" />
                        <p className="ml-2 self-center">Asesoramiento</p>
                    </div>
                </a>

                <a href="/Contacto">
                    <div className="p-3 sm:p-1 flex flex-row sm:hover:scale-105">
                        <img src={chartAltIcon} alt="Chart Icon" />
                        <p className="ml-2 self-center">Contacto</p>
                    </div>
                </a>
        </div>
    );
}

export default NavBar;