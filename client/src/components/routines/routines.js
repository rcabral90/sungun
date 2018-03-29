import React, {Component} from 'react';
import {Table, PageHeader} from 'react-bootstrap';
import RoutinesList from './routinesList';

import './routines.css';

class Routines extends Component{

	render(){
		const wData = [
			{
				exercise: 'Name 1',
				reps: '15',
				sets: '3',
				weight: '40',
				rest: '3'
			},
			{
				exercise: 'Name 2',
				reps: '10',
				sets:'4',
				weight:'--',
				rest: '2'
			},
			{
				exercise: 'Name 3',
				reps: '20',
				sets:'1',
				weight: '15',
				rest: '--'
			}
		]
		const date = new Date();
		const dateStr = date.toLocaleDateString();
		const routinesList = wData ? wData.map((workout,idx)=>{
			return <RoutinesList key={idx} index={idx} workoutData={workout}/>
		}):'';

		return(
			<div className='container-fluid'>
				<PageHeader className='routinesHeader'>
					Workout Sheet <small>{dateStr}</small>
				</PageHeader>
				<div className='container-fluid'>
					<Table striped responsive condensed bordered hover>
						<thead>
							<tr>
								<th className='text-center'>Exercise</th>
								<th className='text-center'>Reps #</th>
								<th className='text-center'>Sets #</th>
								<th className='text-center'>Weight (lb.)</th>
								<th className='text-center'>Rest Time</th>
							</tr>
						</thead>
						<tbody>
							{routinesList}
						</tbody>
					</Table>
				</div>
			</div>
		)

	}
}

export default Routines;