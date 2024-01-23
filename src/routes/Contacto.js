// Images import
import mapImage from "../images/map-image.png";
import whatsappIcon from "../images/icons/wha-icon.svg";
import facebookIcon from "../images/icons/facebook-icon.svg";
import youtubeIcon from "../images/icons/youtube-icon.svg";
import instagramIcon from "../images/icons/instagram-icon.svg";
function Contacto () {
    return (
        <div className="flex flex-col content-center p-3">
            <div className="self-center sm:w-[50%] p-3">
                <img className="min-w-36 self-center border border-solid border-blue-300" src={mapImage} alt="Map image" />
            </div>
            <br />
            <div className="sm:w-[50%] px-2 sm:self-center" >
                <div className="flex flex-row justify-between px-3 text-sm font-bold">
                    <p>Dirección</p>
                    <p>Siguenos!</p>
                </div>
                <div className="flex flex-row justify-between px-3 text-sm font-semibold mt-1">
                    <p >
                        Carrer de Francesc Bellapart, 1City, Sabadell,
                        <br />
                        Barcelona.
                    </p>
                    <div className="flex flex-row space-x-4 mt-1">
                        <a href="#">
                            <img className="hover:scale-105" src={facebookIcon} alt="Facebook icon" />
                        </a>
                        <a href="#">
                            <img className="hover:scale-105" src={instagramIcon} alt="Instagram icon" />
                        </a>
                        <a href="#">
                            <img className="hover:scale-105" src={youtubeIcon} alt="Youtube icon" />
                        </a>
                    </div>
                </div>
                <br />
                <div className="px-3 text-sm font-bold">
                    <p>
                        Teléfono
                    </p>
                </div>
                <div className="px-3 text-lg font-bold text-blue-400 flex flex-row space-x-3 mb-24">
                    <p>
                        937 16 84 76
                    </p>
                    <a href="#">
                        <img src={whatsappIcon} className="hover:scale-105" alt="whatsapp icon" />
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default Contacto;