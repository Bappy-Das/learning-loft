import { Row, Container } from 'react-bootstrap';
import useCourse from '../../hooks/useCourse';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const [courses] = useCourse();
    // console.log(courses)

    return (
        <div className="mb-4">
            <Container className="my-5">
                <Row xs={1} md={3} className="g-4">

                    {
                        courses.map(course => <Course course={course}></Course>)
                    }

                </Row>
            </Container>
        </div>

    );
};

export default Services;


