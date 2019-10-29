import React from "react";
import Posts from "./Posts"
import Form from "./Form";


const Homepage = () => (
    <div>
        <h2>Homepage</h2>
        <Posts />
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
    </div>
);

export default Homepage;