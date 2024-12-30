import { client } from '../../sanity/sanity';
import { pageQuery } from '../../sanity/queries';
import Hero from '../modules/Hero/Hero';
import Benefits from '../modules/Benefits/Benefits';
import LogosGlobal from '../modules/logosGlobal/logosGlobal';
import Features from '../modules/Features/Features';
import Header from '../modules/Header/Header';
import Footer from '../modules/Footer/Footer';

interface HeroModule {
  _type: 'hero';
  title: string;
  description: string;
  checklist?: string[];
  heroReviews?: Array<{ image: { asset: { url: string } }; alt: string }>;
  heroImage?: { asset: { url: string }; alt: string };
  ctaPrimary?: { text: string; url: string };
  ctaSecondary?: { text: string; url: string };
  styleVariant?: string;
}

interface BenefitsModule {
  _type: 'benefits';
  title: string;
  description: string;
  items?: Array<{
    icon: { asset: { url: string }; alt: string };
    title: string;
    description: string;
  }>;
}

interface LogosGlobalModule {
  _type: 'logosGlobal';
}

interface FeaturesModule {
  _type: 'features';
  title: string;
  textWithImage: {
    title: string;
    description: string;
    list?: Array<{ text: string }>;
    cta?: { text: string; url: string };
    image?: { asset: { url: string }; alt: string };
  };
  products?: Array<{
    icon: { asset: { url: string }; alt: string };
    name: string;
    description: string;
    cta?: { text: string; url: string };
  }>;
}

type Module = HeroModule | BenefitsModule | LogosGlobalModule | FeaturesModule;

interface Page {
  title: string;
  modules?: Module[];
}

export default async function Page({ params }: { params: { slug?: string } }) {
  // Await params to resolve
  const awaitedParams = await params;
  const slug = awaitedParams.slug || 'home';

  console.log('Завантаження сторінки для slug:', slug);

  try {
    // Запуск запитів паралельно
    const [page, globalLogos] = await Promise.all([
      client.fetch<Page>(pageQuery, { slug }),
      client.fetch<{
        title: string;
        subtitle: string;
        logos: Array<{ image: { asset: { url: string } }; alt: string }>;
      }>(
        `*[_type == "logosGlobal"][0]{ title, subtitle, logos[] { image { asset->{ url } }, alt } }`
      ),
    ]);

    if (!page || !page.modules || page.modules.length === 0) {
      return (
        <>
          <Header />
          <div>Сторінка не знайдена або не має вмісту</div>
          <Footer />
        </>
      );
    }

    console.log('Отримані дані сторінки:', page);
    console.log('Отримані глобальні логотипи:', globalLogos);

    return (
      <>
        <Header />
        <div>
          {page.modules.map((module, index) => {
            switch (module._type) {
              case 'hero':
                return <Hero key={index} data={module} />;
              case 'benefits':
                return <Benefits key={index} data={module} />;
              case 'logosGlobal':
                return <LogosGlobal key={index} data={globalLogos} />;
              case 'features':
                return <Features key={index} data={module} />;
              default:
                return null;
            }
          })}
        </div>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Помилка при завантаженні даних:', error);
    return (
      <>
        <Header />
        <div>Щось пішло не так під час завантаження сторінки</div>
        <Footer />
      </>
    );
  }
}