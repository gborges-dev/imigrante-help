function Login() {
    return(
        <div className="Login">
            <h1>Imigrante Help</h1>
            <form>
                <input type="email" placeholder="Endereço de E-mail" />
                <input type="password" placeholder="Senha" />
                <div className="links"><a>Esqueceu sua senha?</a>
                <a href="/signin">Ainda não tem conta?</a></div>
                <input type="Button" value="Fazer Login" />
            </form>
        </div>
    )
}

export default Login