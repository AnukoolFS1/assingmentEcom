import { BiHeart } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";


const Product = ({ name, image1, family, rating, amount }) => {
    const currency = useSelector(state => state.currency.currency)

    return (
        <article
            className="w-[clamp(10rem,18vw,20rem)] flex flex-col gap-2 border py-1 bg-white rounded-lg py-2 "
        >
            <span className="self-end mr-2"><BiHeart /></span>
            <img src={image1} alt={'img'} />
            <div className="px-4 flex flex-col">
                <div className="text-sm flex justify-between">
                    <p className="">{family}</p>
                    <span className="flex gap-1"><span className=""><FaStar className="fill-yellow-400" /></span> {rating}</span>
                </div>
                <h3 className="text-lg font-[600]">{name}</h3>
                <div className="bg-stone-200 rounded-xl p-1 px-4 flex justify-center gap-4 w-fit self-center">
                    <p className="text-sm">{amount} {currency}</p>
                    <span><IoIosAddCircle /></span>
                </div>
            </div>
        </article>
    )
}

export default Product