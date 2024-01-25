function News (props) {
    let detail = "flex flex-row w-full justify-end";
    let border = "w-full p-4 pr-6 flex flex-col border-solid border-b-2 border-gray-900 m-3";
    if (props.noDetail === "true") {
        detail = "hidden"
    }

    if (props.noBorder === "true") {
        border = "w-full p-4 pr-6 flex flex-col m-3"
    }

    return (
        <div className={border}>
            <div className="flex flex-row justify-between lg:pr-11">
                <p className="font-semibold">{props.titleName}</p>
                <p className="mb-2 text-xs text-gray-500 font-light text-right">{props.date}</p>
                
            </div>
            <p className="p-1 mb-4">
                {props.summary}
            </p>
        
            <div className={detail}>
                <a href={props.link} className="text-xs text-end lg:pr-10 text-blue-600 font-medium underline">Detalles...</a>
            </div>
            
        </div>
    );
}

export default News;