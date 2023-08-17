import dbConnect from "@/lib/db-connect";
import Employee from "@/models/Employee";
import School from "@/models/School";
import { showError } from "@/utils/error-utils";

export async function createEmployee({
  firstName,
  middleName,
  lastName,
  birthday,
  civilStatus,
  address,
  color,
}) {
  try {
    await dbConnect();
    const employee = new Employee({
      firstName,
      middleName,
      lastName,
      birthday,
      civilStatus,
      address,
      color,
    });

    await employee.save();

    return employee;
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

export async function getAllEmployees() {
  try {
    await dbConnect();

    const pipelines = [
      {
        $lookup: {
          from: "schools", // name of the references collection
          localField: "_id",
          foreignField: "employee",
          as: "schools",
        },
      },
      {
        $project: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          middleName: 1,
          birthday: 1,
          address: 1,
          civilStatus: 1,
          color: 1,
          schoolCount: { $size: "$schools" },
        },
      },
    ];
    const employees = await Employee.aggregate(pipelines).exec();

    return { employees };
  } catch (error) {
    throw error;
  }
}

export async function updateEmployee(
  employeeId,
  { firstName, middleName, lastName, birthday, civilStatus, address, color }
) {
  try {
    await dbConnect();

    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, {
      firstName,
      middleName,
      lastName,
      birthday,
      civilStatus,
      color,
      address,
    });

    if (!updateEmployee) {
      throw showError("EmployeeError", "Employee is not found");
    }

    return updatedEmployee;
  } catch (error) {
    throw error;
  }
}

export async function deleteEmployee(employeeId) {
  try {
    await dbConnect();
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId).exec();
    await School.deleteMany({ employee: employeeId }).exec();

    return deletedEmployee;
  } catch (error) {
    throw error;
  }
}
