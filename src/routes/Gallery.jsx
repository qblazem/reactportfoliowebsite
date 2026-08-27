import react from 'react';
import galleryImageList from '../data/gallerydata.jsx';
import HorizontalLine from "../components/HorizontalLine.jsx";
import { useState } from 'react';
import ImagePopup from "../components/ImagePopup.jsx";



export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    function handleImageClick(image) {
        setSelectedImage(image);
        console.log(image);
    }

    return (


    <div>
            <h1 className={'heading2'}>
                Gallery Page
            </h1>
            <HorizontalLine />
            <div className={'gallery-grid'}>
                {
                    galleryImageList.map((image, index) => (
                <img key={index} className={'gallery-image'} src={image} onClick={() => handleImageClick(image) } alt={''}/>
                    ))
                }

                {/* imagepopup needs close(click/escape to close), position is messed up
                   background is not opaque
                     */}
                <ImagePopup image={selectedImage} onButtonClick />
            </div>

        </div>
    )
}