// src/components/ItemForm.js
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
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={item.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={item.quantity}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {item._id ? 'Update' : 'Create'}
                </button>
            </div>
        </form>
    );
};

export default ItemForm;
