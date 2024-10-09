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