// pages/index.tsx
import React from "react";
import LineChart from "./LineChart";


const Home: React.FC = () => {
  const data = [10, 20, 30, 40, 50, 60, 70];
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h1>Next.js & Chart.js with TypeScript</h1>
      <LineChart data={data} labels={labels} />
    </div>
  );
}

export default Home;
