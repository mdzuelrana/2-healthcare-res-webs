import React, { useState } from 'react';

const UpdateServiceForm = ({ service, index, onUpdateService }) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateService(index, { name, description, price });
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
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Update
      </button>
    </form>
  );
};

export default UpdateServiceForm;
