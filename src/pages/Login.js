import 'bootstrap/dist/css/bootstrap.min.css'; // Importar o CSS do Bootstrap
import { Container, Form, Button } from 'react-bootstrap'; // Importar os componentes do Bootstrap

function Login() {
    return (
        <Container className="Login">
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Endereço de E-mail" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Senha" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Fazer Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;