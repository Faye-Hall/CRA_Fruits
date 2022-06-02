/**Choose a random item */

function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

/**removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined. */

function remove(items, item) {
  if (items.includes(item)) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1); // 2nd parameter means remove one item only
      return item;
    }
  } else {
    return undefined;
  }
}

export { choice, remove };
