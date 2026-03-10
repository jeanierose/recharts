import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data for farm groups
const data = [
  { year: 2015, DemoFarm: 150, Fish: 180, Goat: 120, Swine: 210 },
  { year: 2016, DemoFarm: 160, Fish: 200, Goat: 140, Swine: 220 },
  { year: 2017, DemoFarm: 170, Fish: 215, Goat: 160, Swine: 210 },
  { year: 2018, DemoFarm: 165, Fish: 210, Goat: 155, Swine: 225 },
  { year: 2019, DemoFarm: 180, Fish: 225, Goat: 170, Swine: 230 },
  { year: 2020, DemoFarm: 200, Fish: 235, Goat: 190, Swine: 240 },
  { year: 2021, DemoFarm: 220, Fish: 260, Goat: 210, Swine: 270 },
  { year: 2022, DemoFarm: 215, Fish: 250, Goat: 205, Swine: 275 },
];
// #endregion

export default function FarmTrendAreaChart() {
  return (
    <AreaChart
      width={800}
      height={500}
      data={data}
      margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />

      {/* Bold, vibrant area colors */}
      <Area type="monotone" dataKey="DemoFarm" stroke="#0a6d0a" fill="#184418" />
      <Area type="monotone" dataKey="Fish" stroke="#880b82" fill="#790b54" />
      <Area type="monotone" dataKey="Goat" stroke="#180e02" fill="#ad1717" />
      <Area type="monotone" dataKey="Swine" stroke="#ccee0e" fill="#e60c0c" />
    </AreaChart>
  );
}