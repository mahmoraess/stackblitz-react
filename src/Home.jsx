import { Link } from 'react-router-dom';
import './App.css'; // ou crie um novo arquivo específico se preferir

export default function Home(){
  return(
    <main className="home-container">
      <h1>Bem vindo!</h1>
      <div className="button-group">
        <Link to="/login" className="btn">Autenticar</Link>
        <Link to="/registrar" className="btn">Registrar</Link>
      </div>
    </main>
  );
}
