import React from 'react';

const Table = ({ data }) => (
  <table className="min-w-full bg-white border">
    <thead>
      <tr>
        <th className="py-2 px-4 border">No</th>
        <th className="py-2 px-4 border">NIM</th>
        <th className="py-2 px-4 border">Nama</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="text-center">
          <td className="py-2 px-4 border">{index + 1}</td>
          <td className="py-2 px-4 border">{item.NIM}</td>
          <td className="py-2 px-4 border">{item.Nama}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
