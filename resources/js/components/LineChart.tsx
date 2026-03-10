import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  { name: 'Tokyo', uv: 9000, pv: 7000, amt: 8000 },
  { name: 'New York', uv: 4500, pv: 6800, amt: 3200 },
  { name: 'London', uv: 6200, pv: 5800, amt: 6000 },
  { name: 'Paris', uv: 6500, pv: 5300, amt: 3500 },
  { name: 'Berlin', uv: 4800, pv: 4500, amt: 4700 },
  { name: 'Sydney', uv: 7200, pv: 2000, amt: 4100 },
  { name: 'Rio', uv: 3700, pv: 3500, amt: 3600 },
];
// #endregion

export default function Example() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
      <XAxis dataKey="name" stroke="var(--color-text-3)" />
      <YAxis width="auto" stroke="var(--color-text-3)" />

      <Tooltip
        cursor={{ stroke: 'var(--color-border-2)' }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--color-border-2)',
        }}
      />

      <Legend />

      <Line
        type="monotone"
        dataKey="pv"
        name="Visitors"
        stroke="var(--color-chart-1)"
        dot={{ fill: 'var(--color-surface-base)' }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
      />

      <Line
        type="monotone"
        dataKey="uv"
        name="Population"
        stroke="var(--color-chart-2)"
        dot={{ fill: 'var(--color-surface-base)' }}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      />

      <Line
        type="monotone"
        dataKey="amt"
        name="Economic Activity"
        stroke="var(--color-chart-3)"
        dot={{ fill: 'var(--color-surface-base)' }}
        activeDot={{ stroke: 'var(--color-surface-base)' }}
      />
    </LineChart>
  );
}