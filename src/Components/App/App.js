import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from  '../Footer/Footer'
import InputItem from "../InputItem/InputItem";
import styles from './App.module.css';
import classnames from 'classnames';

class App extends React.Component {
    state = {
        items: [
            {value: 'Learn from the React module', isDone: true},
            {value: 'Hug cat', isDone: true},
            {value: 'To drink tea!', isDone: false}
        ]
    };

    render() {

        return (
            <html>
            <body className={styles.body}>
            <span className={styles.title}>Todo</span>
            <div className={styles.wrap}>
                <InputItem />
                <ItemList items = {this.state.items}/>
                <div className={styles.button_wrap}>
                    <button className={styles.allTasks + ' ' + styles.button}>All Tasks: {3}</button>
                    <button className={styles.incomplete + ' ' + styles.button}>Incomplete: {1}</button>
                    <button className={styles.complete + ' ' + styles.button}>Complete: {2}</button>
                </div>
            </div>
            </body>
            </html>
        );
    }
}

export default App;