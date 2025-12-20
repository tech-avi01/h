export const mockUser = {
  name: 'John Doe',
  bloodGroup: 'O+',
  vehicleNumber: 'TS09AB1234',
  emergencyContacts: [
    { name: 'Jane Doe', phone: '+1-555-123-4567', relation: 'Spouse' },
    { name: 'Peter Jones', phone: '+1-555-765-4321', relation: 'Friend' },
  ],
};

export const mockAlerts = [
  {
    id: 1,
    user: { name: 'Alice' },
    location: '123 Main St, Anytown',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    severity: 'High',
    status: 'Pending',
    coords: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: 2,
    user: { name: 'Bob' },
    location: '456 Oak Ave, Sometown',
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    severity: 'Medium',
    status: 'Dispatched',
    coords: { lat: 34.0550, lng: -118.2500 }
  },
  {
    id: 3,
    user: { name: 'Charlie' },
    location: '789 Pine Ln, Otherville',
    timestamp: new Date(Date.now() - 25 * 60 * 1000),
    severity: 'High',
    status: 'On the Way',
    coords: { lat: 34.0500, lng: -118.2450 }
  },
];
