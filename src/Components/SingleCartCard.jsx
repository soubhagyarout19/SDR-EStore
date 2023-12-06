const SingleCartCard = ({data}) =>{
    console.log(data);
    return(
        <>
            <div className="card-main">
        <img src={data.thumbnail} alt="Product image"></img>
        <p className="card-name">{data.title}</p>
        <p>{data.brand}</p>
        <p>${data.price}/-</p>
        {/* <p className="card-desc">{data.description.substring(0,80)}</p> */}
        </div>
        </>
    )
}

export default SingleCartCard;