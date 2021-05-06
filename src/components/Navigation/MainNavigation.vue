<template>
  <Disclosure
    as="nav"
    class="bg-white border-b border-gray-200"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-10 w-auto"
              src="https://res.cloudinary.com/grapemanager/image/upload/v1620153661/Company%20Assets/Icon_htj8vk.svg"
              alt="GrapeManager | Market"
            />
            <img
              class="hidden lg:block h-10 w-auto"
              src="https://res.cloudinary.com/grapemanager/image/upload/v1620153705/Company%20Assets/Logo_Marketplace_uszbqw.svg"
              alt="GrapeManager | Market"
            />
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <MainNavigationLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :name="item.name"
              :current="item.current"
            />
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <MainNavigationMobileMenu :navigation="navigation" v-show="open" />
  </Disclosure>
</template>

<script lang="typescript">
import {
  Disclosure,
  DisclosureButton,

} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useI18n } from "vue-i18n";
import MainNavigationLink from './MainNavigationLink.vue';
import MainNavigationMobileMenu from './MainNavigationMobileMenu.vue';



export default {
  name: "MainNavigation",
  components: {
    Disclosure,
    DisclosureButton,
    MenuIcon,
    XIcon,
    MainNavigationLink,
    MainNavigationMobileMenu,
  },
  setup() {
    const { t } = useI18n()

    const navigation = [
      { name: t("components.navigation.dashboard"), to: "/" },
      { name: t("components.navigation.about"), to: "/about" },
    ];

    return {
      navigation,
    };
  },
};
</script>

<style></style>
