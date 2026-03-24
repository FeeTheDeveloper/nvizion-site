"use server";

import {
  emptyContactValues,
  type ContactFormState,
  type ContactValues
} from "@/lib/contact-form";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values: ContactValues = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    companyName: String(formData.get("companyName") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "")
      .trim()
      .toLowerCase(),
    serviceNeeded: String(formData.get("serviceNeeded") ?? "").trim(),
    pickupLocation: String(formData.get("pickupLocation") ?? "").trim(),
    deliveryLocation: String(formData.get("deliveryLocation") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim()
  };

  const errors: ContactFormState["errors"] = {};

  if (!values.fullName) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.serviceNeeded) {
    errors.serviceNeeded = "Please choose the service you need.";
  }

  if (!values.message) {
    errors.message = "Please share a few details about the request.";
  }

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      errors,
      values
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 650));

  return {
    status: "success",
    message:
      "Demo quote request captured. The in-app Server Action flow is working and ready for live email or CRM routing next.",
    errors: {},
    values: emptyContactValues
  };
}
