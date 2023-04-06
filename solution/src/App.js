
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return(
    <div className='App'>
      <Navbar/>
      <Header/>

    </div>
  )
}


//yarn add sass  veya npm install sass ile eklendi.
// _reset.scss=>resetleme işlemleri 
// _variables.scss =>ile değişkenleri
//_