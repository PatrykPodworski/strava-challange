import fs from "node:fs";
import path from "path";

export const writeActivitiesToFile = (
  data: any,
  fileName: string,
  relativePath: string
) => {
  const dirPath = path.join(process.cwd(), relativePath);
  const filePath = path.join(dirPath, fileName);

  if (fs.existsSync(filePath)) {
    console.log(
      `[writeActivitiesToFile] File ${filePath} already exists, skipping write`
    );
    return;
  }

  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data));
};
