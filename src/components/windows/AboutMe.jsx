import React from "react";

const AboutMe = () => {
    return <div style={{ padding: '1rem', maxWidth: '650px', 'lineHeight': 1.5 }}>
        <h3>About Me</h3>
        <ul>
            <li>
                <span>Name: </span> Nicole Cayambas
            </li>
            <li>
                <span>Home: </span> Baguio City, Philippines
            </li>
            <li>
                <span>Education: </span> BS Information Technology - University of the Cordilleras
            </li>
        </ul>

        <div style={{ marginTop: '3rem' }}>
            <p>Building web applications for over 4 years now. Likes both graphics/frontend and backend side of things. Always looking for opportunities to better myself in every role i take.</p>
        </div>
    </div>;
};

export default AboutMe;
