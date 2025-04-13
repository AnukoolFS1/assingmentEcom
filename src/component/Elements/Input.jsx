import { CiSearch } from "react-icons/ci";

const Input = ({ type, value, placeholder, getValue, inputStyle, containerStyle }) => {
    function passValue(e) {
        const value = e.target.value;
        console.log(value)
        getValue(value)
    }

    return (
        <div className={`${containerStyle || "flex items-center gap-2 border border-stone-300 rounded-2xl p-1 px-2 bg-stone-200"}`}>
            <span>
                <CiSearch />
            </span>
            <input
                className={`${inputStyle} w-full border-none outline-none shrink-1 py-1`}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={passValue}
            />
        </div>
    )
}


export default Input