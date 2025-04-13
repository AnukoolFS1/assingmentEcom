import { FaWallet } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const NavigationBar = () => {
    const navs = [
        { title: "Home", icon: <FaHome className="text-[2rem]" /> },
        { title: "Wallet", icon: <FaWallet className="text-[1.7rem] translate-y-[2px]" /> },
        { title: "Order", icon: <FaShoppingCart  className="text-[2rem]"/> },
        { title: "User", icon: <FaUser className="text-[1.7rem] translate-y-[2px]" /> },
    ]

    return (
        <nav className="bg-neutral-400 fixed w-full left-0 flex justify-center bottom-0 z-50">
            <ul className="flex gap-2">
                {
                    navs.map(e => {

                        return (
                            <li key={e.title} title={e.title}
                            className="p-4 md:px-6 md:py-[6px] flex flex-col items-center justify-between hover:bg-blue-900 hover:text-white "
                            >
                                <span className=" text-blue-700 ">{e.icon}</span>
                                <p className="hidden md:block">{e.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavigationBar