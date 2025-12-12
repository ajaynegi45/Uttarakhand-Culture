# File Structure

Here is a map to help you navigate the `himalayan-echoes` codebase. We've organized things logically to make finding files intuitive.

## Top-Level Directories

*   **`src/`**: The heart of the application. Almost all code lives here.
*   **`public/`**: Static assets like images, SVGs, and fonts.
*   **`.next/`**: (Generated) The build output from Next.js. Don't touch this.

## Inside `src/`

### `src/app/`
This is where the pages and routing logic live (Next.js App Router).

*   `page.tsx`: The main entry point (Home page).
*   `layout.tsx`: Defines the global layout (navbar, footer, fonts).
*   `globals.css`: Global styles and Tailwind directives.
*   `explore/`: Pages for exploring districts and regions.
*   `god/`: Content related to temples and deities.
*   `about/`: Information about the project or team.
*   `languages/`: Details on local dialects (Garhwali, Kumaoni, etc.).
*   `not-found.tsx`: Custom 404 page.

### `src/components/`
Reusable UI building blocks.

*   `ui/`: Generic design system components (wrappers around Radix primitives).
*   `Navbar.tsx` & `Footer.tsx`: Global navigation elements.
*   `UttarakhandSVGMap.tsx`: The interactive map component.
*   `ThreeDEventCarouselProps.tsx`: The 3D carousel for events.
*   `FAQ.tsx`: Frequently asked questions component.

### `src/data/`
Static data files. We keep content separate from logic.

*   `districts.ts`: Information about different districts.
*   `festivals.ts`: Data on local festivals.
*   `temples.ts`: List of temples and their details.
*   `rulers.ts`: Historical data on local rulers.
*   `fair.ts`: Information about traditional fairs.

### `src/lib/`
Utility functions and shared logic.

## Key Configuration Files
*   `next.config.ts`: Configuration for Next.js.
*   `tailwind.config.ts`: Customizations for Tailwind CSS.
*   `package.json`: Project dependencies and scripts.
