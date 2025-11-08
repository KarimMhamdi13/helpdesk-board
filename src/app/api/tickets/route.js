export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing',
      description: 'Mobile device is not receiving new emails.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Alpha',
      updatedAt: '2025-10-29T09:12:00Z'
    },
    {
      id: 't-1003',
      title: 'Printer jam on 3rd floor',
      description: 'Paper jam and error code E13.',
      priority: 'Low',
      status: 'On Hold',
      assignee: 'Bravo',
      updatedAt: '2025-10-28T16:30:00Z'
    },
    {
      id: 't-1004',
      title: 'Cannot access shared drive',
      description: 'Permissions issue when mapping network drive.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-30T11:20:00Z'
    },
    {
      id: 't-1005',
      title: 'Software license expired',
      description: 'User needs renewal for design suite.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Charlie',
      updatedAt: '2025-10-27T08:45:00Z'
    },
    {
      id: 't-1006',
      title: 'Slow laptop performance',
      description: 'Machine is slow after latest Windows update.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-26T14:00:00Z'
    },
    {
      id: 't-1007',
      title: 'Cannot print in color',
      description: 'Printer prints only in black & white.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Delta',
      updatedAt: '2025-10-25T10:10:00Z'
    },
    {
      id: 't-1008',
      title: 'Phone headset not working',
      description: 'No audio through USB headset.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Ehco',
      updatedAt: '2025-10-24T13:51:00Z'
    },
    {
      id: 't-1009',
      title: 'Password reset request',
      description: 'User locked out after multiple failed attempts.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Foxtrot',
      updatedAt: '2025-10-23T07:30:00Z'
    },
    {
      id: 't-1010',
      title: 'Website unreachable',
      description: 'Internal webapp returns 502 error.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'Golf',
      updatedAt: '2025-10-31T20:15:00Z'
    },
    {
      id: 't-1011',
      title: 'VPN split-tunnel issues',
      description: 'Some sites only accessible when split-tunnel enabled.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-22T12:00:00Z'
    },
    {
      id: 't-1012',
      title: 'Database backup failing',
      description: 'Nightly backup job exits with error code.',
      priority: 'Critical',
      status: 'On Hold',
      assignee: 'Hotel',
      updatedAt: '2025-10-21T03:45:00Z'
    },
    {
      id: 't-1013',
      title: 'Monitor flickering',
      description: 'External monitor randomly flickers.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-20T15:22:00Z'
    },
    {
      id: 't-1014',
      title: 'Two-factor auth enrollment',
      description: 'User requests help enrolling device.',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'India',
      updatedAt: '2025-10-19T09:00:00Z'
    },
    {
      id: 't-1023',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    }
  ];
  return Response.json(tickets);
}
