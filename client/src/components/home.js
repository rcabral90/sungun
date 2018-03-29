import React from 'react';
import {Jumbotron} from 'react-bootstrap'
import TopNav from './navigation/topNav'
import ListWorkouts from './listing/listWorkouts'
import {connect} from 'react-redux'


const test_array = [{link:'login',name:'hello'},{link:'login',name:'hello'}];

class Home extends React.Component{
  render(){
    return (
        <div>
            <TopNav/>
            <Jumbotron id="main">
                <h1>SunGun</h1>
                <p>
                    Make and share your workouts!
                </p>
            </Jumbotron>
            <ListWorkouts header="Popular Workouts" workouts={test_array}/>
            <ListWorkouts header="Friends Workouts" workouts={test_array}/>
            <ListWorkouts header="Recent Workouts" workouts={test_array}/>
            <ListWorkouts header="Favorite Workouts" workouts={test_array}/>
        </div>
    )
  }
}


export default connect(state => state)(Home)