
function Header(props){
    return(
       
        <div className="Header">
            <input type="text"
      onChange={props.getInput} 
      value={props.location}/>
      <button onClick={props.getUniversities}>Go</button>
        </div>
       
       
    )
}
  
export default Header;