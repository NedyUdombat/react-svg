import './assets/stylesheet/App.css';

import cross from './assets/images/cross.svg';
import bus from './assets/images/bus.svg';
import paperCup from './assets/images/paper-cup.svg';
import ship from './assets/images/ship.svg';
import shoe from './assets/images/shoe.svg';
import user from './assets/images/user.svg';
import pin from './assets/images/pin.svg';
import flag from './assets/images/flag.svg';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div class="grid-item">
          <img
            src={pin}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={bus}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={paperCup}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={ship}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={shoe}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={user}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={flag}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div class="grid-item">
          <img
            src={cross}
            className="icon"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
