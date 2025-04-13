import { useState } from "react"
import { capitalize } from "../../app/capitalize"
import { BiXCircle } from "react-icons/bi"

const Categories = () => {
    const categories = ["TREES", "PLANTS", "SEEDS"]
    const [category, setCategory] = useState("")

    return (
        <section className=" flex flex-col gap-2">
            <h3 className="font-[700] text-stone-100">Categories</h3>
            <div className="flex gap-[clamp(2px,3vw,40px)] items-center pl-2 overflow-x-scroll customscroller">

                {
                    categories.map(e => {
                        return (
                            <div key={e}
                                onClick={() => setCategory(e)}
                                className={`border border-[2px] p-1 px-3 cursor-pointer rounded-lg ${e === category ? "border-stone-100 text-stone-100" : "border-stone-500 text-stone-400"}`}>
                                {capitalize(e)}
                            </div>
                        )
                    })
                }
                {
                    category &&
                    <div className="cursor-pointer text-stone-100  p-1 px-3 flex items-center gap-1 border rounded-lg" onClick={() => setCategory("")}>Clear <BiXCircle /></div>
                }
            </div>
        </section>
    )
}

export default Categories