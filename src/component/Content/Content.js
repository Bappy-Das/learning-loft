import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Content.css'
import Banner from '../Banner/Banner';
import useCourse from '../../hooks/useCourse';
import Course from '../Course/Course';


const Content = () => {
    const [courses] = useCourse()
    // const [courses, setCourse] = useState([]);
    // useEffect(() => {
    //     fetch('./data.JSON')
    //         .then(res => res.json())
    //         .then(data => setCourse(data))
    // }, [])
    const data = courses.slice(0, 3);

    console.log(data)
    return (

        <div>
            <Banner></Banner>
            <h1 className="fw-bold mt-5 p-5"><span>Our Course</span> <br /> Featured Courses</h1>
            <Container className="mb-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        data.map(course => <Course course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Content;