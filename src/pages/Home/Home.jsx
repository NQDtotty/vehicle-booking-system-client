import React from 'react';
import Helmet from '../../components/Helmet/Helmet';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import { Col, Container, Row } from 'reactstrap';
import './home.css';

export default function Home() {
    return (
        <Helmet title="Home">
            {/* Introduction section */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className='intro-content pt-5'>
                                <h2 className='text-center'>Welcome to Vehicele Booking System</h2>
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor corrupti repellat quam eveniet possimus laudantium, temporibus id, tempora quasi debitis quo aliquid distinctio reprehenderit rerum illo aliquam, minima voluptate.</p>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className='intro-img'>
                                <img src='/images/introduction.png' alt="intro-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Search bar */}
            <section>
                <SearchBar></SearchBar>
            </section>
        </Helmet>
    )
}
