import React from 'react';

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p className="lead">
            Welcome to <strong>GlobalTrade India</strong>, your trusted partner in international trade. Based in the heart of India, we specialize in exporting high-quality goods to clients worldwide.
          </p>
          <p>
            With years of experience in the export industry, we are committed to delivering excellence in every shipment. Our mission is to bridge the gap between Indian manufacturers and global markets, ensuring seamless transactions and customer satisfaction.
          </p>
          <p>
            At <strong>GlobalTrade India</strong>, we pride ourselves on our:
          </p>
          <ul>
            <li>Wide range of premium products, including textiles, spices, handicrafts, and more.</li>
            <li>Dedicated team of professionals with expertise in logistics and international trade.</li>
            <li>Commitment to quality, reliability, and timely delivery.</li>
          </ul>
          <p>
            Whether you're a retailer, distributor, or business looking for authentic Indian goods, we are here to meet your needs. Let us help you bring the best of India to the world.
          </p>
          <p className="text-muted">
            Contact us today to learn more about our services and how we can assist you in your import-export journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;