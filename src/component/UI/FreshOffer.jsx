import FreshProduct from "./FreshProduct"
import freshProducts from '../../assets/fresh-products.json'

const FreshOffer = () => {
    // console.log(freshProducts)

    return (
        <section className="border p-2 flex">
            {
                freshProducts?.map((product, index) => {
                    return (
                        <FreshProduct
                            key={product.name + index}
                            name={product.name}
                            image={product.imageTree}
                            family={product.treeFamily}
                            about={product.about}
                            rating={product.rating}
                        />
                    )
                })
            }
        </section>
    )
}


export default FreshOffer