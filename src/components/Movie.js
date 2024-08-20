function Movie({ item, id, handleClick, isSelected }){
    return (
        <div className={`movie ${isSelected ? 'selected' : ''}`} onClick={() => handleClick(id) } style={{ backgroundColor: item.color }} >
            <img src={item.img} alt="" />
        </div>
    )
}

export default Movie; 