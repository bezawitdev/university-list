import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import UniversityList from './components/UniversityList';
import Header from './components/Header';
import Display from './components/Display'
import NavigationBar from './components/NavigationBar';
import Description from './components/Description';
import AboutCountry from './components/AboutCountry';
import ImageDisplay from './components/ImageDisplay';

function Layout() {

const [state, setState] = useState([]);
const [location, setLocation] = useState("");
const [name, setName] = useState("")

const getInput = (event) => setLocation(event.target.value)


 
  const url = `http://universities.hipolabs.com/search?name=university&country=${location}`
console.log(state, 'testfirst')
  // const singleRender = async() => {



  //   async function singleRender(){
  // state.map((university) => {
  //   let item= university.name
  //   console.log(item, 'item')
  //   return(
     
  //   <UniversityList uName={item}/>
  //  )

      
  //   })
  // }


  // useEffect(async() => {
  //    singleRender()
  // },[])

  const getUniversities = async (event) => {
    try {
      await axios.get(url).then((response) => {
        setState(response.data)
        // setName(university.name)
        // console.log(response.data, 'universityList')
        
            })
              
            


    } catch (error) {
      console.log(error, 'error')
    }
    
    
  }
  console.log(state, 'state')
  
  // towCalls = e => {
  //   this.functionOne(e)
  //   this.functionTwo()
  // }

 
  return (
    <div>
      {/* <NavigationBar /> */}
    <Header 
    getInput={getInput} 
    location={location}
    getUniversities={getUniversities}
    
    
    />
   
    <div className="App">

 {     state.slice(0,9).map((item) => 
 
 <div className="list">
  <div className="list-p">
    <Display 
    item={item}
    web_pages={item.web_pages}/>
 {/* <p>{item.name}</p>

 <a>{item.web_pages}</a> */}

 {/* <p>{item.web_pages}</p> */}
 </div>
 
 </div>
 )}



      
    </div>
    <Description location={location} 
    state={state}/>
    <AboutCountry />
    <ImageDisplay />
    </div>
  );
}

export default Layout;
