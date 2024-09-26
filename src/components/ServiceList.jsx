import React from 'react';

const ServiceList = ({ services, onDelete, onUpdate }) => {
  return (
    <div className="mt-4">
      {services.length > 0 &&
        services.map((service, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded-md"
          >
            <div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p>{service.description}</p>
              <p className="text-blue-600 font-bold">${service.price}</p>
            </div>
            <div>
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => onUpdate(index)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ServiceList;
