

function inscribirClickerFirst () {
    let element = document.getElementById("inscribir1")
    if (element) {
        if (element.classList.contains("text-blue-500")) {
            element.textContent = "Desinscribirme"
            element.classList = "text-red-500 font-semibold text-sm underline"
        } else {
            element.textContent = "Inscribirme"
            element.classList = "text-blue-500 font-semibold text-sm underline"
        }
    }
}

function inscribirClickerSecond () {
    let element = document.getElementById("inscribir2")
    
    if (element) {
        if (element.classList.contains("text-blue-500")) {
            element.textContent = "Desinscribirme"
            element.classList = "text-red-500 font-semibold text-sm underline"
        } else {
            element.textContent = "Inscribirme"
            element.classList = "text-blue-500 font-semibold text-sm underline"
        }
    }
}

function Pruebas () {
    return (
        <div className="p-12 flex flex-col">

            <p className="font-bold text-2xl">
                Siguientes Pruebas
            </p>
            <div className="mt-6 ml-3">
                <p className="text-gray-500 font-light">
                    28 de Agosto
                </p>
                <div className="flex flex-row justify-between lg:w-[40%]">
                    <p className="font-light">
                        Prueba de Álgebra 1
                    </p>
                    <p id="inscribir1" onClick={inscribirClickerFirst} className="text-blue-500 font-semibold text-sm underline">
                        Inscribirme
                    </p>
                </div>
            </div>
            <div className="mt-3 ml-3">
                <p className="text-gray-500 font-light">
                    27 de Agosto
                </p>
                <div className="flex flex-row justify-between lg:w-[40%]">
                    <p className="font-light">
                        Prueba de Geografia 1
                    </p>
                    <p id="inscribir2" onClick={inscribirClickerSecond} className="text-blue-500 font-semibold text-sm underline">
                        Inscribirme
                    </p>
                </div>
            </div>

            <p className="font-bold text-2xl mt-10">
                Pruebas Realizadas
            </p>
            <div className="mt-6 ml-3">
                <p className="text-gray-500 font-light">
                    10 de Agosto
                </p>
                <div className="flex flex-row justify-between lg:w-[40%]">
                    <p className="font-light">
                        Prueba de Matemáticas 1
                    </p>
                    <p>
                        8/10
                    </p>
                </div>
            </div>
            <div className="mt-3 ml-3">
                <p className="text-gray-500 font-light">
                    12 de Agosto
                </p>
                <div className="flex flex-row justify-between lg:w-[40%]">
                    <p className="font-light">
                        Prueba de Informática 1
                    </p>
                    <p>
                        10/10
                    </p>
                </div>
            </div>
            <div className="mt-3 ml-3">
                <p className="text-gray-500 font-light">
                    13 de Agosto
                </p>
                <div className="flex flex-row justify-between lg:w-[40%]">
                    <p className="font-light">
                        Prueba de Informática 2
                    </p>
                    <p>
                        10/10
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pruebas;