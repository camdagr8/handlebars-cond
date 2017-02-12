# handlebars-cond

Handlebars helper that allows you to use comparison conditions like a typical IF statement.
---
##### Usage
---
```javascript
{{#cond 0 '<' 300}}
correct!
{{/cond}}
```

```javascript
{{#cond 0 '>' 300}}
Are you sure?
{{else}}
I do not think so!
{{/cond}}
```

---
##### Parameters
---
| Argument | Description  |
|:----------|:------------|
| lvalue    | The first value to compare.|
| operator  | The comparison operator. Values: == === != !== < > <= >=  && and \|\| or typeof. |
| rvalue    | The second value to compare.
