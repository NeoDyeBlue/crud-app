import {
  createEmployee,
  getAllEmployees,
} from "@/controllers/employee-controller";
import { successResponse, errorResponse } from "@/utils/response-utils";

export async function GET(request) {
  try {
    const employees = await getAllEmployees();
    return successResponse(200, employees);
  } catch (error) {
    return errorResponse(400, error);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newEmployee = await createEmployee(body);
    return successResponse(200, newEmployee);
  } catch (error) {
    return errorResponse(400, error);
  }
}
