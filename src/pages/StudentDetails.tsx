
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layouts/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { getStudentById, Student } from "@/services/mockData";
import { useToast } from "@/hooks/use-toast";

const StudentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [student, setStudent] = useState<Student | null>(null);
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    if (id) {
      const studentData = getStudentById(id);
      if (studentData) {
        setStudent(studentData);
      } else {
        toast({
          title: "Student not found",
          description: "The requested student record could not be found",
          variant: "destructive",
        });
        navigate("/admin");
      }
    }
  }, [id, isAuthenticated, navigate, toast]);

  const handleExportAsPDF = () => {
    toast({
      title: "Export initiated",
      description: "Your PDF will be downloaded shortly",
    });
  };

  if (!student) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header isLoggedIn={true} onLogout={logout} />
        <div className="flex-1 flex items-center justify-center">
          <p>Loading student information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header isLoggedIn={true} onLogout={logout} />
      
      <div className="container mx-auto p-4 flex-1">
        <Card className="mb-6">
          <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-t-lg">
            <div className="flex items-start gap-4">
              <div className="college-logo">
                <div className="college-logo-inner">T</div>
              </div>
              <div>
                <h1 className="font-bold text-xl md:text-2xl">Techno Engineering College Banipur</h1>
                <p className="text-sm text-gray-500">Habra, North 24 Parganas, West Bengal - 743233</p>
                <p className="text-sm font-medium mt-1">{student.course}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <img 
                src={student.photoUrl}
                alt={student.name}
                className="w-24 h-32 object-cover border-2 border-gray-300"
              />
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            {/* Student Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h2 className="font-bold text-lg mb-4">Student Details</h2>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Name:</span>
                    <span>{student.name}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Roll Number:</span>
                    <span>{student.rollNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Registration:</span>
                    <span>{student.registrationNumber}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Course:</span>
                    <span>{student.course}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Branch:</span>
                    <span>{student.branch}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Batch:</span>
                    <span>{student.batch}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Current Sem:</span>
                    <span>{student.semester}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Active Reg No:</span>
                    <span>{student.registrationNumber}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-bold text-lg mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Date of Birth:</span>
                    <span>{student.dateOfBirth}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Gender:</span>
                    <span>{student.gender}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Email:</span>
                    <span>{student.email}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Phone:</span>
                    <span>{student.mobile}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Current Address:</span>
                    <span>{student.address.current}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-32 text-gray-700">Permanent Address:</span>
                    <span>{student.address.permanent}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Father's Details */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-4">Father's Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex">
                  <span className="font-medium w-32 text-gray-700">Father's Name:</span>
                  <span>{student.parentDetails.fatherName}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-700">Occupation:</span>
                  <span>{student.parentDetails.fatherOccupation}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-700">Mother's Name:</span>
                  <span>{student.parentDetails.motherName}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32 text-gray-700">Occupation:</span>
                  <span>{student.parentDetails.motherOccupation}</span>
                </div>
              </div>
            </div>
            
            {/* Academic Details */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-4">Student Academic Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex">
                  <span className="font-medium w-36 text-gray-700">Enrollment Date:</span>
                  <span>{student.academicDetails.enrollmentDate}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-36 text-gray-700">Current Semester:</span>
                  <span>{student.academicDetails.currentSemester}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-36 text-gray-700">Registration Status:</span>
                  <span>{student.academicDetails.registrationStatus}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-36 text-gray-700">Attendance:</span>
                  <span>{student.academicDetails.attendancePercentage}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-36 text-gray-700">Fees Status:</span>
                  <span>{student.academicDetails.feesStatus}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-36 text-gray-700">Scholarship:</span>
                  <span>{student.academicDetails.scholarshipDetails}</span>
                </div>
              </div>
            </div>
            
            {/* Exam Results */}
            <div>
              <h2 className="font-bold text-lg mb-4">Exam Results</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-2 text-left">Semester</th>
                      <th className="px-4 py-2 text-left">CGPA</th>
                      <th className="px-4 py-2 text-left">Backlogs</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.academicDetails.examResults.map((result, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">{result.semester}</td>
                        <td className="px-4 py-2">{result.cgpa}</td>
                        <td className="px-4 py-2">{result.backlogs}</td>
                        <td className="px-4 py-2">
                          {Number(result.backlogs) > 0 ? "Failed" : "Passed"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between p-6 bg-white rounded-b-lg">
            <Button 
              variant="outline"
              onClick={() => navigate("/admin")}
            >
              Back to List
            </Button>
            <Button 
              className="bg-college hover:bg-college/90"
              onClick={handleExportAsPDF}
            >
              Export Student Details as PDF file
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StudentDetails;
