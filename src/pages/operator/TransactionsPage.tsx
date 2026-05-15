import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TRX001",
    date: "2024-05-15",
    recipient: "John Doe",
    amount: "₱5,000.00",
    type: "Credit",
    status: "Completed",
  },
  {
    id: "TRX002",
    date: "2024-05-14",
    recipient: "Jane Smith",
    amount: "₱2,500.00",
    type: "Debit",
    status: "Pending",
  },
  {
    id: "TRX003",
    date: "2024-05-13",
    recipient: "Peter Jones",
    amount: "₱10,000.00",
    type: "Credit",
    status: "Failed",
  },
  {
    id: "TRX004",
    date: "2024-05-12",
    recipient: "Mary Johnson",
    amount: "₱1,000.00",
    type: "Debit",
    status: "Completed",
  },
  {
    id: "TRX005",
    date: "2024-05-11",
    recipient: "David Williams",
    amount: "₱7,500.00",
    type: "Credit",
    status: "Completed",
  },
];

const OperatorTransactionsPage = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Badge variant="outline">Read Only</Badge>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.recipient}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.status === "Completed"
                      ? "success"
                      : transaction.status === "Pending"
                      ? "default"
                      : "destructive"
                  }
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OperatorTransactionsPage;
