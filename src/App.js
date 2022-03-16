import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Br. Mahfux ', job: 'singer' };
const singer2 = { name: 'Eva  tahman', job: 'singer2' };

// jsx style crarte 
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}


function App() {
  return (
    <div className="App">
      <Person name="Rubel " naika="Musomi"></Person>
      <Person name="Bapparaj" naika="sabnur"></Person>
      <Person name="shahin" naika="Mitu"></Person>
      <h3>THis is New Component .</h3>
      <Friend name="Mohammod Azad" job="Emam"></Friend>
      <Friend name="Sajahan" job="BD Army"></Friend>
      {/* femily member  */}
      <h3>New Component Add to Femily Member</h3>
      <Femily name='Father Name : Jahangir Alom' propession='Farmer'></Femily>
      <Femily name='Mother Name: Pervin Akter' propession='Housewife'></Femily>
      <Femily name='Brother Name : Tuhin' propession='BD Army'></Femily>
      <Femily name='Shahin' propession='student'></Femily>
      <Femily name='small Brother : Rubinur Rohoman' propession='student'></Femily>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>naika : {props.naika}</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h1>{props.name} </h1>
      <p>Job : {props.job}</p>
    </div>
  )
}

function Femily(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Propession : {props.propession}</p>
    </div>
  )
}


export default App;
