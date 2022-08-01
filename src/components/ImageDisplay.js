import images from './Data'
function ImageDisplay(){


    
        const randomImage =
          images[Math.floor(Math.random() * images.length)];
        console.log(randomImage.img, 'img');

    return(
        <div>
            <img src={randomImage}/>

        </div>
    )

}

export default ImageDisplay