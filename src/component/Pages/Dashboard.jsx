import FreshOffer from "../UI/FreshOffer"
import Header from "../UI/Header"

const Dashboard = () => {

    return (
        <section className="p-7 flex flex-col gap-4">
            <Header />
            <FreshOffer />
        </section>
    )
}

export default Dashboard