import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

interface NavbarProps {
  onNavigate: (page: "home" | "add-event") => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  return (
    <nav className="sticky top-0 flex w-full bg-red-500 justify-between p-4 items-center z-50">
      <div className="flex items-center gap-3">
        <img
          src="/HTUeventsWhite.png"
          alt="Logo"
          className="h-12 object-cover"
        />
      </div>

      <div className="hidden md:flex gap-4">
        <Button
          variant="ghost"
          className={`h-9 px-4 text-white hover:text-white hover:bg-white/10 ${
            currentPage === "home" ? "bg-white/10" : "bg-transparent"
          }`}
          onClick={() => onNavigate("home")}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          className={`h-9 px-4 text-white hover:text-red-500 hover:bg-white/10 ${
            currentPage === "add-event" ? "bg-white/10" : "bg-transparent"
          }`}
          onClick={() => onNavigate("add-event")}
        >
          Add Event
        </Button>
      </div>

      <Avatar className="w-10 h-10">
        <AvatarFallback className="font-medium">MJ</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default Navbar;
