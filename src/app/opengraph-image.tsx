/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

// TODO: P0 Add text to the image
export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/trophy.png"));
  const logoBase64 = Buffer.from(logoData).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

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
