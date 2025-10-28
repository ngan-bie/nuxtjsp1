<template>
  <div class="banner-box">
     <HeroSection></HeroSection>
  </div>   
  <FeaturesSection></FeaturesSection>
  <WhyChooseUs></WhyChooseUs>
  <TeamSection></TeamSection>
  <ProjectsSection></ProjectsSection>
  <TestimonialsSection></TestimonialsSection>
  <FaqSection></FaqSection>
  <FooterSection></FooterSection>
  
</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores/userStore'
import HeroSection from '~/components/sections/HeroSection.vue'
import FooterSection from '~/components/sections/FooterSection.vue'
import FeaturesSection from '~/components/sections/FeaturesSection.vue'
import WhyChooseUs from '~/components/sections/WhyChooseUs.vue'
import TeamSection from  '~/components/sections/TeamSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import Logo from '~/components/icons/Logo.vue'

const userStore = useUserStore()

const fetchUser = async () => {
  await userStore.fetchUser()
}
</script>

<style>
.banner-box {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgb(231, 242, 255);
}
</style>
