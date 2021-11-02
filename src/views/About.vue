<template>
  this is about page
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "About",

  setup() {
    const validate = (rules, val) => {
      function parseRules(obj){
        return Function('"use strict";return (' + obj + ')')();
      }
      const ruleExpressions = rules.map(rule => parseRules(rule))
      try {
        return ruleExpressions.map(rule => rule(val)).find(v => v !== true) || true
      } catch (error) {
        return error.toString()
      }
    }
    const rules = [
      v => !!v || 'field can not be empty',
      v => v.length <= 25 || 'too long',
    ]
    const tooLong = 'abcdefghijklmnopqrstuvwxyz'
    const justRight = 'abcdefghijklmnopqrstuvwxy'
    const undef = undefined
    console.log(validate(rules, tooLong))
    console.log(validate(rules, undef))
    console.log(validate(rules, justRight))

    console.log('sss')
    return {
      validate
    }
  }
})
</script>

