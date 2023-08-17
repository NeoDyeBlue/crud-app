import { NextResponse } from "next/server";

export function errorResponse(status = 500, error = {}) {
  let error_response = {
    status,
    message: error.message,
  };
  return new NextResponse(
    JSON.stringify({ success: false, ...error_response }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export function successResponse(status = 200, data) {
  return new NextResponse(JSON.stringify({ success: true, ...data }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
