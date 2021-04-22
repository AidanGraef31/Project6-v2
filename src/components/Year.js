import React, {Component} from 'react';
import Term from './Term';

class Year extends Component {
	
	render (){
	  return (
		<div class="year">
			<h3>{this.props.year}</h3>
			<div class="yearContent">
				<Term catalog={this.props.catalog} data={this.props.data['fa']} term="Fall" />
				<Term catalog={this.props.catalog} data={this.props.data['sp']} term="Spring" />
				<Term catalog={this.props.catalog} data={this.props.data['su']} term="Summer" />
			</div>
		</div>
	  );
	}
}
export default Year;