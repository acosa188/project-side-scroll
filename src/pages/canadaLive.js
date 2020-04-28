import React, { Component } from 'react'
import SiteTemplate from '../components/siteTemplate'
import canadaLive from '../images/canadaLive.PNG'
import canadaLivePlan from '../images/canadaLivePlan.png'

class CanadaLive extends Component {
    render() {
        return (
            <div className="canadaLiveClass">
                <SiteTemplate
                    image={canadaLive}
                    title="Canada Live"
                    date="January 10, 2019"
                    summary="Canadalive is an interactive map application that displays the number of tax return completed in the current year and 
                    compared to last year's tax return. The information can be drilled down to region, district and locations. The application
                    displays green if the qouta is met and red or yellow if it still not met the qouta."
                    problem="Companies want an application that tracks their progress over the year. The problem is that the current application
                    is outdated that users needs to refresh the page to update the details. The previous application also only have
                    the region details."
                    languages={["sql server", "node.js", "react.js","leaflet.js","redux.js","saga.js","css"]}
                    planImage={canadaLivePlan}
                    planSummary="The plan is to create a single page application that automagically updates every x minutes. Not only that, the application
                    also needs to utilize the district and office location details and create an interactive map. Fortunately, there is a free
                    interactive map javascript library called leaflet. The only work that I need is to create a back-end that retrieves region,
                    district and office details for the leaflet map to use. Lastly to wrap things up, I used bootstrap make things pretty and responsive
                    to all devices."
                />
            </div>    
        );
    }
}

export default CanadaLive;