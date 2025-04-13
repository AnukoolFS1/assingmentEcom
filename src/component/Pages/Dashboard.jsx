import Categories from "../UI/Categories"
import FreshOffer from "../UI/FreshOffer"
import Header from "../UI/Header"
import Products from "../UI/Products"

const Dashboard = () => {

    return (
        <section className="p-[clamp(4px,2vw,20px)] flex flex-col gap-8 ">
            <Header />
            <FreshOffer />
            <Categories />
            <Products />
        </section>
    )
}

export default Dashboard