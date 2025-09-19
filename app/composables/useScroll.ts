// Scroll Composable
import { ref, onMounted, onUnmounted } from 'vue';

export function useScroll() {
  const scrollY = ref<number>(0);
  const scrollDirection = ref<'up' | 'down'>('down');
  const isScrolling = ref<boolean>(false);
  const lastScrollY = ref<number>(0);

  let scrollTimeout: NodeJS.Timeout;

  const handleScroll = () => {
    if (typeof window === 'undefined') return;
    
    scrollY.value = window.scrollY;
    
    // Determine scroll direction
    if (scrollY.value > lastScrollY.value) {
      scrollDirection.value = 'down';
    } else {
      scrollDirection.value = 'up';
    }
    
    lastScrollY.value = scrollY.value;
    
    // Set scrolling state
    isScrolling.value = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false;
    }, 150);
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    }
  });

  return {
    scrollY,
    scrollDirection,
    isScrolling,
  };
}
