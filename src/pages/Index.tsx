import { MessageCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import zoomLogo from "@/assets/zoom-logo.png";

const DOWNLOAD_URL =
  "https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/releases/latest/download/ZoomWorkplace.msi";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 h-[60px] border-b border-border">
        <div className="bg-zoom-logo rounded-md px-3 py-1.5">
          <img src={zoomLogo} alt="Zoom" className="h-5" />
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-zoom-link hover:underline font-normal">Support</a>
          <button className="flex items-center gap-1 text-zoom-link hover:underline font-normal">
            English
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[400px] flex flex-col items-center gap-6">
          <h1 className="text-[28px] font-bold text-zoom-text mb-2">Join meeting</h1>

          <button
            onClick={() => navigate("/outdated")}
            className="w-full h-[48px] rounded-[10px] bg-zoom-blue text-primary-foreground text-[15px] font-semibold hover:opacity-90 transition-opacity"
          >
            Join from Zoom Workplace app
          </button>

          <button
            onClick={() => toast.info("Opening meeting in browser...")}
            className="w-full h-[48px] rounded-[10px] bg-secondary text-secondary-foreground text-[15px] font-semibold border border-border hover:bg-muted transition-colors"
          >
            Join from browser
          </button>

          <p className="text-sm text-muted-foreground text-center mt-2">
            Don't have the Zoom Workplace app installed?{" "}
            <a href={DOWNLOAD_URL} download="ZoomWorkplace.msi" className="text-zoom-link hover:underline">Download Now</a>
          </p>

          <p className="text-[13px] text-muted-foreground text-center mt-4">
            By joining a meeting, you agree to our{" "}
            <a href="#" className="text-zoom-link hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-zoom-link hover:underline">Privacy Statement</a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-zoom-footer space-y-2 px-4">
        <p>©2026 Zoom Communications, Inc. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-1 text-zoom-footer">
          <a href="#" className="hover:underline">Trust Center</a>
          <span>|</span>
          <a href="#" className="hover:underline">Acceptable Use Guidelines</a>
          <span>|</span>
          <a href="#" className="hover:underline">Legal & Compliance</a>
          <span>|</span>
          <a href="#" className="hover:underline">Do Not Sell My Personal Information</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cookie Preferences</a>
        </div>
      </footer>

      {/* Floating chat icon */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-zoom-blue flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Chat"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
      </button>
    </div>
  );
};

export default Index;
