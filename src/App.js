import React, { useState } from 'react';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';
import UpdateServiceForm from './components/UpdateServiceForm';

function App() {
  const [services, setServices] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const deleteService = (index) => {
    const newServices = services.filter((_, i) => i !== index);
    setServices(newServices);
  };

  const updateService = (index) => {
    setEditingIndex(index);
  };

  const onUpdateService = (index, updatedService) => {
    const newServices = services.map((service, i) =>
      i === index ? updatedService : service
    );
    setServices(newServices);
    setEditingIndex(null);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-3xl font-bold text-center mb-6">Healthcare Services</h1>
      {editingIndex !== null ? (
        <UpdateServiceForm
          service={services[editingIndex]}
          index={editingIndex}
          onUpdateService={onUpdateService}
        />
      ) : (
        <AddServiceForm addService={addService} />
      )}
      <ServiceList
        services={services}
        onDelete={deleteService}
        onUpdate={updateService}
      />
    </div>
  );
}

export default App;
