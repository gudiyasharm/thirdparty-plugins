import './App.css';
import LineCharts from './components/LineCharts';
import SignIn from './components/SignIn';
// import Googlemap from './components/Googlemap';

function App() {
  return (
    <div className="App">
      {/* <h1>Line Chart</h1> */}
      <LineCharts />
      <SignIn />
      {/* <Googlemap /> */}
    </div>
  );
}

export default App;
