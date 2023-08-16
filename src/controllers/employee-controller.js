import dbConnect from "@/lib/db-connect";
import Employee from "@/models/Employee";
import { showError } from "@/utils/error-utils";

export async function createEmployee({
  firstName,
  middleName,
  lastName,
  birthday,
  age,
  civilStatus,
  address,
}) {
  try {
    await dbConnect();

    const employee = new Employee({
      firstName,
      middleName,
      lastName,
      birthday,
      age,
      civilStatus,
      address,
    });

    await employee.save();

    return;
  } catch (error) {
    throw error;
  }
}

export async function readEmployee(employeeId) {
  try {
    await dbConnect();

    const employee = await Employee.findById(employeeId);

    if (!employee) {
      throw showError("EmployeeError", "Employee is not found");
    }
  } catch (error) {
    throw error;
  }
}

export async function getAllEmployees() {}

export async function updateEmployee() {}

export async function deleteEmployee() {}
