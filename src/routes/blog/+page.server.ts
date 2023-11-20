import { getPosts } from '$lib/data/posts';

export async function load() {
	const posts = getPosts();
	return { posts };
}
