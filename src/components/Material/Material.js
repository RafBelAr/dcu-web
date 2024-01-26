import materialImage from "../../images/material-image.png";
import { message } from "antd";

function Material (props) {
    return (
        <div className="flex flex-col p-3 shadow-xl w-40 justify-center  m-2 border border-gray-200 border-solid container">
            <img src={materialImage} alt="Material image" className="w-36" />
            <div className="mt-10 mb-8 px-7">
                <p className="font-bold">{props.materialName}</p>
                <p className="text-2xl font-semibold text-gray-500">13.33€</p>
            </div>
            <button onClick={() => message.success("Agregado al carrito")} className="w-32 bg-blue-400 p-3 text-white font-semibold text-sm border-none rounded-[37px] focus:ring-blue-500 focus:border-blue-500 hover:scale-105" type="submit" >Agregar</button>
        </div>
    );
}

export default Material;