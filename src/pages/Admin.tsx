
import { useState, useEffect } from "react";
import { getContactMessages, deleteContactMessage } from "@/lib/database";
import { ContactMessage } from "@/lib/types/contact";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const Admin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if user was previously authorized in this session
    const sessionAuth = sessionStorage.getItem('admin_authorized');
    if (sessionAuth === 'true') {
      setIsAuthorized(true);
      loadMessages();
    }
  }, []);

  const loadMessages = () => {
    const data = getContactMessages();
    // Sort by date, newest first
    setMessages(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in a real app, use secure authentication
    if (password === "admin123") { // This is just for demo purposes
      setIsAuthorized(true);
      sessionStorage.setItem('admin_authorized', 'true');
      loadMessages();
    } else {
      toast.error("Invalid password");
    }
  };

  const handleDelete = (id: string) => {
    const success = deleteContactMessage(id);
    if (success) {
      toast.success("Message deleted successfully");
      loadMessages(); // Refresh the list
    } else {
      toast.error("Failed to delete message");
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gray-50 py-24 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter admin password"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Contact Messages</h1>
          <Button 
            onClick={() => {
              sessionStorage.removeItem('admin_authorized');
              setIsAuthorized(false);
            }}
            variant="outline"
          >
            Logout
          </Button>
        </div>

        {messages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <p className="text-gray-500">No messages found.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.map((msg) => (
                  <TableRow key={msg.id}>
                    <TableCell className="font-medium">{formatDate(msg.createdAt)}</TableCell>
                    <TableCell>{msg.name}</TableCell>
                    <TableCell>{msg.email}</TableCell>
                    <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDelete(msg.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
