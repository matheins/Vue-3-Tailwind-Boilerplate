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
      v-if="icon && alignIcon === 'left'"
      :is="iconComponent"
      class="-ml-1 mr-2 h-5 w-5"
      aria-hidden="true"
    />
    <slot></slot>
    <component
      v-if="icon && alignIcon === 'right'"
      :is="iconComponent"
      class="ml-2 -mr-1 h-5 w-5"
      aria-hidden="true"
    />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    secondary: {
      type: Boolean,
    },
    minimal: {
      type: Boolean,
    },
    to: {
      type: String,
    },
    icon: {
      type: String,
    },
    left: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
    },
  },
  setup(props) {
    const component = computed(() => {
      if (props.to) {
        return "router-link";
      }
      return "button";
    });

    const alignIcon = computed(() => {
      if (props.left && props.right) {
        return "right";
      }
      return "left";
    });

    const iconComponent = ref(null);

    onMounted(async () => {
      if (props.icon) {
        const module = await import(`@heroicons/vue/solid/${props.icon}`);
        iconComponent.value = module.default;
      }
    });

    return { component, iconComponent, alignIcon };
  },
});
</script>
