import styles from './Logos.module.css';
import Image from 'next/image';

interface Logo {
  image: { asset: { url: string } };
  alt: string;
}

interface GlobalLogos {
  title: string;
  subtitle: string;
  logos: Logo[];
}

interface LogosGlobalProps {
  data: GlobalLogos;
}

const LogosGlobal: React.FC<LogosGlobalProps> = ({ data }) => {
  const { title, subtitle, logos } = data;

  if (!logos || logos.length === 0) {
    return <div>No global logos available</div>;
  }

  return (
    <div className={`moduleSection ${styles.logos}`}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className="titles">
            <div className="content">
              {title && <h2 className="title">{title}</h2>}
              {subtitle && <p className="textLgRegular desc">{subtitle}</p>}
            </div>
          </div>
        )}
        <div className={styles.items}>
          {logos.map((logo, index) => (
            <a key={index} className={styles['logo-link']} href="#" aria-label={logo.alt}>
              <Image
                className={styles['logos__item']}
                src={logo.image.asset.url}
                alt={logo.alt || 'Logo'}
                width={100}
                height={26}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosGlobal;
