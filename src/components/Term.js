import React, {Component} from 'react';

class Term extends Component {
	
	render(){
		
        const courseList = this.props.data;
		let courses = Object.entries(courseList).map(([key,value]) => {
		  	const courseName = key+ " " + this.props.catalog.courses[key].name;
		  	return (
				<p>
				{courseName}
				term
				</p>
			);	
		});
		
        return (
		<div class="semester">
			<div className="semHeader">
				{this.props.term}
			</div>
			{courses}
			term
		</div>
	  	);
	}
}
export default Term;