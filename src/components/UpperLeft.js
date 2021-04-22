import React, {Component} from 'react';
// import "../jquery.css"

class UpperLeft extends Component {
	constructor(props) {
		super(props);
	}

    render(){
        let core = "hi mom";
        let electives = "hi dad";
        let cognates = " hi parents";
        let coreCourses = "";
        let electivesCourses = "";
        let cognatesCourses = "";
        if(this.props.requirements) {
            core = this.props.requirements.categories["Core"].courses;
            electives = this.props.requirements.categories["Electives"].courses;
            cognates = this.props.requirements.categories["Cognates"].courses;

            coreCourses = core.map((value) => {
                return(
                    <div class='innerAccordion'>
                        <li>{value}</li>
                    </div>
                );
            });

            electivesCourses = electives.map((value) => {
                return(
                    <div class='innerAccordion'>
                        <li>{value}</li>
                    </div>
                );
            });

            cognatesCourses = cognates.map((value) => {
                return(
                    <div class='innerAccordion'>
                        <li>{value}</li>
                    </div>
                );
            });
        };
            return (
                <div id="UL">
                    <div className="main" id="accordion">
                        <h3>Core</h3>
                        <div>
                            <span id="coreTab">
                                {coreCourses}
                            </span>
                        </div>
                        <h3>Electives</h3>
                        <div>
                            <span id="electivesTab">
                                {electivesCourses}
                            </span>				
                        </div>
                        <h3>Cognates</h3>
                        <div>
                            <span id="cognatesTab">
                                {cognatesCourses}
                            </span>
                        </div>
                    </div>
                </div>
            );
	}

}
export default UpperLeft;