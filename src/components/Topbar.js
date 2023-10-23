import "./Topbar.css"

function Topbar() {
    return(
        <div className="topbar">
            <div className="botoes">
                <a href="/">Início</a>
                <a href="/forum">Fórum</a>
                <a href="/help">Ajuda</a>
                <a href="/login">Sua conta</a>
            </div>
        </div>
    )
}

export default Topbar