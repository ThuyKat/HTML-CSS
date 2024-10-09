# [HTML NOTES IN ACTION](note.html)
## Heading
1. In general, an article should have one h1 element for the main title followed by h2 subtitles
## Paragraphs
1. < pre> 
- Use cases: show programming code examples, layout of poems
- Feature: maintain spaces and indentation exactly as they are written in HTML 

## Text Formatting
1. < mark > 
- Purpose:  new in HTML5 and is used to mark or highlight text in a document
- Usecase: results of a search where the users enter search query

2. < b > vs < strong > || < em > vs < i >: 
- strong/em: important text compared to its surrounding text
- b: bolded text
- Usecase: for the words to be spoken/read with emphasizing tone, we use strong tag & em tag

3. < u > - re-introduced in HTML5 with sematic meaning of an unarticulated, non-textual annotation

4. title(property): Specifies extra information about a link/ abbr tag/etc -> almost all HTML tags
5. < a > tag:
- Link to dial a number: 
```html
<a href="tel:11234567890">Call us</a>
```
- Using target="_blank" gives the opening site partial access to the window.opener object via JavaScript --> add rel="noopener" to your link to prevent the
window.opener object from being sent with the request.
- Run JS (not recommended)
```html
<a href="javascript:myFunction();">Run Code</a>
```
- send email
```html
<a href="mailto:example@example.com">Send email</a>
<a href="mailto:example@example.com?cc=john@example.com&bcc=jane@example.com">Send email</a>
<a href="mailto:example@example.com?subject=Example+subject&body=Message+text">Send email</a>
```

6. Ordered List
- Manual changing number with 'start' attribute
- set a certain list item to a specific number with 'value' attribute
- reverse the numbering by adding reversed in your ol element
- change the type of numeral shown in the list item marker by using the type attribute

7. Table
- colspan/rowspan attribute: can be applied to < th> and < td> elements to span table cells over rows and columns. A value of zero (0) means that the cell will extend from the current row/column until the last row/column of the table
- colgroup > col : group columns together, 'span' attribute can be used
- browsers repeat the contents of <thead> on
every page.
- scope attribute in th tag:Defines which cells the header applies to (row, column, row group, or column group).

