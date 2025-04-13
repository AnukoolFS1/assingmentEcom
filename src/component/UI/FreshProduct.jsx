const FreshProduct = ({ name, image, family, about, rating, index }) => {
    const isEven = index % 2 === 0
    return (
        <article
            className={`shrink-0 w-[clamp(13rem,25vw,18rem)] min-h-[20rem] shadow-xl/2 flex flex-col justify-start rounded-xl ${isEven ? "bg-indigo-300" : "bg-pink-200"
                }`}
        >
            <div className="border border-stone-200 rounded-[10px_10px_0px_0px] overflow-hidden">
                <img src={image} alt={"img"} className="w-full " />
            </div>
            <div className="p-4">
                <h4 className="text-[12px]">{family}</h4>
                <h3 className="">{name}</h3>
                <p className="text-[12px]">{about}</p>
            </div>
        </article>
    )
}

export default FreshProduct