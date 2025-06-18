
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Luis Martinez</h1>
          <Button
            onClick={() => window.open('https://drive.google.com/file/d/1aQNGWjZHvDcgKdN4qx4LNZjYjQzXxXhF/view?usp=sharing', '_blank')}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </header>
  );
};
