import React, {Component} from 'react';
import Year from './Year';

class UpperRight extends Component {
	
	render (){
	  var yrs = "";
	  if (this.props.plan && this.props.plan.years) {
		 yrs = this.props.plan.years.map((value, key) => {
		  return (
				<Year catalog={this.props.catalog} year={value.year} data={value} />
			);		
	  });
	  }
	  return (
		<div id="UR">
			<div id="plan">
				{yrs}
			</div>
		</div>
	  );
	}	
}

export default UpperRight;