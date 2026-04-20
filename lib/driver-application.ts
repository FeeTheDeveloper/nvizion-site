import { siteConfig } from "@/lib/site";

export type DriverOption = {
  label: string;
  value: string;
};

type DriverPrescreeningQuestion = {
  name: keyof DriverApplicationValues;
  label: string;
  description?: string;
  input: "radio" | "select" | "date";
  options?: DriverOption[];
  required?: boolean;
};

export type DriverApplicationValues = {
  prescreenApplicantType: string;
  prescreenValidCdl: string;
  prescreenCdlClass: string;
  prescreenExperience: string;
  prescreenAtLeast21: string;
  prescreenAuthorizedToWork: string;
  prescreenDotMedicalCard: string;
  prescreenMovingViolations: string;
  prescreenPreventableAccidents: string;
  prescreenDrugScreen: string;
  prescreenBackgroundCheck: string;
  prescreenPreferredWorkType: string;
  prescreenStartDate: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  city: string;
  state: string;
  applicantType: string;
  cdlNumber: string;
  experienceYears: string;
  equipmentType: string;
  preferredWorkType: string;
  earliestStartDate: string;
  currentEmployer: string;
  additionalNotes: string;
  agreementAccuracy: boolean;
  agreementNoGuarantee: boolean;
  agreementAdditionalInfo: boolean;
  agreementOpportunityContact: boolean;
};

export type DriverApplicationErrors = Partial<Record<keyof DriverApplicationValues, string>>;

export type DriverApplicationFormState = {
  status: "idle" | "error" | "success";
  message: string;
  errors: DriverApplicationErrors;
  values: DriverApplicationValues;
};

export const driverApplicantTypeOptions: DriverOption[] = [
  { label: "Company Driver", value: "Company Driver" },
  { label: "Owner-Operator", value: "Owner-Operator" }
];

export const yesNoOptions: DriverOption[] = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" }
];

export const noYesOptions: DriverOption[] = [
  { label: "No", value: "No" },
  { label: "Yes", value: "Yes" }
];

export const cdlClassOptions: DriverOption[] = [
  { label: "Class A", value: "Class A" },
  { label: "Class B", value: "Class B" },
  { label: "Class C", value: "Class C" },
  { label: "Not Applicable", value: "Not Applicable" }
];

export const commercialDrivingExperienceOptions: DriverOption[] = [
  { label: "Less than 1 year", value: "Less than 1 year" },
  { label: "1-2 years", value: "1-2 years" },
  { label: "3-5 years", value: "3-5 years" },
  { label: "5+ years", value: "5+ years" }
];

export const dotMedicalCardOptions: DriverOption[] = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
  { label: "In Progress", value: "In Progress" }
];

export const preferredWorkTypeOptions: DriverOption[] = [
  { label: "Local", value: "Local" },
  { label: "Regional", value: "Regional" },
  { label: "OTR", value: "OTR" },
  { label: "Any Available", value: "Any Available" }
];

export const driverPrescreeningQuestions: DriverPrescreeningQuestion[] = [
  {
    name: "prescreenApplicantType",
    label: "Are you applying as a company driver or independent owner-operator?",
    input: "radio",
    options: driverApplicantTypeOptions,
    required: true
  },
  {
    name: "prescreenValidCdl",
    label: "Do you have a valid CDL?",
    input: "radio",
    options: yesNoOptions,
    required: true
  },
  {
    name: "prescreenCdlClass",
    label: "CDL class",
    input: "select",
    options: cdlClassOptions,
    required: true
  },
  {
    name: "prescreenExperience",
    label: "How many years of commercial driving experience do you have?",
    input: "select",
    options: commercialDrivingExperienceOptions,
    required: true
  },
  {
    name: "prescreenAtLeast21",
    label: "Are you at least 21 years old?",
    input: "radio",
    options: yesNoOptions,
    required: true
  },
  {
    name: "prescreenAuthorizedToWork",
    label: "Are you legally authorized to work in the United States?",
    input: "radio",
    options: yesNoOptions,
    required: true
  },
  {
    name: "prescreenDotMedicalCard",
    label: "Do you have a current DOT medical card?",
    input: "select",
    options: dotMedicalCardOptions,
    required: true
  },
  {
    name: "prescreenMovingViolations",
    label: "Have you had any major moving violations in the last 3 years?",
    input: "radio",
    options: noYesOptions,
    required: true
  },
  {
    name: "prescreenPreventableAccidents",
    label: "Have you had any preventable accidents in the last 3 years?",
    input: "radio",
    options: noYesOptions,
    required: true
  },
  {
    name: "prescreenDrugScreen",
    label: "Are you able to pass a drug screening?",
    input: "radio",
    options: yesNoOptions,
    required: true
  },
  {
    name: "prescreenBackgroundCheck",
    label: "Are you willing to undergo a background check if required?",
    input: "radio",
    options: yesNoOptions,
    required: true
  },
  {
    name: "prescreenPreferredWorkType",
    label: "What type of driving work are you seeking?",
    input: "radio",
    options: preferredWorkTypeOptions,
    required: true
  },
  {
    name: "prescreenStartDate",
    label: "What is your earliest available start date?",
    input: "date",
    required: true
  }
];

export const driverAgreementFields: Array<{
  name: keyof DriverApplicationValues;
  label: string;
}> = [
  {
    name: "agreementAccuracy",
    label: "The information submitted is accurate to the best of my knowledge."
  },
  {
    name: "agreementNoGuarantee",
    label: "I understand that submission does not guarantee placement or contract approval."
  },
  {
    name: "agreementAdditionalInfo",
    label: `${siteConfig.name} may contact me for additional information.`
  },
  {
    name: "agreementOpportunityContact",
    label: "I agree to be contacted regarding driver opportunities."
  }
];

export const emptyDriverApplicationValues: DriverApplicationValues = {
  prescreenApplicantType: "",
  prescreenValidCdl: "",
  prescreenCdlClass: "",
  prescreenExperience: "",
  prescreenAtLeast21: "",
  prescreenAuthorizedToWork: "",
  prescreenDotMedicalCard: "",
  prescreenMovingViolations: "",
  prescreenPreventableAccidents: "",
  prescreenDrugScreen: "",
  prescreenBackgroundCheck: "",
  prescreenPreferredWorkType: "",
  prescreenStartDate: "",
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  city: "",
  state: "",
  applicantType: "",
  cdlNumber: "",
  experienceYears: "",
  equipmentType: "",
  preferredWorkType: "",
  earliestStartDate: "",
  currentEmployer: "",
  additionalNotes: "",
  agreementAccuracy: false,
  agreementNoGuarantee: false,
  agreementAdditionalInfo: false,
  agreementOpportunityContact: false
};

export const initialDriverApplicationFormState: DriverApplicationFormState = {
  status: "idle",
  message: "",
  errors: {},
  values: emptyDriverApplicationValues
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function getStringValue(formData: FormData, name: keyof DriverApplicationValues) {
  return String(formData.get(name) ?? "").trim();
}

export function getDriverApplicationValues(formData: FormData): DriverApplicationValues {
  return {
    prescreenApplicantType: getStringValue(formData, "prescreenApplicantType"),
    prescreenValidCdl: getStringValue(formData, "prescreenValidCdl"),
    prescreenCdlClass: getStringValue(formData, "prescreenCdlClass"),
    prescreenExperience: getStringValue(formData, "prescreenExperience"),
    prescreenAtLeast21: getStringValue(formData, "prescreenAtLeast21"),
    prescreenAuthorizedToWork: getStringValue(formData, "prescreenAuthorizedToWork"),
    prescreenDotMedicalCard: getStringValue(formData, "prescreenDotMedicalCard"),
    prescreenMovingViolations: getStringValue(formData, "prescreenMovingViolations"),
    prescreenPreventableAccidents: getStringValue(formData, "prescreenPreventableAccidents"),
    prescreenDrugScreen: getStringValue(formData, "prescreenDrugScreen"),
    prescreenBackgroundCheck: getStringValue(formData, "prescreenBackgroundCheck"),
    prescreenPreferredWorkType: getStringValue(formData, "prescreenPreferredWorkType"),
    prescreenStartDate: getStringValue(formData, "prescreenStartDate"),
    fullName: getStringValue(formData, "fullName"),
    phoneNumber: getStringValue(formData, "phoneNumber"),
    emailAddress: getStringValue(formData, "emailAddress").toLowerCase(),
    city: getStringValue(formData, "city"),
    state: getStringValue(formData, "state"),
    applicantType: getStringValue(formData, "applicantType"),
    cdlNumber: getStringValue(formData, "cdlNumber"),
    experienceYears: getStringValue(formData, "experienceYears"),
    equipmentType: getStringValue(formData, "equipmentType"),
    preferredWorkType: getStringValue(formData, "preferredWorkType"),
    earliestStartDate: getStringValue(formData, "earliestStartDate"),
    currentEmployer: getStringValue(formData, "currentEmployer"),
    additionalNotes: getStringValue(formData, "additionalNotes"),
    agreementAccuracy: formData.get("agreementAccuracy") === "on",
    agreementNoGuarantee: formData.get("agreementNoGuarantee") === "on",
    agreementAdditionalInfo: formData.get("agreementAdditionalInfo") === "on",
    agreementOpportunityContact: formData.get("agreementOpportunityContact") === "on"
  };
}

function isValidDateValue(value: string) {
  return datePattern.test(value) && !Number.isNaN(new Date(value).getTime());
}

export function validateDriverApplication(values: DriverApplicationValues): DriverApplicationErrors {
  const errors: DriverApplicationErrors = {};
  const phoneDigits = values.phoneNumber.replace(/\D/g, "");

  if (!values.prescreenApplicantType) {
    errors.prescreenApplicantType = "Please choose how you are applying.";
  }

  if (!values.prescreenValidCdl) {
    errors.prescreenValidCdl = "Please confirm whether you have a valid CDL.";
  }

  if (!values.prescreenCdlClass) {
    errors.prescreenCdlClass = "Please select your CDL class.";
  } else if (
    values.prescreenValidCdl === "Yes" &&
    values.prescreenCdlClass === "Not Applicable"
  ) {
    errors.prescreenCdlClass = "Please choose the class for your valid CDL.";
  }

  if (!values.prescreenExperience) {
    errors.prescreenExperience = "Please select your commercial driving experience.";
  }

  if (!values.prescreenAtLeast21) {
    errors.prescreenAtLeast21 = "Please confirm your age eligibility.";
  }

  if (!values.prescreenAuthorizedToWork) {
    errors.prescreenAuthorizedToWork = "Please confirm your US work authorization.";
  }

  if (!values.prescreenDotMedicalCard) {
    errors.prescreenDotMedicalCard = "Please select your DOT medical card status.";
  }

  if (!values.prescreenMovingViolations) {
    errors.prescreenMovingViolations = "Please answer the moving violations question.";
  }

  if (!values.prescreenPreventableAccidents) {
    errors.prescreenPreventableAccidents = "Please answer the preventable accidents question.";
  }

  if (!values.prescreenDrugScreen) {
    errors.prescreenDrugScreen = "Please confirm whether you can pass a drug screening.";
  }

  if (!values.prescreenBackgroundCheck) {
    errors.prescreenBackgroundCheck = "Please confirm whether you can complete a background check.";
  }

  if (!values.prescreenPreferredWorkType) {
    errors.prescreenPreferredWorkType = "Please choose the work type you are seeking.";
  }

  if (!values.prescreenStartDate) {
    errors.prescreenStartDate = "Please enter your earliest available start date.";
  } else if (!isValidDateValue(values.prescreenStartDate)) {
    errors.prescreenStartDate = "Please enter a valid start date.";
  }

  if (!values.fullName) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Please enter your phone number.";
  } else if (phoneDigits.length < 10) {
    errors.phoneNumber = "Please enter a valid phone number.";
  }

  if (!values.emailAddress) {
    errors.emailAddress = "Please enter your email address.";
  } else if (!emailPattern.test(values.emailAddress)) {
    errors.emailAddress = "Please enter a valid email address.";
  }

  if (!values.city) {
    errors.city = "Please enter your city.";
  }

  if (!values.state) {
    errors.state = "Please enter your state.";
  }

  if (!values.applicantType) {
    errors.applicantType = "Please choose your driver type.";
  }

  if (!values.cdlNumber) {
    errors.cdlNumber = "Please provide your CDL number or write 'Available upon request'.";
  }

  if (!values.experienceYears) {
    errors.experienceYears = "Please select your years of experience.";
  }

  if (values.applicantType === "Owner-Operator" && !values.equipmentType) {
    errors.equipmentType = "Please describe your equipment type.";
  }

  if (!values.preferredWorkType) {
    errors.preferredWorkType = "Please choose your preferred work type.";
  }

  if (!values.earliestStartDate) {
    errors.earliestStartDate = "Please enter your earliest available start date.";
  } else if (!isValidDateValue(values.earliestStartDate)) {
    errors.earliestStartDate = "Please enter a valid start date.";
  }

  if (!values.agreementAccuracy) {
    errors.agreementAccuracy = "Please confirm your information is accurate.";
  }

  if (!values.agreementNoGuarantee) {
    errors.agreementNoGuarantee = "Please acknowledge that submission does not guarantee approval.";
  }

  if (!values.agreementAdditionalInfo) {
    errors.agreementAdditionalInfo = "Please allow us to contact you for additional information.";
  }

  if (!values.agreementOpportunityContact) {
    errors.agreementOpportunityContact =
      "Please agree to be contacted regarding driver opportunities.";
  }

  return errors;
}

function formatAnswer(value: string) {
  return value || "Not provided";
}

function formatMultilineAnswer(value: string) {
  if (!value) {
    return "Not provided";
  }

  return value.replace(/\r?\n/g, "\n  ");
}

function formatAgreement(value: boolean) {
  return value ? "Yes" : "No";
}

export function buildDriverApplicationEmailText(values: DriverApplicationValues) {
  const lines = [
    `New driver application submitted via ${siteConfig.url}/drivers`,
    `Submitted at: ${new Date().toISOString()}`,
    "",
    "Prescreening",
    `- Applying as: ${formatAnswer(values.prescreenApplicantType)}`,
    `- Valid CDL: ${formatAnswer(values.prescreenValidCdl)}`,
    `- CDL class: ${formatAnswer(values.prescreenCdlClass)}`,
    `- Commercial driving experience: ${formatAnswer(values.prescreenExperience)}`,
    `- At least 21 years old: ${formatAnswer(values.prescreenAtLeast21)}`,
    `- Authorized to work in the United States: ${formatAnswer(values.prescreenAuthorizedToWork)}`,
    `- Current DOT medical card: ${formatAnswer(values.prescreenDotMedicalCard)}`,
    `- Major moving violations in the last 3 years: ${formatAnswer(values.prescreenMovingViolations)}`,
    `- Preventable accidents in the last 3 years: ${formatAnswer(values.prescreenPreventableAccidents)}`,
    `- Able to pass a drug screening: ${formatAnswer(values.prescreenDrugScreen)}`,
    `- Willing to undergo a background check: ${formatAnswer(values.prescreenBackgroundCheck)}`,
    `- Driving work sought: ${formatAnswer(values.prescreenPreferredWorkType)}`,
    `- Earliest available start date: ${formatAnswer(values.prescreenStartDate)}`,
    "",
    "Application Details",
    `- Full name: ${formatAnswer(values.fullName)}`,
    `- Phone number: ${formatAnswer(values.phoneNumber)}`,
    `- Email address: ${formatAnswer(values.emailAddress)}`,
    `- City: ${formatAnswer(values.city)}`,
    `- State: ${formatAnswer(values.state)}`,
    `- Driver type: ${formatAnswer(values.applicantType)}`,
    `- CDL number / note: ${formatAnswer(values.cdlNumber)}`,
    `- Years of experience: ${formatAnswer(values.experienceYears)}`,
    `- Equipment type: ${formatAnswer(values.equipmentType)}`,
    `- Preferred work type: ${formatAnswer(values.preferredWorkType)}`,
    `- Earliest start date: ${formatAnswer(values.earliestStartDate)}`,
    `- Current employer: ${formatAnswer(values.currentEmployer)}`,
    `- Additional notes: ${formatMultilineAnswer(values.additionalNotes)}`,
    "",
    "Document Intake Placeholders",
    "- Resume upload: Placeholder only - not yet enabled in this form",
    "- CDL copy upload: Placeholder only - not yet enabled in this form",
    "- Insurance documents upload: Placeholder only - not yet enabled in this form",
    "",
    "Acknowledgments",
    `- Information accurate to the best of applicant's knowledge: ${formatAgreement(values.agreementAccuracy)}`,
    `- Submission does not guarantee placement or contract approval: ${formatAgreement(values.agreementNoGuarantee)}`,
    `- May contact applicant for additional information: ${formatAgreement(values.agreementAdditionalInfo)}`,
    `- Agrees to be contacted regarding driver opportunities: ${formatAgreement(values.agreementOpportunityContact)}`
  ];

  return lines.join("\n");
}
