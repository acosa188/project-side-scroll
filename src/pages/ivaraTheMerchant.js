import React, { Component } from 'react'
import SiteTemplate from '../components/siteTemplate'
import IvaraImg from '../images/640x360.png'

class IvaraTheMerchant extends Component {
    render() {
        return (
            <div className="ivaraTheMerchantClass">
                <SiteTemplate
                    image={IvaraImg}
                    title="Ivara The Merchant"
                    date="June 13, 2019"
                    summary="Tincidunt integer eu augue augue nunc elit dolor, l
                            uctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, 
                            vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel."
                    problem="Tincidunt integer eu augue augue nunc elit dolor, l
                            uctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, 
                            vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel."
                    languages={["node.js", "javascript", "discord.js"]}
                    gitLink="https://github.com/acosa188/IvaraTheMerchant"
                    planImage={IvaraImg}
                    planSummary="Tincidunt integer eu augue augue nunc elit dolor, l
                            uctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, 
                            vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel."
                />
            </div>    
        );
    }
}

export default IvaraTheMerchant;