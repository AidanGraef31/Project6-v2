import React, { Component } from 'react';
import $ from "jquery";
import Term from './components/Term';
// import { Switch, Route } from 
//import logo from './logo.svg';
import './App.css';
import './jquery.css';
import './datatable.css';
import Banner from './components/Banner';
import Main from './components/Main';

require('jquery-ui/ui/widgets/accordion');

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
        //      // add your code from Proj#2 here
    }

    //     class Course {
    //       constructor(courseId, name, term, year, hours) {
    //         this.courseId = courseId;
    //         this.name = name;
    //         this.term = term;
    //         this.year = year;
    //         if (term == "Spring" || term == "Summer") {
    //           this.effectiveYear = year - 1;
    //         }
    //         else {
    //           this.effectiveYear = year;
    //         }
    //         this.hours = hours;
    //       }
    //     }

    //     class Year {
    //       constructor(year) {
    //         this.year = year;
    //         this.fall = {};
    //         this.spring = {};
    //         this.summer = {};
    //       }
    //     }

    //     class Semester {
    //       constructor(term) {
    //         this.term = term;
    //         this.course = [];
    //       }

    //       calcHours() {
    //         if (this.course.length == 0) {
    //           return 0;
    //         }
    //         else {
    //           var hours = 0;
    //           for (var i = 0; i < this.course.length; i++) {
    //             hours += this.course[i].hours;
    //           }
    //           return hours;
    //         }
    //       }
    //     } 
    //  }



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