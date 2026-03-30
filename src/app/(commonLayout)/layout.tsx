import Footer from "@/components/shared/Footer";
import CommonLayoutNavbar from "@/components/shared/Navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CommonLayoutNavbar />
      {children}
      <Footer />
    </>
  );
}
