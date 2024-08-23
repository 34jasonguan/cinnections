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
    ]//.sort(() => Math.random() - 0.5) --> removed for testing purposes
)

    const [selectedMovies, setSelectedMovies] = useState([]);
    const [correctGroups, setCorrectGroups] = useState([]);
    const [incorrectIndexes, setIncorrectIndexes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const colors = ["#BAFFC9", "#FFFFBA", "#FFDFBA", "#FFB3BA"];

    const colorMapping = {
        1: "#BAFFC9", 
        2: "#FFFFBA", 
        3: "#FFDFBA", 
        4: "#FFB3BA"  
    };

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
        const correctItems = selectedItems.filter(item => item.id === firstId);

        if (correctItems.length === 3) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
        }

        if (isCorrect) {
            const assignedColor = colorMapping[firstId];
            const updatedItems = items.map((item, index) => {
                if (selectedIndexes.includes(index)) {
                    return { ...item, stat: "correct", color: assignedColor, shaking: false };
                }
                return item;
            });

            const correctGroup = updatedItems.filter(item => item.stat === "correct");
            const remainingItems = updatedItems.filter(item => item.stat !== "correct");
            setItems([...correctGroup, ...remainingItems]);

            setCorrectGroups([...correctGroups, selectedIndexes]);
            setIncorrectIndexes([]);
        } else {
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
                        <p>Three correct, one wrong! Try again.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Boxes; 