import { generatePath, useParams } from "react-router-dom";
import Title from "../components/Title/Title";
import ArrowBackIcon from "../images/icons/arrow_back.svg";
import CourseImage from "../images/course-image.png";

import TextDescComp from "../components/TextDescriptionComp/TextDescComp";
import { ButtonStyled } from "../components/ButtonStyled/ButtonStyled";

function Curso (props) {

    const { id } = useParams();


    return (
        <div className="p-4">
            <div className="flex flex-row justify-center sm:justify-start">
                
                    <a className="self-center" href="/Cursos" >
                        <img src={ArrowBackIcon} alt="Arrow back icon" className="pt-2 sm:pt-4"/>
                    </a>
               
                <Title titleName="Curso" />
            </div>

            
            <div className="sm:w-[90%] bg-course-image bg-cover">
                <div className="bg-black w-full opacity-50 p-4">
                    <p className="text-xl w-fit text-white font-semibold pl-4">{id}</p>
                    <br />
                    <p className="text-m w-fit text-white font-normal pl-4">Prof. Facundo Martínez</p>
                </div>
            </div>

            <TextDescComp titleName="Descripción" descriptionName="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus quam sed commodo rhoncus. Mauris nec mi nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tempus id nisl et vehicula. Sed mi dui, efficitur quis accumsan sed, consectetur eget neque. Curabitur volutpat, turpis at lobortis tempor, ligula mi bibendum justo, in pellentesque metus odio at ipsum. Aliquam ullamcorper risus et laoreet tincidunt. Quisque ante urna, faucibus sed mattis quis, dapibus sit amet augue. Cras molestie suscipit faucibus. Curabitur ac finibus diam.
            " />

            <TextDescComp titleName="Horarios" descriptionName="17:30 - 19:30 de Martes a Jueves" />
            <TextDescComp titleName="Precio" descriptionName="49€ / mes" />

            <div className="flex flex-row sm:w-[90%] justify-center sm:justify-end">
                <ButtonStyled className="min-w-80" buttonName="Inscribirme" />
            </div>
        </div>
    );
}

export default Curso;