import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto" style={{ backgroundColor: 'red' }}>
      <h1 className="text-5xl font-bold">Invoicing App</h1>
      <p>
        <a href="/dashboard">Sign In</a>
      </p>
    </main>
  );
}
