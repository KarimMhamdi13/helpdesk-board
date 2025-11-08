'use client';
import React from 'react';

export default function SearchBox({ value, onChange }) {
  return (
    <label className="flex-1 min-w-[200px]">
      <input
        className="w-full border rounded p-2"
        placeholder="Search title or description..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}