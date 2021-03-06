/**
 * example:
 * formatClassModifiers('Button', 'red small')
 * => 'Button--red Button--small'
 */
export default function formatClassModifiers (tag, ...modifiers) {
  if (!modifiers) return tag

  return tag + ' ' + modifiers
    .filter(mod => mod)
    .join(' ')
    .split(' ')
    .map(modifier => `${tag}--${modifier}`)
    .join(' ')
}
