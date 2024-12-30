import Link from 'next/link';
import { client } from '../../../sanity/sanity';
import { headerQuery } from '../../../sanity/queries';

interface HeaderProps {
  title: string;
  logo: { asset: { url: string } };
  navigation: Array<{ title: string; url: string }>;
}

export default async function Header() {
  const headerData: HeaderProps = await client.fetch(headerQuery);

  if (!headerData) {
    return <div>Header data not found</div>;
  }

  return (
    <header className="header header-new">
      <div className="header__main-wrap">
        <div className="container">
          <div className="header__left">
            <Link href="/" className="header__logo">
              <img src={headerData.logo.asset.url} alt="Logo" />
            </Link>
            <nav className="desktop-navigation">
              <ul className="header__navigation">
                {headerData.navigation.map((link, index) => (
                  <li key={index} className="header__navigation-item">
                    <Link href={link.url} className="header__navigation-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header__right">
            
          </div>
        </div>
      </div>
    </header>
  );
}
