import styles from './Features.module.css';
import Image from 'next/image';

interface FeaturesProps {
  data: {
    title: string;
    textWithImage?: {
      title: string;
      description?: string;
      list?: string[] | Array<{ text: string }>; // Можливі два формати
      cta?: { text: string; url: string };
      illustration?: {
        image: { asset: { url: string } };
        alt: string;
      };
    };
    products?: Array<{
      icon: { asset: { url: string } };
      name: string;
      description: string;
      cta?: { text: string; url: string };
    }>;
  };
}

export default function Features({ data }: FeaturesProps) {
  if (!data) {
    return <div>No data provided</div>;
  }

  const { title, textWithImage, products } = data;

  // Обробка списку: підтримка обох форматів (string[] і { text: string }[])
  const transformedList =
    Array.isArray(textWithImage?.list) &&
    textWithImage.list.map((item) =>
      typeof item === 'string' ? item : item.text
    );

  return (
    <div className={`moduleSection ${styles.features}`}>
      <div className="container">
        {title && (
          <div className="titles">
            <h2 className={styles.features__title}>{title}</h2>
          </div>
        )}
        {textWithImage && (
          <div className={styles.features__text_with_image}>
            <div className={styles.content}>
              {textWithImage.title && (
                <h3 className={styles.title}>{textWithImage.title}</h3>
              )}
              {textWithImage.description && (
                <p className="textMdRegular">{textWithImage.description}</p>
              )}
              {transformedList && (
                <ul className={`checkList ${styles.featuresList}`}>
                  {transformedList.map((item, index) => (
                    <li key={index} className="listItem">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {textWithImage.cta && (
                <a
                  className={`btnPrimary ${styles.featuresCta}`}
                  href={textWithImage.cta.url}
                  target="_blank"
                  rel="noopener"
                >
                  {textWithImage.cta.text}
                </a>
              )}
            </div>
            {textWithImage.illustration && textWithImage.illustration.image && (
              <div className={styles.features__illustration}>
                <Image
                  src={textWithImage.illustration.image.asset.url}
                  alt={textWithImage.illustration.alt || 'Illustration'}
                  width={550}
                  height={497}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}
        {products && (
          <div className={styles.features__products}>
            <div className={styles.features__products_list}>
              {products.map((product, index) => (
                <div key={index} className={styles.features__products_item}>
                  <div className={styles.head}>
                    {product.icon && (
                      <Image
                        className="icon"
                        src={product.icon.asset.url}
                        alt={product.name}
                        width={24}
                        height={24}
                      />
                    )}
                    <p className="displayXsMedium">{product.name}</p>
                  </div>
                  <div className="textMdRegular">{product.description}</div>
                  {product.cta && (
                    <a
                      className="textLgButton"
                      href={product.cta.url}
                      target="_blank"
                      rel="noopener"
                    >
                      {product.cta.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
