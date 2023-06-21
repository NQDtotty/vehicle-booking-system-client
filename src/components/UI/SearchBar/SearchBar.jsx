import React from 'react';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import './searchBar.css';

export default function SearchBar() {
    return (
        <Container>
            <Form className='search-bar'>
                <Row className='d-flex align-items-center justify-content-between'>
                    <Col lg="3" md="4" sm="12">
                        <FormGroup className='d-flex p-1 gap-3 form-group justify-content-center'>
                            <span>
                                <i className="ri-map-pin-line"></i>
                            </span>
                            <div>
                                <h6>From</h6>
                                <select className='form-select'>
                                    <option selected>Select Place</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <FormGroup className='d-flex p-1 gap-3 form-group justify-content-center'>
                            <span>
                                <i className="ri-map-pin-line"></i>
                            </span>
                            <div>
                                <h6>To</h6>
                                <select className='form-select'>
                                    <option selected>Select Place</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="3" md="4" sm="12">
                        <FormGroup className='d-flex p-1 gap-3 form-group justify-content-center'>
                            <span>
                                <i className="ri-time-line"></i>
                            </span>
                            <div>
                                <h6>Date</h6>
                                <input className='form-control' type='date' />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col lg="3" md="12" sm="12" className='d-flex justify-content-center'>
                        <button className='btn search-btn d-flex gap-1' type="submit">
                            Search
                            <i className="ri-search-line"></i>
                        </button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
