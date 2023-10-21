import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topbar from '../components/Topbar';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Obter dados do servidor ao montar o componente
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;