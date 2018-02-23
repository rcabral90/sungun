import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class MuscleGroups extends Component {

  state = {
    selectedMuscles: ''
  }

alertClicked() {
  alert('You clicked the third ListGroupItem');
}

  render(){
    return (
      <ListGroup>
      <ListGroupItem onClick={this.alertClicked}>Trigger an alert</ListGroupItem>
      <ListGroupItem onClick={this.alertClicked}>Trigger an alert</ListGroupItem>
      <ListGroupItem onClick={this.alertClicked}>Trigger an alert</ListGroupItem>
    </ListGroup>
    )
  }
}

export default MuscleGroups;
