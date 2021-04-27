import React, {Component} from 'react';

class LowerRight extends Component {
	
	render (){
        var catalogCourses = [];
        var catalogArray = [];
        var catalog = "";
        if(this.props.catalog) {
            catalog = this.props.catalog.courses;
            for(var course in catalog) {
                catalogArray.push([course, catalog[course]]);
            }
            catalogCourses = catalogArray.map((value) => {
                return(
                    <tr role="row" class="odd">
                        <td>{value[1].id}</td>
                        <td>{value[1].name}</td>
                        <td>{value[1].credits}</td>
                        <td>{value[1].description}</td>
                    </tr>
                 );
            });
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
                                    {catalogCourses}
                                </tbody>
                        </table>
                        <p>© Not actually copyrighted 2021</p>
                    </div>
            </div>
        );
	}	
}

export default LowerRight;