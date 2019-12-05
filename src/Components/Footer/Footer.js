import React from 'react';

const Footer = ({ count }) => (
    <span>Вот столько дел ещё осталось сделать: { count }</span>
);

Footer.defaultProps = {
    count: 0
};

export default Footer;