
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layouts/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getStudents, courses, batches, branches, Student } from "@/services/mockData";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // State for search filters
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedBatch, setSelectedBatch] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [rollNumber, setRollNumber] = useState<string>("");
  const [studentName, setStudentName] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Student[]>([]);

  // Check authentication
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Handle general search
  const handleGeneralSearch = () => {
    const results = getStudents("", selectedCourse, selectedBatch, selectedBranch);
    setSearchResults(results);
    
    toast({
      title: `${results.length} results found`,
      description: "Search completed successfully",
    });
  };

  // Handle specific search
  const handleSpecificSearch = () => {
    const results = getStudents("", selectedCourse, selectedBatch, selectedBranch, rollNumber, studentName, fatherName);
    setSearchResults(results);
    
    toast({
      title: `${results.length} results found`,
      description: "Search completed successfully",
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCourse("");
    setSelectedBatch("");
    setSelectedBranch("");
    setRollNumber("");
    setStudentName("");
    setFatherName("");
    setSearchResults([]);
  };

  // Handle view student details
  const viewStudentDetails = (id: string) => {
    navigate(`/student/${id}`);
  };

  // Export as Excel (mock function)
  const exportAsExcel = () => {
    toast({
      title: "Export initiated",
      description: "Your file will be downloaded shortly",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header isLoggedIn={true} onLogout={logout} />
      
      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-2xl font-bold mb-6">Master List</h1>
        
        {/* General Search Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Search by List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Course</label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Select Batch</label>
                <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Batch" />
                  </SelectTrigger>
                  <SelectContent>
                    {batches.map((batch) => (
                      <SelectItem key={batch} value={batch}>
                        {batch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Select Branch</label>
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch} value={branch}>
                        {branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleGeneralSearch}
                className="bg-college hover:bg-college/90"
              >
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Specific Search Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Specific Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Enter Roll Number</label>
                <Input 
                  placeholder="e.g. ECB20001" 
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Enter Name</label>
                <Input 
                  placeholder="Student Name" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Father's Name</label>
                <Input 
                  placeholder="Father's Name" 
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleSpecificSearch}
                className="bg-college hover:bg-college/90"
              >
                Apply
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Results Table */}
        {searchResults.length > 0 && (
          <Card className="mb-6 overflow-x-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Search Results</CardTitle>
              <Button 
                onClick={exportAsExcel} 
                variant="outline" 
                size="sm"
              >
                Export as Excel
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-2 text-left">Roll Number</th>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Father's Name</th>
                      <th className="px-4 py-2 text-left">Course</th>
                      <th className="px-4 py-2 text-left">Branch</th>
                      <th className="px-4 py-2 text-left">Batch</th>
                      <th className="px-4 py-2 text-left">Semester</th>
                      <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-muted/50">
                        <td className="px-4 py-2">{student.rollNumber}</td>
                        <td className="px-4 py-2">{student.name}</td>
                        <td className="px-4 py-2">{student.fatherName}</td>
                        <td className="px-4 py-2">{student.course}</td>
                        <td className="px-4 py-2">{student.branch}</td>
                        <td className="px-4 py-2">{student.batch}</td>
                        <td className="px-4 py-2">{student.semester}</td>
                        <td className="px-4 py-2">
                          <Button 
                            variant="link" 
                            className="text-college p-0 h-auto"
                            onClick={() => viewStudentDetails(student.id)}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
