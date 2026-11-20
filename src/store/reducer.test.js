import reducer from './reducer';

test('updates the date range without discarding other state', () => {
  const state = { startDate: '2023-12-01T00:00:00Z', endDate: '2024-01-10T00:00:00Z', marker: true };
  const next = reducer(state, { type: 'UPDATE_DATES', payload: { startDate: '2024-01-01T00:00:00Z', endDate: '2024-02-01T00:00:00Z' } });
  expect(next).toEqual({ startDate: '2024-01-01T00:00:00Z', endDate: '2024-02-01T00:00:00Z', marker: true });
  expect(state.startDate).toBe('2023-12-01T00:00:00Z');
});

test('rejects unknown actions explicitly', () => {
  expect(() => reducer({}, { type: 'UNKNOWN' })).toThrow('Unhandled action type');
});
