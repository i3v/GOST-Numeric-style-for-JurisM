# Juris-M -> Russian Styles

This repository aims to collect relevant versions on Juris-M csl citation styles.
The main difference to today's Mendeley/Zotero styles is "Multy-language support".
This means correct terms ("т." vs "Vol." and so on) selection.


## Folder structure

Root folder should only contain style-folders, one-per-style 
( the only two exceptions are "JurisM_exampleCitations_template.dotx" and "README.md").
Each style is a bibliography-citation format, required by some journal.
Please avoid Cyrillic letters in all file names (any non-first 128 ASCII characters).

Each style should contain:

*  "docs" folder with a copy of official style documentation.

*  "examples" folder, which demonstrates as-designed behaviour: 
 ..*  a docx/doc file(s) with manually-formatted-text-example(s) + (same) automatically-formatted-text,
 ..*  a rdf file (right click on bibliography item(s)-> export item -> Zotero RDF), contatinig all citations, used in docx 
      (for everyone to be able to re-create bibliography)

*  "issues" folder, which demonstares known style issues, e.g. where style behaviour is different 
   from the official requirements (either fixable or not)
