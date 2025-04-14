
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Header = ({ isLoggedIn, onLogout }: HeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-college w-full py-2 px-4 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="college-logo">
          <div className="college-logo-inner">T</div>
        </div>
        <div className="text-white">
          <h1 className="font-bold text-sm md:text-base">Admin Panel</h1>
          <p className="text-xs md:text-sm">ECB</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs md:text-sm bg-white hover:bg-gray-100"
              onClick={() => navigate("/admin")}
            >
              Update Admin
            </Button>
            <Link to="/help" className="text-white text-xs md:text-sm hover:underline px-2">
              Help & Support
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs md:text-sm bg-white hover:bg-gray-100"
              onClick={onLogout}
            >
              Log out
            </Button>
          </>
        ) : (
          <Link to="/help" className="text-white text-xs md:text-sm hover:underline px-2">
            Help & Support
          </Link>
        )}
      </div>
    </header>
  );
};
