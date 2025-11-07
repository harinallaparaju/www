import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: 'Surya Nallaparaju',
    description: 'Writing and research dissections by Surya Nallaparaju',
    site: 'https://suryanallaparaju.com',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
