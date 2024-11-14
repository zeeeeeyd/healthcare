export const GenderOptions = ["male", "female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  healthcheck: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Dr. Mohamed El Amine",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Dr. Yasmine Malki",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Dr. Abd El Rahman",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Dr. Abd El Razak",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Dr. Zeyneb el Hak",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Dr. Abd El Mouhcin",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Dr. Leyla Ryan",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Dr. Nour El Houda",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Dr. Abd El Hak",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
