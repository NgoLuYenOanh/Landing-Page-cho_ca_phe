import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file || !file.name) {
    return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, fileName);
  fs.writeFileSync(filePath, buffer);

  return NextResponse.json({ url: `/uploads/${fileName}` });
}
