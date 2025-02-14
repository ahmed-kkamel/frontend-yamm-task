import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), "db.json");
    const dbData = await fs.readFile(dbPath, "utf8");
    const data = JSON.parse(dbData);

    return NextResponse.json(data["refund-orders"]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
