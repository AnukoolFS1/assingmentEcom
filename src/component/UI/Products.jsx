import products from '../../assets/data.json'
import Product from './Product'

const Products = () => {

    return (
        <section className='px-0 mx-auto xl:w-[91%] flex gap-2 sm:gap-10 items-center xl:justify-start justify-center flex-wrap md:flex-row'>
            {
                products.map((product, i) => {
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