import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + '/profile.jpg'} roundedCircle fluid />
                    </Col>
                    <Col md={6}>
                        <h2>Julien Lemieux</h2>
                        <p>
                            Bonjour, je suis Julien Lemieux, un développeur spécialisé en React et Bootstrap. J'ai travaillé sur de nombreux projets passionnants et j'ai une solide expérience dans le développement de solutions front-end performantes et conviviales.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Home;
