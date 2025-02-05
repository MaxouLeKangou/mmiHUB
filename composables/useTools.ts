import type { Tool } from '~/types/tool';

export const useTools = () => {
    const pocketbase = usePocketbase();

    const collection = 'tools'
    const toolsPerPage = 20

    const getTools = async () => {
        try {
            const response = await pocketbase.collection(collection).getFullList({ sort: '-created' });
            console.log(response)

            response.map((tool) => {
                if (tool?.thumbnail) {
                    tool.thumbnail = usePocketbaseImage(tool);
                }
            })

            return response
        } catch (error) {
            return undefined
        }
    }

    const getPageTools = async (page: number) => {
        try {
            const response = await pocketbase.collection(collection).getList(page, toolsPerPage, { sort: '-created' })

            response.items.map((tool) => {
                if (tool?.thumbnail) {
                    tool.thumbnail = usePocketbaseImage(tool);
                }
            })

            return response
        } catch (error) {
            return undefined
        }
    }

    const getToolsByTitle = async (title: string) => {
        try {
            const response = await pocketbase.collection(collection).getFullList({ filter: `title ~ "${title}"` })

            response.map((tool) => {
                if (tool?.thumbnail) {
                    tool.thumbnail = usePocketbaseImage(tool);
                }
            })

            return response
        } catch (error) {
            return undefined
        }
    }

    const getTool = async (slug: string) => {
        try {
            const tool = await pocketbase.collection(collection).getOne(slug)

            tool.thumbnail = usePocketbaseImage(tool)

            return tool as Tool
        } catch (error) {
            return undefined
        }
    }

    return { toolsPerPage, getTools, getPageTools, getToolsByTitle, getTool };
};