import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



  
 
let fiveDiscounts =0 ;
let fourDiscounts= 0  ;
let threeDiscounts = 0;
let twoDiscounts= 0 ;
let totalCost= 0 ;
let  oneCost =0;
function basketCost(basket) {
  
  let ones = 0;
  let twos =0;
  let threes =0;
  let fours =0;
  let fives =0;
  let differentBooks =0;
 
  for( let i = 0; i < basket.length ; i++){
    
      if (basket[i] === 1){
          ones ++;
      }
      else if (basket[i] === 2){
          twos ++;
      }
      else if (basket[i]=== 3){
          threes ++;
      }
      else if(basket[i]=== 4){
          fours ++;
      }
      else if (basket[i]===5){
          fives ++;
      }
      
  }
  let basketNumbers = [ones, twos, threes, fours, fives];
  console.log( basketNumbers);
  
  basketNumbers.forEach(element => {
     if (element >= 1){
         differentBooks ++;
     }
 });
 
  if (differentBooks === 5){
     fiveDiscounts ++ ;
     for(let i = 1; i <= 5 ; i++){
       if(basket.indexOf(i)>=0){
        basket.splice(basket.indexOf(i),1)
       }
     
     } 
  basketCost(basket);
 }
 
 else if (differentBooks === 4 ){
      fourDiscounts ++;
      
      for(let i = 1; i <= 5 ; i++){
        if(basket.indexOf(i)>=0){
         basket.splice(basket.indexOf(i),1)
        }};
     basketCost(basket);
  }
  else if (differentBooks === 3 ){
     threeDiscounts ++;
     for(let i = 1; i <= 5 ; i++){
      if(basket.indexOf(i)>=0){
       basket.splice(basket.indexOf(i),1)
      }};
 
    basketCost(basket);
 }
 else if (differentBooks === 2 ){
     twoDiscounts ++;
     for(let i = 1; i <= 5 ; i++){
      if(basket.indexOf(i)>=0){
       basket.splice(basket.indexOf(i),1)
      }};
 
    basketCost(basket);
 }
 else if ( differentBooks === 1){
     basketNumbers.forEach(element => {
         if (element >= 1){
             oneCost = (8*element);
         }
     
     });
 }

 let discountAdjustment =  0;
 function adjustment (){
  if ( fiveDiscounts >= 1 && threeDiscounts >= 1){
    if( fiveDiscounts >= threeDiscounts){
      discountAdjustment = threeDiscounts;
    }
    else if ( fiveDiscounts < threeDiscounts){
      discountAdjustment = fiveDiscounts;
    }
   
     }
 }
 adjustment ();
//  Math.abs(fiveDiscounts - threeDiscounts)

 
 totalCost =( (fiveDiscounts * (8 * 0.75 *5)) + (fourDiscounts * (8*0.80 * 4)) +(threeDiscounts * (8*0.90 * 3) )+ (twoDiscounts * (8*0.95 * 2)+ oneCost) - discountAdjustment* 0.4);
  return totalCost;
 
 }
//  console.log( "costo", basketCost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1]));

// challenge 1 up
// render in html down
let inputText ;
 class InputChallenge1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
      outputCost:0 };
  
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

      var basketProp = inputText.split(",")
      basketProp=  basketProp.map(element => {
        return parseInt(element)
        
    });
     
      this.setState({outputCost:basketCost(basketProp)}) ;
    }
  
      render(){
        return (
          <div >
              <h2>Challenge 1</h2>
              <form onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label>
                Enter the basket of books, split by "," : 
                </label>
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
             
              </div>
              <input type="submit" value="submit" />
            </form>
            <br />
            <br />
            <div className="card" style ={{width :"18rem", alignItems: "center"}}>
          {this.state.outputCost}
          <div className="card-body">
        <h5 className="card-title">Total cost</h5>
        </div>
          </div>
           </div>
        );
      }
    
  }
    
    
    
  
  
  export default InputChallenge1
  