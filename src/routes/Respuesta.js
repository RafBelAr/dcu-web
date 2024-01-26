import { generatePath, useParams } from "react-router-dom";
import News from "../components/News/News";
import Title from "../components/Title/Title";
import ArrowBackIcon from "../images/icons/arrow_back.svg";
import plusIcon from "../images/icons/plus-icon.svg";
import { ButtonStyled } from "../components/ButtonStyled/ButtonStyled";
import { message } from "antd";

function Respuesta () {
    const { id } = useParams();
    return ( 
        <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-center sm:justify-start">
                    
                <a className="self-center" href="/Foro" >
                    <img src={ArrowBackIcon} alt="Arrow back icon" className="pt-2 sm:pt-4"/>
                </a>
            
                <Title titleName="Pregunta" />
                </div>
                <div className="flex flex-row space-x-14">
                    <textarea className="min-w-72 border-solid border p-2 border-gray-200 sm:ml-10 mt-5 rounded-md w-[30%] resize-none h-28" type="textbox" placeholder="Tu Pregunta*" />
                    <div  className="self-end">
                        <ButtonStyled onClick={() => message.success("Pregunta realizada")} buttonName="Preguntar" />
                    </div>
                </div>
            <div>
                <br></br>
            <News titleName="Buenas, tengo una consulta sobre el último ejercicio propuesto en clase. Cómo se resuelve?" 
                date="17 de Agosto"
                link="/Foro/1"
                noDetail="true"
                summary="Francisco Pacheco" 
                />
                <News titleName="No lo se" 
                date="17 de Agosto"
                link="/Foro/1"
                noDetail="true"
                summary="Pacheco Pacheco" 
                />
                <News titleName="Buenas, tengo una consulta sobre el último ejercicio propuesto en clase. Cómo se resuelve?" 
                date="17 de Agosto"
                link="/Foro/1"
                noDetail="true"
                summary="Francisco Pacheco"
                />

            </div>
        </div>
    )
}

export default Respuesta;