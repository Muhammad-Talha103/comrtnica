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
