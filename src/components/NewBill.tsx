import { useState } from 'react';
import SirenScripts from './SirenScripts';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import field from '../assets/img/home.jpg';

type Item = {
  name: string;
  services: string[];
};

const ITEMS: Item[] = [
  { name: 'Saree', services: ['Drycleaning', 'Charak'] },
  { name: 'Jeans', services: ['Drycleaning', 'Steam Press', 'Rafu'] },
  { name: 'Pants', services: ['Drycleaning', 'Steam Press', 'Rafu'] },
  { name: 'Blanket', services: ['Drycleaning'] },
  { name: 'Gown', services: ['Drycleaning', 'Steam Press'] }, // ✅ Added Steam Press
];

const PRICE_MAP: { [key: string]: number } = {
  'Saree-Drycleaning': 100,
  'Saree-Charak': 150,
  'Jeans-Drycleaning': 80,
  'Jeans-Steam Press': 50,
  'Pants-Drycleaning': 80,
  'Pants-Steam Press': 50,
  'Blanket-Drycleaning': 120,
  'Gown-Drycleaning': 0, // ✅ Handled by slider
  'Gown-Steam Press': 0, // ✅ Handled by slider
};

type SelectedItem = {
  itemName: string;
  service: string;
  price: number;
  quantity: string;
  customPrice?: string;
  selectedPrice?: number;
};

export default function NewBill() {
  const [items, setItems] = useState<SelectedItem[]>([
    { itemName: '', service: 'Drycleaning', price: 0, quantity: '1', customPrice: '' },
  ]);

  const [slip, setSlip] = useState('001');
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

  const getISTDate = () => {
    const now = new Date();
    const offset = 5.5 * 60;
    const istDate = new Date(now.getTime() + offset * 60000);
    return istDate.toISOString().split('T')[0];
  };

  const today = getISTDate();

  const getServicesForItem = (itemName: string): string[] => {
    const item = ITEMS.find(i => i.name === itemName);
    return item ? item.services : [];
  };

  const handlePriceChange = (index: number, value: number) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index].customPrice = value.toString();
      newItems[index].selectedPrice = value;
      return newItems;
    });
  };

  const getPrice = (itemName: string, service: string): number => {
    if (service === 'Rafu') return 0;
    if (itemName === 'Gown') return 0;
    return PRICE_MAP[`${itemName}-${service}`] || 0;
  };

  const handleItemChange = (index: number, newItemName: string) => {
    const services = getServicesForItem(newItemName);
    const defaultService = services.includes('Drycleaning') ? 'Drycleaning' : services[0];
    const price = getPrice(newItemName, defaultService);

    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        itemName: newItemName,
        service: defaultService,
        price,
        customPrice: '',
        selectedPrice: undefined,
      };
      return newItems;
    });
  };

  const handleServiceChange = (index: number, newService: string) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const itemName = newItems[index].itemName;
      const price = getPrice(itemName, newService);
      newItems[index] = {
        ...newItems[index],
        service: newService,
        price,
        customPrice: '',
        selectedPrice: undefined,
      };
      return newItems;
    });
  };

  const handleQuantityChange = (index: number, qty: string) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index].quantity = qty;
      return newItems;
    });
  };

  const handleCustomPriceChange = (index: number, value: string) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index].customPrice = value;
      return newItems;
    });
  };

  const handleAddItem = () => {
    setItems(prevItems => [...prevItems, { itemName: '', service: 'Drycleaning', price: 0, quantity: '1', customPrice: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const totalItemCount = items.reduce((acc, curr) => acc + (parseInt(curr.quantity) || 0), 0);

  const totalPrice = items.reduce((acc, curr) => {
    const qty = parseInt(curr.quantity) || 0;
    let priceNum = curr.price;
    if (curr.service === 'Rafu' || curr.itemName === 'Gown') {
      priceNum = parseFloat(curr.customPrice || '0') || 0;
    }
    return acc + priceNum * qty;
  }, 0);

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
      <div style={{ paddingRight: '10px' }}>
        <Container style={{ paddingTop: '90px' }}>
          <Form onSubmit={handleSubmit}>
            {/* Date */}
            <Row className="mb-3">
              <Col md={1}>
              <Form.Group controlId="slip">
                <Form.Label>Slip No.</Form.Label>
                <Form.Control
                  readOnly
                  type="text"
                  min="1"
                  className="transparent-input"
                  value={slip}
                  onChange={(e) => setSlip(e.target.value)}
                />
              </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" value={today} readOnly className="transparent-input"/>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="dueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" min={today} className="transparent-input"/>
                </Form.Group>
              </Col>
              {/* <Col md={5}>
              <img src={field} style={{height:'70px'}} />
              </Col> */}
            </Row>

            {/* Contact Info */}
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" className="transparent-input"/>
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

            {/* Headers */}
            <Row className="mb-2 fw-bold">
              <Col xs={1}>Quantity</Col>
              <Col xs={3}>Particulars</Col>
              <Col xs={3}>Service</Col>
              <Col xs={2}>Unit Price</Col>
              <Col xs={2}>Amount</Col>
            </Row>

            {items.map((item, idx) => {
              const services = getServicesForItem(item.itemName);
              const qty = parseInt(item.quantity) || 0;
              const isCustomPrice = item.service === 'Rafu' || item.itemName === 'Gown';
              let pricePerItem = isCustomPrice ? parseFloat(item.customPrice || '0') || 0 : item.price;

              const sliderMin = item.service === 'Steam Press' ? 200 : 500;
              const sliderMax = item.service === 'Steam Press' ? 500 : 1000;

              return (
                <Row key={idx} className="align-items-center mb-2">
                  <Col xs={1}>
                    <Form.Control
                      type="text"
                      value={item.quantity}
                      onChange={e => handleQuantityChange(idx, e.target.value)}
                      className="transparent-input"
                    />
                  </Col>
                  <Col xs={3}>
                    <Form.Select
                      value={item.itemName}
                      onChange={e => handleItemChange(idx, e.target.value)}
                      className="transparent-input"
                    >
                      <option value="">Select item...</option>
                      {ITEMS.map(i => (
                        <option key={i.name} value={i.name}>{i.name}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs={3}>
                    <Form.Select
                      value={item.service}
                      onChange={e => handleServiceChange(idx, e.target.value)}
                      disabled={!item.itemName}
                      className="transparent-input"
                    >
                      {services.map(srv => (
                        <option key={srv} value={srv}>{srv}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs={2}>
                    {item.itemName === 'Gown' ? (
                      <div style={{alignContent:'center'}}>
                        <Form.Range
                          className="custom-range"
                          min={sliderMin}
                          max={sliderMax}
                          step={50}
                          value={item.selectedPrice || sliderMin}
                          onChange={e => handlePriceChange(idx, Number(e.target.value))}
                          />
                        
                          {/* <span style={{fontSize:'13px', marginBottom:'0'}}>₹{item.selectedPrice || sliderMin}</span> */}
                      </div>
                    ) : item.service === 'Rafu' ? (
                      <Form.Control
                        type="number"
                        min="50"
                        value={item.customPrice || ''}
                        onChange={e => handleCustomPriceChange(idx, e.target.value)}
                        className="transparent-input"
                      />
                    ) : (
                      <Form.Control
                        readOnly
                        value={`₹${pricePerItem}`}
                        className="transparent-input"
                      />
                    )}
                  </Col>
                  <Col xs={2} className="d-flex align-items-center">
                    <Form.Control
                      readOnly
                      value={`₹${(pricePerItem * qty).toLocaleString("en-IN")}`}
                      className="transparent-input"
                    />
                    {items.length > 1 && (
                      <Button variant="outline-danger" onClick={() => handleRemoveItem(idx)} className="ms-2">
                        &times;
                      </Button>
                    )}
                  </Col>
                </Row>
              );
            })}

            <Row className="mb-3">
              <Col xs={12}>
                <Button variant="dark" onClick={handleAddItem}>+ Add Item</Button>
              </Col>
            </Row>

            <Row className="mb-4 fw-bold">
              <Col xs={2}>Item Count: {totalItemCount}</Col>
              <Col xs={8}></Col>
              <Col xs={2}>Total Amount: ₹{totalPrice.toLocaleString("en-IN")}</Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="auto" style={{marginBottom:'20px'}}>
                <Button variant="primary" type="submit">Send</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
}
