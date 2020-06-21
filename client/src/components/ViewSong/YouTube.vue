
<template>
  <panel title="YouTube Video">
      <div class="l-auth">
    <youtube
      :video-id="youtubeId"
      :player-width="310"
      :player-height="260">
    </youtube>
      </div>
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

<style lang="scss">
  @import "../../assets/style.scss";
.l-auth {
  justify-content: center;
   color: $border-color-input !important;
    background-color: $background-color;
    padding: 15px!important;
    margin:  10px;
    width: 340px;
    min-width: 400px;
    max-width: 600px;
    animation: bounceIn 1s forwards ease;

  }

</style>
