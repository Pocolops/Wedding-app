import React, { useState } from 'react';

const RegistryForm = () => {
  const [guestName, setGuestName] = useState('');
  const [weddingAttendance, setWeddingAttendance] = useState(false);
  const [selectedEntree, setSelectedEntree] = useState('');
  const [selectedDrinkPreference, setSelectedDrinkPreference] = useState('');


  const handleGuestNameChange = (event) => {
    setGuestName(event.target.value);
  };

  const handleWeddingAttendanceChange = (event) => {
    setWeddingAttendance(event.target.checked);
  };

  const handleEntreeChange = (event) => {
    setSelectedEntree(event.target.value);
  };

  const handleDrinkPreferenceChange = (event) => {
    setSelectedDrinkPreference(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    alert('Thank you! Hope to see you');
  };

  return (
    <section className="flex justify-center">
      <div className="w-full border p-4">
        <h1 className="text-center text-3xl py-4">Registry Form:</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="guestName" className="block">
              Guest Name:
            </label>
            <input
              id="guestName"
              type="text"
              value={guestName}
              onChange={handleGuestNameChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="weddingAttendance" className="flex items-center">
              <input
                id="weddingAttendance"
                type="checkbox"
                checked={weddingAttendance}
                onChange={handleWeddingAttendanceChange}
                className="mr-2"
              />
              Will You Be Joining Us?
            </label>
          </div>

          <div className="mb-4">
            <label htmlFor="entree" className="block">
              Select Your Entree:
            </label>
            <select
              id="entree"
              value={selectedEntree}
              onChange={handleEntreeChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="Option 1">option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>


          <div className="mb-4">
            <label htmlFor="drinkPreference" className="block">
              Select your drink preference:
            </label>
            <select
              id="drinkPreference"
              value={selectedDrinkPreference}
              onChange={handleDrinkPreferenceChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistryForm;

