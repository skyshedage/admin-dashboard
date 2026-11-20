import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { UserContext } from './store/usercontext';
import App from './App';

jest.mock('./scenes/homePage', () => () => <div>Dashboard content</div>);
jest.mock('@mui/x-date-pickers', () => ({
  DatePicker: ({ label, value, onChange }) => <div>
    <input aria-label={label} readOnly value={value.toISOString()} />
    <button onClick={() => onChange(null)}>Clear {label}</button>
  </div>
}));

test('date controls show the exact shared state used for backend queries', () => {
  const dispatch = jest.fn();
  const state = { startDate: '2023-12-01T00:00:00Z', endDate: '2024-01-10T00:00:00Z' };
  render(<ThemeProvider theme={createTheme()}><MemoryRouter><UserContext.Provider value={{ state, dispatch }}><App /></UserContext.Provider></MemoryRouter></ThemeProvider>);
  expect(screen.getByLabelText('Start date').value).toBe('2023-12-01T00:00:00.000Z');
  expect(screen.getByLabelText('End date').value).toBe('2024-01-10T00:00:00.000Z');
  fireEvent.click(screen.getByText('Clear Start date'));
  expect(dispatch).not.toHaveBeenCalled();
});
