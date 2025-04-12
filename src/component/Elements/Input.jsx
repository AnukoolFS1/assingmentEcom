const Input = ({ type, value = null, placeholder, getValue }) => {
    function passValue(e) {
        const value = e.target.value;
        getValue(value)
    }

    return (
        <div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onClick={passValue}
            />
        </div>
    )
}


export default Input