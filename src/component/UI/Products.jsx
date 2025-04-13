import { useSelector } from 'react-redux'
import products from '../../assets/data.json'
import seeds from "../../assets/seeds.json"
import ProductCard from './ProductCard'

const Products = ({ style }) => {
    const category = useSelector(state => state.projection.category)

    let renderArray = products;

    switch (category) {
        case "":
            renderArray = products
            break;

        case "SEEDS":
            renderArray = seeds
            break;

        default:
            renderArray = products.filter(e => {
                return e.age === category
            })
    }

    return (
        <section className={`${style || "px-0 mx-auto xl:w-[91%] flex gap-2 sm:gap-10 items-center xl:justify-start justify-center flex-wrap md:flex-row"}`}>
            {
                renderArray.map((product, i) => {
                    return (
                        <ProductCard
                            key={product.name + i}
                            id={product.id}
                            name={product.name}
                            image1={product.imageTree}
                            image2={product.imagePlant}
                            family={product.treeFamily}
                            rating={product.rating}
                            amount={product.amount}
                            discount={product.discount}
                            age={product.age}
                            about={product.about}
                            boughts={product.boughts}
                        />
                    )
                })
            }

        </section>
    )
}

export default Products