function Calificaciones () {
    return (
        <div className="p-12 flex flex-col">
            <p className="font-bold text-2xl">
                Pendientes
            </p>
            <div className="mt-6 ml-3">
                <p className="text-gray-500 font-light">
                    28 de Agosto
                </p>
                <div className="flex flex-row justify-between lg:w-[40%]">
                    <p className="font-light">
                        Prueba de Álgebra 1
                    </p>
                    <p>
                        -/10
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
                    <p>
                        -/10
                    </p>
                </div>
            </div>

            <p className="font-bold text-2xl mt-10">
                Realizadas
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
        </div>
    );
}

export default Calificaciones;