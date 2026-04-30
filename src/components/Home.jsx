import './My_Header.css'
import './Character_Details.css'
import './Current_Progress.css'
import Intro from './Intro';
import Data from '/db.json'
import { Link } from 'react-router-dom';
{/* import Current_Progress from './Current_Progress'; --------------------------------------------------------------------------------------- */}
function Home() {

  {/* Character Details ---------------------------------------------------------------- */}
  function Character_Details({ Data }) {

  if (!Data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Character Details:</h2>

      {Data.map((CharacterDetails) => (
        <div key={CharacterDetails.id}>
          <strong>{CharacterDetails.title}:</strong> {CharacterDetails.description}
        </div>
      ))}

    </div>
  );
}

  {Data && (
  <Character_Details Data={Data["Character Details"]} />
)}

console.log("DATA:", Data);
console.log("Component data:", Data);
{/* --------------------------------------------------------------------------------------- */}

{/* Current Progress ---------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------- */}

{/* Trusts ---------------------------------------------------------------------- */}
function Trust_Details({ Data }) {

  if (!Data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Trusts/Subjobs:</h2>

      {Data.map((TrustDetails) => (
        <div key={TrustDetails.id}>
          <strong>{TrustDetails.title}:</strong> {TrustDetails.description}
        </div>
      ))}

    </div>
  );
}

  {Data && (
  <Trust_Details Data={Data["Trust Details"]} />
)}
{/* ----------------------------------------------------------------------------- */}
  return(
    <>
      <header >
          <div className= "container">
          <nav>
              <ul className='nav-menu'>
                  <li className="nav-item"><Link to = "/" ><img src="FFXI_Icon.png"></img></Link></li>
                  <li className="nav-item"><Link to = "/" ><a>Home</a></Link></li>
                  <li className="nav-item"><Link to= "/Projects"><a>Projects</a></Link></li>
                  <li className="nav-item"><Link to= "/Progress"><a>Progress</a></Link></li>
              </ul>
          </nav>
          </div>
      </header>

      <Intro />
        <div className='detail'>
          <div className='pad'>
          <img src='Ameheehk.png' className='char'></img>
          </div>
            <div className='pad'>
            <Character_Details Data={Data["Character Details"]} />
            </div>
            </div>
              <div className='pro'>
                <div className='pad'>
                <h2>Current Progress:</h2>
                <li><a className=''>MSQ: Windurst 2-1</a></li>
                <li><a className=''>Current Location: Qufim Island</a></li>
                <li><a className=''>Current Objective:</a></li>
                <li><a>Level Up and Survival Guides</a></li>
                </div>
                <div className='pad'>
                <Trust_Details Data={Data["Trust Details"]} />
                </div>
              </div>
      
            <footer >
              <div className= "container">
              <nav>
                <ul className="nav-menu">
                  <li className="nav-item"><a>All original works are the property of respective owners.</a></li>
                </ul>
              </nav>
              </div>
            </footer>
    </>
  );

}

export default Home;
