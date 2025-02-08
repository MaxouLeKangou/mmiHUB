export default defineAppConfig({
    ui: {
        strategy: "override",

        button: {
            base: 'cursor-pointer',

            variants: {
                color: {
                    primary: 'bg-primary text-dark-100',
                    white: 'bg-light-100 !text-dark-100 !rounded-full transition hover:opacity-75'
                },
                size: {
                    sm: {
                        base: 'font-semdibold text-m-sm px-4 lg:px-6 lg:py-2.5 lg:text-d-sm lg:rounded-xl'
                    },
                    md: {
                        base: 'font-semibold text-m-md px-6 py-2.5 rounded-full lg:text-d-sm lg:px-8 md:py-3'
                    }
                },
                variant: {
                    outline: 'bg-transparent text-light-100',
                    iconOnly: '!p-3'
                }
            }
        },

        input: {
            variants: {
                color: {
                    white: 'text-light-100 placeholder:text-light-200 !ring-light-100/10 focus:!ring-light-100/25'
                },
                size: {
                    md: {
                        base: 'rounded-md pl-5 pr-10 py-2.5 !text-d-sm',
                        trailing: 'pe-1.5',
                    }
                }
            }
        },

        selectMenu: {
            slots: {
                placeholder: 'text-light-200',
                content: 'ring-light-100/10',
                item: '!text-d-sm !p-2 data-highlighted:before:bg-light-100/10',
                input: 'border-light-100/10 placeholder:!text-light-200'
            },
            variants: {
                color: {
                    white: 'text-light-100 placeholder:text-light-200 !ring-light-100/10 focus:!ring-light-100/25'
                },
                size: {
                    md: {
                        base: 'rounded-md pl-5 pr-10 py-2.5 !text-d-sm'
                    }
                }
            }
        }
    }
});