import React from 'react';
import { Button } from "./";
import "./List.css";

export const ListItem = props => (
    <li className="collection-item avatar">
    <div className="collection-text">
        <a href={props.url} target="_blank"><span className="title">{props.headline}</span></a>
        <p>{props.summary}<br />
        <br />
        </p>
    </div>
    <Button {...props} />
    </li>
);