
export interface Student {
  id: string;
  rollNumber: string;
  name: string;
  fatherName: string;
  course: string;
  branch: string;
  batch: string;
  semester: string;
  registrationNumber: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  mobile: string;
  address: {
    permanent: string;
    current: string;
  };
  parentDetails: {
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
  };
  guardianDetails: {
    name: string;
    relation: string;
    address: string;
    mobile: string;
  };
  academicDetails: {
    enrollmentDate: string;
    currentSemester: string;
    registrationStatus: string;
    attendancePercentage: string;
    feesStatus: string;
    scholarshipDetails: string;
    examResults: {
      semester: string;
      cgpa: string;
      backlogs: number;
    }[];
  };
  photoUrl: string;
}
