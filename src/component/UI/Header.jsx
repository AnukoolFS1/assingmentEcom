import { useState } from "react"
import Input from "../Elements/Input"
import { useDispatch, useSelector } from "react-redux";
import { currencySymbol } from "../../app/currency";
import { changeCurrency } from "../../app/projectionSlice";

const Header = () => {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()
    const currency = useSelector(state => state.projection.currency)

    const getValue = (value) => {
        setSearchValue(value)
    }

    const setCurrency = () => {
        dispatch(changeCurrency({ currency: currency === "INR" ? "USD" : "INR" }))
    }

    return (
        <header className="font-semibold flex items-center justify-between pr-2">
            <h2 className="text-[clamp(20px,2vw,50px)] text-stone-100">
                Welcome back, User
            </h2>
            <div className="shrink-1 overflow-hidden w-[clamp(150px,30vw,400px)] flex gap-3">
                <Input
                    inputStyle={"text-stone-800"}
                    containerStyle={"grow-1"}
                    type={"search"}
                    value={searchValue}
                    placeholder={"search"}
                    getValue={getValue}
                />
                <button onClick={setCurrency} className="px-4 bg-sky-400 rounded-full">{currencySymbol[currency]}</button>
            </div>
        </header>
    )
}

export default Header