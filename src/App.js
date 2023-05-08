import { Card } from 'react-bootstrap';
import './App.css';
import Cards from './Components/Cards/Cards';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App" >
      <NavBar/>
        <div className='container'>
       
        <Cards title= "samsung" mark= "s10" price="1000$"/> 
        <img alt='samsung' src ='https://fdn2.mobgsm.com/vv/bigpic/samsung-galaxy-s10.jpg'/>
        <Card/>
        <Cards title= "samsung" mark= "s10+" price="1200$"/>
        <img alt='samsung' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5C1AjHZNfV6bdcXyLCMUWiLkQaoJentvQA&usqp=CAU'/>
        <Card/>
        <Cards title= "samsung" mark= "s20" price="1400$"/>  
        <img alt='samsung' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHO0At2FIStSy0we5Ccs09_Lu-3aKN0MpChg&usqp=CAU'/>
        <Card/>
        <Cards title= "samsung" mark= "s20 ultra" price="1600$"/>
        <img alt='samsung' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7hyL30Xb1n-6jPMEkbRclJX3QU3AJ3iBQA&usqp=CAU'/>
        <Card/>

         </div>
    </div>
  );
}

export default App;
