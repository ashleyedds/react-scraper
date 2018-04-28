import React from 'react';
import { Button } from "./";

export const ListItem = props => (
    <li className="collection-item avatar">
    <div className="collection-text">
        <a href={props.url} target="_blank"><span className="title">{props.headline}</span></a>
        <p>{props.summary}<br />
        <span className="collection-byline">{props.byline}</span><br />
        </p>
    </div>
    <Button {...props} />
    </li>
);