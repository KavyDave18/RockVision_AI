"use client"

import { useState } from "react"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"
import { Card } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-blue opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-highlight-coral opacity-10 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-lg bg-primary-blue mr-3">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Rockfall <span className="text-primary-blue">Detection</span>
            </h1>
          </div>
          <p className="text-gray-300">{isLogin ? "Sign in to your account" : "Create your account"}</p>
        </div>

        {/* Auth Card */}
        <Card className="glass-dark p-8 animate-slide-up hover-glow">
          {isLogin ? (
            <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
          )}
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-sm text-gray-400">Secure authentication powered by advanced encryption</p>
        </div>
      </div>
    </div>
  )
}
