import dbConnect from "@/lib/db-connect";
import School from "@/models/School";
import Employee from "@/models/Employee";
import { showError } from "@/utils/error-utils";
import mongoose from "mongoose";

export async function createSchool(employeeId, { name, course }) {
  try {
    await dbConnect();
    const employee = await Employee.findById(employeeId).exec();

    if (!employee) {
      throw showError("EmployeeError", "Employee does not exist");
    }

    const newSchool = new School({ employee: employeeId, name, course });

    await newSchool.save();

    return newSchool;
  } catch (error) {
    throw error;
  }
}

export async function getSchoolsOfEmployee(employeeId) {
  try {
    await dbConnect();
    const pipelines = [
      {
        $match: {
          _id: new mongoose.Types.ObjectId(employeeId),
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
          age: {
            $floor: {
              $divide: [
                {
                  $subtract: [new Date(), "$birthday"],
                },
                365.25 * 24 * 60 * 60 * 1000, // milliseconds in a year
              ],
            },
          },
        },
      },
    ];
    const employee = await Employee.aggregate(pipelines).exec();
    const schools = await School.find({ employee: employeeId }).exec();

    return { employee: employee[0], schools };
  } catch (error) {
    throw error;
  }
}

export async function updateSchool(employeeId, schoolId, { name, course }) {
  try {
    await dbConnect();

    const updatedSchool = await School.findOneAndUpdate(
      { employee: employeeId, _id: schoolId },
      { name, course }
    ).exec();

    return updatedSchool;
  } catch (error) {
    throw error;
  }
}

export async function deleteSchool(employeeId, schoolId) {
  try {
    await dbConnect();

    const deletedSchool = await School.findOneAndDelete({
      employee: employeeId,
      _id: schoolId,
    }).exec();

    return deletedSchool;
  } catch (error) {
    throw error;
  }
}
