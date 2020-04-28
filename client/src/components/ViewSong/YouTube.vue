
<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="450"
      :player-height="330">
    </youtube>
  </panel>
</template>

<script>
import Panel from '@/components/globals/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }

}
</script>

<style scoped>
@media (max-width: 400px) {
}
</style>
