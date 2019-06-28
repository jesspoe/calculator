import React from 'react';
import ResultScreen from './ResultScreen'
import ComputationalScreen from './ComputationScreen'

const screen = (props) => {
  return (
    <section className="screen">
      <ResultScreen result={props.result} />
      <ComputationalScreen equation={props.equation} />

    </section>
  );
}

export default screen;
