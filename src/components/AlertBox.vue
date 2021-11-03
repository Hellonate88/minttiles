<template>
  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-green-800">
          {{ messageTitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import { CheckCircleIcon, XIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: "AlertBox",
  components: {
    CheckCircleIcon,
    XIcon,
  },
  props: {
    messageTitle: '',
    message: '',
    btnLabel: '',
  //  open
  },
  setup(props) {
    const open = ref(true)
    return {
      open,
    }

  },
})
</script>
