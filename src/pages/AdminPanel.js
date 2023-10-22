import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  // State para armazenar posts do banco de dados
  const [posts, setPosts] = useState([]);

  // UseEffect para buscar posts do banco de dados quando o componente monta
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // Função para excluir um post
  const handleDelete = (postId) => {
    fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPosts(posts.filter((post) => post._id !== postId));
      })
      .catch((error) => console.error('Erro ao excluir o post:', error));
  };

  return (
    <div className="admin-panel">
      <h2>Painel de Administração</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {post.title} -{' '}
            <button onClick={() => handleDelete(post._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel