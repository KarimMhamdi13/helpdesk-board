'use client';
import React from 'react';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, onAddToQueue, queue }) {
  return (
    <div className="space-y-3">
      {tickets.map(t => (
        <TicketCard key={t.id} ticket={t} onAddToQueue={onAddToQueue} queued={!!queue[t.id]} />
      ))}
    </div>
  );
}