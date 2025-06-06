import { useEffect } from 'react';

interface PerformanceMetrics {
  loadEventEnd: number;
  domContentLoadedEventEnd: number;
  firstPaint?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
}

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics: PerformanceMetrics = {
          loadEventEnd: navigation.loadEventEnd,
          domContentLoadedEventEnd: navigation.domContentLoadedEventEnd,
        };

        // Add paint metrics if available
        paint.forEach((entry) => {
          if (entry.name === 'first-paint') {
            metrics.firstPaint = entry.startTime;
          } else if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
        });

        // Add LCP if available
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.largestContentfulPaint = lastEntry.startTime;
            
            // Send to analytics
            if ((window as any).gtag) {
              (window as any).gtag('event', 'performance_metrics', {
                custom_parameter: {
                  lcp: lastEntry.startTime,
                  fcp: metrics.firstContentfulPaint,
                  fp: metrics.firstPaint,
                  dom_loaded: metrics.domContentLoadedEventEnd,
                  page_load: metrics.loadEventEnd
                }
              });
            }
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }

        console.log('Performance Metrics:', metrics);
      }
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);
};

export default usePerformanceMonitoring;
