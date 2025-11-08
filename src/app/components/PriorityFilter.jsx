'use client';
import React from 'react';

export default function PriorityFilter({ value, onChange }) {
  const options = ['All', 'Low', 'Medium', 'High', 'Critical'];

  return (
    <label className="flex items-center gap-2">
      <span className="text-sm text-gray-200">Priority</span>
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
