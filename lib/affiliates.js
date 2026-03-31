import affiliatesData from '../seo/affiliates.json';

export const affiliates = affiliatesData;

/**
 * Look up an affiliate by its stable ID (preferred), name, or URL.
 * Use the `id` field for references in code — it never changes even
 * if the product name or URL is updated later.
 *
 * Example: getAffiliate('olkb-planck')
 */
export function getAffiliate(idOrNameOrUrl) {
  return affiliates.find(
    a => a.id === idOrNameOrUrl || a.name === idOrNameOrUrl || a.url === idOrNameOrUrl
  ) || null;
}

/**
 * Returns the current affiliate URL for the given ID.
 * Falls back to the raw value if no match is found.
 *
 * Example: getUrl('olkb-planck')
 */
export function getUrl(id) {
  const a = getAffiliate(id);
  return a ? a.url : id;
}

export function getByTag(...tags) {
  return affiliates.filter(a =>
    tags.every(t => (a.tags || []).map(x => x.toLowerCase()).includes(t.toLowerCase()))
  );
}
