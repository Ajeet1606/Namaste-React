
const InputControl = (props) => {
    return (
        <div className="flex flex-col w-full m-2">
            { props.label && <label className="text-xl font-Arvo my-1">{props.label}</label> }
            <input className="rounded border border-red-400 h-10 font-Arvo my-1 p-1" {...props} required/>
        </div>
    )
}

export default InputControl;