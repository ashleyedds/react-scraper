import React from "react";

export const Button = props => {
    return (
    <button
        className="btn-primary"
        onClick={() => 
        props.click({
        _id: props._id,
        url: props.url,
        headline: props.headline,
        summary: props.summary,
        byline: props.byline,
        image: props.image,
        })}>
        <i
        className="material-icons"
        title={props.title}>
            {props.icon}
        </i>
    </button>
    );
};