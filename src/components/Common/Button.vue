<template>
  <component
    :is="component"
    type="button"
    :to="to"
    class="btn"
    :class="{
      'btn-secondary': secondary && !minimal,
      'btn-minimal': minimal && !secondary,
      'btn-primary': !minimal && !secondary && primary,
    }"
  >
    <component
      :is="iconComponent"
      v-if="icon && alignIcon === 'left'"
      class="-ml-1 mr-2 h-5 w-5"
      aria-hidden="true"
    />
    <slot></slot>
    <component
      :is="iconComponent"
      v-if="icon && alignIcon === 'right'"
      class="ml-2 -mr-1 h-5 w-5"
      aria-hidden="true"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    minimal: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    left: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const component = computed(() => {
      if (props.to) {
        return 'router-link'
      }
      return 'button'
    })

    const alignIcon = computed(() => {
      if (props.left && props.right) {
        return 'right'
      }
      return 'left'
    })

    const iconComponent = ref(null)

    onMounted(async () => {
      if (props.icon) {
        const module = await import(`@heroicons/vue/solid/${props.icon}`)
        iconComponent.value = module.default
      }
    })

    return { component, iconComponent, alignIcon }
  },
})
</script>
