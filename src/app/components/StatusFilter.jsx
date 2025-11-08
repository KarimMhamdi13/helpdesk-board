'use client';
import React from 'react';

export default function StatusFilter({ value, onChange }) {
  const options = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm">Status</span>
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