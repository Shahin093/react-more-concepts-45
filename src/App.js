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
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>THis is New Component .</h3>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Sakib al hasan</h1>
      <p>Profession : Cricketer</p>
    </div>
  );
}

function Friend() {
  return (
    <div className='container'>
      <h1>Sharif </h1>
      <p>Job : maramari.</p>
    </div>
  )
}


export default App;
