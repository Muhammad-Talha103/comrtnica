export function cityToSlug(cityName) {
  if (!cityName) return "";
  
  return cityName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/ž/g, "z")
    .replace(/č/g, "c")
    .replace(/š/g, "s")
    .replace(/đ/g, "d");
}

export function slugToCity(slug) {
  if (!slug) return "";
  
  const cityMap = {
    "ljubljana": "Ljubljana",
    "maribor": "Maribor",
    "celje": "Celje",
    "kranj": "Kranj",
    "koper": "Koper",
    "novo-mesto": "Novo Mesto",
    "domzale": "Domžale",
    "velenje": "Velenje",
    "nova-gorica": "Nova Gorica",
  };
  
  return cityMap[slug.toLowerCase()] || slug;
}

import regionsAndCities from "@/utils/regionAndCities";

export function findCityFromSlug(slug) {
  if (!slug) return null;

  const normalizedSlug = slug.toLowerCase().trim();

  for (const region of Object.values(regionsAndCities)) {
    for (const cityName of region) {
      const citySlug = cityToSlug(cityName);
      if (citySlug.toLowerCase() === normalizedSlug) {
        return cityName;
      }
    }
  }

  return slugToCity(slug);
}