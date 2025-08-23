export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "Budai Krisztián Villanyszerelő",
  "description": "Professzionális villanyszerelő szolgáltatások Budapest és Pest megyében",
  "url": "https://budaikrisztian-villanyszerelo.hu",
  "telephone": "+36301234567",
  "email": "info@budaikrisztian.hu",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Budapest",
    "addressRegion": "Budapest",
    "addressCountry": "HU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.4979",
    "longitude": "19.0402"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Budapest"
    },
    {
      "@type": "State",
      "name": "Pest megye"
    }
  ],
  "serviceType": [
    "Elektromos szerelés",
    "Hálózati felújítás",
    "Panel lakás villanyszerelés",
    "Okos otthon rendszerek",
    "Kamera rendszer telepítés",
    "Biztosítótábla modernizálás"
  ],
  "priceRange": "Ingyenes árajánlat",
  "paymentAccepted": "Készpénz, Bankkártya, Átutalás",
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ],
  "founder": {
    "@type": "Person",
    "name": "Budai Krisztián"
  },
  "employee": {
    "@type": "Person",
    "name": "Budai Krisztián",
    "jobTitle": "Villanyszerelő mester"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "sameAs": [
    "https://www.facebook.com/budaikrisztian-villanyszerelo",
    "https://www.linkedin.com/in/budaikrisztian-villanyszerelo"
  ]
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Budai Krisztián Villanyszerelő",
  "image": "https://budaikrisztian-villanyszerelo.hu/images/budai-krisztian-hero.jpg",
  "@id": "https://budaikrisztian-villanyszerelo.hu",
  "url": "https://budaikrisztian-villanyszerelo.hu",
  "telephone": "+36301234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Budapest",
    "addressLocality": "Budapest",
    "addressRegion": "Budapest",
    "postalCode": "1000",
    "addressCountry": "HU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.4979,
    "longitude": 19.0402
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday", 
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ]
};

export const breadcrumbStructuredData = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const serviceStructuredData = (service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "url": service.url,
  "provider": {
    "@type": "ElectricalContractor",
    "name": "Budai Krisztián Villanyszerelő",
    "url": "https://budaikrisztian-villanyszerelo.hu"
  },
  "areaServed": service.areaServed || ["Budapest", "Pest megye"],
  "serviceType": "Villanyszerelés"
});