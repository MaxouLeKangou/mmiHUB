import type { Tag } from '~/types/tag';

export type Tool = {
    collectionId: string;
    collectionName: string;

    id: string;
    thumbnail: string;
    title: string;
    society: string;
    description: string;
    website?: string;
    documentation?: string;
    tags: { label: string }[];
    likes: [];

    expand?: { tags: Tag[] };

    created: string;
}