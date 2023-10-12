import "./Login.css"

function Login() {
    return(
        <div className="Login">
            <h1>Imigrante Help</h1>
            <form>
                <input type="text" placeholder="E-Mail" />
                <input type="password" placeholder="Senha" />
                <div className="links"><a>Esqueceu sua senha?</a>
                <a>Ainda não tem conta?</a></div>
                <input type="Button" value="Entrar" />
            </form>
        </div>
    )
}

export default Login