'use client';
import React from 'react';

export default function PriorityFilter({ value, onChange }) {
  const options = ['All', 'Low', 'Medium', 'High', 'Critical'];
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm">Priority</span>
      <select
        className="border rounded p-2"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}