import { useState } from 'react';
import SirenScripts from "./SirenScripts";
import field from '../assets/img/home.jpg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Track = () => {
  const [slip, setSlip] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic 10-digit phone number regex
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }

    setPhoneError('');
  };

  return (
    <div style={{
      backgroundImage: `url(${field})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      overflowY: 'auto',
      color: '#000'
    }}>
      <SirenScripts />
      <Container style={{ paddingTop: '90px' }}>
        <Form onSubmit={handleSubmit}>
          {/* Contact Info */}
          <Row className="mb-3">
            <Col md={1}>
              <Form.Group controlId="slip">
                <Form.Label>Slip No.</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  className="transparent-input"
                  value={slip}
                  onChange={(e) => setSlip(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  className="transparent-input"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setPhoneError('');
                  }}
                  isInvalid={!!phoneError}
                  placeholder="Enter 10-digit number"
                />
                <Form.Control.Feedback type="invalid">
                  {phoneError}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-left">
            <Col xs="auto">
              <Button variant="dark" type="submit">Locate</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Track;
