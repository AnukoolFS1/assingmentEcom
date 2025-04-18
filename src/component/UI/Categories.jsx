import { useState } from "react"
import { capitalize } from "../../app/capitalize"
import { BiXCircle } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { changeCategory } from "../../app/projectionSlice"

const Categories = () => {
    const categories = ["TREE", "PLANT", "SEEDS"]
    const dispatch = useDispatch()
    const category = useSelector(state => state.projection.category)

    const setCategory = (e) => {
        dispatch(changeCategory({category: e}))
    }
    return (
        <section className=" flex flex-col gap-2">
            <h3 className="font-[700] text-stone-800">Categories</h3>
            <div className="flex gap-[clamp(2px,3vw,40px)] items-center pl-2 overflow-x-scroll customscroller">
                {
                    categories.map(e => {
                        return (
                            <div key={e}
                                onClick={() => setCategory(e)}
                                className={`border border-[2px] p-1 px-3 cursor-pointer rounded-lg ${e === category ? "border-stone-800 text-stone-800" : "border-stone-400 text-stone-500"}`}>
                                {capitalize(e)}
                            </div>
                        )
                    })
                }
                {
                    category &&
                    <div className="cursor-pointer text-stone-800 p-1 px-3 flex items-center gap-1 border border-2 rounded-lg" onClick={() => setCategory("")}>Clear <BiXCircle /></div>
                }
            </div>
        </section>
    )
}

export default Categories