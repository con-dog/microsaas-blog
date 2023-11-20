<script>
	export let data;
</script>

<h1>Articles</h1>
{#each data.posts as post (post.slug)}
	<li class="text-2xl list-square">
		<a class="underline capitalize decoration-dashed" href={`/blog/${post.slug}`}>{post.title}</a>
	</li>
{/each}
