// import React from 'react';

import { useEffect, useState } from "react";

const useCourse = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return [courses];

};

export default useCourse;