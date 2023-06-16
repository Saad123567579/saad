import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  const [alert,setalert] = useState(null);
  const [color,setcolor] = useState('black');
  const [nav,setnav] = useState("light")
 const handleDarkMode = (event) =>{
  if(document.body.style.backgroundColor=== 'black'){
    document.body.style.backgroundColor='white';
    setcolor('black');}

  else   {
    document.body.style.backgroundColor='black';
    setcolor('white');
  }



  if(event.target.nextElementSibling.style.color==="white"){
    event.target.nextElementSibling.style.color="black";
  }
  else{
    event.target.nextElementSibling.style.color="white";
  }
  if(nav==="light")
   setnav("dark");
   else 
   setnav("light");
  
 }

 const showAlert = (message,type) => {
  let t = `${type.toUpperCase()}: ${message}` ;
  setalert(t);
  setTimeout(() => {
    setalert(null);
  }, 2000);
 }




  return (
    <>
      <Navbar title="TextUtils" handleDarkMode={handleDarkMode} nav={nav}  />
      <Form   color={color} alert={alert} showAlert={showAlert}  />
    </>
  );
}

export default App;



