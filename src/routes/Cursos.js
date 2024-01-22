import Title from "../components/Title/Title";
import CourseCard from "../components/CourseCard/CourseCard";

import courseImage from "../images/course-image.png";

let hiddenVal = false;

function setHiddenFalse () {
    document.getElementById("my-courses").className = "hover:cursor-pointer text-gray-400 hover:text-gray-600";
    document.getElementById("inscribir").className = "hover:cursor-pointer";
    
    document.getElementById("course-div").style = "";
    document.getElementById("my-course-div").className = "hidden";
}  

function setHiddenTrue () {
    document.getElementById("my-courses").className = "hover:cursor-pointer";
    document.getElementById("inscribir").className = "hover:cursor-pointer text-gray-400 hover:text-gray-600";

    document.getElementById("my-course-div").className = "mt-2 grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-4 grid";
    document.getElementById("course-div").style = "display: none";
}

function Cursos () {
    
    return (
        <div className="p-3">
            <div className="flex flex-row justify-center">
                <div id="inscribir" onClick={setHiddenFalse} className="hover:cursor-pointer">
                    <Title titleName="Inscribirme" />
                </div>
                <div className="self-center h-9 border border-solid border-r-black"></div>
                <div id="my-courses" onClick={setHiddenTrue} className="hover:cursor-pointer text-gray-400 hover:text-gray-600">
                    <Title titleName="Mis Cursos" />
                </div>
            </div>

            <div id="course-div" className="mt-2 grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-4" >
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
            </div>

            <div id="my-course-div" className="mt-2 grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-4 hidden" >
                <CourseCard courseName="Desarrollo Centrado en el Usuario" courseImage={courseImage} courseLink="/Cursos/Desarollo%20Centrado%20en%20el%20Usuario"/>
                <CourseCard courseName="Integración de aplicaciones" courseImage={courseImage} courseLink="/Cursos/Integración%20de%20Aplicaciones"/>
                <CourseCard courseName="Diseño Web" courseImage={courseImage} courseLink="/Cursos/Diseño%20Web"/>
            </div>
            
        </div>
    );
}

export default Cursos;