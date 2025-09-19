// Breakpoint Composable
import { ref, onMounted, onUnmounted } from 'vue';
import { BREAKPOINTS } from '~/constants';

export function useBreakpoint() {
  const currentBreakpoint = ref<string>('lg');
  const isMobile = ref<boolean>(false);
  const isTablet = ref<boolean>(false);
  const isDesktop = ref<boolean>(true);

  const updateBreakpoint = () => {
    if (typeof window === 'undefined') return;
    
    const width = window.innerWidth;
    
    if (width >= 1920) currentBreakpoint.value = '4xl';
    else if (width >= 1536) currentBreakpoint.value = '2xl';
    else if (width >= 1440) currentBreakpoint.value = '3xl';
    else if (width >= 1280) currentBreakpoint.value = 'xl';
    else if (width >= 1024) currentBreakpoint.value = 'lg';
    else if (width >= 768) currentBreakpoint.value = 'md';
    else if (width >= 393) currentBreakpoint.value = 'mobile';
    else if (width >= 375) currentBreakpoint.value = 'sm';
    else currentBreakpoint.value = 'xs';

    isMobile.value = width < 768;
    isTablet.value = width >= 768 && width < 1024;
    isDesktop.value = width >= 1024;
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateBreakpoint);
    }
  });

  return {
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    updateBreakpoint,
  };
}
