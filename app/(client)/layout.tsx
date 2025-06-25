import React from "react";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#80EED1",
            color: "white",
            border: "none",
          },
          className: "success-toast",
        }}
      />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
}
