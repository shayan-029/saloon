const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export async function createAppointment(data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}) {
  const res = await fetch(`${BASE_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message ?? 'Failed to create appointment');
  }
  return res.json();
}
