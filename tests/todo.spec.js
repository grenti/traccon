import tape from 'tape';
import expect from 'expect';
import tracks from '../app/reducers/tracks';

tape('track reducer should handle initial state', t => {
  const initialState = tracks(undefined, {});
  t.plan(1);
  t.true(initialState, [], 'Response should be initial Array');
});
