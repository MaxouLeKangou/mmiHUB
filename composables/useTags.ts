export const useTags = () => {
    const pocketbase = usePocketbase();

    const collection = 'tags'

    const getTags = async () => {
        try {
            return await pocketbase.collection(collection).getFullList({
                sort: 'label',
            });
        } catch (error) {
            return undefined
        }
    }

    return { getTags };
};