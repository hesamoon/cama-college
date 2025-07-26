"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

// components
import Modal from "./Modal";
import Button from "../Button";

// api
import { login, register, verify } from "@/lib/api/auth";

// utilities
import { setCookie } from "@/utilities/cookie";

// validation schemas
import { codeSchema } from "@/lib/validation/codeSchema";
import { loginSchema } from "@/lib/validation/loginSchema";
import { signupSchema } from "@/lib/validation/signupSchema";

function googleSignIn() {
  // TODO: Replace with real Google sign-in
  alert("Google sign-in");
}

function AuthenticationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  // Login state
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState<{ [k: string]: string }>({});
  const [signupErrors, setSignupErrors] = useState<{ [k: string]: string }>({});

  // Signup state
  const [signupForm, setSignupForm] = useState({
    name: "",
    family: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Code state
  const [sentCode, setSentCode] = useState("");
  const [codeDigits, setCodeDigits] = useState(["", "", "", "", "", ""]);
  const [codeErrors, setCodeErrors] = useState<{ [k: string]: string }>({});
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setCookie({ accessToken: data.data.data.token });
      toast.success(data.data.message, {
        position: "top-center",
      });
      router.refresh();
      handleClose();
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          const mappedErrors: { [k: string]: string } = {};
          Object.keys(errors).forEach((key) => {
            mappedErrors[key] = errors[key][0];
          });
          setLoginErrors(mappedErrors);
        } else {
          setLoginErrors({
            general: error.response?.data?.message || error?.message,
          });
        }
      } else {
        setLoginErrors({ general: "An unknown error occurred." });
      }
    },
  });
  const { mutate: registerMutation, isPending: isRegistering } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);

      toast.success(data.data.message, {
        position: "top-center",
      });
      setSentCode(data.data.message.split(":")[1].trim());
      setStep(3);
      // router.refresh();
      // {
      //   "success": true,
      //   "data": [],
      //   "message": "You Registered Successfully! And The Code is : 679819"
      // }
      // handleClose();
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          const mappedErrors: { [k: string]: string } = {};
          Object.keys(errors).forEach((key) => {
            mappedErrors[key] = errors[key][0];
          });
          setSignupErrors(mappedErrors);
        } else {
          setSignupErrors({
            general: error.response?.data?.message || error?.message,
          });
        }
      } else {
        setSignupErrors({ general: "An unknown error occurred." });
      }
    },
  });
  const { mutate: verifyMutation, isPending: isVerifying } = useMutation({
    mutationFn: verify,
    onSuccess: (data) => {
      console.log(data);

      setCookie({ accessToken: data.data.data.token });
      toast.success(data.data.message, {
        position: "top-center",
      });
      router.refresh();
      handleClose();
    },
    onError: (error) => {
      console.log(error);

      if (error instanceof AxiosError) {
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors;
          const mappedErrors: { [k: string]: string } = {};
          Object.keys(errors).forEach((key) => {
            mappedErrors[key] = errors[key][0];
          });
          console.log(mappedErrors);
          setCodeErrors(mappedErrors);
        } else {
          setCodeErrors({
            general: error.response?.data?.message || error?.message,
          });
        }
      } else {
        setCodeErrors({ general: "An unknown error occurred." });
      }
    },
  });

  const reset = () => {
    setStep(1);
    setEmail("");
    setPassword("");
    setLoginErrors({});
    setSignupErrors({});
    setSignupForm({
      name: "",
      family: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  // Login submit handler with Zod validation
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const errors: { [k: string]: string } = {};
      result.error.issues.forEach((err) => {
        if (typeof err.path[0] === "string") errors[err.path[0]] = err.message;
      });
      setLoginErrors(errors);
      return;
    }
    setLoginErrors({});
    loginMutation({ email, password });
  };

  // Signup submit handler with Zod validation
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signupSchema.safeParse(signupForm);
    if (!result.success) {
      const errors: { [k: string]: string } = {};
      result.error.issues.forEach((err) => {
        if (typeof err.path[0] === "string") errors[err.path[0]] = err.message;
      });
      setSignupErrors(errors);
      return;
    }
    setSignupErrors({});
    registerMutation(signupForm);
  };

  const handleCodeInput = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow single digit
    const newDigits = [...codeDigits];
    newDigits[index] = value;
    setCodeDigits(newDigits);
    // Move to next input if value entered
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
    // Move to previous input if deleted
    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Code verification submit handler with Zod validation
  const handleVerifyCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = codeDigits.join("");
    const result = codeSchema.safeParse({ code });
    if (!result.success) {
      const errors: { [k: string]: string } = {};
      result.error.issues.forEach((err) => {
        if (typeof err.path[0] === "string") errors[err.path[0]] = err.message;
      });
      setCodeErrors(errors);
      return;
    }
    setCodeErrors({});
    verifyMutation({ email: signupForm.email, code });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      {/* header */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/cama-college-logo.png"
              alt="logo"
              width={43}
              height={48}
              className="w-auto h-10"
            />
          </Link>
          <h3 className="header-small text-on_surface-light">CAMA College</h3>
        </div>

        {/* close button */}
        <Button
          props={{
            value: "",
            leftIcon: "close-circle",
            rightIcon: "",
            type: "text",
            disabled: false,
            width: 24,
            height: 24,
            size: "mobile-body-large md:body-large",
            clickHandler: handleClose,
          }}
        />
      </div>

      {/* body */}
      <div className="mt-8 flex flex-col gap-6">
        {/* step buttons */}
        {step !== 3 && (
          <div className="flex items-center gap-1">
            <Button
              props={{
                value: "Login",
                leftIcon: "",
                rightIcon: "",
                type: "text",
                disabled: false,
                size: "mobile-title-medium md:title-medium",
                padding: "py-1 px-2",
                clickHandler: () => setStep(1),
              }}
            />
            <span className="text-txt-on-surface-terriary-light">or</span>
            <Button
              props={{
                value: "Signup",
                leftIcon: "",
                rightIcon: "",
                type: "text",
                disabled: false,
                size: "mobile-title-medium md:title-medium",
                padding: "py-1 px-2",
                clickHandler: () => setStep(2),
              }}
            />
          </div>
        )}

        {/* form */}
        <div className="space-y-6">
          {step === 1 && (
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="email"
                  label="E-mail"
                  value={email}
                  placeholder="Enter your e-mail..."
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                  fullWidth
                  error={!!loginErrors.email}
                  helperText={loginErrors.email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="password"
                  label="Password"
                  value={password}
                  placeholder="Enter your password..."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  error={!!loginErrors.password}
                  helperText={loginErrors.password}
                />
              </div>
              {loginErrors.general && (
                <div className="text-red-500 text-sm">
                  {loginErrors.general}
                </div>
              )}
              <Button
                props={{
                  value: isLoggingIn ? "Logging in..." : "Login",
                  type: "filled",
                  disabled: false,
                  clickHandler: undefined,
                  color: "red",
                  width: 24,
                  height: 24,
                  size: "mobile-body-large md:body-large",
                  padding: "py-3",
                  leftIcon: "",
                  rightIcon: "",
                }}
              />
            </form>
          )}
          {step === 2 && (
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="text"
                  label="Name"
                  value={signupForm.name}
                  placeholder="Enter your name..."
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, name: e.target.value }))
                  }
                  autoFocus
                  required
                  fullWidth
                  error={!!signupErrors.name}
                  helperText={signupErrors.name}
                />
              </div>
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="text"
                  label="Family"
                  value={signupForm.family}
                  placeholder="Enter your family name..."
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, family: e.target.value }))
                  }
                  required
                  fullWidth
                  error={!!signupErrors.family}
                  helperText={signupErrors.family}
                />
              </div>
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="email"
                  label="E-mail"
                  value={signupForm.email}
                  placeholder="Enter your e-mail..."
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, email: e.target.value }))
                  }
                  required
                  fullWidth
                  error={!!signupErrors.email}
                  helperText={signupErrors.email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="password"
                  label="Password"
                  value={signupForm.password}
                  placeholder="Enter your password..."
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, password: e.target.value }))
                  }
                  required
                  fullWidth
                  error={!!signupErrors.password}
                  helperText={signupErrors.password}
                />
              </div>
              <div className="flex flex-col gap-1">
                <TextField
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "6px",
                    },
                  }}
                  type="password"
                  label="Password Confirmation"
                  value={signupForm.password_confirmation}
                  placeholder="Confirm your password..."
                  onChange={(e) =>
                    setSignupForm((f) => ({
                      ...f,
                      password_confirmation: e.target.value,
                    }))
                  }
                  required
                  fullWidth
                  error={!!signupErrors.password_confirmation}
                  helperText={signupErrors.password_confirmation}
                />
              </div>
              {signupErrors.general && (
                <div className="text-red-500 text-sm">
                  {signupErrors.general}
                </div>
              )}
              <Button
                props={{
                  value: isRegistering ? "Registering..." : "Signup",
                  type: "filled",
                  disabled: false,
                  clickHandler: undefined,
                  color: "red",
                  width: 24,
                  height: 24,
                  size: "mobile-body-large md:body-large",
                  padding: "py-3",
                  leftIcon: "",
                  rightIcon: "",
                }}
              />
            </form>
          )}
          {step === 3 && (
            <form
              onSubmit={handleVerifyCodeSubmit}
              className="flex flex-col gap-4"
            >
              <p className="body-medium text-start text-txt-on-surface-secondary-light max-w-[500px]">
                We sent a code to{" "}
                <span className="font-bold">{signupForm.email}</span>. Please
                Enter it here : <span className="font-bold">{sentCode}</span>
              </p>

              <div className="flex flex-col gap-1 items-">
                <div className="flex items-center gap-3 justify-between">
                  {codeDigits.map((digit, idx) => (
                    <TextField
                      key={idx}
                      inputProps={{
                        maxLength: 1,
                        style: {
                          textAlign: "center",
                          fontSize: "1rem",
                          width: "2rem",
                        },
                      }}
                      autoFocus={idx === 0}
                      value={digit}
                      onChange={(e) => handleCodeInput(idx, e.target.value)}
                      inputRef={(el) => (inputsRef.current[idx] = el)}
                      type="text"
                      required
                      error={!!codeErrors.code}
                    />
                  ))}
                </div>
                {codeErrors.code && (
                  <div className="text-red-500 text-sm mt-2">
                    {codeErrors.code}
                  </div>
                )}
                {(codeErrors.email || codeErrors.general) && (
                  <div className="text-red-500 text-sm">
                    {codeErrors.email || codeErrors.general}
                  </div>
                )}
              </div>

              <Button
                props={{
                  value: isVerifying ? "Verifying..." : "Verify",
                  type: "filled",
                  disabled: false,
                  clickHandler: undefined,
                  color: "red",
                  width: 24,
                  height: 24,
                  size: "mobile-body-large md:body-large",
                  padding: "py-3",
                  leftIcon: "",
                  rightIcon: "",
                }}
              />
              <Button
                props={{
                  value: "Open Gmail",
                  type: "outlined",
                  disabled: false,
                  clickHandler: () => alert(signupForm.email),
                  color: "red",
                  width: 24,
                  height: 24,
                  size: "mobile-body-large md:body-large",
                  padding: "py-2.5",
                  leftIcon: "",
                  rightIcon: "",
                }}
              />
            </form>
          )}

          {step !== 3 && (
            <div className="flex items-center gap-3">
              <div className="w-full h-[1px] bg-outline-level0" />
              <span className="text-txt-on-surface-terriary-light label-medium-db">
                or
              </span>
              <div className="w-full h-[1px] bg-outline-level0" />
            </div>
          )}

          {/* google signin button */}
          {step !== 3 && (
            <button
              className="transition-all duration-300 relative w-full flex items-center justify-center gap-2 border border-[#E3E3E3] rounded-full p-2 hover:bg-primary-opacity-40 focus:bg-primary-opacity-12 cursor-pointer"
              onClick={googleSignIn}
            >
              <Image
                className="absolute left-2"
                src="/google-logo.svg"
                alt="Google"
                width={24}
                height={24}
              />
              <div>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
export default AuthenticationModal;
