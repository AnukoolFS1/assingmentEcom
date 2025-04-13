// library
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// icons
import { BiHeart } from "react-icons/bi";
import { FaMixcloud, FaStar } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
// self module
import priceInCurrency from "../../app/currency";
import { changeCurrentProduct } from "../../app/currentProduct";


const ProductCard = ({ name, image1, image2, family, rating, amount, id, about, discount, boughts, age }) => {
    const navigate = useNavigate()
    const currency = useSelector(state => state.projection.currency)
    const dispatch = useDispatch()


    function updateProduct() {
        dispatch(changeCurrentProduct({ name, image1, image2, family, rating, amount, id, about, discount, boughts, age }))
        navigate(`/product/${id}`)
    }

    return (
        <article
            className="w-[clamp(9rem,45vw,20rem)] sm:w-[clamp(9rem,30vw,15rem)] relative flex flex-col gap-2 shadow-xl bg-stone-200 rounded-lg py-4 pt-0 overflow-hidden"
        >
            <div className="absolute h-[30%] w-[30%] right-0 top-0 bg-gradient-to-tr from-transparent via-black/0 to-black/70 via-60%"></div>

            <span className="self-end mr-2 absolute z-20 top-2 text-white text-[1.2rem]"><BiHeart className="cursor-pointer" /></span>
            <img src={image1} alt={'img'} className=" aspect-[4/4] object-center object-cover" />
            <div className="px-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2 cursor-pointer" onClick={() => updateProduct({})}>
                    <div className="sm:text-sm text-xs flex justify-between">
                        <p className="">{family}</p>
                        <span className="flex gap-1"><span className=""><FaStar className="fill-yellow-400" /></span> {rating}</span>
                    </div>
                    <h3 className="text-lg font-[600] text-[clamp(1rem,1vh,2rem)]">{name}</h3>
                </div>
                <div className="bg-stone-300 rounded-xl p-1 px-4 flex justify-center items-center gap-2 w-fit self-center">
                    <p className="text-[clamp(.91rem,1vw,1rem)]">{priceInCurrency(amount, currency)}</p>
                    <span className="cursor-pointer"><IoIosAddCircle className=" w-[clamp(1.4rem,1.8vw,2rem)] h-[clamp(1.4rem,1.8vw,2rem)]" /></span>
                </div>
            </div>
        </article>
    )
}

export default ProductCard