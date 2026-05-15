import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">ops-guard</div>
      <div className="flex items-center gap-4">
        {user.role === "Admin" && (
          <>
            <Link to="/admin/transactions">Transactions</Link>
            <Link to="/admin/manage-users">Manage Users</Link>
          </>
        )}
        {user.role === "Operator" && (
          <Link to="/operator/transactions">Transactions</Link>
        )}
      </div>
      <div className="flex items-center gap-4">
        <span>{user.email}</span>
        <Badge>{user.role}</Badge>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
