import PocketBase from 'pocketbase';

export const usePocketbase = () => {
	const config = useRuntimeConfig();
	const env: string =
		process.env.NODE_ENV === 'development'
			? config.public.DEVELOPMENT_BACKEND_KEY as string
			: config.public.PRODUCTION_BACKEND_KEY as string;

	return new PocketBase(env);
};

export const usePocketbaseImage = (data: object) => {
	const pocketbase = usePocketbase();

	return pocketbase.files.getURL(data, data.thumbnail);
}