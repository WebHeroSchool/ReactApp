import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from  '../Footer/Footer'
import InputItem from "../InputItem/InputItem";
import styles from './App.module.css';
import classnames from 'classnames';

class App extends React.Component {
    state = {
        items: [
                {
                    value: 'Learn from the React module',
                    isDone: true,
                    id: 1,
                },
                {
                    value: 'Hug cat',
                    isDone: true,
                    id: 2,
                },
                {
                    value: 'To drink tea!',
                    isDone: false,
                    id: 3,
                }
        ]
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };
            if (item.id === id) {
                    newItem.isDone = !item.isDone;
                }
            return newItem;
        });
        this.setState({ items: newItemList});
    };

    render() {
        return (
            <html>
            <body className={styles.body}>
            <span className={styles.title}>Todo</span>
            <div className={styles.wrap}>
                <InputItem />
                <ItemList items = {this.state.items} onClickDone={this.onClickDone} />
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