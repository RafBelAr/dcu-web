function News (props) {
    return (
        <div className="w-full p-4 pr-6 flex flex-col border-solid border-b-2 border-gray-900">
            <p className="mb-2 text-xs text-gray-500 font-light">{props.date}</p>
            <p className="p-1 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-row w-full">
                <div className="basis-11/12"></div>
                <a href={props.link} className="text-xs text-end mr-2 text-blue-600 font-medium underline">Detalles...</a>
            </div>
        </div>
    );
}

export default News;