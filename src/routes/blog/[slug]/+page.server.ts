import { posts } from '$lib/data/posts';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404, 'Not found');
	return post;
}
