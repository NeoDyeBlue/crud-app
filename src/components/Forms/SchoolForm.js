"use client";

import { FormikProvider, Form, useFormik } from "formik";
import { InputField } from "../Inputs";
import { Button } from "../Buttons";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { PopupLoader } from "../Loaders";
import { schoolSchema } from "@/lib/validators/school-validator";

export default function SchoolForm({
  initialData,
  employeeId,
  onCancel = () => {},
  onAfterSubmit = () => {},
}) {
  const [isLoading, setIsLoading] = useState(false);
  const schoolFormik = useFormik({
    initialValues: {
      name: initialData?.name || "",
      course: initialData?.course || "",
    },
    onSubmit: handleSubmit,
    validationSchema: schoolSchema,
  });

  async function handleSubmit(values) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `/api/employees/${employeeId}/schools${
          initialData ? `/${initialData?._id}` : ""
        }`,
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
        toast.success(`School ${initialData ? "updated" : "added"}`);
        onAfterSubmit();
      } else {
        toast.error(`Can't ${initialData ? "update" : "add"} school`);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(`Can't ${initialData ? "update" : "add"} school`);
    }
  }
  return (
    <FormikProvider value={schoolFormik}>
      <PopupLoader
        message={`${initialData ? "Updating" : "Adding"} school`}
        isOpen={isLoading}
      />
      <Form className="flex flex-col gap-6">
        <InputField type="text" name="name" label="School" />
        <InputField type="text" name="course" label="Course" />
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
