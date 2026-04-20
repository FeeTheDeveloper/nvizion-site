"use server";

import {
  buildDriverApplicationEmailText,
  emptyDriverApplicationValues,
  getDriverApplicationValues,
  type DriverApplicationFormState,
  validateDriverApplication
} from "@/lib/driver-application";
import { sendEmail } from "@/lib/email";
import { siteConfig } from "@/lib/site";

export async function submitDriverApplication(
  _previousState: DriverApplicationFormState,
  formData: FormData
): Promise<DriverApplicationFormState> {
  const values = getDriverApplicationValues(formData);
  const errors = validateDriverApplication(values);

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      errors,
      values
    };
  }

  const subject = `New Driver Application - ${values.fullName}`;
  const deliveryResult = await sendEmail({
    to: siteConfig.email,
    subject,
    text: buildDriverApplicationEmailText(values),
    replyTo: values.emailAddress
  });

  if (!deliveryResult.delivered) {
    if (deliveryResult.provider === "not-configured") {
      console.warn("[driver-application] Email delivery not configured for driver admissions.");

      return {
        status: "success",
        message:
          "Your driver application has been submitted. Our team will review your information and contact you if there is a fit for current opportunities.",
        errors: {},
        values: emptyDriverApplicationValues
      };
    }

    console.error("[driver-application] Email delivery failed.", deliveryResult.error);

    return {
      status: "error",
      message:
        `We could not send your driver application right now. Please try again or email ${siteConfig.email}.`,
      errors: {},
      values
    };
  }

  return {
    status: "success",
    message:
      "Your driver application has been submitted. Our team will review your information and contact you if there is a fit for current opportunities.",
    errors: {},
    values: emptyDriverApplicationValues
  };
}
