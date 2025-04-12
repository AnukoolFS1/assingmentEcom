const FreshProduct = ({name, image, family, about, rating}) => {
    return (
        <article>
            <img src={image} alt={"img"} className="w-[150px] h-[150px]" />
            <h3>{name}</h3>
        </article>
    )
}

export default FreshProduct