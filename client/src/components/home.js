import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import Top_nav from './navigation/top_nav'

const Home = (props) => {
    return (
        <div>
            <Top_nav/>
            <Jumbotron id="main">
                <h1>SunGun</h1>
                <p>
                    Make and share your workouts!
                </p>
                <p>
                    <Button bsStyle="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Home;