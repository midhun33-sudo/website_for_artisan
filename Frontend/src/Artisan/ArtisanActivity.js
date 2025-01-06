import React, { useState, useEffect } from 'react';
import './css/ArtisanActivity.css';

const ArtisanActivity = () => {
  // Simulated state for activity metrics
  const [activity, setActivity] = useState({
    productsUploaded: 120,
    productsDelivered: 85,
    productsPending: 35,
  });

  // Example: Simulate fetching data from an API
  useEffect(() => {
    // Here, you can replace this with an actual API call.
    const fetchActivityData = async () => {
      // Simulate fetching data with a timeout
      const fetchedData = {
        productsUploaded: 10,
        productsDelivered: 3,
        productsPending: 2,
      };
      setActivity(fetchedData);
    };

    fetchActivityData();
  }, []);

  return (
    <div className="artisan-activity">
      <h2>Artisan Activity</h2>
      <div className="activity-metrics">
        <div className="metric">
          <h3>Products Uploaded</h3>
          <p>{activity.productsUploaded}</p>
        </div>
        <div className="metric">
          <h3>Products Delivered</h3>
          <p>{activity.productsDelivered}</p>
        </div>
        <div className="metric">
          <h3>Products in Pending</h3>
          <p>{activity.productsPending}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanActivity;
