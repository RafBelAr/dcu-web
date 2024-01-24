import bagIcon from "../images/icons/bag-icon.svg";
import lensIcon from "../images/icons/lens-icon.svg";

import Material from "../components/Material/Material";

function Materiales () {
    return (
        <div className="p-6 flex flex-col sm:space-x-11 w-[90%]">
            
            <div className="flex flex-col justify-end sm:flex-row-reverse sm:justify-between my-4">
            <img src={bagIcon} alt="Bag icon" className="hover:scale-105 hover:cursor-pointer max-w-10 self-end" />
                <div className="w-full sm:basis-3/4 flex flex-col md:flex-row sm:space-x-11">
                    <div className="w-full mt-3 sm:mt-0 sm:w-2/3 flex items-center relative">
                        <input className="min-w-64 pl-10 p-3 w-full border border-solid border-gray-200 rounded-lg text-gray-500 relative" type="text" placeholder="Buscar..."></input>
                        <img className="absolute mr-20 left-4" src={lensIcon} alt="lens icon" />
                    </div>
                    <select className="w-52 mt-3 sm:mt-0 self-center sm:self-auto p-3 border-solid border border-gray-200 rounded-lg text-gray-500" name="type" id="selectorType">
                        <option value="book">Libros</option>
                        <option value="book">Materiales</option>
                        <option value="book">Audio</option>
                        <option value="book">Libretas</option>
                        <option value="book">Papeleria</option>
                    </select>
                </div>
                
            </div>

            <p className="px-6 sm:px-0 text-xl font-semibold italic my-4">47 Libros</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 self-center p-6 container">
                <Material materialName="Libro Historia 1" />
                <Material materialName="Libro Mates 1" />
                <Material materialName="Libro Historia 3" />
                <Material materialName="Libro Geo. 1" />
                <Material materialName="Libro Mates. 3" />
                <Material materialName="Libro Historia 1" />
                <Material materialName="Libro Geo. 1" />
                <Material materialName="Libro Mates. 1" />
                <Material materialName="Libro Historia 5" />
                <Material materialName="Libro Geo. 2" />
                <Material materialName="Libro Historia 1" />
                <Material materialName="Libro Mates. 2" />
                <Material materialName="Libro Historia 1" />
                <Material materialName="Libro Geo. 1" />
                <Material materialName="Libro Historia 1" />
                <Material materialName="Libro Infor. 1" />
                <Material materialName="Libro Geo. 1" />
                <Material materialName="Libro Infor. 1" />
                <Material materialName="Libro Geo. 1" />

            </div>
        </div>
    );
}

export default Materiales;