import { useState } from "react";
import { redirect } from "react-router-dom";

function Signin() {
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [date, setDate] = useState();

    function crateUser() {
        if (!(password == password2)) {
            alert('As senhas digitadas não conferem!');
            return
        };

        if (!password || !password2) {
            alert('Digite uma senha para realizar esta ação!')
            return
        };
        
        if (!username) {
            alert('Digite um nome de usuário para realizar esta ação!')
            return
        };

        if (!email) {
            alert('Digite um e-mail para realizar esta ação!')
            return
        };

        if (!date) {
            alert('Digite sua data de nascimento para realizar esta ação!')
            return
        };

        const dto = {
            username: username,
            email: email,
            password: password,
            date: date
        }

        salvarDados(dto);
        redirect("/login");

        setDate('');
        setPassword2('');
        setPassword('');
        setEmail('');
        setUsername('');

    };

    async function salvarDados(dto) {
        debugger
        await fetch('http://localhost:3333/signin/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(dto)
        }).then((res) => {
            console.log(res)
        }).catch(err => {
            console.error('Erro: ', err)
        })
    };

    return(
        <div className="Login">
            <h1>Imigrante Help</h1>
            <form>
                <input type="text" placeholder="Nome de usuário" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="date" placeholder="Data de nascimento" value={date} onChange={e => setDate(e.target.value)}/>
                <input type="email" placeholder="Endereço de E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirme a senha" value={password2} onChange={e => setPassword2(e.target.value)}/>
                <div className="links">
                <a href="/login">Já tem uma conta?</a>
                </div>
                <input type="Button" value="Registrar" onClick={crateUser}/>
            </form>
        </div>
    )
}

export default Signin