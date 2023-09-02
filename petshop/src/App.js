// import logo from './logo.svg';
// import Home from './paginas/Home';
// import Sobre from './paginas/Sobre';
import './App.css';
import './assets/css/base/base.css';
import { Outlet } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';

function App() {

  // const Router = () => {
  //   const location = window.location.pathname
  //   if (location === '/sobre') {
  //     return <Sobre />
  //   } else {
  //     return <Home />
  //   }
  // }
  return (
    <>
      {/* {Router()} */}

      <Cabecalho />
      <Outlet />
      <p>rodapé</p>
    </>
  );
}

export default App;