import fs from 'fs';
import { marked } from 'marked';
import path from 'path';

// Define the directory where your Markdown files are located
const postsDirectory = path.join(process.cwd(), 'src/lib/data/posts');

// Function to load posts
export function getPosts() {
	// Read all file names in the posts directory
	const filenames = fs.readdirSync(postsDirectory);

	// Map each filename to a post object
	const posts = filenames.map((filename) => {
		// Construct the full path for each file
		const filePath = path.join(postsDirectory, filename);
		// Read the file content
		const fileContents = fs.readFileSync(filePath, 'utf8');
		// Use marked to parse the file content
		const content = marked.parse(fileContents);

		// Extract the slug from the filename
		const slug = filename.replace(/\.md$/, '');

		// Return an object for each post
		return {
			slug,
			title: slug.replace(/-/g, ' '),
			content
		};
	});

	return posts;
}

// Export the posts
export const posts = getPosts();
