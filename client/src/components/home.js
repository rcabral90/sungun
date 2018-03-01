import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import TopNav from './navigation/TopNav'

const Home = (props) => {
    return (
        <div>
            <TopNav/>
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