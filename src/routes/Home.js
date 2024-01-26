import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard/CourseCard";
import News from "../components/News/News";

import courseImage from "../images/course-image.png";

/*

{respo.map(nw => (
                    c))
                }

*/

async function getNews () {
    
    const response = await fetch ("/iap/rest/gva/noticias");
    const n = await response.json();
    
    return n;
}


function Home (props) {
    const n = getNews()
    let t = [];
    n.then(data => data.map((k, v) => t.push(k)))
    console.log(t)
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
                {
                    t.map ((k) => <p>k</p>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Home;