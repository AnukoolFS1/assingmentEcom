import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Entrypoint = () => {
    const navigate = useNavigate()
    const backgroundImage = 'https://images.pexels.com/photos/30081518/pexels-photo-30081518/free-photo-of-serene-greenhouse-with-lush-botanical-pathway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    return (
        <section className="h-screen w-screen p-5 bg-green-500">

            <section
                className="h-full py-10 lg:px-20 sm:px-10 px-2 custom-bg text-[white] rounded-xl flex flex-col justify-between items-center"
                style={{ backgroundImage: `linear-gradient(to bottom,#00000080,#00000060) ,url(${backgroundImage})` }}
            >
                <h1 className="text-[clamp(1.5rem,3.5vw,5rem)] mt-10 self-end text-animation-up">Plants-Care Products & Plants</h1>

                <p className="text-[clamp(.9rem,1.2vw,2rem)] text-animation-up">Nature gives you the confidence you deserve</p>

                <div className="flex flex-col justify-center gap-1">
                    <button className="bg-indigo-800 rounded-xl py-1" onClick={() => navigate('/products')}>Let's Get Started</button>
                    <p>Already have an acount? <Link to={'/products'} className="underline font-semibold">Sign In</Link></p>
                </div>
            </section>
        </section>
    )
}

export default Entrypoint