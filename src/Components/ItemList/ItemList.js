import React from 'react';
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

export default ItemList;

