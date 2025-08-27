# Table Support in Markdown Posts

This project now supports tables in markdown posts using standard GitHub Flavored Markdown (GFM) table syntax.

## How to Create Tables

Use the following syntax in your markdown posts:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

## Example Tables

### Simple Comparison Table
| Feature | Basic | Pro | Enterprise |
|---------|-------|-----|------------|
| Users   | 5     | 25  | Unlimited  |
| Storage | 10GB  | 50GB| 1TB        |
| Support | Email | Chat| 24/7 Phone |

### Product Specifications
| Switch | Actuation Force | Sound Profile | Price Range |
|--------|----------------|---------------|-------------|
| Gateron Yellow | 50g | Quiet, smooth | $20-30 |
| Gateron Ink Black V2 | 60g | Deep, smooth | $40-60 |
| Novelkey Cream | 55g | Low bass | $50-70 |

## Table Styling

Tables are automatically styled with:
- Responsive design (horizontal scroll on mobile)
- Clean borders and spacing
- Hover effects
- Proper header styling
- Consistent typography

## Important Notes

1. **Header Row Required**: Always include a header row with column names
2. **Separator Row**: Include a separator row with dashes and pipes (`|------|`)
3. **Data Rows**: Add your data rows below the separator
4. **Cell Alignment**: Content is left-aligned by default
5. **Empty Cells**: Use empty spaces for empty cells

## Best Practices

- Keep tables simple and readable
- Use descriptive column headers
- Limit the number of columns for mobile compatibility
- Use consistent formatting within cells
- Test your tables on both desktop and mobile devices

## Technical Details

Tables are converted from markdown to HTML using a custom parser that:
- Detects markdown table syntax
- Converts to semantic HTML (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`)
- Preserves all content and formatting
- Works with the existing markdown processing pipeline
