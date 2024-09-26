import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      addService({ name, description, price });
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Service Name"
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="border p-2 mr-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="border p-2 mr-2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        Add Service
      </button>
    </form>
  );
};

export default AddServiceForm;
