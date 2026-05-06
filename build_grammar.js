#!/usr/bin/env node
/**
 * Outputs an embeddable <script> block for index.html.
 * Replace placeholder content in GRAMMAR_DATA when you have lessons from your files.
 * Run: node build_grammar.js
 */
const GRAMMAR_DATA = {
  categories: [],
  lessons: {},
};

process.stdout.write(
  '<script>\nconst GRAMMAR_DATA = ' +
    JSON.stringify(GRAMMAR_DATA, null, 0) +
    ";\n</script>\n"
);
