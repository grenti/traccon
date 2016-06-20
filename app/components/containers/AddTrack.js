import React from 'react';
import { connect } from 'react-redux';
import addTrack from '../../actions';

let AddTrack = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTrack(input.value));
        input.value = '';
      }}>
        <input ref={node => {
          input = node;
        }} />
        <button type="submit">Add Track
        </button>
      </form>
    </div>
  );
};

AddTrack = connect()(AddTrack);

export default AddTrack;
