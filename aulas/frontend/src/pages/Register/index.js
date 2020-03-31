import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import axios from 'axios';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [cities, setCities] = useState([]);
  const [ufs, setUfs] = useState([]);

  const history = useHistory();

  async function loadUf() {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    );

    response.data.sort((a, b) => {
      if (a.sigla > b.sigla) {
        return 1;
      }
      if (b.sigla > a.sigla) {
        return -1;
      }
      return 0;
    });

    setUfs(response.data);
  }

  useEffect(() => {
    loadUf();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    console.log(data);

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  async function handleLoadCity(id) {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
    );
    response.data.sort((a, b) => {
      if (a.sigla > b.sigla) {
        return 1;
      }
      if (b.sigla > a.sigla) {
        return -1;
      }
      return 0;
    });

    const findUf = ufs.find((u) => u.id === Number(id));

    setUf(findUf.sigla);
    setCities(response.data);
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            maxLength="15"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-select">
            <select
              name="uf"
              id="uf"
              onChange={(e) => handleLoadCity(e.target.value)}
            >
              {ufs.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.sigla}
                </option>
              ))}
            </select>
            <select
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((c) => (
                <option key={c.id} value={c.nome}>
                  {c.nome}
                </option>
              ))}
            </select>
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
