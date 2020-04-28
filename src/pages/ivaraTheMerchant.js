import React, { Component } from 'react'
import SiteTemplate from '../components/siteTemplate'
import IvaraImg from '../images/ivaraDiscord.PNG'
import IvaraPlan from '../images/IvaraTheMerchantPlan.png'

class IvaraTheMerchant extends Component {
    render() {
        return (
            <div className="ivaraTheMerchantClass">
                <SiteTemplate
                    image={IvaraImg}
                    title="Ivara The Merchant"
                    date="June 13, 2019"
                    summary="Ivara the merchant is a discord bot that takes advantage of warframe market open api,
                            to query the cheapest items in game, buy it and create profit."
                    problem="Most multiplayer online games, in game money plays a big role on how strong the character
                    can be. Players can use in game money to buy other player's services like crafting gears or
                    simply purchasing the materials needed for crafting. The problem is, how to make in game money fast?
                    The game provided a public api for the game's market. It lets users query the market place and gives
                    information about the sellers and buyers. It even lets its user query the normal prices for each items."
                    languages={["node.js", "javascript", "discord.js"]}
                    gitLink="https://github.com/acosa188/IvaraTheMerchant"
                    planImage={IvaraPlan}
                    planSummary="The plan is to create a bot that takes advantage of this public api to query those items that are cheaper than the 
                    original price. The bot then grabs the buyer's information for the user to chat them in-game and purchase those items. Simple yet
                    effective. The main problem I see is that chatting with those buyers takes time and effort for the users. In the future features, I
                    would like to add an automagic way to let the bot chat the buyers and just notify the users if the transactions are ready."
                />
            </div>    
        );
    }
}

export default IvaraTheMerchant;