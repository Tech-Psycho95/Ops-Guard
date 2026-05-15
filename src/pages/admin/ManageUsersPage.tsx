import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Operator",
  },
  {
    name: "Peter Jones",
    email: "peter.jones@example.com",
    role: "Operator",
  },
  {
    name: "Mary Johnson",
    email: "mary.johnson@example.com",
    role: "Operator",
  },
  {
    name: "David Williams",
    email: "david.williams@example.com",
    role: "Admin",
  },
];

const ManageUsersPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button variant="destructive">Deactivate</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsersPage;
