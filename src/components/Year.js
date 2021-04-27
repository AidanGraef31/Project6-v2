import React, {Component} from 'react';
import Term from './Term';

class Year extends Component {
	
	render (){
	  return (
		<div class="year">
			<h3>{this.props.year}</h3>
			<div class="year">
				<Term catalog={this.props.catalog} data={this.props.data['fall']} term="Fall" year={this.props.year} />
				<Term catalog={this.props.catalog} data={this.props.data['spring']} term="Spring" year={this.props.year} />
				<Term catalog={this.props.catalog} data={this.props.data['summer']} term="Summer" year={this.props.year} />
			</div>
		</div>
	  );
	}
}
export default Year;