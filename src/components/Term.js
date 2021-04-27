import React, {Component} from 'react';

class Term extends Component {
	
	calcHours() {
		if (this.props.data.course.length == 0) {
			return 0;
		}
		else {
			var hours = 0;
			for (var i = 0; i < this.props.data.course.length; i++) {
				var courseId = this.props.data.course[i].id;
				hours += parseInt(this.props.catalog.courses[courseId].credits);
			}
			return hours;
		}
	}

	render(){
		
        const courseList = this.props.data.course;
		let courses = Object.entries(courseList).map(([key,value]) => {
		  	const courseName = value.id + " " + this.props.catalog.courses[value.id].name;
		  	return (
				<span>
					{courseName}
					<br></br>
				</span>
			);	
		});
		
        return (
		<div class="sem">
			<div className="semesterYear">
				{this.props.term} {this.props.year} | Hours: {this.calcHours()}
			</div>
			<div className="semesterClasses">
				{courses}
			</div>
		</div>
	  	);
	}
}
export default Term;