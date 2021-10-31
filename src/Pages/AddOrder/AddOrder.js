import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Col, Container, Row} from 'react-bootstrap';
import AddOrderBanner from './AddOrderBanner';
import './Order.css';

const AddOrder = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      axios.post('http://localhost:5000/destination', data)
      .then(res => {
          console.log(res);
          if(res.data.insertedId){
              alert('Added Data Successfully');
              reset();
          }
      })
    };
    return (
        <div>
            <AddOrderBanner></AddOrderBanner>
            <Container>
                <Row>
                    <Col>
                        <h6 className="inner-page-tag text-center">Trip Travels</h6>
                        <h3 className="inner-page-head text-center">Add Destination</h3>
                    </Col>
                </Row>
                <Row className="add-destination">
                    <Col>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", {required: true , maxLength:30 })}  placeholder="Name" />
                        <input {...register("price")} placeholder="Price" />
                        <input {...register("img")} placeholder="Img URL" />
                        <textarea {...register("description", { required: true })} placeholder="description" />
                        <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddOrder;