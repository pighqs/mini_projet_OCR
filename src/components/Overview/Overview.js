import React, { Fragment } from 'react';
import Rating from 'react-rating';

import CircleDisplay from '../CircleDisplay/CircleDisplay';
import './Overview.css';

const Overview = (props) => {
    const { difficulty, cost, prepTime, cookTime, restTime } = props.overview;

    return (
            <Fragment>
                <h2 className="subtitle">Overview</h2>
                <div className="overview">
                    <div className="overview-subsection difficulty">  
                        <Rating className="rating-stars" initialRating={difficulty} readOnly  emptySymbol={["far fa-star"]} fullSymbol={['fas fa-star']}/>
                        <span className="overview-sub-name">Difficulty</span>
                    </div>
                    <div className="overview-subsection cost">  
                        <CircleDisplay unit="euros" val={cost} className="overview-circle"/>
                        <span className="overview-sub-name">Cost</span>
                    </div>
                    <div className="overview-subsection prep-time">  
                        <CircleDisplay unit="time" val={prepTime} className="overview-circle"/>
                        <span className="overview-sub-name">Preparation Time</span>
                    </div>
                    <div className="overview-subsection cook-time">  
                        <CircleDisplay unit="time" val={cookTime} className="overview-circle"/>
                        <span className="overview-sub-name">Cooking Time</span>
                    </div>
                    <div className="overview-subsection rest-time">  
                        <CircleDisplay unit="time" val={restTime} className="overview-circle"/>
                        <span className="overview-sub-name">Resting Time</span>
                    </div>
                </div>
                

            </Fragment>
            );
}
export default Overview;

