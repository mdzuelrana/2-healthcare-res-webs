import React, { useState } from 'react';

const UpdateServiceForm = ({ service, index, onUpdateService }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      onUpdateService(index, { name, description, price });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="block w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Update Service
      </button>
    </form>
  );
};

export default UpdateServiceForm;
