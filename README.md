# Juris-M -> Russian Styles

This repository aims to collect relevant versions on Juris-M csl citation styles.
The main difference to today's Mendeley/Zotero styles is "Multy-language support".
This means correct terms ("т." vs "Vol." and so on) selection.


## Folder structure

Root folder should only contain style-folders, one-per-style 
( the only two exceptions are "JurisM_exampleCitations_template.dotx" and "README.md").
Each style is a bibliography-citation format, required by some journal.
Please avoid Cyrillic letters in all file names (any non-first 128 ASCII characters).

## Each style should contain:



*  "officialStyleRules" folder with a copy of official style documentation.
  Official style rules is simply a copy of rules and examples, as-provided-by-publisher. It is convenient to keep them next-to-code. 

*  "examples" folder, which demonstrates as-designed behaviour: 

  *  a docx/doc file(s) with manually-formatted-text-example(s) + (same) automatically-formatted-text.
    
    This file should use "JurisM_exampleCitations_template.dotx" template, see "\RuClay2015\examples\General multilanguage bibliography.docx" for reference.

  *  a rdf file (right click on bibliography item(s)-> export item -> Zotero RDF) contatinig all citations, used in docx.
  
    This file would allow everyone to be able to re-create bibliography. I suspect, that this file might be useful in some cases, and "Zotero->Document Preferces->Internal->Embedding->Store references in document" is unable to completely replace this file.

  Examples should allow to quickly check, "how this style looks like" (useful for those, who are looking for a specific style) and "what features are implemented" (useful for those, who are looking for an example implementation of a specific feature).

*  "issues" folder, which demonstares known style issues, e.g. where style behaviour is different 
   from the official requirements (either fixable or not)
