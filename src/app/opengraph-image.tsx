/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/trophy.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1200px",
          height: "630px",
        }}
      >
        <img src={logoSrc} height="600" alt="trophy" />
      </div>
    )
  );
}
