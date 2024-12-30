import styles from './Hero.module.css';
import Image from 'next/image';

interface HeroProps {
  data: {
    title: string;
    description: string;
    checklist?: string[];
    heroReviews?: Array<{ image: { asset: { url: string } }; alt: string }>;
    heroImage?: { asset: { url: string }; alt: string };
    ctaPrimary?: { text: string; url: string };
    ctaSecondary?: { text: string; url: string };
    styleVariant?: string; // Поле для стилів
  };
}

export default function Hero({ data }: HeroProps) {
  if (!data) {
    return <div>No data provided</div>;
  }

  // Вибір класу для стилів
  const heroClass = data.styleVariant ? styles[data.styleVariant] : styles['style-1'];

  return (
    <div className={`${styles.hero} ${heroClass}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroReviews}>
            {data.heroReviews?.map((review, index) => (
              <Image
                key={index}
                src={review.image.asset.url}
                alt={review.alt || 'Review logo'}
                width={81}
                height={44}
              />
            ))}
          </div>
          <h1 className={styles.heroTitle}>{data.title}</h1>
          <div className={styles.heroDesc}>
            <p>{data.description}</p>
          </div>
          <ul className='checkList'>
            {data.checklist?.map((item: string, index: number) => (
              <li key={index} className='listItem'>{item}</li>
            ))}
          </ul>
          <div className={styles.heroCta}>
            {data.ctaPrimary && (
              <a
                className={styles.btnPrimary}
                href={data.ctaPrimary.url}
                target="_blank"
                rel="noopener"
              >
                {data.ctaPrimary.text}
              </a>
            )}
            {data.ctaSecondary && (
              <a
                className={styles.btnSecondary}
                href={data.ctaSecondary.url}
                target="_blank"
                rel="noopener"
              >
                {data.ctaSecondary.text}
              </a>
            )}
          </div>
        </div>
        <div className={styles.heroIllustration}>
          <div className={styles.heroImage}>
            {data.heroImage && (
              <picture>
                <source media="(max-width:375px)" srcSet={data.heroImage.asset.url} />
                <source media="(min-width:375px) and (max-width:768px)" srcSet={data.heroImage.asset.url} />
                <source media="(min-width:769px) and (max-width:1024px)" srcSet={data.heroImage.asset.url} />
                <source media="(min-width:1025px) and (max-width:1440px)" srcSet={data.heroImage.asset.url} />
                <source media="(min-width:1441px)" srcSet={data.heroImage.asset.url} />
                <Image
                  src={data.heroImage.asset.url}
                  alt={data.heroImage.alt || 'Hero illustration'}
                  width={628}
                  height={646}
                />
              </picture>
            )}
          </div>
        </div>
        <div className={styles.heroBgWrap}>
          <div className={styles.heroBg}>
            <div className={styles.gradient1}></div>
            <div className={styles.gradient2}></div>
            <div className={styles.gradient3}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
