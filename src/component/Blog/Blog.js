import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <Container>
            {
                blogs.map(blog =>
                    <Card className="text-center m-5">
                        <Card.Img className="img-fluid" variant="top" src={blog.img} />
                        <Card.Body>
                            <Card.Title>{blog.name}</Card.Title>
                            <Card.Text>
                                {blog.details}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>


                )
            }
        </Container>
    );
};

export default Blog;