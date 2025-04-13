import FreshProduct from "./FreshProduct"
import freshProducts from '../../assets/fresh-products.json'

const FreshOffer = () => {
    // console.log(freshProducts)

    return (
        <section className="p-2 flex overflow-x-scroll gap-10 customscroller">
            {
                freshProducts?.map((product, index) => {
                    return (
                        <FreshProduct
                            key={product.name + index}
                            index={index}
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