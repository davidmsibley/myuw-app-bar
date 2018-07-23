import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map.js';
export { html, LitElement } from '@polymer/lit-element';
export * from '../lib/backtick-template.js';

export function camelCaseKeys(obj) {
  let result = undefined;
  if (obj) {
    result = {}
    let entries = Object.entries(obj);
    for (let ent of entries) {
      result[dashToCamelCase(ent[0])] = ent[1];
    }
  }
  return result;
}
