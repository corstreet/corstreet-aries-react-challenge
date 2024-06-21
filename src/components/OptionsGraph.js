import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function OptionsGraph({data}) {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid stroke="#0be881" strokeDasharray="5 5" />
      <XAxis stroke="#ffffff" dataKey="pricePoint" />
      <YAxis stroke="#ffffff" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="profit" stroke="#711aff" />
    </LineChart>
  )
}

export default OptionsGraph