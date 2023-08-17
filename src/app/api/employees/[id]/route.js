import { successResponse, errorResponse } from "@/utils/response-utils";
import {
  deleteEmployee,
  updateEmployee,
} from "@/controllers/employee-controller";

export async function DELETE(request, { params }) {
  try {
    const deletedEmployee = await deleteEmployee(params?.id);
    return successResponse(200, deletedEmployee);
  } catch (error) {
    return errorResponse(400, error);
  }
}

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const updatedEmployee = await updateEmployee(params?.id, body);
    return successResponse(200, updatedEmployee);
  } catch (error) {
    return errorResponse(400, error);
  }
}
