"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const [error, setError] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const errorParam = urlParams.get("error");

    if (errorParam) {
      switch (errorParam) {
        case "PermissionDenied":
          setError("You don't have permission to access this application.");
          break;
        case "AuthenticationRequired":
          setError("You need to be signed in to access this page.");
          break;
        default:
          setError("An unknown error occurred.");
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* Glass-like card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 mb-4">
            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
              <Lock className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome to DTU FLATS
          </h2>
          <p className="text-gray-500 mt-2">
            Bridging Memories, Building Futures
          </p>
        </div>

        {/* Display Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-md">{error}</div>
        )}

        {/* Login Options */}
        <div className="space-y-4">
          {/* Google Sign In Button */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;