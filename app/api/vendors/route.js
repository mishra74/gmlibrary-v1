export async function GET() {
  // Replace with DB call
  return Response.json([
    {
      id: 1,
      name: "John",
      email: "john@test.com",
      phone: "9999999999",
      is_active: 1,
      created_at: "2026-04-01",
      updated_at: "2026-04-02",
    },
  ]);
}