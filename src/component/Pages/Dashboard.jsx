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
                style={"px-0 mx-auto xl:w-[91%] grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}
            />
            <NavigationBar />
        </section>
    )
}

export default Dashboard