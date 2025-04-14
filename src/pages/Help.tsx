
import { Header } from "@/components/layouts/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header isLoggedIn={isAuthenticated} onLogout={logout} />
      
      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-2xl font-bold mb-6">Help & Support</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I search for a student?</AccordionTrigger>
                <AccordionContent>
                  You can search for students using the filters at the top of the dashboard. 
                  You can filter by course, batch, branch, or use the specific search to find 
                  students by roll number, name, or father's name.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I export student data?</AccordionTrigger>
                <AccordionContent>
                  After searching for students, you can click the "Export as Excel" button above 
                  the results table. On a student's details page, you can click "Export Student 
                  Details as PDF file" to get a PDF of that student's information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>I forgot my password. What should I do?</AccordionTrigger>
                <AccordionContent>
                  Please contact the system administrator at admin@tecb.example.com or call the IT 
                  department at +91 9876543200 to reset your password.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I update student information?</AccordionTrigger>
                <AccordionContent>
                  Currently, this demo version only supports viewing student information. In the full 
                  version, edit options would be available on the student details page.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I add new students to the system?</AccordionTrigger>
                <AccordionContent>
                  In the full version, there would be an "Add Student" button on the dashboard. This 
                  demo version is read-only for demonstration purposes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg">Technical Support</h3>
                <p>Email: support@tecb.example.com</p>
                <p>Phone: +91 9876543200</p>
                <p>Hours: Monday-Friday, 9:00 AM - 5:00 PM</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">Administrative Office</h3>
                <p>Email: admin@tecb.example.com</p>
                <p>Phone: +91 9876543201</p>
                <p>Hours: Monday-Friday, 10:00 AM - 4:00 PM</p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg">College Address</h3>
                <p>Techno Engineering College Banipur</p>
                <p>Habra, North 24 Parganas</p>
                <p>West Bengal - 743233</p>
                <p>India</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
