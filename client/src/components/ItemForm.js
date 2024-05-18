import React, { useState, useEffect } from 'react';
import { createItem, updateItem } from '../services/itemService';

const ItemForm = ({ itemToEdit, onFormSubmit }) => {
    const [item, setItem] = useState({ name: '', quantity: '' });

    useEffect(() => {
        if (itemToEdit) {
            setItem(itemToEdit);
        } else {
            setItem({ name: '', quantity: '' });
        }
    }, [itemToEdit]);

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (item._id) {
            await updateItem(item._id, item);
        } else {
            await createItem(item);
        }
        onFormSubmit();
        setItem({ name: '', quantity: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">{item._id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default ItemForm;
