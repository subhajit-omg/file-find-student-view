
import { Student } from "../types/student";

// Mock student data
export const students: Student[] = [
  {
    id: "1",
    rollNumber: "ECB20001",
    name: "Ravi Kumar",
    fatherName: "Suresh Kumar",
    course: "Computer Engineering (Diploma)",
    branch: "Computer Science",
    batch: "2020-23",
    semester: "6th",
    registrationNumber: "TECB2020CS001",
    dateOfBirth: "2002-05-15",
    gender: "Male",
    email: "ravi.kumar@student.example.com",
    mobile: "9876543210",
    address: {
      permanent: "123 Main Street, Kolkata, West Bengal",
      current: "Student Hostel, TECB Campus, Banipur"
    },
    parentDetails: {
      fatherName: "Suresh Kumar",
      fatherOccupation: "Government Employee",
      motherName: "Anita Devi",
      motherOccupation: "Teacher"
    },
    guardianDetails: {
      name: "Suresh Kumar",
      relation: "Father",
      address: "123 Main Street, Kolkata, West Bengal",
      mobile: "9876543211"
    },
    academicDetails: {
      enrollmentDate: "2020-07-15",
      currentSemester: "6",
      registrationStatus: "Active",
      attendancePercentage: "85%",
      feesStatus: "Paid",
      scholarshipDetails: "Merit Scholarship - 50%",
      examResults: [
        {
          semester: "1",
          cgpa: "8.7",
          backlogs: 0
        },
        {
          semester: "2",
          cgpa: "8.9",
          backlogs: 0
        },
        {
          semester: "3", 
          cgpa: "9.1",
          backlogs: 0
        },
        {
          semester: "4",
          cgpa: "8.8",
          backlogs: 0
        },
        {
          semester: "5",
          cgpa: "9.0",
          backlogs: 0
        }
      ]
    },
    photoUrl: "/lovable-uploads/b5937db0-bb61-414d-a82c-8531b33a8f27.png"
  },
  {
    id: "2", 
    rollNumber: "ECB20002",
    name: "Priya Singh",
    fatherName: "Rajesh Singh",
    course: "Computer Engineering (Diploma)",
    branch: "Computer Science",
    batch: "2020-23",
    semester: "6th",
    registrationNumber: "TECB2020CS002",
    dateOfBirth: "2001-09-23",
    gender: "Female",
    email: "priya.singh@student.example.com",
    mobile: "9876543212",
    address: {
      permanent: "456 Park Avenue, Delhi",
      current: "Girls Hostel, TECB Campus, Banipur"
    },
    parentDetails: {
      fatherName: "Rajesh Singh",
      fatherOccupation: "Business Owner",
      motherName: "Sunita Singh",
      motherOccupation: "Homemaker"
    },
    guardianDetails: {
      name: "Rajesh Singh",
      relation: "Father",
      address: "456 Park Avenue, Delhi",
      mobile: "9876543213"
    },
    academicDetails: {
      enrollmentDate: "2020-07-15",
      currentSemester: "6",
      registrationStatus: "Active",
      attendancePercentage: "92%",
      feesStatus: "Paid",
      scholarshipDetails: "None",
      examResults: [
        {
          semester: "1",
          cgpa: "9.3",
          backlogs: 0
        },
        {
          semester: "2",
          cgpa: "9.5",
          backlogs: 0
        },
        {
          semester: "3",
          cgpa: "9.4",
          backlogs: 0
        },
        {
          semester: "4",
          cgpa: "9.6",
          backlogs: 0
        },
        {
          semester: "5",
          cgpa: "9.7",
          backlogs: 0
        }
      ]
    },
    photoUrl: "/lovable-uploads/b5937db0-bb61-414d-a82c-8531b33a8f27.png"
  },
  {
    id: "3",
    rollNumber: "ECB20003",
    name: "Amit Sharma",
    fatherName: "Rakesh Sharma",
    course: "Computer Engineering (Diploma)",
    branch: "Computer Science",
    batch: "2020-23",
    semester: "6th",
    registrationNumber: "TECB2020CS003",
    dateOfBirth: "2002-11-05",
    gender: "Male",
    email: "amit.sharma@student.example.com",
    mobile: "9876543214",
    address: {
      permanent: "789 Lake View, Mumbai, Maharashtra",
      current: "Student Hostel, TECB Campus, Banipur"
    },
    parentDetails: {
      fatherName: "Rakesh Sharma",
      fatherOccupation: "Engineer",
      motherName: "Priya Sharma",
      motherOccupation: "Doctor"
    },
    guardianDetails: {
      name: "Rakesh Sharma",
      relation: "Father",
      address: "789 Lake View, Mumbai, Maharashtra",
      mobile: "9876543215"
    },
    academicDetails: {
      enrollmentDate: "2020-07-15",
      currentSemester: "6",
      registrationStatus: "Active",
      attendancePercentage: "78%",
      feesStatus: "Pending",
      scholarshipDetails: "None",
      examResults: [
        {
          semester: "1",
          cgpa: "7.5",
          backlogs: 0
        },
        {
          semester: "2",
          cgpa: "7.8",
          backlogs: 0
        },
        {
          semester: "3",
          cgpa: "7.2",
          backlogs: 1
        },
        {
          semester: "4",
          cgpa: "7.9",
          backlogs: 0
        },
        {
          semester: "5",
          cgpa: "8.1",
          backlogs: 0
        }
      ]
    },
    photoUrl: "/lovable-uploads/b5937db0-bb61-414d-a82c-8531b33a8f27.png"
  },
  {
    id: "4",
    rollNumber: "ECB20004",
    name: "Sneha Das",
    fatherName: "Biplab Das",
    course: "Electrical Engineering (Diploma)",
    branch: "Electrical",
    batch: "2020-23",
    semester: "6th",
    registrationNumber: "TECB2020EE001",
    dateOfBirth: "2002-03-12",
    gender: "Female",
    email: "sneha.das@student.example.com",
    mobile: "9876543216",
    address: {
      permanent: "234 River Road, Kolkata, West Bengal",
      current: "Girls Hostel, TECB Campus, Banipur"
    },
    parentDetails: {
      fatherName: "Biplab Das",
      fatherOccupation: "Bank Manager",
      motherName: "Rupa Das",
      motherOccupation: "Teacher"
    },
    guardianDetails: {
      name: "Biplab Das",
      relation: "Father",
      address: "234 River Road, Kolkata, West Bengal",
      mobile: "9876543217"
    },
    academicDetails: {
      enrollmentDate: "2020-07-15",
      currentSemester: "6",
      registrationStatus: "Active",
      attendancePercentage: "88%",
      feesStatus: "Paid",
      scholarshipDetails: "SC Scholarship",
      examResults: [
        {
          semester: "1",
          cgpa: "8.2",
          backlogs: 0
        },
        {
          semester: "2",
          cgpa: "8.5",
          backlogs: 0
        },
        {
          semester: "3",
          cgpa: "8.3",
          backlogs: 0
        },
        {
          semester: "4",
          cgpa: "8.6",
          backlogs: 0
        },
        {
          semester: "5",
          cgpa: "8.4",
          backlogs: 0
        }
      ]
    },
    photoUrl: "/lovable-uploads/b5937db0-bb61-414d-a82c-8531b33a8f27.png"
  },
  {
    id: "5",
    rollNumber: "ECB20005",
    name: "Rahul Dutta",
    fatherName: "Soumitra Dutta",
    course: "Mechanical Engineering (Diploma)",
    branch: "Mechanical",
    batch: "2020-23",
    semester: "6th",
    registrationNumber: "TECB2020ME001",
    dateOfBirth: "2001-12-30",
    gender: "Male",
    email: "rahul.dutta@student.example.com",
    mobile: "9876543218",
    address: {
      permanent: "567 Hill View, Siliguri, West Bengal",
      current: "Student Hostel, TECB Campus, Banipur"
    },
    parentDetails: {
      fatherName: "Soumitra Dutta",
      fatherOccupation: "Professor",
      motherName: "Anjali Dutta",
      motherOccupation: "Nurse"
    },
    guardianDetails: {
      name: "Soumitra Dutta",
      relation: "Father",
      address: "567 Hill View, Siliguri, West Bengal",
      mobile: "9876543219"
    },
    academicDetails: {
      enrollmentDate: "2020-07-15",
      currentSemester: "6",
      registrationStatus: "Active",
      attendancePercentage: "82%",
      feesStatus: "Paid",
      scholarshipDetails: "Sports Scholarship",
      examResults: [
        {
          semester: "1",
          cgpa: "7.9",
          backlogs: 0
        },
        {
          semester: "2",
          cgpa: "8.1",
          backlogs: 0
        },
        {
          semester: "3",
          cgpa: "8.0",
          backlogs: 0
        },
        {
          semester: "4",
          cgpa: "8.2",
          backlogs: 0
        },
        {
          semester: "5",
          cgpa: "8.3",
          backlogs: 0
        }
      ]
    },
    photoUrl: "/lovable-uploads/b5937db0-bb61-414d-a82c-8531b33a8f27.png"
  }
];

// Function to simulate fetching students based on criteria
export const getStudents = (
  search: string,
  course?: string,
  batch?: string,
  branch?: string,
  rollNumber?: string,
  name?: string,
  fatherName?: string
): Student[] => {
  let result = [...students];
  
  // Filter by search string (case insensitive)
  if (search) {
    const searchLower = search.toLowerCase();
    result = result.filter(student => 
      student.name.toLowerCase().includes(searchLower) ||
      student.rollNumber.toLowerCase().includes(searchLower) ||
      student.fatherName.toLowerCase().includes(searchLower)
    );
  }
  
  // Apply specific filters
  if (course) {
    result = result.filter(student => student.course === course);
  }
  
  if (batch) {
    result = result.filter(student => student.batch === batch);
  }
  
  if (branch) {
    result = result.filter(student => student.branch === branch);
  }
  
  if (rollNumber) {
    result = result.filter(student => student.rollNumber.includes(rollNumber));
  }
  
  if (name) {
    result = result.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
  }
  
  if (fatherName) {
    result = result.filter(student => student.fatherName.toLowerCase().includes(fatherName.toLowerCase()));
  }
  
  return result;
};

// Function to get a specific student by ID
export const getStudentById = (id: string): Student | undefined => {
  return students.find(student => student.id === id);
};

// Available courses
export const courses = [
  "Computer Engineering (Diploma)",
  "Electrical Engineering (Diploma)",
  "Mechanical Engineering (Diploma)",
  "Civil Engineering (Diploma)"
];

// Available batches
export const batches = [
  "2018-21",
  "2019-22",
  "2020-23",
  "2021-24",
  "2022-25"
];

// Available branches
export const branches = [
  "Computer Science",
  "Electrical",
  "Mechanical",
  "Civil"
];

// Authentication function
export const authenticate = (username: string, password: string): boolean => {
  // For demo purposes, simple authentication
  return username === "admin" && password === "password";
};
