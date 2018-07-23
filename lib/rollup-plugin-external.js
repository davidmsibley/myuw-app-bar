
export default function external(opts = {}) {
  let prefix = 'external!';
  return {
    name: 'external',
    resolveId(idee, ider) {
      console.log(`resolveId ${idee}, ${ider}\n`);
      if ( /\0/.test( idee ) ) return null; // ignore IDs with null character, these belong to other plugins

      // disregard entry module
      if ( !ider ) return null;

      if (/^[^\./]/.test(idee)) {
        return false;
      }
      return null;
    },
    transform(code, id) {
      console.log(`transform \n${code}\n${id}\n\n`);
    }
  }
}
