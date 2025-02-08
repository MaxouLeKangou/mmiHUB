import type { Tool } from '~/types/tool';
import type { Filter } from '~/types/filter';

//function tagsFormat(tools: Tool[]) {
//    tools.forEach((tool) => {
//        if (tool.expand && tool.expand.tags) {
//            tool.tags = tool.expand.tags;
//            delete tool.expand;
//        }
//    });
//}

export const useTools = () => {
    const pocketbase = usePocketbase();

    const collection = 'tools'
    const toolsPerPage = 20

    const getTools = async () => {
        try {
            const response = await pocketbase.collection(collection).getFullList({
                sort: '-created',
                expand: 'tags'
            });

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
            const response = await pocketbase.collection(collection).getList(page, toolsPerPage, {
                sort: '-created',
                expand: 'tags'
            })

            response.items.map((tool) => {
                if (tool) {
                    if (tool.thumbnail) {
                        tool.thumbnail = usePocketbaseImage(tool);
                    }

                    if (tool.expand && tool.expand.tags) {
                        tool.tags = tool.expand.tags
                        delete tool.expand.tags
                    }
                }

            })

            return response
        } catch (error) {
            return undefined
        }
    }

    const getToolsFilter = async (filters: Filter) => {
        try {
            let query = [];

            if (filters.title) {
                query.push(`title ~ "${filters.title}"`);
            }

            if (filters.tags && filters.tags.length > 0) {
                const tags = filters.tags.map(tag => `tags.id ?~ "${tag.id}"`).join(' || ');
                query.push(`(${tags})`);
            }

            const response = await pocketbase.collection(collection).getFullList({
                filter: query.length > 0 ? query.join(' && ') : '',
                expand: 'tags',
                sort: '-created'
            })

            response.map((tool) => {
                if (tool?.thumbnail) {
                    tool.thumbnail = usePocketbaseImage(tool);
                }

                if (tool.expand && tool.expand.tags) {
                    tool.tags = tool.expand.tags
                    delete tool.expand.tags
                }
            })

            return response
        } catch (error) {
            return undefined
        }
    }

    const getTool = async (slug: string) => {
        try {
            const tool = await pocketbase.collection(collection).getOne(slug, {
                expand: 'tags'
            })

            tool.thumbnail = usePocketbaseImage(tool)
            if (tool.expand && tool.expand.tags) {
                tool.tags = tool.expand.tags
                tool.expand.tags = ''
            }

            return tool as Tool
        } catch (error) {
            return undefined
        }
    }

    return { toolsPerPage, getTools, getPageTools, getToolsFilter, getTool };
};