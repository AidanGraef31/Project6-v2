import React, {Component} from 'react';
import Left from './Left';
import Right from './Right';

class Main extends Component {
	constructor(props) {
		super(props);
	}

  render(){
	  return (
		<div className="main" id="main">
            <Left requirements={this.props.requirements} catalog={this.props.catalog} />
            <Right plan={this.props.plan} catalog={this.props.catalog} />
		</div>
	  );
	}

}
export default Main;