import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  { name: 'Jan', uv: 5000, pv: 3000, amt: 2600 },
  { name: 'Feb', uv: 4200, pv: 2500, amt: 2400 },
  { name: 'Mar', uv: 3500, pv: 4000, amt: 2800 },
  { name: 'Apr', uv: 4800, pv: 3500, amt: 3000 },
  { name: 'May', uv: 3000, pv: 2800, amt: 2700 },
  { name: 'Jun', uv: 4000, pv: 3900, amt: 3200 },
  { name: 'Jul', uv: 4500, pv: 4200, amt: 3100 },
];
// #endregion

const SimpleBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend formatter={(value) => {
        if (value === 'uv') return 'Revenue';
        if (value === 'pv') return 'Expenses';
        if (value === 'amt') return 'Profit';
        return value;
      }} />
      <Bar dataKey="pv" name="Expenses" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" name="Revenue" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
    </BarChart>
  );
};

export default SimpleBarChart;