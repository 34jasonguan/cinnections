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
    ])

    return (
        <div className="container">
            { items.map((item, index) => (
                <Movie key = {index} item = {item} />
            )) }
        </div>
    )
}

export default Boxes; 