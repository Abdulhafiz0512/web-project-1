import React, { useState, useEffect } from 'react';
import styles from './adminPanel.module.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    brand_name: '',
    color_options: [],
    image_url: '',
    ratings_stars: '',
    rating_counts: ''
  });
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [category, setCategory] = useState('headphones'); // 'headphones' or 'computers'

  useEffect(() => {
    fetchItems();
  }, [activeTab, category]);

  const fetchItems = async () => {
    try {
      const endpoint = category === 'headphones' 
        ? `https://headphones-server.onrender.com/${activeTab}`
        : `https://headphones-server.onrender.com/computer-${activeTab}`;
      
      const response = await fetch(endpoint);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = 'https://headphones-server.onrender.com';
    const endpoint = category === 'headphones' 
      ? `${baseUrl}/${activeTab}`
      : `${baseUrl}/computer-${activeTab}`;
    
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${endpoint}/${editingId}` : endpoint;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchItems();
        setFormData({
          name: '',
          description: '',
          price: '',
          brand_name: '',
          color_options: [],
          image_url: '',
          ratings_stars: '',
          rating_counts: ''
        });
        setEditingId(null);
      }
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    try {
      const endpoint = category === 'headphones'
        ? `https://headphones-server.onrender.com/${activeTab}/${id}`
        : `https://headphones-server.onrender.com/computer-${activeTab}/${id}`;

      const response = await fetch(endpoint, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchItems();
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className={styles.adminPanel}>
      <div className={styles.categorySelector}>
        <button
          className={`${styles.categoryButton} ${category === 'headphones' ? styles.active : ''}`}
          onClick={() => setCategory('headphones')}
        >
          Headphones
        </button>
        <button
          className={`${styles.categoryButton} ${category === 'computers' ? styles.active : ''}`}
          onClick={() => setCategory('computers')}
        >
          Computers
        </button>
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'products' ? styles.active : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'brands' ? styles.active : ''}`}
          onClick={() => setActiveTab('brands')}
        >
          Brands
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'colors' ? styles.active : ''}`}
          onClick={() => setActiveTab('colors')}
        >
          Colors
        </button>
      </div>

      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {activeTab === 'products' && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Brand Name"
                value={formData.brand_name}
                onChange={(e) => setFormData({ ...formData, brand_name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Rating Stars"
                value={formData.ratings_stars}
                onChange={(e) => setFormData({ ...formData, ratings_stars: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Rating Counts"
                value={formData.rating_counts}
                onChange={(e) => setFormData({ ...formData, rating_counts: e.target.value })}
                required
              />
            </>
          )}
          {activeTab === 'brands' && (
            <input
              type="text"
              placeholder="Brand Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}
          {activeTab === 'colors' && (
            <input
              type="text"
              placeholder="Color (hex code)"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}
          <button type="submit" className={styles.submitButton}>
            {editingId ? 'Update' : 'Add'}
          </button>
        </form>
      </div>

      <div className={styles.itemsList}>
        {items.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            <div className={styles.itemInfo}>
              {activeTab === 'products' && (
                <>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <p>Brand: {item.brand_name}</p>
                </>
              )}
              {activeTab === 'brands' && <h3>{item}</h3>}
              {activeTab === 'colors' && <h3>{item}</h3>}
            </div>
            <div className={styles.itemActions}>
              <button onClick={() => handleEdit(item)} className={styles.editButton}>
                Edit
              </button>
              <button onClick={() => handleDelete(item.id)} className={styles.deleteButton}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel; 