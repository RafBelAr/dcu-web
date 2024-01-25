import News from "../components/News/News";
import Title from "../components/Title/Title";
import ArrowBackIcon from "../images/icons/arrow_back.svg"



function Foro () {
    return (
        <div className="p-3 flex flex-col">
            <div className="flex flex-row justify-center sm:justify-start">
                    
                <a className="self-center" href="/Cursos" >
                    <img src={ArrowBackIcon} alt="Arrow back icon" className="pt-2 sm:pt-4"/>
                </a>
            
                <Title titleName="Preguntas" />
            </div>

            <div>
                <News titleName="Buenas, tengo una consulta sobre el último ejercicio propuesto en clase. Cómo se resuelve?" 
                date="17 de Agosto"
                link="/Foro/1"
                summary="Francisco Pacheco" />

                <News titleName="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ..." 
                date="17 de Agosto"
                link="/Foro/2"
                summary="Francisco Pacheco" />

                <News titleName="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ..." 
                date="17 de Agosto"
                link="/Foro/3"
                summary="Francisco Pacheco" />

                <News titleName="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ..." 
                date="17 de Agosto"
                summary="Francisco Pacheco" 
                link="/Foro/4"
                />

            </div>
        </div>
    );
}

export default Foro;