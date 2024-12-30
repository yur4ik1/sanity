import { client } from '../sanity/sanity';
import { pageQuery } from '../sanity/queries';
import Page from './[slug]/page';

export default async function Home() {
    const slug = 'home';

    try {
        // SSR: Завжди отримуємо актуальні дані на кожен запит
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
