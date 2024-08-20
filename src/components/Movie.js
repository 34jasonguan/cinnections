function Movie({ item, id, handleClick, isSelected, isShaking }){
    return (
        <div className={`movie ${isSelected ? 'selected' : ''} ${item.stat === 'correct' ? 'correct' : ''} ${isShaking ? 'shake' : ''}`} onClick={() => handleClick(id) } style={{ backgroundColor: item.color }} >
            <img src={item.img} alt="" />
        </div>
    )
}

export default Movie; 