import { deleteSchool, updateSchool } from "@/controllers/school-controller";
import { successResponse, errorResponse } from "@/utils/response-utils";

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const updatedEmployeeSchool = await updateSchool(
      params?.id,
      params?.school,
      body
    );
    return successResponse(200, updatedEmployeeSchool);
  } catch (error) {
    return errorResponse(400, error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const deletedEmployeeSchool = await deleteSchool(
      params?.id,
      params?.school
    );
    return successResponse(200, deletedEmployeeSchool);
  } catch (error) {
    return errorResponse(400, error);
  }
}
