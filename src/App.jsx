import { Header } from './components/Header'
import { useState, useEffect } from "react";

import api from "./services/api";
import './global.css'

function App() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    api
      .get(message)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <div>
      <Header />
      <br />
      <div class="container-fluid">
        <div class="row justify-content-center">

          <div class="col-12 col-md-10 col-lg-8">
            <form class="card card-sm">
              <div class="card-body row no-gutters align-items-center">
                <div class="col-auto">
                  <i class="fas fa-search h4 text-body"></i>
                </div>
                <div class="col">
                  <input
                    class="form-control form-control-lg form-control-borderless"
                    type="search"
                    id="message"
                    onChange={handleChange}
                    value={message}
                    autoComplete="off" placeholder="Fale com a IA" />
                </div>
                <div class="col-auto">
                  <a class="btn btn-lg btn-success" onClick={handleClick} type="submit">Pequisar</a>
                </div>
              </div>
            </form>
          </div>

          <div class="col-12 col-md-10 col-lg-8" >
            <label >Resultado:</label>
            <textarea disabled class="form-control" value={user.message} rows="10" />
          </div>

        </div>
      </div>
    </div>

  );
}

export default App
