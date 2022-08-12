
import './App.css';
//import Counter from '../Counter/Counter' // teste, contador sem Hooks
import SmartCounter from '../Smartcounter/Smartcounter';
import Multiplicador from '../Multiplicador/Multiplicador';
import ContadorIfood from '../Contadorifood/Contadorifood';


function App() {
  return (
    <>
      <h1>Aprendendo a usar useState</h1>
      {/* <Counter/> */}
      {/* <SmartCounter/> 
      <Multiplicador/> */}
      <ContadorIfood/>
    </>
  );
}

export default App;
