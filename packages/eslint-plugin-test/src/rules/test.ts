import type { Rule } from 'eslint'

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Description of the rule',
    },
    fixable: 'code',
    schema: [], // no options
  },
  create: function(context) {
    return {
      Program() {
        const sourceCode = context.sourceCode.text
        console.log(sourceCode)
      },
    }
  },
} satisfies Rule.RuleModule
