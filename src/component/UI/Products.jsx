import { useSelector } from 'react-redux'
import products from '../../assets/data.json'
import seeds from "../../assets/seeds.json"
import Product from './Product'

const Products = () => {
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
        <section className='px-0 mx-auto xl:w-[91%] flex gap-2 sm:gap-10 items-center xl:justify-start justify-center flex-wrap md:flex-row'>
            {
                renderArray.map((product, i) => {
                    return (
                        <Product
                            key={product.name + i}
                            name={product.name}
                            image1={product.imageTree}
                            family={product.treeFamily}
                            rating={product.rating}
                            amount={product.amount}
                        />
                    )
                })
            }

        </section>
    )
}

export default Products