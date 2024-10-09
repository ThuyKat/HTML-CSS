# Selector

1. Global boolean with checkbox:checked and ~ (general sibling combinator) . [code in action](../boolean-checkbox.html)
2. The :not pseudo-class example & B. :focuswithin CSS pseudo-class. [example of :not pseudo and focus within](./4Selector-focus-within-not%20pseudo.html)
3. CSS3 :in-range selector - to give a feedback that the value currently defined using the element is inside the range limits. [example of in-range selector](./4Selector-in-range.html)
4. Select element using its ID without the high specificity of the ID selector
```
#element { ... } /* High specificity will override many selectors */
[id="element"] { ... } /* Low specificity, can be overridden easily */
```
5. Pseudo-classes
- :active: Applies to any element being clicked by the user
- :target: [example of target pseudo](./4Selector-target-pseudo.html)
- :default: to style default checked radio button, selected option, or submit button of a form. [example styling a form](./4Selector-default-pseudo.html). Note: The default submit button is typically the first < button> or < input type="submit"> in the form's DOM order
- :disabled: applied to elements in disabled state
- :empty: applied to elements without any children. [example](./4Selector-empty-pseudo.html)
- :enable: applied to elements in enable state. [example](./4Selector-enabled-pseudo.html)
- :focus : Applies to any element which has the user's focus. This can be given by the
user's keyboard, mouse events, or other forms of input.
- :focus-within : It matches any element that the :focus pseudo-class matches or that has a descendant focused. [example](./4Selector-focus-within-pseudo.html). NOTE: tabindex="0" to make container itself focused. Use tabindex="0" to make non-focusable elements focusable without changing the tab order.
        * tabindex - positive number: Specifies an explicit tab order. Elements with lower numbers are focused before those with higher numbers.
        * tablindex - 0: Allows the element to be focusable in the natural document order
        * tabindex -(-1) : Makes the element focusable programmatically (via JavaScript) but not via keyboard navigation.   
        * default: Without tabindex, elements like links and form controls are naturally focusable in the order they appear in the document
- :full-screen: applied to element in full-screen mode [example](./4Selector-full-screen-pseudo.html)
- 


