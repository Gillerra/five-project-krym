import { useState } from 'react';
import { data } from './data';
import './App.css';


function List() {

    const [locations, setLocations] = useState(data);

    const [showText, setShowText] = useState(false);

    const removeLocations = (id) => {
    let newLocations = locations.filter((location) => location.id !== id);
    setLocations(newLocations)
    }

    const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
    }

    return (
    <div>

    <div className="container">
    <h2>Список топ {locations.length} красивых мест!</h2>  
    </div>

    {locations.map((item => {
    const { id, locality, description, image, showMore } = item;

    return(
    <div key={id}>
    <div className="container">
        <h3>{id}. {locality}</h3>  
    </div>

    <div className="container">
    <img src={image} width='500px' alt='Krym' />
    </div>

    <div className="container">
    <p> {showMore ? description : description.substring(0,70) + "..."}
    <button onClick={() => showTextClick(item)}>{showMore ? "Свернуть текст" : "Развернуть текст"}</button>
    </p>  
    </div>

    <div className="container">
    <button className='btn' onClick={() => removeLocations(id)}>Уже были, удалить</button> 
    </div>

    </div>)
    }))}

    <div className="container">
    <button className='btn delete' onClick={() => setLocations([])}>Удалить все</button> 
    </div>

    </div>
)
}

export default List;

