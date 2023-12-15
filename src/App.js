import pics from './piccs.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header>
          <div className="container">
              <a href="" className='headerText'>Odam Lviran</a>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
              </ul>
          </div>
      </header>
      <section id='homeSection'>
          <div className="container">
              <h1>Illustrator</h1>
              <div className='picsSection'>
                <img src={pics} alt="" />
                <img src={pics} alt="" />
                <img src={pics} alt="" />
                <img src={pics} alt="" />
              </div>
          </div>
      </section>
      <section className="footer">
          <div className="container">
              <p>© 2035 by Odam Lviran. Powered and secured by </p>
              <div className="btn">
                  <button>Facebook</button>
                  <button>Pinterest </button>
                  <button>Instagram</button>
              </div>
          </div>
      </section>
    </div>
  );
}

export default App;
