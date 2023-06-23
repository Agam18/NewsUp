import React, {useState} from 'react'

export default function Textform() {
    const handleOn=(event)=>{
       // console.log('On Change');
        setText(event.target.value);
    }
    const r=(event)=>{
      // console.log('On Change');
       setreplace(event.target.value);
   } 
   const clear=()=>{
    setText("");
   }
   const f=(event)=>{
    // console.log('On Change');
     setfind(event.target.value);
    //  let re = new RegExp(find, "gi");
    //  let neww=text.replace(re, {{<span style=color:'red'>${find}</span>}});
    //  setText(neww);
 }
    const handleLow=()=>{
        let newText=text.toLowerCase();
        setText(newText);

    }
  //   const handleCopy = () => {
  //     var text = document.getElementById("myBox");
  //     text.select();
  //     navigator.clipboard.writeText(text.value);
  // }
    const all=()=>{
      let news=text.replace(new RegExp(find,'g'), replace);
      setText(news);
      setfind("");
      setreplace("");

    }
    const handleUp=()=>{
        //console.log('ii');
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }
    const[find,setfind]=useState('')
    const[text,setText]=useState('');
    const[replace,setreplace]=useState('');
  return (
    <div>
    
<div className="mb-4 container" >
  
  <b><h1><center className="form-label my-3" >Enter Text</center></h1></b>
<textarea className="form-control rounded-2 border border-3 border border-primary-subtle" onChange={handleOn} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
<center>
<button className='my-4 btn btn-dark mx-2' onClick={handleUp}> Convert To Uppercase</button>
<button className='my-4 btn btn-dark mx-2' onClick={handleLow}> Convert To Lowercase</button>
{/* <button className="btn btn-dark mx-1" onClick={handleCopy}>Copy Text</button> */}
<button className='my-4 btn btn-dark mx-2' onClick={clear}> Clear All</button>
<button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
</center>
</div>

<div class="row">
  <div class="col-sm-6">
    <div class="card text-center" style={{height: '14rem'}}>
    <div class="card-header bg-dark text-white">TEXT SUMMARY</div>
      <div class="card-body my-3">

        <p>Words : {text.split(" ").filter((element)=>{return element.length!==0}).length}<br/>
        Characters : {text.length}<br/>
        Sentences : {text.split(".").length-1}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6" style={{height: '15.5rem'}}>
    <div class="card ">
    <div class="card-header bg-dark text-white text-center">FIND  AND REPLACE</div>
      <div class="card-body">
      
        <form>
        
        <div class="form-group row my-2 ">
                
                <div class="col-sm-10 ">
                <input type="text" class="form-control border border-2 border border-primary-subtle" id="inputPassword" placeholder="Find" value={find} onChange={f}/>
                </div>
            </div>
            <div class="form-group row my-2">
                
                <div class="col-sm-10">
                <input type="text" class="form-control border border-2 border border-primary-subtle" id="inputPassword" value={replace} placeholder="Replace" onChange={r}/>
                </div>
            </div>
            
        </form>
        <button type="submit" class="btn btn-dark " onClick={all} >Replace All</button>
        
      </div>
    </div>
  </div>
</div>
{/* <div class="card-deck">
    
    <div className=" card text-center" style={{width: '18rem'}}>
        <div class="card-header bg-dark text-white">TEXT SUMMARY</div>
            <div class="card-body">
            
                <p>Words : {text.split(" ").length}<br/>
                Characters : {text.length}</p>
            </div>
    
    
    </div>
    <div class="card" style={{width: '18rem'}}>
    <div class="card-header bg-dark text-white">TEXT SUMMARY</div>
    <div class="card-body">
      
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    </div> */}
</div>
  )
}
