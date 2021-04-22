import React, {Component} from 'react';
import UpperLeft from './UpperLeft';

class Left extends Component {
	constructor(props) {
		super(props);
	}

  render(){
	  return (
		<div className="main" id="Left">
            <UpperLeft requirements={this.props.requirements} catalog={this.props.catalog} />
		</div>
	  );
	}

}
export default Left;