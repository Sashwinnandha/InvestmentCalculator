import { useState } from "react"
import Inputs from "./Components/Input"
import OutputTable from "./Components/OutputTable"
import image from "./assets/investment-calculator-logo.png"
import { calculateInvestmentResults } from "./util/investment.js"

const allInputs={
  initialInvestment:0,
  annualInvestment:0,
  expectedReturn:0,
  duration:0,
}

function App() {

  const[table,setTable]=useState(allInputs);

  const[initial,setInitial]=useState();
  const[annual,setAnnual]=useState();
  const[expected,setExpected]=useState();
  const[duration,setDuration]=useState();
  const[data,setData]=useState("");


  function onchangeState(event,inputName){
    if(inputName==="initial"){
      setTable((oldTable)=>{
        let changed={...oldTable}
        changed.initialInvestment=event.target.value;
        setInitial(event.target.value)
        return changed;
      })
    }

    if(inputName==="annual"){
      setTable((oldTable)=>{
        let changed={...oldTable}
        changed.annualInvestment=event.target.value;
        setAnnual(event.target.value)
        return changed;
      })
    }
    if(inputName==="expected"){
      setTable((oldTable)=>{
        let changed={...oldTable}
        changed.expectedReturn=event.target.value;
        setExpected(event.target.value)
        return changed;
      })
    }
    if(inputName==="duration"){
      setTable((oldTable)=>{
        let changed={...oldTable}
        changed.duration=event.target.value;
        setDuration(event.target.value)
        return changed;
      })
    }
}

let annualData=calculateInvestmentResults(table);
  return (
    
    <div id="header">
      <img src={image} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>

      <div id="user-input">
        <div className="input-group">
          <Inputs forName="initial" type="number" id="initial" name="initial" step="1000" value={initial} onModify={(event)=>onchangeState(event,"initial")}>Initial Investment</Inputs>
          <Inputs forName="annual" type="number" id="annual" name="annual" step="1000" value={annual} onModify={(event)=>onchangeState(event,"annual")}>Annual Investment</Inputs>
        </div>
        <div className="input-group">
          <Inputs forName="expected" type="number" id="expected" name="expected" step="1000" value={expected} onModify={(event)=>onchangeState(event,"expected")}>Expected Return</Inputs>
          <Inputs forName="duration" type="number" id="duration" name="duration" step="1000" value={duration} onModify={(event)=>onchangeState(event,"duration")}>Duration</Inputs>
        </div>
      </div>
      {annualData.length>0?<OutputTable dataArr={annualData} initialAmount={initial}/>:""}
    </div>
  )
}

export default App
