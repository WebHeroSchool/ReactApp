import React from 'react';
import PropTypes from 'prop-types';
import Item from "../Item/Item";
import classnames from 'classnames';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<nav><ul>
    {items.map( item =>  <li key ={item.value} className={styles.items}>
        <Item value = { item.value }
              isDone ={ item.isDone }
              id = {item.id}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
        />
    </li>)}
</ul></nav>);

ItemList.defaultProps = {
    value: 'Our goal is to conquer the world!',
    isDone: true,
};

ItemList.propTypes = {
    isDone: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default ItemList;

