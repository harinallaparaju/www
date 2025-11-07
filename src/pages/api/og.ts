import { ImageResponse } from '@vercel/og';
export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Surya Nallaparaju';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(90deg,#f5f5f5,#e0e7ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 56,
          fontWeight: 600,
          fontFamily: 'Inter, system-ui, sans-serif',
          color: '#111827',
        }}
      >
        {title}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
