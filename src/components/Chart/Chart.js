import './Chart.scss';
import img from './img/bg.png';
import React from 'react';
import ChartPage from './ChartPage'

class Chart extends React.Component {
  render(){  return (
    <div className="App row">
      <div className=" col-sm-6 App__backgroundContainer">
      <img className="row" src={img} alt="bg" width="100%"></img>
        <h4 className="row">Click on the button </h4>
        <p>Click on the button to change the graph</p>
      </div>
      <div className="col-sm-6 App__chartContainer">
              <ChartPage/>
      </div>
    </div>
    

  );}

}

export default Chart;
