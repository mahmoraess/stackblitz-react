import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { SignJWT } from 'jose';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

export default function App() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  const nav = useNavigate();
    const autenticarComFirebase = async (evento) => {
        evento.preventDefault();
        try {
            
            await signInWithEmailAndPassword(auth, email, senha);
            
            const secretKey = new TextEncoder().encode('minhaChaveSecreta');

            const token = await new SignJWT({ user: 'admin' })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('1h')
                .sign(secretKey);  

            
            localStorage.setItem('token', token);

            alert('Logado com sucesso!');
            nav("/");
        } catch (err) {
            alert('Erro no processo: ' + err.message);
        }
    };

    return (
        <main>
            <form onSubmit={autenticarComFirebase}>
                <label htmlFor="email">E-mail:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha:</label>
                <input
                    id="password"
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button type="submit">Entrar</button>
            </form>
            <div className="button">
                <Link to="/registrar">
                    <button>
                        <p>Não tenho conta!</p>
                    </button>
                </Link>
            </div>

        </main>
    );
  }