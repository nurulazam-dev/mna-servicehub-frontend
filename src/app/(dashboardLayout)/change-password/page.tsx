import ChangePassword from "@/components/modules/Dashboard/Common/ChangePassword";
// import { changePasswordService } from "@/services/auth.services";

export default async function ChangePasswordPage() {
  // const userData = await changePasswordService(payload:any);

  return (
    <div className="container mx-auto">
      <ChangePassword />
    </div>
  );
}
