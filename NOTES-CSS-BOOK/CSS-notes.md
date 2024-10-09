# Selector

1. Global boolean with checkbox:checked and ~ (general sibling combinator) . [code in action](../boolean-checkbox.html)
2. The :not pseudo-class example & B. :focuswithin CSS pseudo-class. [example of :not pseudo and focus within](./4Selector-focus-within-not%20pseudo.html)
3. CSS3 :in-range selector - to give a feedback that the value currently defined using the element is inside the range limits. [example of in-range selector](./4Selector-in-range.html)
NOTE: :out-of-range -  matches when an element has its
value attribute outside the specified range limitations for this element.
It allows the page to give a feedback that the value currently defined using the
element is outside the range limits. 
4. Select element using its ID without the high specificity of the ID selector
```
#element { ... } /* High specificity will override many selectors */
[id="element"] { ... } /* Low specificity, can be overridden easily */
```
5. Pseudo-classes
- :active: Applies to any element being clicked by the user
- :link : Applies to any links which haven't been visited by the user.
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
- :indeterminate : Applies radio or checkbox UI elements which are neither checked nor
unchecked, but are in an indeterminate state [example](./4Selector-indeterminate-pseudo.html)
- :invalid : Applies to < input> elements whose values are invalid according to
the type specified in the type= attribute.
- :optional: We have a form with both required and optional fields. The :optional pseudo-class is used to style input and textarea elements that are not required. [example][./4Selector-optional-pseudo.html]
- :read-only / :read-write : [example][./4Selector-read-only-write-pseudo.html]
- :right --> better using nth-child(odd/even) to style left and right pages and ::before/::after to style page/chapter counter. [example][./4Selecter-print-media.html]

         --> style like a flipping book: [html][./page.html]
- media screen tag: 
         --> Benefits of using @media screen: It's commonly used with width-based queries - Example: @media screen and (max-width: 600px) { ... }; It can be combined with feature queries to apply styles based on device capabilities.- Example: @media screen and (hover: hover) { ... };optimize rendering by ignoring non-applicable media queries; improve readability
- :visted : due to security concerns that malicious websites could use CSS to determine which sites a user has visited, reveal sensitive information about a user's browsing history, potentially including visits to banking sites, health-related pages, or other private information, Knowledge of a user's browsing history could be used for more targeted phishing or social engineering attacks, allowed websites to gather information about a user's interactions with other, unrelated websites, which is a violation of the same-origin policy principle.To mitigate these risks, best practices include:
            * Use only the allowed properties (color, background-color, border colors, outline color).
            * Avoid using background images or complex selectors for visited links.
            * Use solid colors instead of rgba() or hsla().Solid colors are less likely to be exploited for history sniffing attacks.
            * Focus on simple color changes to indicate visited status.