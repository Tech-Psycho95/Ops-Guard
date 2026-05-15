import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import AdminTransactionsPage from "./pages/admin/TransactionsPage";
import ManageUsersPage from "./pages/admin/ManageUsersPage";
import OperatorTransactionsPage from "./pages/operator/TransactionsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

function App() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          element={
            <ProtectedRoute
              isAllowed={!!user.email}
              redirectPath="/login"
            />
          }
        >
          <Route element={<Layout />}>
            <Route
              path="/admin/transactions"
              element={
                <ProtectedRoute
                  isAllowed={user.role === "Admin"}
                  redirectPath={user.role === "Operator" ? "/operator/transactions" : "/login"}
                >
                  <AdminTransactionsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-users"
              element={
                <ProtectedRoute
                  isAllowed={user.role === "Admin"}
                  redirectPath={user.role === "Operator" ? "/operator/transactions" : "/login"}
                >
                  <ManageUsersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/operator/transactions"
              element={
                <ProtectedRoute
                  isAllowed={user.role === "Operator"}
                  redirectPath={user.role === "Admin" ? "/admin/transactions" : "/login"}
                >
                  <OperatorTransactionsPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
