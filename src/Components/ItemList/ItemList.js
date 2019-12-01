import React from 'react';
import Item from "../Item/Item";
import classnames from 'classnames';
import styles from './ItemList.module.css'



const ItemList = ({ items, onClickDone }) => (<nav><ul>
    {items.map( item =>  <li key ={item.value} className={styles.items}>
        <Item value = { item.value }
              isDone ={ item.isDone }
              onClickDone={onClickDone}
              id = {item.id} />
    </li>)}
</ul></nav>);




export default ItemList

