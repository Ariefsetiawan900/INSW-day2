import React from "react";
import Card from './components/Card'
import Classes from './state/Classess'
import Fungsi from './state/Fungsi'
import Home from './Route/Home'
import Satu from './Route/Satu'
import Dua from './Route/Dua'
import GetData from './axios/GetData'
import Example from './Example'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormCustom from "./Route/FormCustom";


const App = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/satu" exact component={Satu}/>
        <Route path="/dua" exact component={Dua}/>
        <Route path="/axios" exact component={GetData}/>
        <Route path="/form" exact component={FormCustom}/>
        <Route path="/example" exact component={Example}/>
      </Switch>
      </Router>
      {/* <Classes/>
     <Fungsi/> */}


{/* props  */}
      {/* <Card judul="pisang"/>
      <Card judul="apel"/> */}

      {/* components */}
      {/* <div className="d-flex">
      <Card/>
      <Card/>
      <Card/>
      </div> */}
    </div>
  );
};

export default App;
