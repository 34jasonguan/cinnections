function Movie({ item, id, handleClick, isSelected }){
    return (
        <div className={`movie ${isSelected ? 'selected' : ''}`} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Movie; 