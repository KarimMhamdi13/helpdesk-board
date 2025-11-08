'use client';
import React from 'react';

export default function MyQueueSummary({ tickets, onRemove, onClear }) {
  return (
    <div className="border rounded p-4 sticky top-6">
      <h4 className="font-semibold mb-2">My Queue</h4>
      <div className="text-sm text-gray-700 mb-3">{tickets.length} ticket(s) selected</div>

      <ul className="space-y-2 mb-3">
        {tickets.map((t) => (
          <li key={t.id} className="flex items-center justify-between">
            <span className="text-sm">{t.title}</span>
            <button onClick={() => onRemove(t.id)} className="text-xs text-red-600 hover:opacity-90 transition">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <button
          onClick={onClear}
          className="px-3 py-1 rounded bg-red-600 text-white transition transform hover:scale-105 hover:opacity-90"
        >
          Clear Queue
        </button>
      </div>
    </div>
  );
}
