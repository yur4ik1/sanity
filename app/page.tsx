import { client } from '../sanity/sanity';
import { pageQuery } from '../sanity/queries';
import Page from './[slug]/page';

export const revalidate = 60; // ISR: Оновлювати сторінку кожні 60 секунд

export default async function Home() {
    const slug = 'home';

    try {
        const page = await client.fetch(pageQuery, { slug });

        if (!page) {
            return <div>Сторінка не знайдена</div>;
        }

        // Передаємо slug напряму
        return <Page params={{ slug }} />;
    } catch (error) {
        console.error('Помилка завантаження сторінки Home:', error);
        return <div>Помилка завантаження сторінки</div>;
    }
}
