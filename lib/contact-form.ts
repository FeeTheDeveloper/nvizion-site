export type ContactValues = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  pickupLocation: string;
  deliveryLocation: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "error" | "success";
  message: string;
  errors: Partial<Record<keyof ContactValues, string>>;
  values: ContactValues;
};

export const emptyContactValues: ContactValues = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  serviceNeeded: "",
  pickupLocation: "",
  deliveryLocation: "",
  message: ""
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: emptyContactValues
};

