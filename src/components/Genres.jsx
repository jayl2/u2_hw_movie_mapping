
export default function genres(props){


    let myColorVariable;
    switch(props.genres) {


      case 'Action': 
        myColorVariable = 'blue'
        break

        case 'Adventure': 
        myColorVariable = 'yellow'
        break

        case 'Fantasy': 
        myColorVariable = 'green'
        break

      default:
        myColorVariable = 'red'
    }
  
    return (
      <div>
    
        <p style={{backgroundColor: myColorVariable, color: 'purple'}} >{props.genres}</p>

      </div>
    )
}