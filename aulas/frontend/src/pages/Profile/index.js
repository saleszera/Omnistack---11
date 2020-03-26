import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import './styles.css';

export default function Profile() {
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  if (ongId === null || ongName === null) {
    alert('É necessário estar logado!');

    history.push('/');
  }

  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`profile?page=${page}`, {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => setIncidents(response.data));
  }, [page]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente!');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  function handleClick(action) {
    const nextPage = action === 'back' ? page - 1 : page + 1;
    setPage(nextPage);
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="logo" />
        <span>Bem vindo(a), {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Caso</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={() => handleClick('back')}
          disabled={page < 2}
        >
          <FiArrowLeft size={25} color="#FFF" />
        </button>
        <button
          type="button"
          className="button"
          onClick={() => handleClick('next')}
          disabled={(incidents.length !== 4) === true}
        >
          <FiArrowRight size={25} color="#FFF" />
        </button>
      </div>
    </div>
  );
}
