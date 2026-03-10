import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data for Training Peak
const data = [
  { name: 'Orientation', uv: 120, pv: 25, amt: 90 },
  { name: 'Safety Training', uv: 150, pv: 30, amt: 95 },
  { name: 'Technical Skills', uv: 180, pv: 28, amt: 92 },
  { name: 'Leadership', uv: 160, pv: 22, amt: 88 },
  { name: 'Soft Skills', uv: 140, pv: 20, amt: 85 },
  { name: 'Compliance', uv: 100, pv: 18, amt: 80 },
  { name: 'Advanced Training', uv: 190, pv: 35, amt: 98 },
];
// #endregion

export default function TrainingPeakBarChart() {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      data={data}
      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <XAxis dataKey="name" stroke="#333" />
      <YAxis width="auto" stroke="#333" />

      <Tooltip
        cursor={{ fill: 'rgba(0,0,0,0.1)' }}
        contentStyle={{ backgroundColor: '#f9f9f9', borderColor: '#ccc' }}
      />

      <Legend />

      <Bar dataKey="pv" name="Participants" fill="#ff7300" radius={[5, 5, 0, 0]} />
      <Bar dataKey="uv" name="Training Hours" fill="#387908" radius={[5, 5, 0, 0]} />
      <Bar dataKey="amt" name="Completion %" fill="#8884d8" radius={[5, 5, 0, 0]} />
    </BarChart>
  );
}