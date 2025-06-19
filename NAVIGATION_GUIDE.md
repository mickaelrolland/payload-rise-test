# Hierarchical Navigation System Guide

This document explains the enhanced navigation system that provides hierarchical page organization with visual admin components.

## Features

### 🏗️ Hierarchical Page Structure

- **Parent-Child Relationships**: Pages can be organized in a tree structure
- **Page Types**: Landing, Destination, Content, and Experience pages
- **Navigation Order**: Control the order of pages in navigation menus
- **Visibility Control**: Hide specific pages from navigation

### 📊 Visual Admin Interface

- **Page Hierarchy Dashboard**: Visual tree view of your site structure
- **Custom Admin Components**: Easy-to-understand page relationships
- **Quick Actions**: Direct links to create and edit pages
- **Guidelines**: Built-in best practices for navigation organization

### 🎯 Flexible Navigation

- **Auto-Generated Menus**: Automatically build navigation from page hierarchy
- **Custom Navigation**: Manual navigation configuration option
- **Multi-Level Dropdowns**: Support for nested navigation menus
- **Mobile Responsive**: Adaptive navigation for all screen sizes

## Page Types

### 🏠 Landing Pages

Primary entry points for your site. These are typically your main navigation items.

**Best Use Cases:**

- Home page
- Main destination overviews
- Service category pages

### 🌍 Destination Hubs

Container pages that organize related content under a specific destination or theme.

**Best Use Cases:**

- Country/city destination pages
- Tour category hubs
- Regional information centers

### 📄 Content Pages

Standard content pages that provide detailed information.

**Best Use Cases:**

- Detailed destination guides
- Tour descriptions
- Informational articles

### ✨ Experience Pages

Special pages for unique experiences or interactive content.

**Best Use Cases:**

- Virtual tours
- Interactive experiences
- Special event pages

## Admin Interface

### Navigation Dashboard

Access the navigation dashboard at `/admin` to see:

1. **Page Hierarchy Overview**

    - Visual tree of all pages with indentation showing relationships
    - Color-coded page types with icons
    - Quick edit links for each page

2. **Quick Actions**

    - Create new pages
    - Manage all pages
    - Configure main navigation

3. **Navigation Guidelines**
    - Best practices for each page type
    - Organization recommendations

### Creating Hierarchical Pages

1. **Navigate to Pages Collection**

    - Go to `/admin/collections/pages`

2. **Create or Edit a Page**

    - Select appropriate **Page Type**
    - Choose **Parent Page** (optional, for sub-pages)
    - Set **Navigation Order** (lower numbers appear first)
    - Configure **Hide from Navigation** if needed

3. **Page Hierarchy Fields**
    - **Page Type**: Choose from Landing, Destination, Content, or Experience
    - **Parent**: Select a parent page to create hierarchy
    - **Navigation Order**: Number to control sort order
    - **Hide from Navigation**: Checkbox to exclude from menus

## Navigation Configuration

### Main Menu Global

Configure navigation at `/admin/globals/main-menu`:

#### Auto-Populate Mode (Recommended)

- **Auto Populate**: Enable to generate navigation from page hierarchy
- **Include Page Types**: Select which page types to include
- **Max Depth**: Set maximum levels of navigation (1-5)

#### Manual Configuration Mode

- **Custom Nav Items**: Manually configure navigation structure
- **Navigation Groups**: Organize items with optional group titles
- **Sub-navigation**: Create nested menu items

#### Display Settings

- **Show Page Types**: Display type indicators in navigation
- **Show Navigation Order**: Display order numbers
- **Highlight Active Parents**: Highlight parent pages when children are active

## Frontend Navigation

The navigation system automatically generates:

### Desktop Navigation

- Horizontal menu with hover dropdowns
- Multi-level support (up to configured max depth)
- Active state indicators
- Parent highlighting when child pages are active

### Mobile Navigation

- Collapsible hamburger menu
- Stacked navigation items
- Touch-friendly interaction
- Nested menu support

## Code Structure

### Key Files

```
src/
├── collections/Pages/index.ts          # Enhanced Pages collection
├── globals/MainMenu.ts                 # Navigation configuration
├── components/admin/
│   ├── Dashboard/                      # Custom admin dashboard
│   └── PageHierarchy/                  # Hierarchy visualization
├── utilities/buildNavigation.ts       # Navigation building logic
└── app/(app)/_components/Header/       # Frontend navigation
```

### Navigation Building Process

1. **Data Fetching**: Query pages with hierarchy relationships
2. **Tree Building**: Construct parent-child tree structure
3. **Active State**: Determine current page and active parents
4. **Rendering**: Generate nested navigation markup

## Best Practices

### Page Organization

1. **Keep Hierarchy Shallow**: Aim for 2-3 levels maximum
2. **Logical Grouping**: Group related content under destination hubs
3. **Clear Naming**: Use descriptive, SEO-friendly page titles
4. **Navigation Order**: Use consistent numbering (10, 20, 30) for easy reordering

### Navigation Structure Example

```
Home (Landing)
├── Destinations (Landing)
│   ├── France (Destination Hub)
│   │   ├── Paris Guide (Content)
│   │   ├── Lyon Guide (Content)
│   │   └── Virtual Paris Tour (Experience)
│   └── Italy (Destination Hub)
│       ├── Rome Guide (Content)
│       └── Florence Guide (Content)
├── Experiences (Landing)
│   ├── City Tours (Destination Hub)
│   └── Cultural Experiences (Destination Hub)
└── About (Content)
```

### SEO Considerations

- **URL Structure**: Pages inherit parent structure (/destinations/france/paris)
- **Breadcrumbs**: Navigation hierarchy supports breadcrumb generation
- **Internal Linking**: Hierarchy improves site structure for search engines

## Troubleshooting

### Common Issues

1. **Pages Not Appearing in Navigation**

    - Check "Hide from Navigation" setting
    - Verify page type is included in Main Menu configuration
    - Ensure page is published

2. **Hierarchy Not Showing Correctly**

    - Regenerate TypeScript types: `npm run generate:types`
    - Clear browser cache
    - Check for circular parent references

3. **Dropdown Menus Not Working**
    - Verify JavaScript is enabled
    - Check for CSS conflicts
    - Ensure proper nesting in page hierarchy

### Performance Optimization

- Navigation data is cached automatically
- Limit hierarchy depth to maintain performance
- Use navigation order efficiently (avoid frequent reordering)

## Migration from Simple Navigation

If you're upgrading from a simple navigation system:

1. **Backup Current Navigation**: Export existing main menu configuration
2. **Set Page Types**: Review and set appropriate page types for existing pages
3. **Create Hierarchy**: Establish parent-child relationships
4. **Test Navigation**: Verify all pages are accessible
5. **Update Links**: Ensure internal links reflect new structure

## Support

For additional help:

- Review the admin dashboard guidelines
- Check the page hierarchy visualization
- Refer to the navigation building utilities in `/src/utilities/buildNavigation.ts`
