import { fetchHomepageContent } from '../lib/contentful';
import ContentfulImage from '../components/contentful-image'

function HomePage({ content }) {
    const heroImage = content[0].fields.heroImage;
    
  console.log(content)
    return (
      <div>
        <div style={{ height: '600', width: '100%' }}>
          <ContentfulImage
            src={heroImage.fields.file.url}
            layout='fill'
            objectFit='contain'
            alt='hero'
          />
        </div>
        {content.map(entry => (
          <div key={entry.sys.id}>
            <p>{entry.fields.MissionStatement}</p>
            <p>{entry.fields.block1body}</p>
            <p>{entry.fields.block2body}</p>
            <p>{entry.fields.block1Body}</p>
          </div>
        ))}
      </div>
    );
  }
  
  

export async function getStaticProps() {
  const content = await fetchHomepageContent();
  return {
    props: {
      content,
    },
  };
}

export default HomePage;
