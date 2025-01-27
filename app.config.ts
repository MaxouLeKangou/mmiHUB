export default defineAppConfig({
    ui: {
        strategy: 'override',

        button: {
            compoundVariants: [
                {
                  variant: 'solid',
                  class: 'font-display font-semibold text-base px-8 py-3 rounded-full cursor-pointer'
                }
            ]
        }
    }
})