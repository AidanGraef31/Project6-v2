import React, { Component } from 'react';
import $ from "jquery";
import DataTable from "datatables.net";
import Term from './components/Term';
// import { Switch, Route } from 
//import logo from './logo.svg';
import './App.css';
import './jquery.css';
import './datatable.css';
import Banner from './components/Banner';
import Main from './components/Main';

require('jquery-ui/ui/widgets/accordion');

// classes for converting the plan
class Plan {
	constructor(name, catalogYear, major, student, currYear, currTerm) {
		this.name = name;
		this.catalogYear = catalogYear;
		this.major = major;
		this.student = student;
		this.currYear = currYear;
		this.currTerm = currTerm;
		this.courses = [];
		this.years = [];
	}
	addCourse(courseId, name, term, year, hours) {
		var course = new Course(courseId, name, term, year, hours);
		this.courses.push(course);
	}
	isYearPresent(year) {
		for (var i = 0; i < this.years.length; i++) {
			if (this.years[i].year == year) {
				return true;
			}
		}
		return false;
	}

}

class Course {
    constructor(courseId, name, term, year, hours) {
        this.courseId = courseId;
        this.name = name;
        this.term = term;
        this.year = year;
        if (term == "Spring" || term == "Summer") {
            this.effectiveYear = year - 1;
        }
        else {
            this.effectiveYear = year;
        }
        this.hours = hours;
        }
    }

class Year {
    constructor(year) {
        this.year = year;
        this.fall = {};
        this.spring = {};
        this.summer = {};
    }
}


class Semester {
    constructor(term) {
        this.term = term;
        this.course = [];
    }

    calcHours() {
        if (this.course.length == 0) {
            return 0;
        }
        else {
            var hours = 0;
            for (var i = 0; i < this.course.length; i++) {
                hours += this.course[i].hours;
            }
            return hours;
        }
    }
}



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requirements: null,
            plan: null,
            planList: null,
            catalog: null,
        };
    }
    loadNewPlan() {
        fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getCombinedNoSession.php')
            .then(response => response.json())
            .then(
                data => this.setState({ plan: this.convertPlan(data.plan), planList: data.planList, catalog: data.catalog })
            );
        fetch('http://judah.cedarville.edu/~gallaghd/cs3220/ape/getRequirementsNoSession.php')
            .then(response => response.json())
            .then(
                data => this.setState({ requirements: data })
            );
    }


    componentDidMount() {
        this.loadNewPlan();
        $('#catalogTable').DataTable( {
			paging: false,
			info: false,
			destroy: true,
			"scrollY": true,
			"scrollY": "200px",
			"scrollCollapse": true,
			"paging": false,
			"scrollX": false
		});
        $(function() {
            $("#accordion").accordion({
                heightStyle: "content"
            });
        });
        $(document).on("click", ".accordion-toggle", function() {
            if ($(this).attr('class').indexOf('open') == -1)
                $(this).toggleClass("open").next().slideToggle('fast');
            //Hide the other panels
            $(".accordion-toggle").not($(this)).removeClass("open");
            $(".accordion-content").not($(this).next()).slideUp('fast');
        });
    }

    convertPlan(currPlan) {
            var plan = new Plan(currPlan.name, currPlan.currYear, currPlan.major, currPlan.student, currPlan.currYear, currPlan.currTerm);

          // add your code from Proj#2 here
          for (var i = 0; i < currPlan.courses.length; i++) {
            var course = currPlan.courses[i];
            if (!plan.isYearPresent(course.year)) {
                var year = new Year(course.year);
                year.fall = new Semester("Fall");
                year.spring = new Semester("Spring");
                year.summer = new Semester("Summer");
                (plan.years).push(year);
            }
            var yearIndex = 0;
            for (yearIndex; yearIndex < plan.years.length; yearIndex++) {
                var yearObject = plan.years[yearIndex];
                if (yearObject.year == course.year) {
                    break;
                }
            }
            var year = plan.years[yearIndex];
            if (course.term == "Fall") {
                year.fall.course.push(course);
            }
            else if (course.term == "Spring") {
                year.spring.course.push(course);
            }
            else {
                year.summer.course.push(course);
            }
        }
        return plan;
    }



    render() {
        return ( 
            <div className="App" id="main"> 
            { /* <script src="https://code.jquery.com/jquery-1.12.4.js"></script> */ } 
            { /* <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> */ } 
            <script src = "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"> </script>

            <Banner/>
            <Main plan = { this.state.plan } catalog = { this.state.catalog } requirements = { this.state.requirements }/>

            { /*<BannerRight planList={this.state.planList}/> */ } 
            { /*<UpperLeft requirements={this.state.requirements} catalog={this.state.catalog} /> */ }
            { /* <UpperRight plan={this.state.plan} catalog={this.state.catalog}/> */ } 
            { /*<LowerLeft /> */ } { /*<LowerRight catalog={this.state.catalog} /> */ } 
            </div>
        );
    }

}
export default App;