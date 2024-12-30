import { createClient } from '@sanity/client';
import { pageQuery, allSlugsQuery } from './queries';

export const client = createClient({
    projectId: 'dmkt7uxn', // Твій Project ID
    dataset: 'datasoax', // Твій Dataset
    apiVersion: 'v1', // Поточна дата або версія API
    useCdn: false, // Використання CDN для кешування (рекомендується для production)
});

// Отримання сторінки за slug
export async function getPage(slug: string) {
    console.log('Fetching page data for slug:', slug); // Лог для перевірки
    const data = await client.fetch(pageQuery, { slug });
    console.log('Fetched Page Data:', data); // Лог для перевірки
    return data;
}

// Отримання всіх slug сторінок
export async function getAllPageSlugs() {
    console.log('Fetching all slugs'); // Лог для перевірки
    const slugs = await client.fetch(allSlugsQuery);
    console.log('Fetched Slugs:', slugs); // Лог для перевірки
    return slugs;
}
