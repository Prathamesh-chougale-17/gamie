import AuthLayout from "@/components/avax-wallet/auth-layout";

const MainAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default MainAuthLayout;
