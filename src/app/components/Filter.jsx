"use client";

import { useState } from "react";

const Filter = () => {
  const [neighborhood, setNeighborhood] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [vegan, setVegan] = useState(false);
  const [sitting, setSitting] = useState(false);

  const handleFilterChange = () => {
    // Logic to handle filter changes can be added here
    console.log({ neighborhood, priceRange, vegan, sitting });
  };

  return (
    <div className="filter-container">
      <h2>Filter Options</h2>
      <div>
        <label>
          Neighborhood:
          <select
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          >
            <option value="">Select Neighborhood</option>
            <option value="neighborhood1">Neighborhood 1</option>
            <option value="neighborhood2">Neighborhood 2</option>
            {/* Add more neighborhoods as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Price Range:
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Select Price Range</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Vegan Options:
          <input
            type="checkbox"
            checked={vegan}
            onChange={(e) => setVegan(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Sitting Possibility:
          <input
            type="checkbox"
            checked={sitting}
            onChange={(e) => setSitting(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
