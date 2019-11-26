import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from  '../Footer/Footer'
import InputItem from "../InputItem/InputItem";
import styles from './App.module.css';
import classnames from 'classnames';


const App = () => {

    const items = [
        {value: 'Начать изучать React', isDone: true},
        {value: 'Попробовать написать первое приложение', isDone: true},
        {value: 'Дойти до финальной работы', isDone: false}
    ];

   return ( <div className={styles.wrap}>
        <h1 className={styles.title}>Hello!</h1>
        <InputItem />
        <ItemList items = {items}/>
        <Footer count = {1} />
    </div>);
}
export default App;