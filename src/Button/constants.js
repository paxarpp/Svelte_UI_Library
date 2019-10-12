const sizes = new Set(['NORMAL', 'LARGE', 'SMALL']);
const types = new Set(['PRIMARY', 'SECONDARY', 'DANGER']);

export const getSize = (size) => sizes.has(size) ? size : 'NORMAL';
export const getType = (type) => types.has(type) ? type : 'PRIMARY';