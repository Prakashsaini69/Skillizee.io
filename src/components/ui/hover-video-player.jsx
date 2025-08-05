"use client"

import React, { useRef, useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "../../lib/utils"
import LazyImage from "../common/LazyImage"

const HoverVideoPlayer = ({
  videoSrc,
  thumbnailSrc,
  className,
  style,
  enableControls = false,
}) => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [muted, setMuted] = useState(true)
  const [showThumbnail, setShowThumbnail] = useState(true)

  const handleHoverStart = useCallback(() => {
    setIsHovering(true)
    // For iframe embeds (Vimeo, Synthesia), we don't need to handle play/pause manually
    if (!videoSrc.includes('vimeo.com') && !videoSrc.includes('synthesia.io') && videoRef.current && !isPlaying) {
      setIsLoading(true)
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true)
              setIsLoading(false)
              setShowThumbnail(false)
            })
            .catch((error) => {
              console.error("Video play error:", error)
              setIsLoading(false)
            })
        }
      }, 50)
    }
  }, [isPlaying, videoSrc])

  const handleHoverEnd = useCallback(() => {
    setIsHovering(false)
    // For iframe embeds (Vimeo, Synthesia), we don't need to handle play/pause manually
    if (!videoSrc.includes('vimeo.com') && !videoSrc.includes('synthesia.io') && videoRef.current && isPlaying) {
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause()
          setIsPlaying(false)
          setShowThumbnail(true)
        }
      }, 50)
    }
  }, [isPlaying, videoSrc])

  const togglePlayPause = useCallback(() => {
    // For iframe embeds, we can't control playback directly
    if (videoSrc.includes('vimeo.com') || videoSrc.includes('synthesia.io')) {
      console.log('Controls not available for iframe embeds')
      return
    }

    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowThumbnail(true)
    } else {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true)
          setShowThumbnail(false)
        })
        .catch((error) => {
          console.error("Video play error:", error)
        })
    }
  }, [isPlaying, videoSrc])

  const toggleMute = useCallback(() => {
    // For iframe embeds, we can't control mute directly
    if (videoSrc.includes('vimeo.com') || videoSrc.includes('synthesia.io')) {
      console.log('Mute control not available for iframe embeds')
      return
    }

    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }, [muted, videoSrc])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
    }

    const handlePlaying = () => {
      setIsPlaying(true)
      setIsLoading(false)
      setShowThumbnail(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
      setShowThumbnail(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("playing", handlePlaying)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("playing", handlePlaying)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden group cursor-pointer rounded-lg",
        className
      )}
      style={style}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
             {/* Video Element */}
       {videoSrc && videoSrc.includes('vimeo.com') ? (
         <iframe
           src={`${videoSrc}?autoplay=0&muted=1&loop=1&controls=0&background=1`}
           className="absolute inset-0 w-full h-full"
           frameBorder="0"
           allow="autoplay; fullscreen; picture-in-picture"
           allowFullScreen
           title="Video player"
         />
       ) : videoSrc && videoSrc.includes('synthesia.io') ? (
         <iframe
           src={videoSrc}
           className="absolute inset-0 w-full h-full"
           frameBorder="0"
           allow="autoplay; fullscreen; picture-in-picture"
           allowFullScreen
           title="Video player"
         />
       ) : (
         <video
           ref={videoRef}
           src={videoSrc}
           className="absolute inset-0 w-full h-full object-cover"
           muted={muted}
           loop
           preload="metadata"
           playsInline
           crossOrigin="anonymous"
           aria-label="Video player"
         />
       )}

             {/* Thumbnail */}
       {thumbnailSrc && showThumbnail && !videoSrc.includes('vimeo.com') && !videoSrc.includes('synthesia.io') && (
         <div className="absolute inset-0 w-full h-full">
           <LazyImage
             src={thumbnailSrc}
             alt="Video thumbnail"
             className="w-full h-full object-cover"
           />
         </div>
       )}

             {/* Play Button Overlay */}
       {!isPlaying && !isHovering && !videoSrc.includes('vimeo.com') && !videoSrc.includes('synthesia.io') && (
         <motion.div
           className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.3 }}
         >
           <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
             <Play className="w-8 h-8 text-black ml-1" />
           </div>
         </motion.div>
       )}

             {/* Loading Overlay */}
       {isLoading && (
         <motion.div
           className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.2 }}
         >
           <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
         </motion.div>
       )}

             {/* Controls */}
       {enableControls && !videoSrc.includes('vimeo.com') && !videoSrc.includes('synthesia.io') && (
         <motion.div
           className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
           initial={{ opacity: 0, y: 20 }}
           animate={{
             opacity: isHovering ? 1 : 0,
             y: isHovering ? 0 : 20,
           }}
           transition={{ duration: 0.3 }}
         >
           <div className="flex items-center space-x-2">
             <button
               onClick={togglePlayPause}
               className="text-white hover:text-primary-foreground p-2 rounded-full hover:bg-white/20 transition-colors"
               aria-label={isPlaying ? "Pause video" : "Play video"}
             >
               {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
             </button>
             <button
               onClick={toggleMute}
               className="text-white hover:text-primary-foreground p-2 rounded-full hover:bg-white/20 transition-colors"
               aria-label={muted ? "Unmute" : "Mute"}
             >
               {muted ? (
                 <VolumeX className="h-6 w-6" />
               ) : (
                 <Volume2 className="h-6 w-6" />
               )}
             </button>
           </div>
         </motion.div>
       )}
    </motion.div>
  )
}

export { HoverVideoPlayer } 