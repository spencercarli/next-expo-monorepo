import { redirect } from "next/navigation";

export async function GET() {
  redirect("/people-list");
}
