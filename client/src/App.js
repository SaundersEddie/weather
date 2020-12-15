import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherNavbar from '../src/components/WeatherNavbar/WeatherNavbar';
import WeatherFrame from '../src/components/WeatherFrame/WeatherFrame';

function App() {
  return (
    <div className="container">
        <WeatherNavbar />
        <WeatherFrame />
    </div>
  );
}

export default App;
