import React from 'react'
import { ListGroupItem, Row, Col } from 'react-bootstrap'

export default function Student(props) {
    return (
        <div>
                <ListGroupItem>
                    <Row className='align-items-center'>
                        <Col className='col-3'>
                                <img src={props.picture} />
                        </Col>
                        <Col className='col-9'>
                            <h3>Student Name :{props.name}</h3>
                            <p> Age : {props.age} / Gender :{props.gender} / Phone Number :{props.phone}</p>
                        </Col>
                    </Row>

                </ListGroupItem>
            
        </div>
    )
}

