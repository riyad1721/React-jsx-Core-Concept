import logo from './logo.svg';
import './App.css';

function App() {
  // const num = 2015;
  // const singer = {
  //   name: "Chomok Hasan",
  //   job: "Engineer"
  // }
  // const commonColor = {
  //   color: 'black'
  // }
  return (
    <div className="App">
      {/* { <header className="App-header">
        <h3>Hello React I am Here</h3>
        <p> Happy Happy React</p>
        <div className="container">
          <h2 style={commonColor}>This is Inside my Container</h2>
          <p style={commonColor}>My number is : {num}</p>
          <p style={{ color: 'black' }}>Singer : {singer.name} + ' ' + {singer.job}</p>
          <p></p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> } */}
      <Person name="Md Reyad Hossain" Profession="Learning React js"></Person>
      <Person name="Md Mazharul Islam" Profession="Production Engineer"></Person>
      <Person name="Md Asif Iqbal Shuvo" Profession="BCS Cader"></Person>
      <Person name="Rubayet Ahmed Rafsun" Profession="Play Boy"></Person>
      <Person name="Roqunozzaman Emon" Profession="Every Girls Best Friends"></Person>




    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>Name : {props.name}</h1>
      <h3> Profession : {props.Profession}</h3>
    </div>

  );
}
export default App;
