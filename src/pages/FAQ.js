import Accordion from 'react-bootstrap/Accordion';
import Topbar from '../components/Topbar';

function FAQ() {
  return (
    <div className='FAQ'>
      <Topbar />
      <Accordion defaultActiveKey="0" style={{maxWidth: '1000px', margin: '0 auto'}}>
        <h1 style={{margin: '48px 0'}}>Perguntas Frequentes</h1>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Onde é possível encontrar o Centro POP?</Accordion.Header>
          <Accordion.Body>
            O Centro POP pode ser encontrado em <a href='#'>algum lugar</a> no centro de Criciúma.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Onde posso renovar meu passaporte?</Accordion.Header>
          <Accordion.Body>
            O passaporte deve ser renovado na <a href='#'>Polícia Federal</a>.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;