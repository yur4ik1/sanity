// Окремі запити для модулів

export const headerQuery = `*[_type == "header"][0]{
    title,
    logo {
      asset->{ url }
    },
    navigation[] {
      title,
      url
    }
}`;

export const heroQuery = `{
    title,
    description,
    checklist,
    heroReviews[] {
        image {
            asset->{ url }
        },
        alt
    },
    heroImage {
        asset->{ url },
        alt
    },
    ctaPrimary {
        text,
        url
    },
    ctaSecondary {
        text,
        url
    },
    styleVariant 
}`;

export const benefitsQuery = `{
    title,
    description,
    items[] {
        icon { asset->{ url }, alt },
        title,
        description
    }
}`;

export const logosQuery = `{
    logos[] {
        image {
            asset->{ url }
        },
        alt
    }
}`;

export const featuresQuery = `{
    title,
    textWithImage {
        title,
        description,
        list,
        cta {
            text,
            url
        },
        illustration {
            image {
                asset->{ url }
            },
            alt
        }
    },
    products[] {
        icon {
            asset->{ url }
        },
        name,
        description,
        cta {
            text,
            url
        }
    }
}`;


// Головний запит для сторінки
export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
    title,
    modules[] {
        _type,
        ...select(
            _type == "hero" => ${heroQuery},
            _type == "benefits" => ${benefitsQuery},
            _type == "logos" => ${logosQuery},
            _type == "features" => ${featuresQuery}
        )
    }
}`;

export const allSlugsQuery = `*[_type == "page"]{ "slug": slug.current }`;
