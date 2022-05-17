import './Chart.scss'
import Svg from './Svg';
import { useState } from 'react';


function ChartPage(){
  const [datasets,setDatasets] = useState([10,20,50,70,10])
  const changeData=function() {
      setDatasets([Math.floor(Math.random() * 90 + 10),Math.floor(Math.random() * 90 + 10),Math.floor(Math.random() * 90 + 10),Math.floor(Math.random() * 90 + 10),Math.floor(Math.random() * 90 + 10)])
  }
return(
 <div>
    <Svg data={datasets}/><br/>
    <button className="btn btn-primary" id="btn" onClick={changeData}>Change Data</button>
 </div>
)


}




export default ChartPage