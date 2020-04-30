import React, { Component } from 'react'
import SiteTemplate from '../components/siteTemplate'
import EasyGradingPic from '../images/easyGrading.png'
import EasyGradingPlan from '../images/easyGradingPlan.png'

class EasyGrading extends Component {
    render() {
        return (
            <div className="easyGradingClass">
                <SiteTemplate
                    image={EasyGradingPic}
                    title="Easy Grading"
                    date="December 1, 2019"
                    summary="Easy Grading is an online grade calculator for students to calculate and keep track of their grades along the semester."
                    problem="Most students calculate their grades on each courses throughout the semester. It is a way to keep track of their current 
                    individual standings and to know what range of grade they need for the upcoming quiz, exams or assignments. The only way a student
                    would get this information today is to manually calculate their grade based on the evaluation sheet found on the course outline since
                    the school system doesn't provide any feature like this. Thus we decided to implement an application that will automate this process."
                    languages={["mvc", "razor", "c#", "mysql"]}
                    gitLink="https://github.com/lynnnnaa/easyGrading"
                    planImage={EasyGradingPlan}
                    planSummary="There are two parts of for this application to work. The first task is to create a logging/registration interface to 
                    determine each user's access control and redirect them to their assigned user interface. The application needs to know what access
                    control the user have. This is could be either STUDENT or PROFESSOR access.Next is to create two user interfaces. The professor interface
                    should have the ability to create or modify the course evaluation information. The student interface should be the focus of all the workloads.
                    This should have all the functionality mentioned in the goal section and more features to be added if time allows."
                />
            </div>
        );
    }
}

export default EasyGrading;