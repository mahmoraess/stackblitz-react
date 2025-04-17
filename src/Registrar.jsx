import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./config/firebaseConfig";
import './Registrar.css';


export default function Registrar(){
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const navigation = useNavigate();

const handleRegister = async (e) => {
    e.preventDefault();
    try{
        await createUserWithEmailAndPassword(auth, email, senha);
        navigation('/login');
    } catch (erro) {
        alert('Erro ao cadastrar');
    }
};

return(
    <main>
        <h2>Registrar</h2>
        <form onSubmit={handleRegister}>
                <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

               <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                />
                <button type="submit">Registrar</button>
                </form>
                </main>
);
}