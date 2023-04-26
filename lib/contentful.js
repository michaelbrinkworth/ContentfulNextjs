import { createClient } from 'contentful';


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function fetchHomepageContent() {
    const entries = await client.getEntries({ content_type: 'homepage' });
    return entries.items;
  }
  
  export { fetchHomepageContent };
