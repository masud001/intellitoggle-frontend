<template>
  <button
    v-if="tag === 'button'"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    :style="sandboxStyles"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <div v-if="loading" :class="loadingClasses">
      <svg
        class="animate-spin"
        :class="iconClasses"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>

    <!-- Left Icon -->
    <div v-if="leftIcon && !loading" class="mr-2">
      <component :is="leftIcon" :class="iconClasses" />
    </div>

    <!-- Button Content -->
    <span v-if="!loading" class="flex items-center" :class="textClasses">
      <slot />
    </span>
    <span v-else class="flex items-center" :class="textClasses">
      {{ loadingText || 'Loading...' }}
    </span>

    <!-- Right Icon -->
    <div v-if="rightIcon && !loading" class="ml-2">
      <component :is="rightIcon" :class="iconClasses" />
    </div>
  </button>
  <a
    v-else-if="tag === 'a'"
    :href="to"
    :class="buttonClasses"
    :style="sandboxStyles"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <div v-if="loading" :class="loadingClasses">
      <svg
        class="animate-spin"
        :class="iconClasses"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>

    <!-- Left Icon -->
    <div v-if="leftIcon && !loading" class="mr-2">
      <component :is="leftIcon" :class="iconClasses" />
    </div>

    <!-- Button Content -->
    <span v-if="!loading" class="flex items-center" :class="textClasses">
      <slot />
    </span>
    <span v-else class="flex items-center" :class="textClasses">
      {{ loadingText || 'Loading...' }}
    </span>

    <!-- Right Icon -->
    <div v-if="rightIcon && !loading" class="ml-2">
      <component :is="rightIcon" :class="iconClasses" />
    </div>
  </a>
  <NuxtLink
    v-else
    :to="to"
    :class="buttonClasses"
    :style="sandboxStyles"
    v-bind="$attrs"
    @click="handleClick"
  >
    <!-- Loading Spinner -->
    <div v-if="loading" :class="loadingClasses">
      <svg
        class="animate-spin"
        :class="iconClasses"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>

    <!-- Left Icon -->
    <div v-if="leftIcon && !loading" class="mr-2">
      <component :is="leftIcon" :class="iconClasses" />
    </div>

    <!-- Button Content -->
    <span v-if="!loading" class="flex items-center" :class="textClasses">
      <slot />
    </span>
    <span v-else class="flex items-center" :class="textClasses">
      {{ loadingText || 'Loading...' }}
    </span>

    <!-- Right Icon -->
    <div v-if="rightIcon && !loading" class="ml-2">
      <component :is="rightIcon" :class="iconClasses" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

// Debug component loading
onMounted(() => {
  console.log('Button component mounted successfully', {
    variant: props.variant,
    size: props.size,
    loading: props.loading
  })
})

// Define component props
interface Props {
  // Button variants
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'sandbox' | 'sandbox-outline'
  
  // Button sizes
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'sandbox-xs' | 'sandbox-sm' | 'sandbox-md' | 'sandbox-lg' | 'sandbox-xl'
  
  // Button states
  loading?: boolean
  disabled?: boolean
  
  // Button content
  loadingText?: string
  
  // Icons
  leftIcon?: any
  rightIcon?: any
  
  // HTML attributes
  type?: 'button' | 'submit' | 'reset'
  tag?: 'button' | 'a' | 'nuxt-link'
  to?: string
  
  // Sandbox customization
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  
  // Tailwind classes as props
  class?: string
  buttonClass?: string
  textClass?: string
  iconClass?: string
  loadingClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'sandbox',
  size: 'sandbox-md',
  loading: false,
  disabled: false,
  loadingText: '',
  leftIcon: null,
  rightIcon: null,
  type: 'button',
  tag: 'button',
  to: '',
  width: undefined,
  height: undefined,
  borderRadius: undefined,
  class: '',
  buttonClass: '',
  textClass: '',
  iconClass: '',
  loadingClass: ''
})

// Define emits
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Handle click events
const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

// Base button classes
const baseClasses = 'inline-flex items-center justify-center font-medium font-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

// Variant classes
const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-sm hover:shadow-md',
  outline: 'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500',
  ghost: 'text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
  success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
  sandbox: 'sandbox-button',
  'sandbox-outline': 'sandbox-button-outline'
}

// Size classes
const sizeClasses = {
  xs: 'px-2 py-1 text-xs rounded',
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-lg',
  xl: 'px-8 py-4 text-xl rounded-xl',
  'sandbox-xs': 'sandbox-size-xs',
  'sandbox-sm': 'sandbox-size-sm',
  'sandbox-md': 'sandbox-size-md',
  'sandbox-lg': 'sandbox-size-lg',
  'sandbox-xl': 'sandbox-size-xl'
}

// Computed classes
const buttonClasses = computed(() => {
  const classes = []
  
  // For sandbox variants, only use custom classes
  if (props.variant === 'sandbox' || props.variant === 'sandbox-outline') {
    classes.push(variantClasses[props.variant])
    classes.push(sizeClasses[props.size])
  } else {
    classes.push(baseClasses)
    classes.push(variantClasses[props.variant])
    classes.push(sizeClasses[props.size])
  }
  
  // Add custom classes
  if (props.class) {
    classes.push(props.class)
  }
  
  // Add button-specific Tailwind classes
  if (props.buttonClass) {
    classes.push(props.buttonClass)
  }
  
  return classes.filter(Boolean).join(' ')
})

// Computed text classes
const textClasses = computed(() => {
  const classes = []
  
  // Add sandbox text class for sandbox variants
  if (props.variant === 'sandbox' || props.variant === 'sandbox-outline') {
    classes.push('sandbox-text')
  }
  
  // Add custom text classes
  if (props.textClass) {
    classes.push(props.textClass)
  }
  
  return classes.filter(Boolean).join(' ')
})

// Computed icon classes
const iconClasses = computed(() => {
  const classes = ['h-4', 'w-4']
  
  // Add custom icon classes
  if (props.iconClass) {
    classes.push(props.iconClass)
  }
  
  return classes.filter(Boolean).join(' ')
})

// Computed loading classes
const loadingClasses = computed(() => {
  const classes = ['mr-2']
  
  // Add custom loading classes
  if (props.loadingClass) {
    classes.push(props.loadingClass)
  }
  
  return classes.filter(Boolean).join(' ')
})

// Computed styles for sandbox customization
const sandboxStyles = computed(() => {
  if (props.variant !== 'sandbox' && props.variant !== 'sandbox-outline') {
    return {}
  }
  
  const styles: Record<string, string> = {}
  
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : String(props.width)
  }
  
  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : String(props.height)
  }
  
  if (props.borderRadius) {
    styles.borderRadius = typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : String(props.borderRadius)
  }
  
  return styles
})
</script>

<style scoped>
/* Sandbox Button Base Styling */
.sandbox-button,
.sandbox-button-outline {
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  font-family: inherit;
}

/* Sandbox Button Primary */
.sandbox-button {
  width: 214px;
  height: 53px;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  background-color: #f9a71e;
}

/* Sandbox Button Outline */
.sandbox-button-outline {
  width: 214px;
  height: 53px;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  background-color: transparent;
  border: 2px solid #f9a71e;
}

.sandbox-button:hover {
  background-color: #e8960a;
  transform: translateY(-1px);
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.08);
}

.sandbox-button-outline:hover {
  background-color: #f9a71e;
  transform: translateY(-1px);
  box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.08);
}

.sandbox-button:active,
.sandbox-button-outline:active {
  transform: translateY(0);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
}

.sandbox-button:focus,
.sandbox-button-outline:focus {
  outline: 2px solid #42389e;
  outline-offset: 2px;
}

.sandbox-button:disabled,
.sandbox-button-outline:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.sandbox-button:disabled:hover,
.sandbox-button-outline:disabled:hover {
  background-color: #f9a71e;
  transform: none;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
}

/* Sandbox Size Classes */
.sandbox-size-xs {
  width: 120px;
  height: 32px;
  padding: 6px 12px;
  font-size: 14px;
}

.sandbox-size-sm {
  width: 150px;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
}

.sandbox-size-md {
  width: 214px;
  height: 53px;
  padding: 12px 24px;
  font-size: 24px;
}

.sandbox-size-lg {
  width: 280px;
  height: 65px;
  padding: 16px 32px;
  font-size: 28px;
}

.sandbox-size-xl {
  width: 350px;
  height: 80px;
  padding: 20px 40px;
  font-size: 32px;
}

/* Sandbox Text Styling */
.sandbox-text {
  flex-grow: 0;
  background-image: linear-gradient(to bottom, #42389e, #0f1026);
  font-family: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-style: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: center;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}








/* Sandbox Outline Text Styling */
.sandbox-button-outline .sandbox-text {
  background-image: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  -webkit-text-fill-color: #f9a71e;
  color: #f9a71e;
}

/* Sandbox Outline Hover Text Styling */
.sandbox-button-outline:hover .sandbox-text {
  background-image: linear-gradient(to bottom, #42389e, #0f1026);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Responsive text sizing for different button sizes */
.sandbox-size-xs .sandbox-text {
  width: 80px;
  height: 20px;
  font-size: 14px;
}

.sandbox-size-sm .sandbox-text {
  width: 100px;
  height: 24px;
  font-size: 16px;
}

.sandbox-size-md .sandbox-text {
  width: 166px;
  height: 29px;
  font-size: 24px;
}

.sandbox-size-lg .sandbox-text {
  width: 220px;
  height: 35px;
  font-size: 28px;
}

.sandbox-size-xl .sandbox-text {
  width: 280px;
  height: 40px;
  font-size: 32px;
}
</style>
