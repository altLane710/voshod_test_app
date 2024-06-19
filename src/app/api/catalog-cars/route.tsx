import { NextRequest } from "next/server";

const BASE_URL = "https://test.taxivoshod.ru/api/test";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const url = BASE_URL + "?w=catalog-cars&" + searchParams.toString();

  const res = await fetch(url);
  const catalogResult = await res.json();
  return Response.json(catalogResult);
}
