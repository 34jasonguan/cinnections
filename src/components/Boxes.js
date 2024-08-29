import { useState } from "react";
import Movie from "./Movie"; 

function Boxes(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/dune.png', stat: "", shaking: false },
        { id: 1, img: '/img/prisoners.png', stat: "", shaking: false },
        { id: 1, img: '/img/incendies.png', stat: "", shaking: false },
        { id: 1, img: '/img/blade-runner-2049.png', stat: "", shaking: false },
        { id: 2, img: '/img/lalaland.png', stat: "", shaking: false },
        { id: 2, img: '/img/moonlight.png', stat: "", shaking: false },
        { id: 2, img: '/img/hacksaw-ridge.png', stat: "", shaking: false },
        { id: 2, img: '/img/manchester.png', stat: "", shaking: false },
        { id: 3, img: '/img/big-short.jpg', stat: "", shaking: false },
        { id: 3, img: '/img/dark-knight.jpg', stat: "", shaking: false },
        { id: 3, img: '/img/ford-ferrari.jpg', stat: "", shaking: false },
        { id: 3, img: '/img/thor.jpg', stat: "", shaking: false },
        { id: 4, img: '/img/it.jpg', stat: "", shaking: false },
        { id: 4, img: '/img/shining.jpg', stat: "", shaking: false },
        { id: 4, img: '/img/dark-tower.jpg', stat: "", shaking: false },
        { id: 4, img: '/img/green-mile.jpg', stat: "", shaking: false }
    ].sort(() => Math.random() - 0.5)
)

    const [selectedMovies, setSelectedMovies] = useState([]);
    const [correctGroups, setCorrectGroups] = useState([]);
    const [incorrectIndexes, setIncorrectIndexes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const colors = ["#BAFFC9", "#FFFFBA", "#FFDFBA", "#FFB3BA"];
    const [categoryName, setCategoryName] = useState("");
    const [categoryPositions, setCategoryPositions] = useState([]);

    const colorMapping = {
        1: "#BAFFC9", 
        2: "#FFFFBA", 
        3: "#FFDFBA", 
        4: "#FFB3BA"  
    };

    const categoryMapping = {
        1: "Directed by Denis Villeneuve",
        2: "2017 Best Picture Nominees",
        3: "Starring Christian Bale",
        4: "Based on a Stephen King Novel"
    };

    const [lives, setLives] = useState(4);
    const [gameOver, setGameOver] = useState(false);

    const handleClick = (index) => {
        if (selectedMovies.includes(index)) {
            setSelectedMovies(selectedMovies.filter(movieIndex => movieIndex !== index));
        } else if (selectedMovies.length < 4) {
            const newSelectedMovies = [...selectedMovies, index];
            setSelectedMovies(newSelectedMovies);
            if (newSelectedMovies.length === 4) {
                checkSelection(newSelectedMovies);
            }
        }
    };

    const checkSelection = (selectedIndexes) => {
        const firstId = items[selectedIndexes[0]].id;
        const isCorrect = selectedIndexes.every(index => items[index].id === firstId);
        const selectedItems = selectedIndexes.map(index => items[index]);
        //const correctItems = selectedItems.filter(item => item.id === firstId);
        const ids = selectedItems.map(item => item.id);

        const uniqueIds = [...new Set(ids)];
        const idCounts = uniqueIds.map(id => ids.filter(x => x === id).length);
        const hasThreeAndOne = idCounts.includes(3) && idCounts.includes(1);

        if (hasThreeAndOne) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false); 
            }, 2000);
        }

        // if (correctItems.length === 3) {
        //     setShowPopup(true);
        //     setTimeout(() => {
        //         setShowPopup(false);
        //     }, 2000);
        // }

        if (isCorrect) {
            const assignedColor = colorMapping[firstId];
            const category = categoryMapping[firstId];
            const updatedItems = items.map((item, index) => {
                if (selectedIndexes.includes(index)) {
                    return { ...item, stat: "correct", color: assignedColor, shaking: false };
                }
                return item;
            });

            const correctGroup = updatedItems.filter(item => item.stat === "correct");
            const remainingItems = updatedItems.filter(item => item.stat !== "correct");
            setItems([...correctGroup, ...remainingItems]);

            const positionTop = 80 + (correctGroups.length * 205);
            setCategoryName(category);
            setCategoryPositions(prev => [
                ...prev,
                { categoryName: category, top: positionTop }
            ]);
            
            setCorrectGroups([...correctGroups, selectedIndexes]);
            setIncorrectIndexes([]);

        } else {
            setLives(lives - 1);
            if (lives === 1) {
                setGameOver(true);
            }
            
            const updatedItems = items.map((item, index) => {
                if (selectedIndexes.includes(index)) {
                    return { ...item, shaking: true };
                }
                return item;
            });

            setItems(updatedItems);
            setIncorrectIndexes(selectedIndexes);

            setTimeout(() => {
                const resetItems = items.map((item, index) => {
                    if (selectedIndexes.includes(index)) {
                        return { ...item, shaking: false };
                    }
                    return item;
                });
                setItems(resetItems);
            }, 500); 
        }
        setSelectedMovies([]);
    };

    return (
        <div className="container">
            { items.map((item, index) => (
                <Movie 
                    key = {index} 
                    item = {item} 
                    id = {index} 
                    handleClick = {handleClick}
                    isSelected={selectedMovies.includes(index)} 
                    isShaking={item.shaking}
                />
            )) }
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>One away...</p>
                    </div>
                </div>
            )}
            {gameOver && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Game Over!</p>
                    </div>
                </div>
            )}
            {categoryPositions.map((group, index) => (
                <div
                    key={index}
                    className="category-name"
                    style={{
                        position: 'absolute',
                        top: `${group.top}px`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'white',
                        padding: '5px',
                        borderRadius: '5px',
                        border: '1px solid gray',
                        zIndex: 100,
                        textAlign: 'center',
                        fontSize: '1em',
                        fontWeight: 'bold',
                        width: 'auto'
                    }}
                >
                    <p>{group.categoryName}</p>
                </div>
            ))}
            <a href="https://github.com/34jasonguan" target="_blank" rel="noopener noreferrer" className="github-link">
                <img src="/img/github.png" alt="GitHub Logo" className="github-logo" />
            </a>
            <div className="life-tracker-wrapper">
                <div className="life-tracker">
                    <span className="lives-text">Lives Remaining: </span>
                    <div className="lives">
                        {[...Array(4)].map((_, index) => (
                            <div 
                                key={index} 
                                className={`life ${index < lives ? 'active' : 'lost'}`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxes; 