import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// #region Sample data
const data = [
  { name: 'Laptop', uv: 3200, pv: 2800, amt: 3000 },
  { name: 'Smartphone', uv: 4500, pv: 4200, amt: 4300 },
  { name: 'Headphones', uv: 2000, pv: 2100, amt: 2200 },
  { name: 'Keyboard', uv: 1500, pv: 1300, amt: 1400 },
  { name: 'Mouse', uv: 1700, pv: 1600, amt: 1800 },
  { name: 'Monitor', uv: 2800, pv: 2600, amt: 2700 },
  { name: 'Printer', uv: 1200, pv: 1100, amt: 1150 },
  { name: 'Router', uv: 2200, pv: 2000, amt: 2100 },
];
// #endregion

const SimpleAreaChart = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      onContextMenu={(_, e) => e.preventDefault()}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" niceTicks="snap125" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
     
    </AreaChart>
  );
};

export default SimpleAreaChart;