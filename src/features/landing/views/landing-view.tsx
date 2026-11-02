import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export const LandingView = () => {
  return (
    <div>
      <SignInButton />
      <Link href="/admin">
        <Button>Admin</Button>
      </Link>
    </div>
  );
};
