import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import contactImg from '../assets/img/contact-img.svg';
import field from '../assets/img/home.jpg';
import SirenScripts from './SirenScripts';
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import Panel from './Panel';

interface FormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const formDefault: FormData = {
    name: '',
    phone: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(formDefault);
  const [buttonText, setButtonText] = useState<string>('Get in Touch');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, phone, subject, message } = formData;
        const phoneRegex = /^[0-9]{10}$/;

        if (!name || !phone || !subject || !message) {
            toast.error("All fields are required!", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            transition: Bounce,
            });
            return;
        }

        if (!phoneRegex.test(phone)) {
            toast.error("Please enter a valid phone number.", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            transition: Bounce,
            });
            return;
        }

        setButtonText('Sending...');

        try {
            const response = await fetch('https://crypts.vercel.app/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            });

            const result = await response.json();
            setButtonText('Get in Touch');
            setFormData(formDefault);

            if (result.code === 200) {
                toast.success("Thanks! We've received your message and will be in touch shortly.", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                transition: Bounce,
            });
            } else {
            throw new Error();
            }
        } catch {
            setButtonText('Get in Touch');
            toast.error("Oops! Something went wrong. Please try again or call us directly.", {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
            transition: Bounce,
            });
        }
    };
    return (
        <div style={{
            backgroundImage: `url(${field})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            // overflow: 'hidden', 
            color: '#000',
            display: 'flex',
            // flexDirection: 'column',
        }}>
            <SirenScripts />
            <Container className='contact'>
                <Row>
                    <Col md={6}>
                        <Row>
                            <h3 style={{ fontWeight: 'bold' }}>
                                Experience Premium Dry Cleaning – Get in Touch With Us!
                            </h3>
                            <p>
                                Have questions, need a pickup, or want to know more about our services? Our team is here to help – we’ll respond within 24 hours or less!
                            </p>
                        </Row>
                        <form style={{marginTop: '10px'}} onSubmit={handleSubmit}>
                            <Row>
                            <Col sm={4} className='px-1'>
                                <input
                                type="text"
                                placeholder='*Full Name'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </Col>
                            <Col sm={4} className='px-1'>
                                <input
                                type="tel"
                                placeholder='*Phone Number'
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </Col>
                            <Col sm={9} className='px-1'>
                                <input
                                type="text"
                                placeholder='*Subject (e.g., Pickup Request, Service Inquiry)'
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </Col>
                            <Col sm={12} className='px-1'>
                                <textarea
                                    rows={7}
                                    placeholder="Tell us how we can help – whether it's a stain, a schedule, or a special request!"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col md={6}>
                        <Panel />
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    );
};

export default Contact;
