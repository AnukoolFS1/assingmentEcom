import products from '../../assets/data.json'
import Product from './Product'

const Products = () => {

    const product = products[0]
    return (
        <section>
            <Product
                name={product.name}
                image1={product.imageTree}
                // image2={product.imagePlant}
                family={product.treeFamily}
                rating={product.rating}
                amount={product.amount}
            />
        </section>
    )
}

export default Products