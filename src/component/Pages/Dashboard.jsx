import Categories from "../UI/Categories"
import FreshOffer from "../UI/FreshOffer"
import Header from "../UI/Header"
import NavigationBar from "../UI/NavigationBar"
import Products from "../UI/Products"

const Dashboard = () => {

    return (
        <section className="p-[clamp(4px,2vw,20px)] pb-20 flex flex-col gap-8" style={{ paddingRight: "0px" }}>
            <Header />
            <FreshOffer />
            <Categories />
            <Products
                style={"px-0 mx-auto xl:w-[91%] flex gap-2 sm:gap-10 items-center xl:justify-start justify-center flex-wrap md:flex-row"}
            />
            <NavigationBar />
        </section>
    )
}

export default Dashboard