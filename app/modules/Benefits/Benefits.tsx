import styles from './Benefits.module.css';
import Image from 'next/image';

interface BenefitsProps {
  data: {
    title: string;
    description: string;
    items?: Array<{
      icon: { asset: { url: string }; alt: string };
      title: string;
      description: string;
    }>;
  };
}

export default function Benefits({ data }: BenefitsProps) {
  if (!data) {
    return <div>No data provided</div>;
  }

  return (
    <div className='moduleSection'>
      <div className={`container ${styles.container}`}>
        <div className='titles'>
          <div className='content'>
            <h2 className='title'>{data.title}</h2>
            <p className='textLgRegular desc'>{data.description}</p>
          </div>
        </div>
        <div className={styles['benefits__items']}>
          {data.items?.map((item, index) => (
            <div key={index} className={styles['benefits__item']}>
              <div className={styles['benefits__icon']}>
                <Image
                  src={item.icon.asset.url}
                  alt={item.icon.alt || 'Benefit icon'}
                  width={36}
                  height={36}
                />
              </div>
              <div className='benefitsContent'>
                <p className={`textXlSemibold ${styles.benefitsTitle}`}>{item.title}</p>
                <p className={`textMdRegular ${styles.benefitsDesc}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
