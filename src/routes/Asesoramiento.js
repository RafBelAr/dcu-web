import { ButtonStyled } from "../components/ButtonStyled/ButtonStyled";
import InputField from "../components/InputField/InputField";
import TextDescComp from "../components/TextDescriptionComp/TextDescComp";
import { message } from "antd";

function Asesoramiento () {
    return (
        <div className="p-6">
            <p>
                Si necesitas ayuda o asesoramiento para nuestros cursos, puedes hacerlo desde la app. Haz click en el botón y un profesor se comunicará lo antes posible.
            </p>

            <TextDescComp titleName="Horarios de asesoramiento" descriptionName="12.00 - 20.00 de Lunes a Viernes" />

            <br />
            <p className="font-light">
                Teléfono
            </p>
            <InputField id="telefonoField" className="min-w-72 mt-4" type="text" placeholder="Teléfono requerido*" />

            <p className="font-light mt-6">
                Motivo de consulta
            </p>
            <textarea className="min-w-72 border-solid border p-2 border-gray-200 rounded-md w-[30%] h-14 resize-none" type="textbox" placeholder="Tu mensaje*" />
            <br />
            <br />
            <ButtonStyled onClick={() => message.success("Asesoramiento pedido")} className="mt-24" buttonName="Pedir Asesoramiento" value="confirmar" />
        </div>
    );
}

export default Asesoramiento;