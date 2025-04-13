import { useState } from "react"
import Input from "../Elements/Input"

const Header = () => {
    const [searchValue, setSearchValue] = useState("");

    const getValue = (value) => {
        setSearchValue(value)
    }

    return (
        <header className="font-semibold flex items-center justify-between">
            <h2 className="text-[clamp(20px,2vw,50px)] text-stone-100">
                Welcome back, User
            </h2>
            <div className="shrink-1 overflow-hidden">
                <Input
                    inputStyle={"text-stone-800"}
                    containerStyle={""}
                    type={"search"}
                    value={searchValue}
                    placeholder={"search"}
                    getValue={getValue}
                />

            </div>
        </header>
    )
}

export default Header