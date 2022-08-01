import { useState } from 'react';
import axios from 'axios';
import AboutCountry from './AboutCountry'
function Description(props){
const location = props.location
const [desc, setDesc ]= useState('')
  const url = `https://restcountries.com/v3.1/name/${location}`
    // const url = `http://universities.hipolabs.com/search?name=university&country=${location}`
    // console.log(state, 'testfirst')




    const getDescription = async (event) => {
        try {
          await axios.get(url).then((response) => {
            setDesc(response.data)
            // setName(university.name)
            // console.log(response.data, 'universityList')
            
                })
                  
                
    
    
        } catch (error) {
          console.log(error, 'error')
        }
        
        
      }
      console.log(desc, 'desc')









    return(
        <div>
            <AboutCountry desc={desc} />
            {props.state? <button onClick={getDescription} className="btn-readmore">Read More about {location}</button>:null}
            </div>
    )
}

export default Description

