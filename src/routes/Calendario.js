import sortIcon from "../images/icons/sort-icon.svg";
import locatonIcon from "../images/icons/location.svg";
import prof1Icon from "../images/icons/prof1.svg";
import jennyIcon from "../images/icons/jennyIcon.svg";


function Calendario () {
    return (
        <div className="p-6 flex flex-col">
            <div className="flex flex-row space-x-10 justify-between w-[90%]">
                <p className="font-bold text-3xl">
                    Calendario
                </p>
                <div>
                    <a href="#" className="text-blue-400 underline font-regular ">Sincronizar Calendario</a>
                </div>
            </div>
            <div className="flex flex-row p-6 justify-between w-[90%]">
                <div className="flex flex-row">
                    <p className="text-3xl font-semibold">
                        24
                    </p>
                    <div className="flex flex-col ml-2">
                        <p className="font-regular text-sm text-gray-400">Mié</p>
                        <p className="font-regular text-sm text-gray-400 -mt-1">Ene 2024</p>
                    </div>
                </div>
                <span className="p-2 bg-green-100 text-green-400 font-semibold rounded-md px-3 hover:scale-105 hover:cursor-pointer">HOY</span>
            </div>
            <div className="px-11 ml-5 sm:ml-0 text-center flex flex-row space-x-4 md:space-x-14 lg:space-x-24 w-[90%] justify-center border-b border-gray-100 p-2">
                <div className="p-2 px-4">
                    <p className="text-light text-gray-400">S</p>
                    <p className="font-bold text-lg">21</p>
                </div>
                <div className="p-2 px-4">
                    <p className="text-light text-gray-400">L</p>
                    <p className="font-bold text-lg">22</p>
                </div>
                <div className="p-2 px-4">
                    <p className="text-light text-gray-400">M</p>
                    <p className="font-bold text-lg">23</p>
                </div>
                <div className="p-2 px-4 rounded-sm bg-orange-500">
                    <p className="text-light text-white">M</p>
                    <p className="font-bold text-lg">24</p>
                </div>
                <div className="p-2 px-4">
                    <p className="text-light text-gray-400">J</p>
                    <p className="font-bold text-lg">25</p>
                </div>
                <div className="p-2 px-4">
                    <p className="text-light text-gray-400">V</p>
                    <p className="font-bold text-lg">26</p>
                </div>
                <div className="p-2 px-4">
                    <p className="text-light text-gray-400">S</p>
                    <p className="font-bold text-lg">27</p>
                </div>
            </div>

            <table className="mt-4 table-auto border-separate border-spacing-6 w-[90%]">
                <thead>
                    <tr>
                        <th className="text-gray-500">Hora</th>
                        <th className="text-gray-500 text-left flex flex-row justify-between pr-1">Curso <img src={sortIcon} alt="Sort icon"/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">
                            <p>11:35</p>
                            <p className="text-gray-400">13:05</p>
                        </td>
                        <td className="bg-green-500 text-white p-3 rounded-md">
                            <div className="flex flex-col text-left">
                                <p className="text-lg font-semibold">Matemáticas</p>
                                <p className="text-sm">Chapter 1: Introducción</p>
                                <br />
                                <div className="flex flex-row space-x-3">
                                    <img src={locatonIcon} alt="Location icon" />
                                    <p>Room - 6 - 205</p>
                                </div>
                                <div className="flex flex-row space-x-3 pb-1">
                                    <img src={prof1Icon} alt="Location icon" />
                                    <p>William</p>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className="text-center">
                            <p>14:00</p>
                            <p className="text-gray-400">15:00</p>
                        </td>
                        <td className="bg-green-500 text-white p-3 rounded-md">
                            <div className="flex flex-col text-left">
                                <p className="text-lg font-semibold">Matemáticas</p>
                                <p className="text-sm">Chapter 2: Seguimiento</p>
                                <br />
                                <div className="flex flex-row space-x-3">
                                    <img src={locatonIcon} alt="Location icon" />
                                    <p>Room - 6 - 205</p>
                                </div>
                                <div className="flex flex-row space-x-3 pb-1">
                                    <img src={prof1Icon} alt="Location icon" />
                                    <p>William</p>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className="text-center">
                            <p>11:35</p>
                            <p className="text-gray-400">13:05</p>
                        </td>
                        <td className="bg-green-500 text-white p-3 rounded-md">
                            <div className="flex flex-col text-left">
                                <p className="text-lg font-semibold">Geografía</p>
                                <p className="text-sm">Chapter 1: Introducción</p>
                                <br />
                                <div className="flex flex-row space-x-3">
                                    <img src={locatonIcon} alt="Location icon" />
                                    <p>Room - 7 - 332</p>
                                </div>
                                <div className="flex flex-row space-x-3 pb-1">
                                    <img src={jennyIcon} alt="Location icon" />
                                    <p>Jenny</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calendario;