import React, { Suspense } from "react";
import { LoginForm } from "@/app/_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6 md:p-10">
      <div className="w-full h-full max-w-sm mt-16">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
