import React, {Component} from 'react';
import UpperRight from './UpperRight';
import LowerRight from './LowerRight';

class Right extends Component {
	constructor(props) {
		super(props);
	}

  render(){
	  return (
		<div className="main" id="Right">
            <UpperRight plan={this.props.plan} catalog={this.props.catalog} />
            <LowerRight plan={this.props.plan} catalog={this.props.catalog} />
		</div>
	  );
	}

}
export default Right;