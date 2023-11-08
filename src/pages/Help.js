import { collapseToast } from "react-toastify";
import Topbar from "../components/Topbar";

function Help() {
    return (
        <div className="App">
            <Topbar />
            <h1>Bem-vindo à página de ajuda</h1>
            <div className="cards-ajuda">
                <div className="card">
                    <div className="card-title">
                        <img src="/images/FAQ.svg" alt="Perguntas Frequentes" height={28} />
                        <h2>Perguntas frequentes</h2>
                    </div>
                    <p>Encontre respostas para as perguntas feitas com frequência. Sua dúvida pode já estar respondida aqui.</p>
                </div>

                <a href="/forum" style={{color: "black"}}>
                <div className="card">
                    <div className="card-title">
                        <img src="/images/Forum.svg" alt="Fórum" height={28} />
                        <h2>Acesse nosso fórum</h2>
                    </div>
                    <p>Encontre dúvidas de outros usuários, ou crie um tópico com sua dúvida para que outras pessoas respondam.</p>
                </div>
                </a>

                <div className="card">
                    <div className="card-title">
                        <img src="/images/SAC.svg" alt="Atendimento ao cliente" height={28} />
                        <h2>Entre em contato</h2>
                    </div>
                    <p>Caso sua dúvida não pôde ser respondida através dos meios acima, entre em contato com um membro de nossa equipe.</p>
                </div>
            </div>
        </div>
    )
}

export default Help