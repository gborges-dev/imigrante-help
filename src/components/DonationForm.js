import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [amount, setAmount] = useState(0);

  const handleDonation = async () => {
    try {
      // Faça uma solicitação POST para o servidor para processar a doação
      const response = await axios.post('/api/donate', { amount });
      console.log(response.data); // Pode tratar a resposta conforme necessário
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Faça uma Doação</h2>
      <label>
        Valor da Doação:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button onClick={handleDonation}>Doar</button>
    </div>
  );
};

export default DonationForm;