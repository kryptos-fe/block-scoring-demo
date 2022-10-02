import { useState, useEffect } from 'react';
import { getSelectorsByUserAgent } from 'react-device-detect';

export default function useDeviceDetection() {
  const [deviceIsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const { isMobile } = getSelectorsByUserAgent(navigator.userAgent);
    setIsMobile(isMobile);
  }, [deviceIsMobile]);

  return deviceIsMobile;
}
