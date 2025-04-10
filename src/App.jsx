import React, { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./App.css"
import { SignJWT } from 'jose';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
    } catch (err) {
      alert('Erro no processo', err);
    }
  };

  return (
    <main>
      <form onSubmit={autenticarComFirebase}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="e-mail"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
        />
         <button>Autenticar</button>
      </form>
    </main>
  );
}
