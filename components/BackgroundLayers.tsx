'use client'

import React from 'react'

export default function Background() {
  return (
    <div
      id="bg-wrap"
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgb(255, 255, 255)" />
            <stop offset="100%" stopColor="rgba(245, 240, 255, 0)" />
          </radialGradient>

          <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
            <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgb(251, 244, 255)" />
            <stop offset="100%" stopColor="rgba(245, 230, 255, 0)" />
          </radialGradient>

          <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
            <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="rgb(255, 255, 255)" />
            <stop offset="100%" stopColor="rgba(255, 245, 255, 0)" />
          </radialGradient>
        </defs>

        {/* Animaciones suaves de los degradados */}
        <rect
          x="13.744%"
          y="1.18473%"
          width="100%"
          height="100%"
          fill="url(#Gradient3)"
          transform="rotate(334.41 50 50)"
        >
          <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="10s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="-2.17916%"
          y="35.4267%"
          width="100%"
          height="100%"
          fill="url(#Gradient5)"
          transform="rotate(255.072 50 50)"
        >
          <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
          <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="9.00483%"
          y="14.5733%"
          width="100%"
          height="100%"
          fill="url(#Gradient6)"
          transform="rotate(139.903 50 50)"
        >
          <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
          <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="15s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  )
}