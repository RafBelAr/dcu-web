import CourseCard from "../components/CourseCard/CourseCard";
import News from "../components/News/News";
import Title from "../components/Title/Title";

import courseImage from "../images/course-image.png";


function Home (props) {
    return (
        <div className="flex flex-col">
            <div className="text-left">
            <p className="p-3 font-bold sm:text-3xl">Mis Cursos</p>
            </div>
            <div className="flex flex-row space-x-14">
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/DCU" />
                <CourseCard courseName="Integración de aplicaciones" courseImage={courseImage} courseLink="/Cursos/IAP" />
                <CourseCard courseName="Diseño Web" courseImage={courseImage} courseLink="/Cursos/DEW" />
            </div>
            <div className="mt-10">
                <div className="text-left">
                    <p className="p-3 font-bold sm:text-3xl">Noticias</p>
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
        </div>
    );
}

export default Home;