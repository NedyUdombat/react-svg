// stylesheet
import './assets/stylesheet/App.css';

// components
import Svg from './component/Svg';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <Svg className="icon-cross w-30 h-50" />
        </div>
        <div className="grid-item">
          <Svg className="icon-bus w-199" />
        </div>
        <div className="grid-item">
          <Svg className="icon-user w-199 h-0" />
        </div>
        <div className="grid-item">
          <Svg className="icon-pin w-19 h-30" />
        </div>
        <div className="grid-item">
          <Svg className="icon-flag w-199 h-40" />
        </div>
        <div className="grid-item">
          <Svg className="icon-paper-cup w-49" />
        </div>
        <div className="grid-item">
          <Svg className="icon-shoe w-159 h" />
        </div>
        <div className="grid-item">
          <Svg className="icon-ship w-9 h-20" />
        </div>
        <div className="grid-item">
          <Svg className="icon-selfDrivingCar w-159" />
        </div>
      </div>
    </div>
  );
}

export default App;
