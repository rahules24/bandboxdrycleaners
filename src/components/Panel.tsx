import { Container, Col, Row } from "react-bootstrap"
import { FaSquareWhatsapp } from "react-icons/fa6";
import vis from '../assets/img/image.png'

const Panel = () => {
  return (
    <Container style={{ marginLeft: '6em' }}>
      <h3 style={{ fontWeight: 'bold' }}>Come Visit Us!</h3>
      <Row>
        <Col md={10}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.612886149914!2d76.82230257503522!3d30.673027588516668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb535d02307b%3A0x2c226d7ddf6968fb!2sBand%20Box%20Drycleaners!5e0!3m2!1sen!2sin!4v1748094310932!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ borderRadius: '20px', marginTop: '10px' } as React.CSSProperties}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        </Row>
        <Row>
        <Col md={8} style={{ marginTop: '10px' }}>
          <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontWeight:'bolder' }}>
            <div style={{fontWeight: 'bold', fontSize: '24px'}}>
                <span style={{ color: 'red' }}>BAND BOX </span>
                <span style={{ fontWeight: 'bold', fontSize: '24px', color: 'blue' }}> DRYCLEANERS</span>
            </div>
            <div>📍SCF: 8-9, Anand Vihar, Near Tribune Colony,</div>
            <div>&emsp;&ensp;Baltana, Zirakpur (140604)</div>
            <div style={{ color: 'blue' }}>Under Licence From:</div>
            <div style={{ fontWeight: 'bold', color: 'red' }}>BAND BOX Private Limited</div>
            <div>Regd. Office: 18/90, Connaught Circle, New Delhi</div>
          </div>
        </Col>
        <Col md={4} style={{ marginTop: '20px', fontWeight:"lighter", lineHeight: '1.2'}}>
            <img width='auto' height='70px' src={vis} alt="Mr. Gulshan Arora" />
            <p style={{marginBottom:'5px'}}>
                <strong style={{fontSize:'16px'}}>Mr. Gulshan Arora</strong>
                <br />
                <i>Stain Spec. Since ’98</i>
            </p>
            Contact:
            <p style={{fontSize: '16px', fontWeight:"lighter"}}>
                <FaSquareWhatsapp style={{fontSize: '24px'}}/>
                +91 9888211141
            </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Panel;
