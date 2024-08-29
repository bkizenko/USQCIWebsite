'use client'

import React from 'react'

export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover filter blur-md"
      onError={(e) => {
        console.error("Video error:", e.target.error);
      }}
    >
      <source src="/truckvid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}