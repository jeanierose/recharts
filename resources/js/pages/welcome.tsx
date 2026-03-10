import LineChart from "../components/LineChart";
import SimpleAreaChart from "../components/AreaChart";
import SimpleBarChart from "../components/BarChart";

export default function Welcome() {
  return (
    <div className="p-6 flex flex-col items-center w-full">

      <h1 className="text-center p-4">
        My data visualization using Recharts
      </h1>

      {/* container with spacing between charts */}
      <div className="w-full max-w-4xl space-y-8">

        <div className="p-10 border rounded-[20px] shadow-md">
          <LineChart />
        </div>

        <div className="p-10 border rounded-[20px] shadow-md">
          <SimpleAreaChart />
        </div>

        <div className="p-10 border rounded-[20px] shadow-md">
          <SimpleBarChart />
        </div>

      </div>

    </div>
  );
}