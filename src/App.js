import './App.scss';

import backgroundColorStyle from './utils/backgroundcolorstyle.util.js';

import WeatherWidget from './components/weatherwidget.component';

function App() {

  return (
    <div className = "App" style = {backgroundColorStyle}>
      <WeatherWidget />
    </div>
  );
}

export default App;
