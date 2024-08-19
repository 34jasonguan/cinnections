function Movie({item, id, handleClick}){
    const itemClass = item.stat ? " unsolved " + item.stat: ""; 

    return (
        <div className={"movie" + itemClass} onClick ={() => handleClick(id)} >
            <img src={item.img} alt="" />
        </div>
    )
}

export default Movie; 