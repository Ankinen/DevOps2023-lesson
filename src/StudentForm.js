// Student form
import React, { useState } from "react";

export const StudentForm = ({ original, onSubmit }) => {
    const [student, setStudent] = useState(original);
    const handleChange = ({ target }) =>
        setStudent((student) => ({ ...student, [target.name]: target.value }));

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(student);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input 
                type="text" 
                name="firstName"
                id="firstName"
                value={student.firstName}
                onChange={handleChange} />
            <label htmlFor="lastName">Last name</label>
            <input 
                type="text" 
                name="lastName"
                id="lastName"
                value={student.lastName} 
                onChange={handleChange} />
            <label htmlFor="studentNumber">Student number</label>
            <input 
                type="text" 
                name="studentNumber"
                id="studentNumber"
                value={student.studentNumber} 
                onChange={handleChange} />
            <input type="submit" value="Add" />
        </form>
    );
};
