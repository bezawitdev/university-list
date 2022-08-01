function AboutCountry(props) {
    console.log(props.desc)
    return(
        <div>
           
           { props.desc&&
          
            <div className="desc-readmore">  
            
             <img src={props.desc[0].flags.png}></img>             
            <p>Capital City: {props.desc[0].capital[0]}</p>
            {/* <p>Continent:{props.desc[0].continents[0]}</p>          */}
            <span>Continent: {props.desc[0].subregion}, </span>
            <span>{props.desc[0].region}</span>
            <p>TimeZone: {props.desc[0].timezones}</p>
           <p>Google Map: <a href={props.desc[0].maps.googleMaps}>{props.desc[0].maps.googleMaps}</a> </p>
            {/* <p>{props.desc[0].maps.googleMaps}</p> */}

            {/* <p>{props.desc.name.nativeName.eng.official}</p> */}
            
            </div>
}
        </div>
    )
}

export default AboutCountry;