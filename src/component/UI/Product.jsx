import { BiHeart } from "react-icons/bi"

const Product = ({ name, image1, family, rating, amount }) => {

    return (
        <article
            className="w-[clamp(10rem,18vw,20rem)] flex flex-col gap-2 border py-1 bg-white rounded-lg"
        >
            <span className="self-end mr-2"><BiHeart /></span>
            <img src={image1} alt={'img'} />
            <div className="px-2">
                <h4 className="text-xs">{family}</h4>
                <h3 className="text-md font-[400]">{name}</h3>
                <p className="text-sm">{amount}</p>
            </div>
        </article>
    )
}

export default Product