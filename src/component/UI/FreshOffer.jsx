import FreshProduct from "./FreshProduct"
import freshProducts from '../../assets/fresh-products.json'

const FreshOffer = () => {
    // console.log(freshProducts)

    return (
        <section>

            <h3 className="mx-4 font-[700]">Recent Offers</h3>
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
        </section>
    )
}


export default FreshOffer