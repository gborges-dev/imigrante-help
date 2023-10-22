function Signin() {
    return(
        <div className="Login">
            <h1>Imigrante Help</h1>
            <form>
                <input type="text" placeholder="Nome de usuário" />
                <input type="date" placeholder="Data de nascimento" />
                <input type="email" placeholder="Endereço de E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
                <div className="links">
                <a href="/login">Já tem uma conta?</a>
                </div>
                <input type="Button" value="Registrar" />
            </form>
        </div>
    )
}

export default Signin