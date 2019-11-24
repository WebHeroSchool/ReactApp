import React from 'react';
import ItemList from '../ItemList/ItemList'
import Footer from  '../Footer/Footer'
import Item from "../Item/Item";

const App = () => {

    const items = [
        {value: 'Написать новое приложение'},
        {value: 'Выучить и понять React'},
        {value: 'Найти работу'}
    ];

   return ( <div>
        <h1>Hello!</h1>
        <ItemList items = {items}/>
        <Footer count = {3} />
    </div>);
}
export default App;