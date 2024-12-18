'use client';

export default function Home() {
  return (
    <>
      {typeof window !== 'undefined' && window.location.replace('/services')}
    </>
  );
} 