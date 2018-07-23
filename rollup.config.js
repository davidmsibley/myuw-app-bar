import { rollup } from 'rollup';
import html from 'rollup-plugin-html';
import posthtml from 'rollup-plugin-posthtml-template';
import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-minify-es';

export default [
  {
    input: 'src/src.js',
    plugins: [
      resolve(),
      html({
        include: 'src/myuw-app-bar.html',
        htmlMinifierOptions: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          conservativeCollapse: true
        }
      })
    ],
    output: {
      file: 'dist/bundle/myuw-app-bar.js',
      name: 'MyuwAppBar',
      format: 'iife'
    }
  },
  {
    input: 'src/src.js',
    plugins: [
      resolve(),
      html({
        include: 'src/myuw-app-bar.html',
        htmlMinifierOptions: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          conservativeCollapse: true
        }
      }),
      minify({
        output: {
          wrap_iife: true
        }
      })
    ],
    output: {
      file: 'dist/bundle/myuw-app-bar.min.js',
      name: 'MyuwAppBar',
      format: 'iife'
    }
  },
  {
    input: 'src/ext.js',
    plugins: [
      html({
        include: 'src/myuw-app-bar.html',
      })
    ],
    output: {
      file: 'dist/external/myuw-app-bar.mjs',
      format: 'es'
    }
  },
  {
    input: 'src/ext.js',
    plugins: [
      html({
        include: 'src/myuw-app-bar.html',
      }),
      minify()
    ],
    output: {
      file: 'dist/external/myuw-app-bar.min.mjs',
      format: 'es'
    }
  },
  {
    input: 'src/poly.js',
    plugins: [
      resolve(),
      html({
        include: 'src/myuw-app-bar.html',
        htmlMinifierOptions: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          conservativeCollapse: true
        }
      })
    ],
    output: {
      file: 'dist/poly/myuw-app-bar.js',
      name: 'MyuwAppBar',
      format: 'iife'
    }
  },
  {
    input: 'src/poly.js',
    plugins: [
      resolve(),
      html({
        include: 'src/myuw-app-bar.html',
        htmlMinifierOptions: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          conservativeCollapse: true
        }
      }),
      minify()
    ],
    output: {
      file: 'dist/poly/myuw-app-bar.min.js',
      name: 'MyuwAppBar',
      format: 'iife'
    }
  },
];
