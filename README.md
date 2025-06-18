# Payload CMS + Next.js Live Preview Example (Enhanced)

This is an enhanced version of the Payload CMS Live Preview example with additional components and functionality.

## 🚀 Features

### Core Features

- **Live Preview**: Edit content in the admin panel and see changes instantly
- **Headless CMS**: Payload CMS as the backend with Next.js frontend
- **TypeScript**: Full TypeScript support throughout the application
- **Responsive Design**: Mobile-first responsive design approach

### Enhanced Components

#### 🎯 Flexible Block System

Build dynamic pages using a flexible block system:

- **Hero Block**: Eye-catching hero sections with background images, overlay options, and call-to-action buttons
- **Content Block**: Rich text content in single or two-column layouts
- **Gallery Block**: Image galleries with grid, masonry, or carousel layouts
- **Cards Block**: Feature cards with images, descriptions, and links
- **Video Block**: Embedded videos from YouTube, Vimeo, or direct URLs

#### 🖼️ Media Management

- **Media Collection**: Organized media storage with responsive image sizes
- **Image Component**: Optimized images with Next.js Image component
- **Multiple Formats**: Support for various image formats and sizes

#### 📝 Content Collections

- **Pages**: Flexible page builder with blocks
- **Posts**: Blog functionality with featured images and categories
- **Categories**: Organize content with colored categories
- **Users**: User management for content creators

#### 🎨 UI Components

- **Button**: Flexible button component with multiple styles (primary, secondary, outline)
- **Gallery**: Interactive image galleries with carousel functionality
- **Hero**: Full-screen hero sections with overlay options
- **Cards**: Responsive card layouts
- **Video**: Embedded video player with custom thumbnails

## 🛠️ Technical Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Payload CMS
- **Database**: MongoDB
- **Styling**: SCSS modules
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
src/
├── app/
│   ├── (app)/                    # Main application routes
│   │   ├── _components/          # Reusable components
│   │   │   ├── Button/           # Button component
│   │   │   ├── Cards/            # Cards section component
│   │   │   ├── Content/          # Content block component
│   │   │   ├── Gallery/          # Gallery component
│   │   │   ├── Hero/             # Hero section component
│   │   │   ├── Image/            # Optimized image component
│   │   │   ├── Video/            # Video player component
│   │   │   └── Blocks/           # Block renderer
│   │   └── [slug]/               # Dynamic page routes
│   └── (payload)/                # Payload admin routes
├── collections/                  # Payload collections
│   ├── Pages/                    # Page collection
│   ├── Posts/                    # Blog posts collection
│   ├── Media/                    # Media collection
│   └── Categories/               # Categories collection
├── fields/                       # Reusable field configurations
│   └── blocks/                   # Block field definitions
│       ├── Hero.ts               # Hero block configuration
│       ├── Content.ts            # Content block configuration
│       ├── Gallery.ts            # Gallery block configuration
│       ├── Card.ts               # Cards block configuration
│       └── Video.ts              # Video block configuration
└── globals/                      # Global configurations
    └── MainMenu.ts               # Navigation menu
```

## 🎨 Block Types

### Hero Block

Create stunning hero sections with:

- Background images with responsive sizes
- Overlay options (none, light, dark)
- Multiple height options (small, medium, large, fullscreen)
- Up to 2 call-to-action buttons
- Custom titles and subtitles

### Gallery Block

Display images in multiple layouts:

- **Grid**: 2, 3, or 4 column responsive grid
- **Masonry**: Pinterest-style masonry layout
- **Carousel**: Interactive slideshow with navigation

### Cards Block

Feature content with:

- Flexible card layouts (grid or horizontal)
- Images, titles, and descriptions
- Call-to-action links
- Responsive column options

### Video Block

Embed videos from:

- YouTube
- Vimeo
- Direct video URLs
- Custom thumbnails and aspect ratios
- Autoplay options

### Content Block

Rich text content with:

- Single or two-column layouts
- Full rich text editing capabilities
- Responsive design

## 🚀 Getting Started

1. **Install dependencies**:

    ```bash
    pnpm install
    ```

2. **Set up environment variables**:

    ```bash
    cp .env.example .env.local
    ```

    Fill in your MongoDB connection string and other required variables.

3. **Run the development server**:

    ```bash
    pnpm dev
    ```

4. **Access the application**:

    - Frontend: http://localhost:3000
    - Admin Panel: http://localhost:3000/admin

5. **Create your first admin user** through the admin panel

## 📚 Usage

### Creating Pages

1. Go to the admin panel
2. Navigate to Collections → Pages
3. Create a new page
4. Use the Layout blocks to build your page:
    - Add a Hero block for the header
    - Add Content blocks for text content
    - Add Gallery blocks for image showcases
    - Add Cards blocks for features or services
    - Add Video blocks for multimedia content

### Managing Media

1. Upload images through Collections → Media
2. Add alt text for accessibility
3. Images are automatically optimized in multiple sizes

### Blog Functionality

1. Create categories in Collections → Categories
2. Add posts in Collections → Posts
3. Associate posts with categories and authors

## 🎨 Customization

### Styling

All components use SCSS modules for styling. Customize the appearance by editing the `.module.scss` files in each component directory.

### Adding New Blocks

1. Create a new block definition in `src/fields/blocks/`
2. Create the corresponding React component in `src/app/(app)/_components/`
3. Add the block to the block components mapping in `src/app/(app)/_components/Blocks/index.tsx`
4. Update the Pages collection to include the new block type

### Responsive Design

All components are built with mobile-first responsive design:

- Grid layouts automatically adjust for smaller screens
- Images are optimized for different screen sizes
- Navigation and interactions work on touch devices

## 🔧 Configuration

### Image Sizes

Configure responsive image sizes in the Media collection (`src/collections/Media.ts`):

- Thumbnail: 300x300
- Mobile: 768px wide
- Tablet: 1024px wide
- Desktop: 1440px wide

### Block Configuration

Each block type can be configured in `src/fields/blocks/`:

- Add new fields
- Modify validation rules
- Customize admin UI

## 📱 Responsive Features

- Mobile-first design approach
- Optimized images for all screen sizes
- Touch-friendly navigation
- Responsive typography and spacing

## 🔒 Security

- User authentication for admin access
- Role-based content access
- Secure API endpoints
- Input validation and sanitization

## 📈 Performance

- Next.js Image optimization
- Lazy loading for images and components
- Efficient database queries
- Static generation where possible

This enhanced version provides a comprehensive foundation for building modern, content-driven websites with Payload CMS and Next.js.
