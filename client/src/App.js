// src/App.js
import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { getItems } from './services/itemService';

const App = () => {
    const [items, setItems] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const items = await getItems();
        setItems(items);
    };

    const handleFormSubmit = () => {
        fetchItems();
        setItemToEdit(null);
    };

    const handleEdit = (item) => {
        setItemToEdit(item);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">MERN Stack CRUD App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ItemForm itemToEdit={itemToEdit} onFormSubmit={handleFormSubmit} />
                <ItemList items={items} onEdit={handleEdit} fetchItems={fetchItems} />
            </div>
        </div>
    );
};

export default App;
