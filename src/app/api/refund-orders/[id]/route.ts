import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const dbPath = path.join(process.cwd(), "db.json");
    const body = await request.json();

    // Read current data
    const dbData = await fs.readFile(dbPath, "utf8");
    const data = JSON.parse(dbData);

    // Update order
    data["refund-orders"] = data["refund-orders"].map((order: any) => {
      if (order.id === params.id) {
        return { ...order, ...body };
      }
      return order;
    });

    // Write back to file
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const dbPath = path.join(process.cwd(), "db.json");

    // Read current data
    const dbData = await fs.readFile(dbPath, "utf8");
    const data = JSON.parse(dbData);

    // Find the specific order
    const order = data["refund-orders"].find(
      (order: any) => order.id === (params ? params.id : undefined)
    );

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}
