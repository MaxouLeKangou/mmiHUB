export default defineAppConfig({
    ui: {
        strategy: 'override',

        button: {
            compoundVariants: [
                {
                  variant: 'solid',
                  class: 'font-semibold text-[1rem] px-8 py-3 rounded-full cursor-pointer'
                },
                {
                    variant: 'outline',
                    class: 'font-semibold text-[1rem] px-8 py-3 rounded-full cursor-pointer'
                }
            ]
        }
    }
})