import './App.css'
import Card from './components/Card';
import Header from './components/Header';


function App() {

  const martialArtArray = [
    {
      martialArt: "Boxning",
      info: "Boxning är en kampsport där två utövare slår mot varandra med bara händerna, vanligtvis i en ring. Målet är att slå motståndaren till marken eller samla fler poäng genom att träffa motståndaren."
    },
    {
      martialArt: "Judo",
      info: "Judo är en japansk kampsport som fokuserar på att kasta motståndaren till marken genom grepp och tekniker för att övervinna motståndaren genom vikt och rörelse."
    },
    {
      martialArt: "Taekwondo",
      info: "Taekwondo är en koreansk kampsport som betonar sparkar och snabba benrörelser. Den är känd för sina spektakulära och kraftfulla höga sparkar."
    },
    {
      martialArt: "Muay Thai",
      info: "Muay Thai, även kallad thailändsk boxning, är en kampsport som använder slag, sparkar, knän och armbågar. Den är känd för sin hårda och effektiva teknik."
    },
    {
      martialArt: "Karate",
      info: "Karate är en japansk kampsport som fokuserar på slag, sparkar, blockeringar och kata (förutbestämda rörelsemönster). Den betonar både självförsvar och disciplin."
    },
    {
      martialArt: "Brazilian Jiu-Jitsu",
      info: "Brazilian Jiu-Jitsu (BJJ) är en kampsport som fokuserar på markkamp och submissionstrick som leder till att motståndaren ger upp. Den är känd för sina effektiva tekniker för att besegra större och starkare motståndare."
    }
  ]

  return (
    <>
     <Header title="Kampsporter"/>

     <img src="/banner.jpg"/>

     <div className='card-container'>
      {martialArtArray.map((c, i) => (
        <Card martialArt={c.martialArt} info={c.info} key={i}/>
      ))}
     </div>
     <footer>Av Haris Sabanovic</footer>
    </>
  )
}

export default App
