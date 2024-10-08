import Header from "@/components/Header";
import useSignStore from "@/store/signStore";
import { cn } from "@coucoudas/ui";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const router = useNavigate();
  const { user } = useSignStore();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const layout = {
    sizes: "w-full min-h-screen",
  };
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        console.log("Iframe loaded");
      };
      iframe.addEventListener("load", handleLoad);
      return () => {
        iframe.removeEventListener("load", handleLoad);
      };
    }
  }, []);
  return (
    <div>
      <Header />
      <iframe src="https://www.coupang.com" className={cn(layout)} />
      <div
        className="fixed top-14 left-0 h-screen w-full"
        onClick={() => router("/items")}
      />
    </div>
  );
}
