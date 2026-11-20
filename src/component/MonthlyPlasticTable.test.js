import React from 'react';
import { render, screen, within } from '@testing-library/react';
import axios from 'axios';
import MonthlyPlasticTable from './MonthlyPlasticTable';
jest.mock('axios', () => ({ get: jest.fn() }));
jest.mock('@mui/material/Unstable_Grid2/Grid2', () => ({ children }) => <div>{children}</div>);

test('matches category values to column names instead of JSON insertion order', async () => {
  axios.get.mockResolvedValue({ data: [{ month: 'December', totalCollection: { PET: 12, HDPE: 9, PVC: 8, LDPE: 6, PP: 4, PS: 3, Others: 0 } }] });
  render(<MonthlyPlasticTable />);
  const month = await screen.findByText('December');
  const cells = within(month.closest('tr')).getAllByRole('cell').map(x => x.textContent);
  expect(cells).toEqual(['December', '9', '6', '12', '4', '3', '8', '0']);
});
