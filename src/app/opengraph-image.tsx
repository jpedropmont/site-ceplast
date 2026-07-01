import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Ceplast - Embalagens Especializadas';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'nodejs';

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), 'public/assets/logo-ceplast.png'),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #010066 0%, #bd0811 100%)',
          padding: 48,
        }}
      >
        <img
          src={logoSrc}
          width={700}
          height={150}
          alt="Ceplast"
          style={{ objectFit: 'contain' }}
        />
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            color: 'white',
            textAlign: 'center',
            fontWeight: 600,
            opacity: 0.95,
          }}
        >
          Especialistas em embalagens a vácuo
        </div>
      </div>
    ),
    { ...size },
  );
}
