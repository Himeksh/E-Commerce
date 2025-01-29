import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce platform is a comprehensive software solution that 
                enables businesses to conduct transactions over the internet.
                It provides a virtual storefront where products and services can 
                be displayed, allowing customers to browse, select, and purchase items online. 
                Essential features of an e-commerce platform include product catalog management, 
                shopping cart functionality, secure payment processing, order management, and 
                customer relationship management (CRM).
            </p>
            <p>
               Advanced platforms may also offer marketing tools, analytics, and integrations with other
               business systems like inventory management and shipping services. These platforms cater 
               to various business models, including B2C (business-to-consumer), B2B (business-to-business), 
               and C2C (consumer-to-consumer), providing a scalable and efficient way to reach a global market. 
               By automating many aspects of the sales process and offering a seamless shopping experience, 
               e-commerce platforms are crucial for businesses looking to expand their digital presence and 
               improve customer satisfaction.
            </p>
        </div>
    </div>
  )
}
