const ButtonStyled = (props) => {
    return (
        <div>
            <button className="w-[10%] bg-blue-400 p-3 text-white font-semibold text-lg border-none rounded-[37px] focus:ring-blue-500 focus:border-blue-500" onClick={props.onClick} type="submit" value={props.value} >{props.buttonName}</button>
        </div>
    );
}

export { ButtonStyled };