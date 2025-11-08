'use client';
import React from 'react';

export default function StatusFilter({ value, onChange }) {
  const options = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];

  return (
    <label className="flex items-center gap-2">
      <span className="text-sm text-gray-200">Status</span>
      <select
        className="border border-gray-600 bg-gray-800 text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(o => (
          <option key={o} value={o} className="bg-gray-800 text-gray-100">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}