import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaDumbbell} from 'react-icons/fa';
import Title from './Title';


export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Choose from a variety of snacks and beverages at our nightly receptions."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Discover the treasures of our island and book your own free guide tour."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Shuffles to the airport, downtown and the beach every day from 5am to 11pm."
            },
            {
                icon: <FaDumbbell />,
                title: "Free Fitness Club",
                info: "Enjoy our fitness club opened 24/7 with the latest technologies."
            }
        ]
    };
    render() {
        return (
            <section className="services">
            <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>   
                        );    
                    })}
                </div>
            </section>
        );
    }
}
