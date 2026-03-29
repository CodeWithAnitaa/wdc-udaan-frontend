export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const getStatusColor = (status) => {
  const colors = {
    'Under Review': 'bg-yellow-100 text-yellow-800',
    'Ongoing': 'bg-orange-100 text-orange-800',
    'Resolved': 'bg-green-100 text-green-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};
