const InputField = (props) => {
    return (
        <div className="w-full">
            <input className="border-solid border p-2 border-gray-200 rounded-md w-[30%] h-14 min-w-72" type={props.type} placeholder={props.placeholder}  />
        </div>
    );
}

export default InputField;