import './App.css'
import Card from './components/Card';


function App() {
  const pageTitle = "Kampsporter";

  return (
    <>
     <h1>{pageTitle}</h1>

     <img src="/banner.jpg"/>

     <div className='card-container'>
      <Card martialArt={'Karate'} info={'Karate'}/>
     </div>
     <footer>Av Haris Sabanovic</footer>
    </>
  )
}

export default App
