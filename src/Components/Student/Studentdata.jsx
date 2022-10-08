import React, { useState, useEffect } from 'react';
import Student from './Student';
import { Container, ListGroup, Button } from 'react-bootstrap';

export default function Studentdata() {

    const [StudentList, setStudentList] = useState([]);
    const [urldat, setUrldata] = useState(new Date());

    useEffect(() => {
        fetch('https://randomuser.me/api').then(Response => {
            return Response.json();
        }).then(responsedata => {
            console.log(responsedata);
            setStudentList((StudentList) => [...StudentList, responsedata.results[0]]);
        })
    }, [urldat])


    const Displaydata = () => {
        return StudentList.map((values, index) => {
            return (
                <Student
                    key={index}
                    name={`${values.name.first} ${values.name.last}`}
                    phone={values.phone}
                    age={values.age} gender={values.gender}
                    picture={values.picture.medium}
                />
            )
        })
    }

    const addnewStudent = () => {
        // const NewDAta = {
        //     name: { first: 'Nisal', last: 'chamara' },
        //     phone: '04444444',
        //     age: 20,
        //     gender: 'male'
        // }
        setUrldata(new Date());
        //console.log(NewDAta);
        //setStudentList((StudentList) => [...StudentList, NewDAta]);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Student List</h1>
            <Container>
                <Button onClick={addnewStudent}>Add new Student</Button>
                <br/>
                <br/>
                <ListGroup>
                    {Displaydata()}
                </ListGroup>
            </Container>
        </div>
    )
}
