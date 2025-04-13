import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import priceInCurrency from "../../app/currency"
import FreshOffer from "../UI/FreshOffer";
import Header from "../UI/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import Products from "../UI/Products";



const ProductPage = () => {
    const navigate = useNavigate()
    const product = useSelector(state => state.product.product)
    const currency = useSelector(state => state.projection.currency)
    const [visualProduct, setVisualProduct] = useState(JSON.parse(localStorage.getItem('product')) || {})
    if (product?.name) {
        localStorage.setItem("product", JSON.stringify(product))
    }
    const { name, image1, image2, about, rating, discount, boughts, family, amount, age } = visualProduct || {}

    useEffect(() => {
        setVisualProduct(JSON.parse(localStorage.getItem('product')))
        window.scrollTo(0, 0);
    }, [product]);


    return (
        <section className="py-6">
            <button onClick={() => navigate(-1)} className="cursor-pointer absolute text-[24px] top-4 left-6"><IoMdArrowBack /></button>
            {/* <Header /> */}
            <section className="flex flex-col  py-20 pt-10 gap-10">
                <article className="flex gap-10 px-1 sm:px-10 flex-col items-center md:flex-row">
                    <article className="grow-1 md:w-[70%] ">
                        <img src={image1} alt=""
                            className="w-full h-[clamp(10rem,70vw,50rem)] object-contain object-top"
                        />
                    </article>
                    <article className="flex md:w-[50%]  flex-col gap-4 justify-center px-4">
                        <section className="flex flex-col-reverse sm:flex-col">
                            <p className="text-[clamp(2rem,5vh,3rem)] font-[700]">{name}</p>
                            <p><span className="font-[700]">Tree Family :</span> {family}</p>
                        </section>
                        <section>
                            <p className="flex items-center gap-2"><span className="text-yellow-500"><FaStar /></span>{rating} Ratings</p>
                            <p>{boughts}+ boughts in past months</p>
                        </section>
                        <section className="flex items-start flex-col  gap-3">
                            <p className="font-[700] text-[clamp(2rem,3vh,4rem)]">{priceInCurrency(amount, currency)}</p>
                            <p className="line-through text-gray-500">{priceInCurrency((amount / (100 - discount) * 100), currency)}</p>
                            <span className="bg-lime-300 text-green-900 inline-block p-1 rounded-sm">-{discount}%</span>
                        </section>
                        <section>
                            <h4 className="font-[700]">About this product:</h4>
                            <p>
                                {about}
                            </p>
                        </section>
                    </article>
                </article>
                <article className="">
                    <FreshOffer />
                </article>
                <article className="">
                    <h3 className="mx-4 mb-4 font-[700]">Recommend For You</h3>
                    <Products
                        style={`px-0 mx-auto xl:w-[91%] flex gap-2 sm:gap-10 items-center xl:justify-start justify-center flex-wrap md:flex-row`}
                    />
                </article>
            </section>
        </section>
    )
}

export default ProductPage