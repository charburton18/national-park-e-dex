'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LandingPage() {
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const router = useRouter()
  const pageRef = useRef(null)

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].clientX
    const diff = startX - x

    // Only allow left swipe (positive diff)
    if (diff > 0) {
      setCurrentX(diff)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)

    // If swiped more than 100px, navigate to home
    if (currentX > 100) {
      router.push('/')
    } else {
      // Reset position
      setCurrentX(0)
    }
  }

  const handleMouseDown = (e) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const x = e.clientX
    const diff = startX - x

    // Only allow left swipe (positive diff)
    if (diff > 0) {
      setCurrentX(diff)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)

    // If swiped more than 100px, navigate to home
    if (currentX > 100) {
      router.push('/')
    } else {
      // Reset position
      setCurrentX(0)
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F5F1E8]">
      {/* Landing Page (Book Cover) */}
      <div
        ref={pageRef}
        className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(-${currentX}px)`,
          transformOrigin: 'left center',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Logo Container */}
        <div className="relative w-64 h-64 mb-8">
          <Image
            src="/park-e-dex-logo.png"
            alt="National Park-e-dex Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#1D5D36] text-center mb-2">
          National Park-e-dex
        </h1>

        {/* Tagline */}
        <p className="text-xl text-[#3D3D3D] text-center italic mb-8">
          Collect parks, not things.
        </p>

        {/* Swipe Hint */}
        <div className="absolute bottom-24 left-0 right-0 flex flex-col items-center">
          <div className="flex items-center gap-2 text-[#1D5D36] animate-pulse">
            <span className="text-lg">Swipe left to open</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Shadow effect for depth */}
      {currentX > 0 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,${Math.min(currentX / 300, 0.3)}) 100%)`,
          }}
        />
      )}
    </div>
  )
}
