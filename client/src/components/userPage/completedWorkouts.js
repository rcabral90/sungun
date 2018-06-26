import React from 'react';
import {Grid, Row, Col, PageHeader, Well, ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';

const completedWell = (workoutData) =>{
	const {exercise, date, duration} = workoutData;
	const glyphStyle = {
		'margin-right' : '7.5px' 
	};

	return(
		<Col xs={12} sm={6} md={4}>
			<Well bsSize='small' header={exercise}>
				<ListGroup>
					<ListGroupItem>
						<Glyphicon glyph='ok-circle' className='text-success' style={glyphStyle}/>
						<span className='hidden-xs text-success'>Routine: </span>
						<strong>
							{exercise}
						</strong>
					</ListGroupItem>
					<ListGroupItem>
						<Glyphicon glyph='calendar' className='text-info' style={glyphStyle}/>
						<span className='hidden-xs text-info'>Date Completed: </span>
						{date}
					</ListGroupItem>
					<ListGroupItem>
						<Glyphicon glyph='time' className='text-info' style={glyphStyle}/>
						<span className='hidden-xs text-info'>Duration: </span>
						{duration}
					</ListGroupItem>
				</ListGroup>
			</Well>
		</Col>
	)
}

const CompletedWorkouts = (props) =>{
	const date = new Date();
	const dateStr = date.toLocaleDateString();
	// const userName = this.props.userName;
	const userName = 'User Name';

	const compWorkout = [
		{
			exercise: 'Name 1',
			date: '12/31/1969',
			duration: '30 min'
		},
		{
			exercise: 'Name 2',
			date: '12/31/1969',
			duration: '15 min'
		},
		{
			exercise: 'Name 3',
			date: '12/31/1969',
			duration: '20 min'
		},
		{
			exercise: 'Name 4',
			date: '12/31/1969',
			duration: '10 min'
		},
		{
			exercise: 'Name 5',
			date: '12/31/1969',
			duration: '40 min'
		}
	];

	const completedList = compWorkout ? compWorkout.map((data, idx)=>{
		return completedWell(data);
	}): 'No completed workouts to show';

	return(
		<Grid>
			<PageHeader>
				{userName}'s Workouts Completed <Glyphicon glyph='ok'className='text-success'/>
				<small>{dateStr}</small>
			</PageHeader>
			<Row className='completedWellRow'>
				{completedList}
			</Row>
		</Grid>
	)
}

export default CompletedWorkouts;