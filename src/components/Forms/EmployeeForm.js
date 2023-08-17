"use client";

import { FormikProvider, Form, useFormik } from "formik";
import { InputField, TextArea, RadioSelect, RadioSelectItem } from "../Inputs";
import { Button } from "../Buttons";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { PopupLoader } from "../Loaders";
import { employeeSchema } from "@/lib/validators/employee-validator";
import { format, parseISO } from "date-fns";

export default function EmployeeForm({
  initialData,
  onCancel = () => {},
  onAfterSubmit = () => {},
}) {
  const [isLoading, setIsLoading] = useState(false);
  const employeeFormik = useFormik({
    initialValues: {
      firstName: initialData?.firstName || "",
      lastName: initialData?.lastName || "",
      middleName: initialData?.middleName || "",
      birthday: initialData?.birthday
        ? format(parseISO(initialData?.birthday), "yyyy-MM-dd")
        : "",
      civilStatus: initialData?.civilStatus || "",
      address: initialData?.address || "",
      color: initialData?.color || "",
    },
    onSubmit: handleSubmit,
    validationSchema: employeeSchema,
  });

  async function handleSubmit(values) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `/api/employees${initialData ? `/${initialData?._id}` : ""}`,
        {
          method: initialData ? "PATCH" : "POST",
          body: JSON.stringify({
            ...values,
            ...(initialData ? { _id: initialData?._id } : {}),
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await res.json();
      if (result?.success) {
        toast.success(`Employee ${initialData ? "updated" : "added"}`);
        onAfterSubmit();
      } else {
        toast.error(`Can't ${initialData ? "update" : "add"} employee`);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(`Can't ${initialData ? "update" : "add"} employee`);
    }
  }
  return (
    <FormikProvider value={employeeFormik}>
      <PopupLoader
        message={`${initialData ? "Updating" : "Adding"} employee`}
        isOpen={isLoading}
      />
      <Form className="flex flex-col gap-6">
        <InputField type="text" name="firstName" label="First Name" />
        <InputField type="text" name="middleName" label="Middle Name" />
        <InputField type="text" name="lastName" label="Last Name" />
        <InputField type="date" name="birthday" label="Birthday" />
        <RadioSelect
          label="Civil Status"
          error={
            employeeFormik.errors.condition &&
            employeeFormik.touched.civilStatus
              ? employeeFormik.errors.civilStatus
              : null
          }
        >
          <RadioSelectItem
            name="civilStatus"
            value="single"
            checked={employeeFormik.values.civilStatus == "single"}
          >
            Single
          </RadioSelectItem>
          <RadioSelectItem
            name="civilStatus"
            value="married"
            checked={employeeFormik.values.civilStatus == "married"}
          >
            Married
          </RadioSelectItem>
          <RadioSelectItem
            name="civilStatus"
            value="separated"
            checked={employeeFormik.values.civilStatus == "separated"}
          >
            Separated
          </RadioSelectItem>
          <RadioSelectItem
            name="civilStatus"
            value="widowed"
            checked={employeeFormik.values.civilStatus == "widowed"}
          >
            Widowed
          </RadioSelectItem>
        </RadioSelect>
        <InputField type="color" name="color" label="Color" />
        <TextArea name="address" label="Address" />
        <div className="mb-1 flex gap-2">
          {onCancel && (
            <Button fullWidth type="button" onClick={onCancel} secondary>
              Cancel
            </Button>
          )}
          <Button fullWidth type="submit">
            Done
          </Button>
        </div>
      </Form>
    </FormikProvider>
  );
}
