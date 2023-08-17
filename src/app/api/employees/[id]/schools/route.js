import {
  createSchool,
  getSchoolsOfEmployee,
} from "@/controllers/school-controller";
import { successResponse, errorResponse } from "@/utils/response-utils";

export async function GET(request, { params }) {
  try {
    const employeeSchools = await getSchoolsOfEmployee(params?.id);
    return successResponse(200, employeeSchools);
  } catch (error) {
    return errorResponse(400, error);
  }
}

export async function POST(request, { params }) {
  try {
    const body = await request.json();
    const newEmployeeSchool = await createSchool(params?.id, body);
    return successResponse(200, newEmployeeSchool);
  } catch (error) {
    return errorResponse(400, error);
  }
}
