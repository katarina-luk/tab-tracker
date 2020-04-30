
<template>
  <panel title="YouTube Video">
      <div class="l-auth">
    <youtube
      :video-id="youtubeId"
      :player-width="400"
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
   color: $border-color-input !important;
    background-color: $background-color;
    padding: 10px;
    margin:  auto;
    min-width: 320px;
    max-width: 420px;
    animation: bounceIn 1s forwards ease;
      label, input, .icon {
      color: #29b6f6!important;
    }
    .input-group__details {
      &:before {
        background-color: $border-color-input !important;
      }
    }
     .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    color: $border-color-input !important;
}
.table th{
   color: $border-color-input !important;
}
  }

</style>
