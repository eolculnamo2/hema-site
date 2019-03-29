import React from 'react';
import { Helmet } from 'react-helmet';
import Row1 from './subcomponents/Row1';
import Row2 from './subcomponents/Row2';
import Row3 from './subcomponents/Row3';


const Contribute = () => (
  <div>
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js" async defer />
    </Helmet>
    <Row1 />
    <Row2 />
    <Row3 />
  </div>
);

export default Contribute;
