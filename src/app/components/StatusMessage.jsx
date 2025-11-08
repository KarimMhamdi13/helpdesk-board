'use client';
import React from 'react';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) return <div className="py-6 text-center">Loading…</div>;
  if (error) return <div className="py-6 text-center text-red-600">Unable to load tickets.</div>;
  if (isEmpty) return <div className="py-6 text-center">No tickets match your filters.</div>;
  return null;
}