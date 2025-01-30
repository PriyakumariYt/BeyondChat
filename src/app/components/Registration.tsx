"use client"

import { useState } from "react"

export default function Registration({
  nextStep,
  updateUserData,
}: { nextStep: () => void; updateUserData: (data: any) => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [isCodeSent, setIsCodeSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateUserData({ name, email })
    nextStep()
  }

  const sendVerificationCode = () => {
    setIsCodeSent(true)
  }

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked")
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Register for BeyondChats</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        {!isCodeSent ? (
          <button
            onClick={sendVerificationCode}
            type="button"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Verification Code
          </button>
        ) : (
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        )}
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </button>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="w-full mt-4 p-2 bg-white border border-gray-300 rounded hover:bg-gray-100"
      >
        Continue with Google
      </button>
    </div>
  )
}

