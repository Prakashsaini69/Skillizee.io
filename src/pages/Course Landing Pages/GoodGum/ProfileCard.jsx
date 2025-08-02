import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value,
  fromMin,
  fromMax,
  toMin,
  toMax
) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCardComponent = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl,
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  avatarSize = '100%',
  miniAvatarSize = '48px',
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
  linkedinUrl,
  socialIconUrl,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const rafIdRef = useRef(null);

  const updateCardTransform = useCallback((
    offsetX,
    offsetY,
    card,
    wrap
  ) => {
    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    const properties = {
      "--pointer-x": `${percentX}%`,
      "--pointer-y": `${percentY}%`,
      "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
      "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
      "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
      "--pointer-from-top": `${percentY / 100}`,
      "--pointer-from-left": `${percentX / 100}`,
      "--rotate-x": `${round(-(centerX / 5))}deg`,
      "--rotate-y": `${round(centerY / 4)}deg`,
    };

    Object.entries(properties).forEach(([property, value]) => {
      wrap.style.setProperty(property, value);
    });
  }, []);

  const createSmoothAnimation = useCallback((
    duration,
    startX,
    startY,
    card,
    wrap
  ) => {
    const animationLoop = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      const currentX = startX + (50 - startX) * easedProgress;
      const currentY = startY + (50 - startY) * easedProgress;

      updateCardTransform(
        (currentX / 100) * card.clientWidth,
        (currentY / 100) * card.clientHeight,
        card,
        wrap
      );

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animationLoop);
      }
    };

    const startTime = performance.now();
    rafIdRef.current = requestAnimationFrame(animationLoop);
  }, [updateCardTransform]);

  const handlePointerMove = useCallback((e) => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    updateCardTransform(offsetX, offsetY, card, wrap);
  }, [enableTilt, updateCardTransform]);

  const handlePointerEnter = useCallback((e) => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    updateCardTransform(offsetX, offsetY, card, wrap);
  }, [enableTilt, updateCardTransform]);

  const handlePointerLeave = useCallback(() => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    createSmoothAnimation(
      ANIMATION_CONFIG.SMOOTH_DURATION,
      parseFloat(wrap.style.getPropertyValue("--pointer-x")) || 50,
      parseFloat(wrap.style.getPropertyValue("--pointer-y")) || 50,
      card,
      wrap
    );
  }, [enableTilt, createSmoothAnimation]);

  const handleDeviceOrientation = useCallback((e) => {
    if (!enableMobileTilt || !enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const beta = e.beta || 0;
    const gamma = e.gamma || 0;

    const offsetX = centerX + (gamma * mobileTiltSensitivity);
    const offsetY = centerY + (beta * mobileTiltSensitivity);

    updateCardTransform(offsetX, offsetY, card, wrap);
  }, [enableMobileTilt, enableTilt, mobileTiltSensitivity, updateCardTransform]);

  const handleClick = useCallback(() => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      centerX + ANIMATION_CONFIG.INITIAL_X_OFFSET,
      centerY + ANIMATION_CONFIG.INITIAL_Y_OFFSET,
      card,
      wrap
    );
  }, [enableTilt, createSmoothAnimation]);

  const cancelAnimation = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!enableTilt) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const pointerEnterHandler = (e) => handlePointerEnter(e);
    const pointerMoveHandler = (e) => handlePointerMove(e);
    const pointerLeaveHandler = () => handlePointerLeave();
    const deviceOrientationHandler = (e) => handleDeviceOrientation(e);

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);
    card.addEventListener("click", handleClick);
    
    if (enableMobileTilt && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', deviceOrientationHandler);
    }

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      card.removeEventListener("click", handleClick);
      
      if (enableMobileTilt && window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', deviceOrientationHandler);
      }
      
      cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    handlePointerEnter,
    handlePointerMove,
    handlePointerLeave,
    handleDeviceOrientation,
    handleClick,
    cancelAnimation,
  ]);

  const cardStyle = useMemo(
    () => ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient
        ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    } else {
      onContactClick?.();
    }
  }, [linkedinUrl, onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle}
    >
      <style>
        {`
          .pc-card-wrapper .pc-avatar-content .avatar {
            mix-blend-mode: normal !important;
            opacity: 1 !important;
            z-index: 0 !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
        `}
      </style>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
                            style={{
                width: avatarSize,
                height: avatarSize,
                objectFit: 'cover',
                mixBlendMode: 'normal',
                opacity: '1',
                zIndex: '0',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
              onError={(e) => {
                console.error('Avatar image failed to load:', avatarUrl);
                const target = e.target;
                target.style.display = "none";
              }}
              onLoad={(e) => {
                console.log('Avatar image loaded successfully:', avatarUrl);
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                                         <img
                       src={socialIconUrl || miniAvatarUrl || avatarUrl}
                       alt={`${name || "User"} mini avatar`}
                       loading="lazy"
                       style={{ 
                         width: miniAvatarSize, 
                         height: miniAvatarSize, 
                         objectFit: 'cover',
                         borderRadius: '50%'
                       }}
                       onError={(e) => {
                         console.error('Mini avatar image failed to load:', socialIconUrl || miniAvatarUrl || avatarUrl);
                         const target = e.target;
                         target.style.opacity = "0.5";
                         target.src = avatarUrl;
                       }}
                       onLoad={(e) => {
                         console.log('Mini avatar image loaded successfully:', socialIconUrl || miniAvatarUrl || avatarUrl);
                       }}
                     />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: "auto" }}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard; 