'use client';
import React from 'react';

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

export default function TicketCard({ ticket, onAddToQueue, queued }) {
  return (
    <div className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="font-semibold text-lg">{ticket.title}</h3>
        <p className="text-sm text-gray-600">{ticket.description}</p>
        <div className="mt-2 text-sm text-gray-700">
          <span className="mr-3">Priority: <strong>{ticket.priority}</strong></span>
          <span className="mr-3">Status: <strong>{ticket.status}</strong></span>
          <span className="mr-3">Assignee: {ticket.assignee}</span>
        </div>
        <div className="mt-1 text-xs text-gray-500">Updated: {formatDate(ticket.updatedAt)}</div>
      </div>

      <div className="mt-3 md:mt-0 md:ml-4 flex flex-col items-start md:items-end">
        <button
          onClick={() => onAddToQueue(ticket.id)}
          disabled={queued}
          className={`px-3 py-1 rounded ${
            queued
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white'
          } transition transform hover:scale-105 hover:opacity-90`}
        >
          {queued ? 'In My Queue' : 'Add to My Queue'}
        </button>
        {queued && <div className="mt-2 text-xs text-gray-500">This ticket is in your queue</div>}
      </div>
    </div>
  );
}