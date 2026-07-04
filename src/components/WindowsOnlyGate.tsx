import { Monitor } from "lucide-react";

const WindowsOnlyGate = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl shadow-2xl p-8 text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-zoom-blue/10 flex items-center justify-center">
          <Monitor className="w-9 h-9 text-zoom-blue" />
        </div>
        <h2 className="text-2xl font-bold text-zoom-text">Only Accessible On Windows</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This page is only accessible on Windows systems. Please open it from a
          Windows computer to continue.
        </p>
      </div>
    </div>
  );
};

export default WindowsOnlyGate;
