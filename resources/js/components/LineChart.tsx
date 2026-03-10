import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data for Sales
const data = [
  { name: 'Online Course A', uv: 2500, pv: 60, amt: 45 },
  { name: 'Workshop B', uv: 1800, pv: 40, amt: 38 },
  { name: 'Webinar C', uv: 3200, pv: 75, amt: 50 },
  { name: 'Seminar D', uv: 2200, pv: 55, amt: 42 },
  { name: 'Bootcamp E', uv: 4000, pv: 90, amt: 60 },
  { name: 'E-book F', uv: 1500, pv: 30, amt: 35 },
  { name: 'Advanced Course G', uv: 3500, pv: 80, amt: 55 },
];
// #endregion

export default function SalesChart() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="name" stroke="#555" />
      <YAxis width="auto" stroke="#555" />

      <Tooltip
        cursor={{ stroke: '#999', strokeWidth: 2 }}
        contentStyle={{ backgroundColor: '#fefefe', borderColor: '#ddd' }}
        formatter={(value, name) => {
          if (name === 'Sales Revenue') return [`$${value}`, name];
          if (name === 'Units Sold') return [value, name];
          if (name === 'Profit %') return [`${value}%`, name];
          return [value, name];
        }}
      />

      <Legend />

      <Line
        type="monotone"
        dataKey="uv"
        name="Sales Revenue"
        stroke="#00b894"
        dot={{ fill: '#55efc4' }}
        activeDot={{ stroke: '#00b894', r: 8 }}
      />

      <Line
        type="monotone"
        dataKey="pv"
        name="Units Sold"
        stroke="#0984e3"
        dot={{ fill: '#74b9ff' }}
        activeDot={{ stroke: '#0984e3', r: 8 }}
      />

      <Line
        type="monotone"
        dataKey="amt"
        name="Profit %"
        stroke="#fd79a8"
        dot={{ fill: '#ffb6c1' }}
        activeDot={{ stroke: '#fd79a8', r: 8 }}
      />
    </LineChart>
  );
}