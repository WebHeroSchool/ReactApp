import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (
    <span>Вот столько дел ещё осталось сделать: { count }</span>
);

Footer.defaultProps = {
    count: 0
};

Footer.propTypes = {
    count: PropTypes.number
};

export default Footer;