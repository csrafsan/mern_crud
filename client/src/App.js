import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
    const [itemToEdit, setItemToEdit] = useState(null);

    const handleEdit = (item) => {
        setItemToEdit(item);
    };

    const handleFormSubmit = () => {
        setItemToEdit(null);
    };

    return (
        <div>
            <h1>MERN Stack CRUD App</h1>
            <ItemForm itemToEdit={itemToEdit} onFormSubmit={handleFormSubmit} />
            <ItemList onEdit={handleEdit} />
        </div>
    );
};

export default App;
