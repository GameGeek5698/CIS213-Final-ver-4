import './My_Header.css'
import './Projects.css'
import { Link } from 'react-router-dom';
import Data from '/db.json'
function Projects(){

    {/* --------------------------------------------------------------------------------------- */}
    function Dungeons({Data}){
        if (!Data) return <p>Loading...</p>;

        return (
        <div>
            <h2>Dungeons:</h2>

            {Data.map((dungeon) => (
            <div key={dungeon.id}>
            <strong>{dungeon.title}:</strong> {dungeon.description}
            </div>
            ))}
        </div>
        );
    }

    {Data && (
      <Dungeons Data={Data["Dungeon Details"]} />
    )}
    {/* --------------------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------------------- */}
        function Armor({Data}){
            if (!Data) return <p>Loading...</p>;

            return(
            <div>
                <h2>Armor:</h2>

                {Data.map((armor) => (
                <div key={armor.id}>
                <strong>{armor.title}:</strong> {armor.description}
                </div>
                ))}
            </div>   
            );
        }

        {Data && (
        <Armor Data={Data["Armor Details"]} />
        )}
        {/* --------------------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------------------- */}
            function MSQ({Data}){
                if (!Data) return <p>Loading...</p>;

                return(
                <div>
                    <h2>Main Scenario Quests:</h2>

                    {Data.map((msq) => (
                    <div key={msq.id}>
                    <strong>{msq.title}:</strong> {msq.description}
                    </div>
                    ))}
                </div>   
                );
            }

            {Data && (
            <MSQ Data={Data["MSQ Details"]} />
            )}
            {/* --------------------------------------------------------------------------------------- */}

                {/* --------------------------------------------------------------------------------------- */}
                function Weapons({Data}){
                    if (!Data) return <p>Loading...</p>;

                                    return(
                <div>
                    <h2>Weapons:</h2>

                    {Data.map((weapon) => (
                    <div key={weapon.id}>
                    <strong>{weapon.title}:</strong> {weapon.description}
                    </div>
                    ))}
                    </div>   
                    );
                }

                {Data && (
                <Weapons Data={Data["Weapon Details"]} />
                )}
                {/* --------------------------------------------------------------------------------------- */}

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
        
            <div className='ject'>
            <div className='pad'>
            <Dungeons Data={Data["Dungeon Details"]} />
            </div>
            <div className='pad'>
            <h2>Map Route:</h2>
            <li><a className=''>1st: Qufim Island</a></li>
            <li><a className=''>2nd: Rolanberry Fields</a></li>
            <li><a className=''>3rd: Crawlers' Nest</a></li>
            </div>
            </div>

                <div className='ject'>
                    <div className='pad'>
                    <Armor Data={Data["Armor Details"]} />
                    </div>

                    <div className='pad'>
                    <MSQ Data={Data["MSQ Details"]} />
                    </div>
                </div>

                    <div className='ject'>
                        <div className='pad'>
                        <Weapons Data={Data["Weapon Details"]} />
                        </div>

                        <div className='pad'>
                            <h2>Objective List:</h2>
                            <li><a className=''>1st: Transfer Character to the Bahamut server </a></li>
                            <li><a className=''>2nd: Level Character ASAP</a></li>
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

export default Projects