import './App.css';
import Header from './Component/Header';
import Body from './Component/Body';
import Problempage from './Component/Problempage';
import {Routes, Route} from "react-router-dom";
import Contextstate from './Context/Contextstate';
import UserInfoonset from './Component/UserInfoonset';


function LaddderComponent(){
  return(
    <div style={{backgroundColor:"transparent", width: "100%", display: "flex", alignItems :"center", flexDirection:"column"}}>
      <Body />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Contextstate>

        <Header />

        <UserInfoonset />

        <Routes>
          <Route path="/" exact element = { <LaddderComponent />}/>
          <Route path = "/problemladder" exact element = {<Problempage />} />
        </Routes>
     
      </Contextstate>
    </div>
  );
}

export default App;
