// NPM PACKAGES
import { useEffect, useState } from 'react';
import { AnalyticsBrowser } from '@june-so/analytics-next';

export function useJune(writeKey) {
  // States
  const [analytics, setAnalytics] = useState(null);
  // USE_EFFECT
  useEffect(() => {
    const loadAnalytics = async () => {
      let [response] = await AnalyticsBrowser.load({
        writeKey,
      });
      setAnalytics(response || null);
    };
    loadAnalytics();
  }, [writeKey]);

  return analytics;
}