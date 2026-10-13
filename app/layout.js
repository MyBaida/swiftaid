import "@/app/globals.css";

export const metadata = {
  title: "SwiftAid — AI-Driven Emergency Coordination & Dispatch System",
  description:
    "SwiftAid is an AI-driven emergency coordination and dispatch system developed as a final-year Computer Engineering project, combining AI, geospatial intelligence and real-time communication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
