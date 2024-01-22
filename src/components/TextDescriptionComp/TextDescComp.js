function TextDescComp (props) {
    return (
        <div className="flex flex-col my-5 sm:w-[90%] p-4 sm:p-0">
            <p className="font-bold">{props.titleName}</p>
            <p className="mt-1 font-light text-sm" >{props.descriptionName}</p>
        </div>
    )
}

export default TextDescComp;