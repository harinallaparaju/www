import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Surya Nallaparaju';

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
          color: 'white',
          fontSize: 56,
          fontWeight: 700,
          fontFamily: 'Inter, system-ui, -apple-system',
        },
        children: title,
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}
