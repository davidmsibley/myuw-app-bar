import { dashToCamelCase } from 'https://unpkg.com/@polymer/polymer@latest/lib/utils/case-map.js?module';
export { html, LitElement } from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';
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
