import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react' 
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';

function App() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);
  const [output,setOutput]=useState(null);

  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
    // console.warn(val.target.value)
  }

  async function summarize(){
    let response = await axios.post("/summarize", {
      text: data
    })
    setOutput(response.data)
    // console.log(response.data)
  }
  
  return (
    <div className="App" style={{backgroundColor: '#917ef3', fontFamily: 'PlayfairWght', padding: "10px", margin: "5%"}}> 
      <div class="row">
        <div class="col-sm" style={{width: "90%"}}>
          <h1 style={{fontSize: "500%", textAlign: "left", width: "200%"}}>Free Your Eyes</h1>
        </div>
        
        <div class="col-sm">
          <h4 style={{float: "right", width: "50%"}}>Harness the power of tools to improve reading efficiency. </h4>
        </div>
      </div>
      <Form>
        <input type="text" placeholder="Input text you wish to summarize here" style={{margin:"20px"}} onChange={getData}/>
      </Form>
      
      {
        print?
        <p>{data}</p>
        :null
      }

      <Button variant="primary" style={{margin:"10px"}} onClick={()=>{
        setPrint(true)
        summarize()
      }}>Summarize</Button>{' '}
     

      <h2>{output}</h2>

      
      <div class="footer">
        <p>The tool to get you started on reading Term & Conditions</p>
      </div>

      
    </div>
  );
}

export default App;

