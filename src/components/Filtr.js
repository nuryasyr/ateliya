import React, { useState } from 'react';
import './Filtr.css';

const Filtr = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [minCost, setMinCost] = useState('');
  const [maxCost, setMaxCost] = useState('');

  const categories = ['is koynek', 'toy koynek', 'oyde geymek ucin', 'zat gecdi', 'okuw koynek'];
  const materials = ['Stapel', 'bambuk', 'gulyupek'];

  const handleFilter = () => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (selectedMaterial) {
      filtered = filtered.filter(product => product.material === selectedMaterial);
    }
    if (minCost || maxCost) {
      filtered = filtered.filter(product => {
        const cost = parseFloat(product.cost);
        const min = minCost ? parseFloat(minCost) : Number.MIN_VALUE;
        const max = maxCost ? parseFloat(maxCost) : Number.MAX_VALUE;
        return cost >= min && cost <= max;
      });
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="filter-container">
      <h3>Filtrler</h3>
      <div className="filter-section">
        <label>Kategori:</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Tüm Kategoriler</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label>Malzeme:</label>
        <select onChange={(e) => setSelectedMaterial(e.target.value)}>
          <option value="">Tüm Malzemeler</option>
          {materials.map((material) => (
            <option key={material} value={material}>{material}</option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label>Fiyat Aralığı:</label>
        <input
          type="number"
          placeholder="Min"
          value={minCost}
          onChange={(e) => setMinCost(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxCost}
          onChange={(e) => setMaxCost(e.target.value)}
        />
      </div>

      <button onClick={handleFilter}>Filtrele</button>
    </div>
  );
};

export default Filtr;
