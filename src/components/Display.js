function Display(props){
    return(
        <div>
        <div>
<p>{props.item.name}</p>

 <a href={props.web_pages}>{props.web_pages}</a> 

         </div>
          {/* {props? <p>Read More about</p>:null} */}
          </div>
    )
}

export default Display;