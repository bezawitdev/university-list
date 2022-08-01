import images from './Data'
function ImageDisplay(){


    
        const randomImage =
          images[Math.floor(Math.random() * images.length)];
        console.log(randomImage, 'img');

    return(
        <div>
            <img src={randomImage}></img>

        </div>
    )

}

export default ImageDisplay