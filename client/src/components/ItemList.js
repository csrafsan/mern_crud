// src/components/ItemList.js
import React from 'react';
import { deleteItem } from '../services/itemService';

const ItemList = ({ items, onEdit, fetchItems }) => {
    const handleDelete = async (id) => {
        await deleteItem(id);
        fetchItems();
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Item List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item._id} className="mb-4 p-4 border rounded shadow-sm flex justify-between items-center">
                        <span>{item.name} - {item.quantity}</span>
                        <div>
                            <button onClick={() => onEdit(item)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
