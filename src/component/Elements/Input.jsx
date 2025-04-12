import { CiSearch } from "react-icons/ci";

const Input = ({ type, value, placeholder, getValue, inputStyle, containerStyle }) => {
    function passValue(e) {
        const value = e.target.value;
        console.log(value)
        getValue(value)
    }

    return (
        <div className={`${containerStyle || "flex items-center gap-2 border rounded-2xl p-1 px-2 bg-stone-200"}`}>
            <span>
                <CiSearch />
            </span>
            <input
                className={`${inputStyle} border-none outline-none`}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={passValue}
            />
        </div>
    )
}


export default Input