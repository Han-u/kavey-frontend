import React from 'react';
import ExamplePDF from '../components/report/ExamplePDF';
import ReactPDF from '@react-pdf/renderer';




const MyDocument = () => (
    // ReactPDF.render(<ExamplePDF />, `${__dirname}/example.pdf`)
        <ExamplePDF></ExamplePDF>

    );



export default MyDocument;