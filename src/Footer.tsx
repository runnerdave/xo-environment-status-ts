import * as React from 'react';

const logo = require('./logo.svg');

export interface Props {
    title: string;
}

const Footer = (props: Props) => {
    return (
        <footer className="app-footer">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="app-title">{props.title}</h1>
        </footer>
    );
};

export default Footer;