import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import "./styles.css"

const Basic = () => {
  const [bill, setBill] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [numPeople, setNumPeople] = useState(null);

  function handleBill(e) {
    setBill(parseFloat(e.target.value));
  }
  function handlePercentage(e) {
    setPercentage(parseFloat(e.target.value));
  }
  function handleNumPeople(e) {
    setNumPeople(parseInt(e.target.value));
  }
  
  const resultTip = (bill && percentage) ? (bill * percentage) / 100 : 0;
  const resultPerPerson = (numPeople && resultTip) ? resultTip / numPeople : 0;

  return (
    <div className='basic'>
      <Formik
        initialValues={{ bill: '', tipPercentage: 0 }}
        validate={values => {
          const errors = {};
          if (!values.bill) {
            errors.bill = 'Required';
          }
          return errors;
        }}
      >
        {() => (
          <Form className='form'>
            <div className="card">
              <label>Bill</label>
              <Field type="number" name="bill" value={bill || ''} onChange={handleBill} />
            </div>

            <div className="card">
              <label>Tip Percentage</label>
              <Field type="number" name="tipPercentage" value={percentage || ''} onChange={handlePercentage} />
            </div>

            <div className="card">
              <label>Number of People</label>
              <Field type="number" name="numPeople" value={numPeople || ''} onChange={handleNumPeople} />
            </div>

            <div className="result">
              <p>Total Tip: ${Number(resultTip).toFixed(2)}</p>
              <p>Tip Per Person: ${Number(resultPerPerson).toFixed(2)}</p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;


