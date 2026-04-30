import './My_Header.css'
import './Progress.css'
import { Link } from 'react-router-dom';
import Data from '/db.json'
function Progress(){
    {/* --------------------------------------------------------------------------------------- */}
    function Experience({Data}){
        if (!Data) return <p>Loading...</p>;

            return(
                <div>
                    <h2>EXP/Job Levels:</h2>

                    {Data.map((Experience) => (
                    <div key={Experience.id}>
                    <strong>{Experience.title}:</strong> {Experience.description}
                    </div>
                    ))}
                </div>
            );        
    }
        {Data && (
        <Experience Data={Data["EXP Details"]} />
        )}
    {/* --------------------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------------------- */}
        function Skills({Data}){
            if (!Data) return <p>Loading...</p>;

                return(
                <div>
                    <h2>Weapon & Job Skills:</h2>

                    {Data.map((Skills) => (
                    <div key={Skills.id}>
                    <strong>{Skills.title}:</strong> {Skills.description}
                    </div>
                    ))}
                </div>

            );        
        }

            {Data && (
            <Skills Data={Data["Skill Details"]} />
            )}
        {/* --------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------- */}
            function Enemies({Data}){
                if (!Data) return <p>Loading</p>;

                    return(
                    <div>
                        <h2>Weapon & Job Skills:</h2>

                        {Data.map((Enemies) => (
                        <div key={Enemies.id}>
                        <strong>{Enemies.title}:</strong> {Enemies.description}
                        </div>
                        ))}
                    </div>
                    );
            }
            {Data && (
              <Enemies Data={Data["Enemy Details"]} />
            )}
            {/* --------------------------------------------------------------------------------------- */}
    console.log("DATA:", Data);
    console.log("Component data:", Data);
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

        <div className='expJob'>
            <div className='pad'>
            <Experience Data={Data["EXP Details"]} />
            </div>
            <div className='pad'>
            <Skills Data={Data["Skill Details"]} />
            </div>
        </div>

            <div className='loc'>
                    <div>
                        <img src='Survival Guide.png' className='guide'></img>
                        <Enemies Data={Data["Enemy Details"]} />
                    </div>
                    <div>
                    <img src='Qufim_Island.png' className='map'></img>
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

export default Progress;