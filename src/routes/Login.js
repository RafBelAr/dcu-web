import Title from "../components/Title/Title";
import InputField from "../components/InputField/InputField";
import { ButtonStyled } from "../components/ButtonStyled/ButtonStyled";

function setCookie () {
    document.cookie = "cookie-logged=1";
}

function Login (props) {
    return (
        <div className="flex flex-col p-48 align-middle justify-center slef-center space-y-24">
            <div className="self-center w-full">
                <Title titleName="E-Cademy" />

                <div className="space-y-5 mt-14 text-center w-full">
                    <InputField className="min-w-72" type="text" placeholder="Usuario*" />
                    <InputField type="password" placeholder="Contraseña*" />
                </div>

                <div className="text-center mt-14 border-none w-full">
                    <a href="/Home">
                        <ButtonStyled buttonName="Login" onClick={setCookie} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;