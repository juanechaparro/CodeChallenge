import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';


let inputText;



function transpose (array){
  var transposed=[];
  for(let i = 0; i< array.length; i++ ){
    for(let j = 0; j< array[i].length; j++ ){
      let character =array[i].slice(j,j+1)
      if(i === 0)
      {
        transposed.push(character);
      }
      else if( i > 0){
        transposed[j] = transposed[j] +character;
      }
    
  }
}
return transposed;
}
class InputChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
    outputArray:[] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
    inputText = this.state.value;
    console.log( inputText,inputText.length );
    // inputText = inputText.replace(/\n/g, "{ <br />}");
    var lines = inputText.split(/\n/g)
    console.log("transposed", transpose(lines));
    console.log("lineas:", lines);
    this.setState({outputArray: transpose(lines)}) ;
  }

    render(){
      return (

        <div  >
          <h2>Challenge 2</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>
            Enter the matrix you want to transpose : 
              </label>
              <textarea className="form-control"  type="text" value={this.state.value} onChange={this.handleChange} />
            
            </div>
            <input type="submit" value="Transpose" />
          </form>
          <br />
          <br />
          <div className="card" style ={{width :"18rem", alignItems: "center"}}>
          
          {this.state.outputArray.map((line)=>{
          return ( <p key= {line.id}>
            {line} <br/> </p> )
        })}
        <div className="card-body">
        <h5 className="card-title">Transposed</h5>
        </div>
          </div>
       
       
        
         </div>
      );
    }
  
}
  
  
  


export default InputChallenge
