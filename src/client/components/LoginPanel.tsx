"use client";

import { useState, useEffect } from "react";

interface LoginPanelProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function LoginPanel({ isVisible, onClose }: LoginPanelProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Add login logic here
  };

  const handleGuestContinue = () => {
    console.log('Continue as guest');
    // Add guest logic here
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-end z-10 transition-transform duration-1000 ease-in-out ${
      isVisible ? 'translate-x-0' : 'translate-x-full'
    }`}>
      {/* Panel - same styling as original white panel */}
      <div className="h-full flex items-center bg-white/70 rounded-l-2xl px-8 sm:px-16 py-8 shadow-lg relative w-full max-w-sm">
        {/* Back arrow button top left */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Back"
        >
          <svg className="w-7 h-7" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="w-full">
          {/* Header */}
          <div className="flex justify-center items-center mb-8">
            <h2 className="text-2xl font-semibold text-black">Welcome Back</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-black mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Sign In
              </button>
              
              <button
                type="button"
                onClick={handleGuestContinue}
                className="w-full bg-gray-100 text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Continue as Guest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 