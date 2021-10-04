import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Content.css'
import Banner from '../Banner/Banner';
import useCourse from '../../hooks/useCourse';
import Course from '../Course/Course';


const Content = () => {
    // Home component

    const [courses] = useCourse()
    const data = courses.slice(0, 4);
    return (

        <div>
            <Banner></Banner>
            <h1 className="fw-bold mt-5 p-5"><span>Our Course</span> <br /> Featured Courses</h1>
            <Container className="mb-5">
                <Row xs={1} md={4} className="g-4">
                    {
                        data.map(course => <Course
                            key={course.id}
                            course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Content;