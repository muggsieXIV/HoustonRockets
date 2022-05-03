import React from 'react';
import rocketPlayers from '../../media/images/rocketPlayers.png';

const Tickets = () => {

    return (
        <div className="tickets">
            <img src={rocketPlayers} alt="Buy Tickets" />
            <div className="tickets-promo">
                <h3>Launch off your Rocket experience</h3>
                <div className="ticket-links">
                    <a href="https://nba.com/rockets/tickets/season-tickets" target="blank">Season Tickets</a>
                    <a href="https://nba.com/rockets/tickets/suites" target="blank">Suites</a>
                    <a href="https://nba.com/rockets/tickets/premium-seating" target="blank">Premium Seating</a>
                    <a href="https://nba.com/rockets/tickets/partial-plans" target="blank">Partial Plans</a>
                    <a href="https://www.toyotacenter.com/teams/detail/houston-rockets?uuid=null" target="blank">Single Games</a>
                    <a href="https://nba.com/rockets/tickets/groups" target="blank">Group Tickets</a>
                </div>
            </div>
            <div className="social-block">
                <h3>Stay in the action Follow and Subscribe today</h3>
                <div className="social-links">
                    <h1><a target="blank" href="https://www.facebook.com/houstonrockets/"><i className="fab fa-facebook-square"></i></a></h1>
                    <h1><a target="blank" href="https://www.instagram.com/houstonrockets/?hl=en"><i className="fab fa-instagram-square"></i></a></h1>
                    <h1><a target="blank" href="https://twitter.com/HoustonRockets"><i className="fab fa-twitter-square"></i></a></h1>
                    <h1><a target="blank" href="https://www.youtube.com/channel/UCVD7l69MVGFq_wzQvbk9HbQ"><i className="fab fa-youtube-square"></i></a></h1>
                </div>
            </div>
        </div>
    );
}

export default Tickets;
