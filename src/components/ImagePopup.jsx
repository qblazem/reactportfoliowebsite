import react from 'react';
import Gallery from "../routes/Gallery.jsx";

export default function ImagePopup(props) {
    console.log(props.image)

    return (
        <div className={'enlarged-image-container'}>
            <img src={props.image} className = {'enlarged-image'}/>

        </div>

    )
}