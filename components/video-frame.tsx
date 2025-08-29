"use client"
import React, { useState } from 'react'

export const VedioFrame = () => {
    const [muted, setMuted] = useState(true);
    return (
        <>
            <iframe
                className="absolute inset-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/rUNuPqSySko?autoplay=1&loop=1&playlist=rUNuPqSySko&controls=1&modestbranding=1&mute=${muted ? 1 : 0}`}
                title="Rotary Club Community Service"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy" /><button
                    className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded shadow"
                    onClick={() => setMuted(!muted)}
                >
                {muted ? "🔇 Unmute" : "🔊 Mute"}
            </button>
        </>
    )
}
