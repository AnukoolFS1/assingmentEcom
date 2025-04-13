import Categories from "../UI/Categories"
import FreshOffer from "../UI/FreshOffer"
import Header from "../UI/Header"

const Dashboard = () => {

    return (
        <section className="p-[clamp(4px,2vw,20px)] flex flex-col gap-8 ">
            <Header />
            <FreshOffer />
            <Categories />
        </section>
    )
}

export default Dashboard