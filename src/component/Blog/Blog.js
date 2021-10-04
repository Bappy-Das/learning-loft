import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    // blog.json file contaiend blog data
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <Card className="text-white blog-head mx-auto ">
                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0-aLZwLVFr2BY4Y2yq0snUhzsHVe0ce6OezpPfBF8cZVdG29OtS5v5scstlRFm29Fr4&usqp=CAU" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="text-center">
                        <h1>BLOG</h1>
                    </Card.Title>


                </Card.ImgOverlay>
            </Card>
            <Container className="blog">
                <Row xs={1} md={2} className="g-5 m-2">
                    {
                        blogs.map(blog =>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body>
                                        <Card.Title>{blog.name}</Card.Title>
                                        <Card.Text>
                                            {blog.details.slice(0, 200)}.....
                                        </Card.Text>
                                        <p>Category : {blog.category}</p>
                                    </Card.Body>
                                    <a className="ms-auto p-4" href="/">Read more</a>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blog;







