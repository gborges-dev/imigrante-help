import React, { useState, useEffect } from 'react';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = () => {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([...posts, data]);
        setNewPost({ title: '', content: '' });
      });
  };

  return (
    <div className="App">
      <h1>Forum</h1>
      <div className="post-form">
        <input
          type="text"
          placeholder="Título"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Conteúdo"
          name="content"
          value={newPost.content}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;