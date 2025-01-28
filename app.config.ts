export default defineAppConfig({
    ui: {
        strategy: 'override',

        button: {
            compoundVariants: [
                {
                  variant: 'solid',
                  class: 'font-semibold text-[0.875rem] px-6 py-2.5 rounded-full cursor-pointer lg:text-[1rem] lg:px-8 md:py-3'
                },
                {
                    variant: 'outline',
                    class: 'font-semibold text-[0.875rem] px-6 py-2.5 rounded-full cursor-pointer lg:text-[1rem] lg:px-8 md:py-3'
                }
            ]
        }
    }
})