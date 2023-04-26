import { fetchHomepageContent } from '../lib/contentful';
import ContentfulImage from '../components/contentful-image'

function HomePage({ content }) {
    const heroImage = content[0].fields.heroImage;
  
    return (
      <div>
        <div style={{ height: '600', width: '100%' }}>
          <ContentfulImage
            src={heroImage.fields.file.url}
            layout='fill'
            objectFit='contain'
          />
        </div>
        {content.map(entry => (
          <div key={entry.sys.id}>
            <p>{entry.fields.MissionStatement}</p>
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
