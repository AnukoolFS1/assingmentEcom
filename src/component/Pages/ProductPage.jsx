import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import priceInCurrency from "../../app/currency"


const ProductPage = () => {
    const product = useSelector(state => state.product.product)
    const currency = useSelector(state => state.projection.currency)
    const [visualProduct, setVisualProduct] = useState(JSON.parse(localStorage.getItem('product')))

    const { name, image1, image2, about, rating, discount, boughts, family, amount, age } = visualProduct || {}

    useEffect(() => {
        if (!visualProduct.name) {
            localStorage.setItem("product", JSON.stringify(product))
        }
        setVisualProduct(JSON.parse(localStorage.getItem("product")))
    }, [])

    return (
        <section className="flex">
            <article className="w-[50%]">
                <img src={image1} alt=""
                    className="w- object-contain object-top"
                />
            </article>
            <article>
                <section>
                    <p>{name}</p>
                    <p>{family}</p>
                </section>
                <section>
                    <p>{rating}</p>
                    <p>{boughts}</p>
                </section>
                <section className="flex items-center gap-3">
                    <p className="font-[700] text-[clamp(2rem,3vh,4rem)]">{priceInCurrency(amount, currency)}</p>
                    <p className="line-through text-gray-500">{priceInCurrency((amount / (100 - discount) * 100), currency)}</p>
                    <span className="bg-lime-300 text-green-900 inline-block p-1 rounded-sm">-{discount}%</span>
                </section>
            </article>
        </section>
    )
}

export default ProductPage