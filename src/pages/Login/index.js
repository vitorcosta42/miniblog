import React, { useEffect, useState } from 'react'

import Loading from "../../components/Loading"
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from "./Login.module.css"
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, success, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      email,
      password,
    };
   
    const res = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}> <h1>Entrar</h1>
    <p>Faça o login para poder utilizar o sistema</p>
    <form onSubmit={handleSubmit}>
     
      <label>
        <span>E-mail:</span>
        <input
          type="email"
          name="email"
          required
          placeholder="E-mail do usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Senha:</span>
        <input
          type="password"
          name="password"
          required
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

  

      {!loading && <button className={`${styles.btn} btn`}>Entrar</button>}
      {loading && <Loading/>}
      {error && <p className={`${styles.error} error`}>{error}</p>}
      {success && <p className={"success"}>{success}</p>}
    </form></div>
  )
}

export default Login