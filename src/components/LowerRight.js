import React, {Component} from 'react';

class LowerRight extends Component {
	
	render (){
        let catalogCourses = [];
        let catalog = "";
        if(this.props.catalog) {
            // catalog = this.props.catalog.courses;
            // for(var i=0; i < catalog.length; i++) {
            //     catalogCourses[i] = catalog.courses[i];
            // }
            // catalogCourses = catalog.map((value, key) => {
            //     return(
            //         <tr role="row" class='odd'>
            //             <td>{key}</td>
            //         </tr>
            //     );
            // });
        }

        return (
            <div id="LR">
                <div id="CourseFinder"> 
                            <div id="FinderHeader">Course Finder</div>
                            <table id="catalogTable" class="display dataTable" width="100%" role="grid">
                                <thead>
                                    <tr role="row">
                                            <th class="sorting" tabindex="0" rowspan="1" colspan="1">Name</th>
                                            <th class="sorting" tabindex="0" rowspan="1" colspan="1">Title</th>
                                            <th class="sorting" tabindex="0" rowspan="1" colspan="1" >Credits</th>
                                            <th class="sorting" tabindex="0" rowspan="1" colspan="1" >Description</th>
                                    </tr>
                                </thead>
                                <tbody id="tableBody">
                                    <tr role="row" id="nameColumn">
                                    <td>oops</td>
                                    </tr>
                                    <tr role="row" id="titleColumn">
                                    <td>oops</td>
                                    </tr>
                                <tr role="row" id="creditsColumn">
                                    <td>oops</td>
                                </tr>
                                </tbody>
                        </table>
                        <p>© Not actually copyrighted 2021</p>
                    </div>
            </div>
        );
	}	
}

export default LowerRight;