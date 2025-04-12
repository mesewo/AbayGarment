import React from 'react';
import { Helmet } from 'react-helmet';
import './Meta.css'; // Import the Meta.css file
// This component uses react-helmet to manage the document head for SEO purposes
const Meta = ({ title, description, keywords }) => {
  return (
    <div className="meta-debug">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Helmet>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Keywords: {keywords}</p>
    </div>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Abay Garment',
  description: 'We sell the best products for cheap',
  keywords: 'clothing, buy clothing, cheap clothing',
};

export default Meta;