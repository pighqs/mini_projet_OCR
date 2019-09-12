import React, { Fragment } from 'react';
import './Presentation.css';

const Presentation = (props) => {
    const { title, description } = props;

    return (
            <Fragment>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
            </Fragment>
            );
}
export default Presentation;
