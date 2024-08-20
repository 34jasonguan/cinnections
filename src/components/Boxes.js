import { useState } from "react";
import Movie from "./Movie"; 

function Boxes(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/dune.png', stat: "" },
        { id: 1, img: '/img/prisoners.png', stat: "" },
        { id: 1, img: '/img/incendies.png', stat: "" },
        { id: 1, img: '/img/blade-runner-2049.png', stat: "" },
        { id: 2, img: '/img/lalaland.png', stat: "" },
        { id: 2, img: '/img/moonlight.png', stat: "" },
        { id: 2, img: '/img/hacksaw-ridge.png', stat: "" },
        { id: 2, img: '/img/manchester.png', stat: "" },
        { id: 3, img: '/img/big-short.jpg', stat: "" },
        { id: 3, img: '/img/dark-knight.jpg', stat: "" },
        { id: 3, img: '/img/ford-ferrari.jpg', stat: "" },
        { id: 3, img: '/img/thor.jpg', stat: "" },
        { id: 4, img: '/img/it.jpg', stat: "" },
        { id: 4, img: '/img/shining.jpg', stat: "" },
        { id: 4, img: '/img/dark-tower.jpg', stat: "" },
        { id: 4, img: '/img/green-mile.jpg', stat: "" }
    ]//.sort(() => Math.random() - 0.5) --> removed for testing purposes
)

    const [selectedMovies, setSelectedMovies] = useState([]);
    const [correctGroups, setCorrectGroups] = useState([]);
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

        if (isCorrect) {
            const assignedColor = colorMapping[firstId];
            const updatedItems = items.map((item, index) => {
                if (selectedIndexes.includes(index)) {
                    return { ...item, stat: "correct", color: assignedColor };
                }
                return item;
            });

            const correctGroup = updatedItems.filter(item => item.stat === "correct");
            const remainingItems = updatedItems.filter(item => item.stat !== "correct");
            setItems([...correctGroup, ...remainingItems]);

            setCorrectGroups([...correctGroups, selectedIndexes]);

        } else {
            alert("Incorrect! Try again.");
            // TO-DO: implement shake when answers are incorrect
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
                />
            )) }
        </div>
    )
}

export default Boxes; 