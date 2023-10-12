import React from 'react';
import DonationForm from '../components/DonationForm';

function Home() {
    return (
        <div>
            <h1>Bem-vindo à Página Principal</h1>
            {/* Outros conteúdos da página */}
            <DonationForm />
        </div>
    );
}

export default Home;