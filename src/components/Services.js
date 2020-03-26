import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';


export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Sint ex ullamco culpa ut culpa occaecat in quis."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Sint ex ullamco culpa ut culpa occaecat in quis."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Sint ex ullamco culpa ut culpa occaecat in quis."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: "Sint ex ullamco culpa ut culpa occaecat in quis."
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
