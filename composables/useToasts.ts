export const useToasts = () => {

    const toast = useToast()

    const unconnectToast = async () => {
        try {
            const auth = false

            if(!auth) {
                const data = {
                    title: 'Uh oh! Something went wrong.',
                    description: 'To use this feature, you must be logged into the application!',
                }

                toast.add(data)
                return false
            }

            return true
        } catch (error) {
            return undefined
        }
    }

    const clipboardToast = () => {
        const data = {
            title: 'Copied!',
            description: 'Password copied to clipboard!',
        }

        toast.add(data)
        return undefined
    }

    return { unconnectToast, clipboardToast };
};