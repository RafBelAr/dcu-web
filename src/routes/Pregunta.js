import { generatePath, useParams } from "react-router-dom";
import News from "../components/News/News";
import Title from "../components/Title/Title";
import ArrowBackIcon from "../images/icons/arrow_back.svg";
import plusIcon from "../images/icons/plus-icon.svg";

function Pregunta () {
    const { id } = useParams();
    let urlRespuesta = "/Foro/".concat(id).concat("/Respuesta")
    return (
        <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-center sm:justify-start">
                    
                <a className="self-center" href="/Foro" >
                    <img src={ArrowBackIcon} alt="Arrow back icon" className="pt-2 sm:pt-4"/>
                </a>
            
                <Title titleName="Pregunta" />
                </div>

                <News titleName="Buenas, tengo una consulta sobre el último ejercicio propuesto en clase. Cómo se resuelve?" 
                date="17 de Agosto"
                link="/Foro/1"
                summary="Francisco Pacheco" 
                noDetail="true"
                noBorder="true"
                />
            

            <div className="flex flex-row justify-center sm:justify-start">
            
                <Title titleName="Respuestas" />
                <a href={urlRespuesta} className="align-middle">
                    <img src={plusIcon} alt="plus icon" className="hover:scale-110"/>
                </a>
            </div>

            <div>
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

export default Pregunta;