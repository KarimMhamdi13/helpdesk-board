'use client';
import React, { useEffect, useMemo, useState, useRef } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});
  const intervalRef = useRef(null);

  // Fetch tickets
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        if (!cancelled) setTickets(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  // Simulate live updates
  useEffect(() => {
    function pickRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function tick() {
      setTickets(prev => {
        if (!prev.length) return prev;
        const i = Math.floor(Math.random() * prev.length);
        const now = new Date().toISOString();
        const t = prev[i];
        const changeStatus = Math.random() < 0.6;
        const statuses = ['Open', 'In Progress', 'On Hold', 'Resolved'];
        const priorities = ['Low', 'Medium', 'High', 'Critical'];
        const nextStatus = s => (s === 'Open' ? 'In Progress' : s === 'In Progress' ? 'Resolved' : s);
        const nextPriority = p => {
          const idx = priorities.indexOf(p);
          return priorities[Math.min(idx + 1, priorities.length - 1)];
        };
        return prev.map((x, idx) =>
          idx !== i ? x : {
            ...x,
            updatedAt: now,
            ...(changeStatus ? { status: nextStatus(t.status) } : { priority: nextPriority(t.priority) })
          }
        );
      });
      intervalRef.current = setTimeout(tick, pickRandom(6000, 10000));
    }
    intervalRef.current = setTimeout(tick, pickRandom(6000, 10000));
    return () => clearTimeout(intervalRef.current);
  }, []);

  const visibleTickets = useMemo(() => {
    const q = search.toLowerCase();
    return tickets.filter(t => {
      if (filters.status !== 'All' && t.status !== filters.status) return false;
      if (filters.priority !== 'All' && t.priority !== filters.priority) return false;
      if (q && !(t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [tickets, filters, search]);

  const handleAdd = id => setQueue(p => ({ ...p, [id]: true }));
  const handleRemove = id => setQueue(p => { const c = { ...p }; delete c[id]; return c; });
  const handleClear = () => setQueue({});

  const queuedTickets = tickets.filter(t => queue[t.id]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="flex flex-wrap gap-3 mb-4 items-center">
          <StatusFilter value={filters.status} onChange={v => setFilters(p => ({ ...p, status: v }))} />
          <PriorityFilter value={filters.priority} onChange={v => setFilters(p => ({ ...p, priority: v }))} />
          <SearchBox value={search} onChange={v => setSearch(v)} />
        </div>
        <StatusMessage loading={loading} error={error} isEmpty={!loading && !error && !visibleTickets.length} />
        <TicketList tickets={visibleTickets} onAddToQueue={handleAdd} queue={queue} />
      </div>
      <aside className="lg:col-span-1">
        <MyQueueSummary tickets={queuedTickets} onRemove={handleRemove} onClear={handleClear} />
      </aside>
    </section>
  );
}