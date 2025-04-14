
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layouts/Header";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Small delay to simulate API call
    setTimeout(() => {
      const success = login(username, password);
      
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to the admin panel",
          variant: "default",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header isLoggedIn={false} onLogout={() => {}} />
      
      <div className="flex-1 flex items-center justify-center p-4 bg-cover bg-center" 
           style={{ backgroundImage: "url('/lovable-uploads/b5937db0-bb61-414d-a82c-8531b33a8f27.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <Card className="w-full max-w-md z-10">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome to Techno Engineering College Banipur</CardTitle>
            <CardDescription>Enter your credentials to sign in</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <Input
                    id="username"
                    placeholder="admin"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full mt-6 bg-college hover:bg-college/90" 
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login as Admin"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-500">
            <p className="w-full">For demo: username = "admin", password = "password"</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
