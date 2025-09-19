"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react"

interface RegisterFormProps {
  onSwitchToLogin: () => void
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      console.log("Registration successful:", formData)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">
            First Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className={`pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue ${
              errors.email ? "border-red-500" : ""
            }`}
          />
        </div>
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={`pl-10 pr-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-white">
          Confirm Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            className={`pl-10 pr-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400 focus:border-primary-blue ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
            className="border-gray-600 data-[state=checked]:bg-primary-blue mt-1"
          />
          <Label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
            I agree to the{" "}
            <a href="#" className="text-primary-blue hover:text-blue-400">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary-blue hover:text-blue-400">
              Privacy Policy
            </a>
          </Label>
        </div>
        {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary-blue hover:bg-blue-600 text-white py-3 hover-scale hover-glow"
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Creating account...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        )}
      </Button>

      {/* Switch to Login */}
      <div className="text-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <button type="button" onClick={onSwitchToLogin} className="text-primary-blue hover:text-blue-400 font-medium">
            Sign in
          </button>
        </p>
      </div>
    </form>
  )
}
