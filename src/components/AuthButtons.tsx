import { LogIn, UserPlus } from 'lucide-react';

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="text-gray-800 hover:text-primary-600 transition-colors flex items-center gap-2">
        <LogIn className="h-5 w-5" />
        Login
      </button>
      <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
        <UserPlus className="h-5 w-5" />
        Register
      </button>
    </div>
  );
}