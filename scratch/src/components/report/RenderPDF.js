import ReactPDF from '@react-pdf/renderer';
import React from 'react';
import ExamplePDF from './ExamplePDF';


const render= ReactPDF.render(<ExamplePDF />, `${__dirname}/example.pdf`);

export default render