import Title from "../components/Title/Title";
import News from "../components/News/News";

// Problema de cors
async function getNews () {
    let url = 'https://pedvalar.webs.upv.es/iap/rest/gva/noticias'

}

function Notificaciones () {
    getNews();
    return (
        <div className="flex flex-col p-3">
            <Title  titleName="Notificaciones" />
            <br />
            <News   date="2025-02-01" 
                    link="#" 
                    titleName="Hemos llegado a los 11K de estudiantes!" 
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
            <News   date="2022-02-01" 
                    link="#" 
                    titleName="Notificación" 
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
            <News   date="2022-03-01" 
                    link="#" 
                    titleName="Clase de prueba para tus amigos" 
                    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
        </div>
    );
}

export default Notificaciones;