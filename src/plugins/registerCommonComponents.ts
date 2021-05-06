import { App } from "vue";
import { lowerCase } from "lodash";

export default {
  install: (app: App) => {
    const requireComponent = require.context(
      // The relative path of the components folder
      "@/components/Common",
      // Whether or not to look in subfolders
      true
    );

    requireComponent.keys().forEach((fileName) => {
      // Get component config
      const componentConfig = requireComponent(fileName);

      // Get lowercase name of component
      const componentName = lowerCase(fileName);
      // Register component globally
      app.component(
        `v-${componentName}`,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
      );
    });
  },
};
