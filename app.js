// Tab Switcher Logic
const navItems = document.querySelectorAll('.nav-item');
const tabPanes = document.querySelectorAll('.tab-pane');

function switchTab(tabId) {
    navItems.forEach(item => item.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));

    const targetItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    const targetPane = document.getElementById(tabId);

    if (targetItem && targetPane) {
        targetItem.classList.add('active');
        targetPane.classList.add('active');
    }
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const tabId = item.getAttribute('data-tab');
        switchTab(tabId);
    });
});

// Color Palette Database
const colorDatabases = {
    "Deep Autumn": {
        undertone: "Deep Warm & Olive",
        vibe: "Warm and rich, inspired by late autumn colors. You look stunning in earth tones, deeply saturated warm shades, and forest hues which highlight the natural warmth of your skin.",
        powerColors: [
            { name: "Rich Terracotta", hex: "#C2452D" },
            { name: "Deep Mustard", hex: "#DCA817" },
            { name: "Warm Teal", hex: "#178E96" },
            { name: "Forest Green", hex: "#1E5C3F" }
        ],
        avoidColors: [
            { name: "Cool Pink", hex: "#FFC0CB" },
            { name: "Ice Blue", hex: "#A9C9FF" },
            { name: "Stark White", hex: "#FFFFFF" }
        ],
        metal: "Antique Gold / Brass",
        makeup: "Warm terracotta or brick red lips, soft warm brown eyeshadows, and peach blush."
    },
    "Warm Spring": {
        undertone: "Bright Warm",
        vibe: "Clear, fresh, and lively. Your skin glows in bright, sun-kissed colors with gold undertones. High saturation and light-to-medium value shades represent your palette perfectly.",
        powerColors: [
            { name: "Coral Pink", hex: "#FF7F50" },
            { name: "Sunny Gold", hex: "#FFD700" },
            { name: "Apple Green", hex: "#8FDF82" },
            { name: "Warm Turquoise", hex: "#30D5C8" }
        ],
        avoidColors: [
            { name: "Dusty Charcoal", hex: "#555555" },
            { name: "Cool Lavender", hex: "#E6E6FA" },
            { name: "Deep Magenta", hex: "#8B008B" }
        ],
        metal: "Polished Yellow Gold",
        makeup: "Bright coral lip tints, warm champagne highlighters, and bronze bronzers."
    },
    "Clear Spring": {
        undertone: "Clear Neutral-Warm",
        vibe: "High contrast and sparkling. Colors that are saturated, bright, and striking complement your high-contrast look without overwhelming you.",
        powerColors: [
            { name: "Flame Red", hex: "#E2583E" },
            { name: "Bright Lime", hex: "#32CD32" },
            { name: "Electric Teal", hex: "#008080" },
            { name: "Daffodil Yellow", hex: "#FFFF31" }
        ],
        avoidColors: [
            { name: "Muted Taupe", hex: "#B38B6D" },
            { name: "Pastel Lavender", hex: "#D6CADD" },
            { name: "Soft Grey", hex: "#D3D3D3" }
        ],
        metal: "Bright Yellow Gold or White Gold",
        makeup: "Bold strawberry red lipsticks, glossy finish face makeup, and clear brow gels."
    },
    "Deep Winter": {
        undertone: "Deep Cool / Deep Olive",
        vibe: "High contrast, icy, and saturated. You have a striking skin presence that demands deeply saturated cool shades, rich jewel tones, and pure, sharp contrasts.",
        powerColors: [
            { name: "Royal Indigo", hex: "#2E0854" },
            { name: "Ruby Crimson", hex: "#9B111E" },
            { name: "Emerald Green", hex: "#046307" },
            { name: "True Black", hex: "#0A0A0A" }
        ],
        avoidColors: [
            { name: "Warm Beige", hex: "#F5F5DC" },
            { name: "Mustard Gold", hex: "#D1A105" },
            { name: "Peach Pastel", hex: "#FFDAB9" }
        ],
        metal: "Platinum / Polished Silver",
        makeup: "Deep berry or plum lips, blackest-black eyeliner, and cool rose blush."
    },
    "Cool Winter": {
        undertone: "True Cool",
        vibe: "Striking, frosty, and clear. Cool undertones with blue undertones dominate your profile. High-contrast cool shades and vibrant jewel colors look exceptional on you.",
        powerColors: [
            { name: "Sapphire Blue", hex: "#0F52BA" },
            { name: "Vibrant Fuchsia", hex: "#FF00FF" },
            { name: "Emerald Teal", hex: "#005F73" },
            { name: "Pure White", hex: "#FFFFFF" }
        ],
        avoidColors: [
            { name: "Orange Ochre", hex: "#CC5500" },
            { name: "Camel Brown", hex: "#C19A6B" },
            { name: "Warm Olive", hex: "#808000" }
        ],
        metal: "Bright Silver / White Gold",
        makeup: "Cherry red lips, cool silver eyeshadow highlight, and cool pink blush."
    },
    "Cool Summer": {
        undertone: "Soft Cool",
        vibe: "Gentle, cool, and delicate. Your palette mimics a soft, foggy morning. Pastel blues, muted rose, and cool greys harmonize beautifully with your features.",
        powerColors: [
            { name: "Soft Lavender", hex: "#BDB5D5" },
            { name: "Powder Blue", hex: "#B0C4DE" },
            { name: "Muted Rose", hex: "#C08A8A" },
            { name: "Slate Grey", hex: "#708090" }
        ],
        avoidColors: [
            { name: "Vivid Orange", hex: "#FF5F1F" },
            { name: "Electric Yellow", hex: "#CCFF00" },
            { name: "Jet Black", hex: "#000000" }
        ],
        metal: "Brushed Silver / White Gold",
        makeup: "Dusty rose lip color, matte finishes, and soft mauve blush."
    },
    "Soft Summer": {
        undertone: "Muted Cool-Neutral",
        vibe: "Soft and low contrast. You sit beautifully at the boundary of cool and warm. Highly blended, grey-infused muted tones bring out your natural, elegant coloring.",
        powerColors: [
            { name: "Sage Green", hex: "#8F9779" },
            { name: "Slate Blue", hex: "#5C6B73" },
            { name: "Dusty Mauve", hex: "#9E7B88" },
            { name: "Warm Charcoal", hex: "#3A3D40" }
        ],
        avoidColors: [
            { name: "Neon Orange", hex: "#FF4500" },
            { name: "Stark White", hex: "#FFFFFF" },
            { name: "Electric Yellow", hex: "#FFFF00" }
        ],
        metal: "Brushed White Gold / Rose Gold",
        makeup: "Muted plum lip liner, satin skin finish, and nude-rose blush."
    },
    "Soft Autumn": {
        undertone: "Muted Warm-Neutral",
        vibe: "Gently golden, low contrast, and earthy. Soft olive and golden undercurrents look best in gentle, warm-neutral tones that have been softened with grey.",
        powerColors: [
            { name: "Khaki Gold", hex: "#B5A642" },
            { name: "Olive Drab", hex: "#6B8E23" },
            { name: "Warm Terracotta", hex: "#C36241" },
            { name: "Soft Teal", hex: "#4A8B94" }
        ],
        avoidColors: [
            { name: "Icy Lilac", hex: "#E3D3FF" },
            { name: "Fuchsia", hex: "#FF1493" },
            { name: "Stark Black", hex: "#000000" }
        ],
        metal: "Satin Yellow Gold / Rose Gold",
        makeup: "Warm nude lipstick, warm brown soft shadows, and amber blush."
    }
};

// Dynamic Clothing Outfits Database
const fashionOutfits = {
    "y2k": {
        name: "Cyber-Vibe Y2K Retro",
        vibe: "Futuristic street styling drawing from early 2000s tech aesthetics, incorporating neon accents, technical pants, and structural balancing.",
        items: [
            { id: "ITEM-A342", type: "Oversized Cargo Pants", desc: "Acid Wash Charcoal Denim, multi-pocket, wide drape", color: "Acid Charcoal" },
            { id: "ITEM-B671", type: "Crop Ribbed Tank", desc: "Sleeveless cropped fit with cybernetic text printing", color: "Neon Lime / Cyber Blue" },
            { id: "ITEM-C109", type: "Chunky Platform Sneakers", desc: "Triple White leather, massive retro sole profile", color: "Triple White" },
            { id: "ITEM-D954", type: "Shield Sunglasses", desc: "Wraparound iridescent blue lenses with silver framing", color: "Iridescent Silver" }
        ],
        hourglass: "The fitted cropped rib tank defines the narrow waist, while the oversized cargo pants build volume at the hips, highlighting your natural hourglass curves with balanced proportions.",
        rectangle: "The cropped cut creates a visual break in the torso, while the structural cargo pockets add volume below the hips, fabricating the illusion of curves.",
        triangle: "The chunky white platform sneakers draw the eye downwards to anchor the outfit, while a layered rib top balances out the hip-width beautifully.",
        "inverted-triangle": "The wide-leg silhouette of the cargo pants adds significant volume to your lower half, beautifully offsetting broad shoulders.",
        apple: "The high-waisted technical cargo pants draw structure to the waistline, while layering with an open technical jacket creates long vertical lines."
    },
    "minimalist": {
        name: "Old Money Casual Chic",
        vibe: "Clean lines, high-quality fabrics, and neutral tones. Focuses on effortless elegance, tailoring, and quiet luxury accents.",
        items: [
            { id: "ITEM-E120", type: "Pleated Tapered Trousers", desc: "Double pleats, heavy drape linen-blend tailored cut", color: "Oatmeal Beige" },
            { id: "ITEM-F492", type: "Silk Ribbed Short-Sleeve", desc: "Fine-gauge mulberry silk knit, crew neck structure", color: "Espresso Brown" },
            { id: "ITEM-G088", type: "Leather Slide Sandals", desc: "Italian calfskin flat slides, minimalist strap design", color: "Tan Leather" },
            { id: "ITEM-H310", type: "Minimalist Shoulder Bag", desc: "Structured crescent shape with gold buckle hardware", color: "Ivory White" }
        ],
        hourglass: "Tuck the silk knit top into the high-waisted pleated trousers to highlight your defined waistline, maintaining a sleek, tailored profile.",
        rectangle: "The double pleats at the waist of the trousers create volume, while the structured shoulder bag introduces soft curves to a straight silhouette.",
        triangle: "The espresso brown silk top draws focus upward, balancing the wider silhouette of the oatmeal trousers.",
        "inverted-triangle": "The double pleats and tapered design of the trousers add shape below the waist, balancing broad shoulders.",
        apple: "The straight, structured drape of the pleated trousers combined with a monochrome knit creates a continuous vertical line that elongates the frame."
    },
    "gorpcore": {
        name: "All-Weather Technical Utility",
        vibe: "Outdoor tech-utility designed for metropolitan settings. Highlights functional fabrics, nylon straps, and earthy mountain tones.",
        items: [
            { id: "ITEM-I550", type: "3-Layer Shell Jacket", desc: "Water-resistant tech shell, adjustable hood, toggles", color: "Sage Olive" },
            { id: "ITEM-J981", type: "Technical Ripstop Pants", desc: "Convertible zip-off utility pants with nylon belt", color: "Matte Black" },
            { id: "ITEM-K444", type: "Trail Running Shoes", desc: "Gore-Tex trail running sneakers, lugged rubber outsoles", color: "Grey / Safety Orange" },
            { id: "ITEM-L712", type: "Waterproof Crossbody Bag", desc: "Dyneema composite fabric, waterproof zipper locks", color: "Charcoal Grey" }
        ],
        hourglass: "Use the toggle pulls inside the shell jacket to cinch it at the waist, matching the utility aesthetic to your hourglass proportions.",
        rectangle: "Draw cord adjustments at both the jacket waist and the pant ankles create toggle cinching that breaks up straight body lines.",
        triangle: "The safety orange accents on the trail shoes focus interest downwards, balancing wider hip silhouettes.",
        "inverted-triangle": "The bulky technical ripstop pants add substance and volume to the lower limbs, offsetting wider shoulder frames.",
        apple: "Leaving the technical shell jacket unzipped creates an open front that creates a flattering vertical center-split visual effect."
    },
    "boho-chic": {
        name: "Modern Indie Western Vibe",
        vibe: "Soft fluid drapes, organic textures, and bold accessories. Combines romantic flowing silhouettes with structured leather details.",
        items: [
            { id: "ITEM-M331", type: "Tiered Linen Maxi Skirt", desc: "Flowing tiered layout, high-waist comfortable elastic", color: "Terracotta Rust" },
            { id: "ITEM-N129", type: "Crochet Knit Halter Top", desc: "Hand-knit floral motif, lace-up back detailing", color: "Warm Cream" },
            { id: "ITEM-O802", type: "Suede Western Boots", desc: "Pointed toe, block cuban heel, distressed detailing", color: "Desert Sand" },
            { id: "ITEM-P550", type: "Layered Turquoise Jewelry", desc: "Burnished silver chains with natural turquoise beads", color: "Silver / Turquoise" }
        ],
        hourglass: "The halter neck style highlights your shoulders while the high-waist maxi skirt wraps your hips, celebrating hourglass curves.",
        rectangle: "The tiered construction of the maxi skirt adds dynamic movement and structural layers, breaking the straight silhouette.",
        triangle: "The warm cream crochet halter neck draws focus upwards, highlighting your neck and shoulders to offset hip fullness.",
        "inverted-triangle": "The flowing tiered design of the maxi skirt flares out towards the floor, adding bulk to balance broad shoulders.",
        apple: "The high-rise fit of the tiered maxi skirt creates a waist start point high on the ribcage, draping softly down."
    }
};

// 20 Prompts Database
const promptsDatabase = [
    // Styling (5)
    {
        id: "p1",
        category: "styling",
        name: "Color Analyst Stylist",
        goal: "Deconstruct skin characteristics into seasonal analysis palettes.",
        system: `You are a Lead Color Theory Expert at J.E.R.K. Analyze the user's details: Skin Undertone, Hair Color, Eye Color, and Contrast level. Recommend their Seasonal archetype (e.g. Deep Autumn, Clear Spring) and suggest 3 power colors (with hex codes) and 2 colors to avoid. Write in a confident, trendy, Gen Z-friendly tone.`,
        input: `Undertone: Warm Olive, Hair: Black, Eyes: Dark Brown, Contrast: Medium`
    },
    {
        id: "p2",
        category: "styling",
        name: "Semantic Outfit Matcher",
        goal: "Formulate styling recommendations based on matched apparel indices.",
        system: `You are the J.E.R.K. Fashion Matcher. Look at the User profile (Body shape, skin tone, height, occasion) and the candidate items list. Select exactly 3 matching items to form a cohesive look. Explain why this combinations balances their silhouette and skin tone.`,
        input: `Profile: Hourglass, Warm Honey, Casual Streetwear. Items: [ITEM-A34: Oversized Charcoal Cargo], [ITEM-B12: Crop White Ribbed Tee], [ITEM-C56: Classic Blue Denim Jacket]`
    },
    {
        id: "p3",
        category: "styling",
        name: "Footwear & Accessory Pairing Engine",
        goal: "Match complementary accessories based on main outfit pieces.",
        system: `You are the J.E.R.K. Accessory Coordinator. Recommend 1 pair of shoes and 1 accessory (bag, jewelry) to complete the described outfit. The accessories must enhance the style vibe without cluttering the silhouette.`,
        input: `Outfit: Oatmeal linen pleated trousers and an espresso brown silk short-sleeve knit top.`
    },
    {
        id: "p4",
        category: "styling",
        name: "Capsule Wardrobe Generator",
        goal: "Generate minimal clothing pairings for specific seasonal tones.",
        system: `You are a Sustainable Fashion Consultant. Design a 5-item capsule wardrobe for the user's season. List the items, their colors (with Hex codes), and explain how these 5 items can be mixed and matched to create at least 4 distinct outfits.`,
        input: `Season: Cool Summer`
    },
    {
        id: "p5",
        category: "styling",
        name: "Skin Tone Contrast Corrector",
        goal: "Parse hex codes to extract raw skin properties.",
        system: `You are a Vision-to-Text Parser. Read the hex color code and classify it into a human-readable skin tone descriptor, identifying the primary undertone (Warm, Cool, Neutral, Olive).`,
        input: `#C68E65`
    },

    // Marketing (5)
    {
        id: "p6",
        category: "marketing",
        name: "Instagram Visual & Caption Planner",
        goal: "Generate social copy and photo briefs.",
        system: `You are the J.E.R.K. Social Media Planner. Generate a compelling Instagram caption for a new street style drop. Include a hook, brand storytelling, a call to action, and relevant hashtags. Also describe the ideal photo composition.`,
        input: `Product: Acid Wash Charcoal Cargo Pants. Vibe: Y2K Cyberpunk.`
    },
    {
        id: "p7",
        category: "marketing",
        name: "Tiktok/Reels Hook & Script Writer",
        goal: "Create transition hooks for fashion videos.",
        system: `You are a Viral Video Copywriter. Write a 15-second transition script for a styling transformation video. Include visual directions, text overlays, and audio track suggestions. Keep it fast-paced and high-energy.`,
        input: `Theme: Transforming a boring office outfit into a streetwear fit using J.E.R.K. accessories.`
    },
    {
        id: "p8",
        category: "marketing",
        name: "Conversion Ad Copy",
        goal: "Draft high-converting Facebook/Insta ad texts.",
        system: `You are a Direct Response Copywriter. Write 3 variations of short-form ad copy (Primary text, Headline, Description) targeting Gen Z fashion enthusiasts. Enforce a strong hook and discount offer.`,
        input: `Product: AI Personal Styling Session. Offer: 20% off first scan.`
    },
    {
        id: "p9",
        category: "marketing",
        name: "Trend Newsletter Generator",
        goal: "Draft weekly newsletters summarizing fashion directions.",
        system: `You are the Editor of the J.E.R.K. Trend Letter. Write an email newsletter summarizing the top 3 street fashion trends of the week. Write in an editorial, lifestyle-oriented tone.`,
        input: `Trends: Gorpcore utility straps, Neon mesh layers, Chunky retro sneakers.`
    },
    {
        id: "p10",
        category: "marketing",
        name: "Pinterest Pin Designer",
        goal: "Optimize Pin descriptions for Pinterest SEO.",
        system: `You are an SEO Pinterest Marketer. Write 3 alternative Pin descriptions (150-200 characters) including high-traffic keywords for fashion boards.`,
        input: `Image: Female model in sage olive utility shell jacket.`
    },

    // Brand Copywriting (5)
    {
        id: "p11",
        category: "brand",
        name: "SEO Blog Article Outliner",
        goal: "Generate structured SEO layouts for fashion keywords.",
        system: `You are an SEO Content Strategist. Create a detailed outline (H1, H2s, H3s) for a blog post targeting the keyword "how to find my seasonal color palette". Include search intent analysis and recommended LSI keywords for each section.`,
        input: `Target audience: Gen Z fashion beginners in India.`
    },
    {
        id: "p12",
        category: "brand",
        name: "Product Description Writer",
        goal: "Write sensory-focused, specifications descriptions.",
        system: `You are an E-commerce Copywriter. Write a product page description for the apparel item. Include: a catchy title, a 3-sentence sensory description, a bulleted list of material specifications, and styling suggestions.`,
        input: `Item: Oversized Hooded Technical Windbreaker. Fabric: Waterproof Ripstop Nylon. Color: Sage Olive.`
    },
    {
        id: "p13",
        category: "brand",
        name: "Brand Storytelling Copy",
        goal: "Create evocative brand core copy.",
        system: `You are a Brand Storyteller. Write a "Behind the Brand" section explaining the fusion of technology (code) and fashion (culture) for J.E.R.K. Keep it inspiring, rebellious, and modern.`,
        input: `Theme: Algorithms defining aesthetics.`
    },
    {
        id: "p14",
        category: "brand",
        name: "Press Release Draft",
        goal: "Write media statements announcing features.",
        system: `You are a PR Specialist. Write a professional press release announcing the launch of J.E.R.K.'s "Color Analysis AI" system. Include quotes from the founders and clear feature explanations.`,
        input: `Launch: July 2026. Key feature: 42-tone Indian skin profile calibration.`
    },
    {
        id: "p15",
        category: "brand",
        name: "Meta Tags Optimizer",
        goal: "Optimize site metadata for search engine indexing.",
        system: `You are an SEO Specialist. Write 3 sets of title tags (under 60 chars) and meta descriptions (under 160 chars) for the page. Focus on click-through rate optimization.`,
        input: `Page: J.E.R.K. Online Outfit Recommender.`
    },

    // Operations (5)
    {
        id: "p16",
        category: "ops",
        name: "Customer Sizing Chatbot",
        goal: "Act as a sizing consultant to help fit orders.",
        system: `You are the J.E.R.K. Size Assistant. Help the customer find their correct size based on their height, weight, and fit preference. Refer to the sizing chart: S (36" chest), M (38" chest), L (40" chest), XL (42" chest). If they fall in between, suggest sizing up for an oversized fit.`,
        input: `Height: 180cm, Weight: 74kg, Chest: 39". I want an oversized look.`
    },
    {
        id: "p17",
        category: "ops",
        name: "Returns Policy Bot",
        goal: "Answer return window queries based on policy guidelines.",
        system: `You are a Customer Support Agent. Answer the customer's query about returns using this policy: Items can be returned within 14 days of delivery. Must be unworn with tags attached. Return shipping is free.`,
        input: `Can I return a crop tank that I wore once for an Instagram photo? The tag is off.`
    },
    {
        id: "p18",
        category: "ops",
        name: "Influencer PR Pitch Draft",
        goal: "Pitch brand packages to micro-influencers.",
        system: `You are the PR Coordinator at J.E.R.K. Draft a personalized email outreach to a fashion micro-influencer proposing a PR package in exchange for a TikTok transition reel.`,
        input: `Influencer name: Riya. Style: Y2K / Streetwear.`
    },
    {
        id: "p19",
        category: "ops",
        name: "Review Responder",
        goal: "Write balanced, polite responses to reviews.",
        system: `You are the Brand Reputation Manager. Write professional responses to the customer reviews (one positive, one negative). Address concerns politely and thank positive reviewers.`,
        input: `Positive: "The color analysis is spot on, love my terracotta recommendations!" Negative: "The fashion recommender keeps suggesting blazers when I selected streetwear."`
    },
    {
        id: "p20",
        category: "ops",
        name: "AI Privacy FAQ Writer",
        goal: "Write clear site FAQ responses about customer data usage.",
        system: `You are a Technical Copywriter. Write 3 clear FAQs and answers explaining how the AI scan uses vision inputs to make fashion recommendations without violating user privacy.`,
        input: `Target page: Privacy and Technology FAQ.`
    }
];

// Case Studies Database
const caseStudies = [
    {
        title: "Profile 1: College Student (Budget: ₹3000)",
        user: "Male, 22, College Student, Budget: ₹3000, Skin undertone: Warm Honey",
        v1: {
            prompt: "Recommend a cheap college outfit for a 22-year-old male with warm skin and a ₹3000 budget.",
            output: `Here is a cheap outfit:
- Blue Jeans (₹1200)
- Plain White T-shirt (₹500)
- Sneakers (₹1000)
Total: ₹2700. This is a clean look for college.`
        },
        critique: [
            "The recommendation is plain and does not represent J.E.R.K.'s street culture aesthetic.",
            "It failed to leverage the Warm Honey skin tone contrast rules.",
            "No details on cuts, fits (e.g. oversized, tapered), or textures."
        ],
        v2: {
            prompt: `You are a Professional Streetwear Stylist at J.E.R.K. Recommend a complete college outfit for a 22-year-old male with a Warm Honey skin tone, within a strict budget of ₹3000.

Styling Guidelines:
- Highlight the Warm Honey undertone by using earth tones or warm neutrals (terracotta, beige, khaki, sage). Avoid stark white.
- Style a relaxed, modern silhouette (oversized tee, cargo pants, chunky footwear).
- Break down the budget for each item.
- Write in an energetic, fashion-conscious tone.`,
            output: `**Outfit Name**: The Earthy Cargo Vibe
- **Top**: Oversized Tee in Sage Green (₹799) - Soft earth tone that contrasts beautifully against warm honey skin.
- **Bottom**: Beige Utility Cargo Pants (₹1499) - Relaxed fit creating structured lower-body volume.
- **Accessory**: Off-White Canvas Tote Bag (₹399) - Practical for college, breaks up the solid earth colors.
- **Footwear**: Classic White Slides (₹299) - Comfortable streetwear slip-on.
**Total**: ₹2996

**Stylist Tip**: Wear the sage tee slightly tucked at the front to reveal the cargo belt detailing, keeping the silhouette clean but relaxed.`
        }
    },
    {
        title: "Profile 2: Corporate Interview (Budget: ₹5000)",
        user: "Female, 25, Job Interview, Budget: ₹5000, Skin undertone: Olive",
        v1: {
            prompt: "Recommend a job interview outfit for a 25-year-old female with olive skin. Budget ₹5000.",
            output: `Here is a smart outfit:
- Black Blazer (₹2500)
- Grey Trousers (₹1500)
- White Shirt (₹1000)
Total: ₹5000. This is formal and professional.`
        },
        critique: [
            "Black and grey near the face can make warm olive skin tones look sallow or washed out.",
            "The recommendation is generic corporate and lacks creative brand styling.",
            "Lacks layering or accessories that anchor professional looks."
        ],
        v2: {
            prompt: `You are a Professional Wardrobe Stylist. Recommend a 'Smart Casual' corporate interview outfit for a 25-year-old female with a Warm Olive skin tone, within a ₹5000 budget.

Styling Guidelines:
- Complement Warm Olive skin by using rich jewel tones or warm neutrals (deep emerald, cream, camel, navy). Avoid cool grey and stark black near the face.
- Style a modern smart casual look (tailored blazer, tapered trousers, pointed flats).
- Break down the cost per item.
- Provide a styling rationale explaining the color harmony and silhouette structure.`,
            output: `**Outfit Name**: The Creative Corporate
- **Top**: Premium Cream Satin Shirt (₹1199) - Warm cream tones illuminate warm olive skin better than stark white.
- **Blazer**: Tailored Navy Blue Blazer (₹1999) - Deep navy provides a professional contrast without the harshness of black.
- **Bottom**: Tapered Camel Trousers (₹1499) - Creates a structured, slim leg silhouette.
- **Footwear**: Pointed Nude Ballet Flats (₹800) - Elongates the legs and matches the trousers.
**Total**: ₹4897

**Stylist Tip**: Roll the sleeves of the navy blazer slightly to reveal the cream satin cuff, creating a layered, creative corporate impression.`
        }
    },
    {
        title: "Profile 3: Festival Streetwear (Budget: ₹2000)",
        user: "Non-binary, 19, Streetwear Fest, Budget: ₹2000, Skin undertone: Deep Cocoa",
        v1: {
            prompt: "Suggest a cool streetwear outfit for a festival. I am non-binary, 19, with dark skin. Budget is ₹2000.",
            output: `For a festival, wear:
- Graphic T-shirt (₹800)
- Denim Shorts (₹800)
- Cap (₹400)
Total: ₹2000.`
        },
        critique: [
            "Lacks the styling elements needed for festival streetwear.",
            "Failed to leverage high-contrast bright tones which complement Deep Cocoa complexions.",
            "Lacks modern gender-neutral styling structures."
        ],
        v2: {
            prompt: `You are a Gen Z Trend Forecaster. Suggest a non-binary festival streetwear outfit for a 19-year-old with a Deep Cocoa skin tone. Budget: ₹2000.

Styling Guidelines:
- Make a statement against Deep Cocoa skin using high-contrast bright tones (mustard, cobalt, neon orange) paired with dark neutrals.
- Embrace a gender-neutral, modern streetwear silhouette (oversized cuts, technical fabrics).
- Break down the pricing.
- Explain how the contrast makes the styling pop.`,
            output: `**Outfit Name**: The Cobalt Neon Street
- **Top**: Oversized Cobalt Blue Graphic Tee (₹699) - Cobalt blue creates a vibrant, high-contrast frame against deep cocoa skin.
- **Bottom**: Black Mesh Athletic Shorts (₹799) - Breathable, sporty, and lightweight for a festival.
- **Accessory**: Neon Orange Utility Chest Bag (₹499) - Adds a pop of contrast and Y2K utility vibe.
**Total**: ₹1997

**Stylist Tip**: Wear the cobalt tee loose over the black shorts. Let the neon orange straps of the chest bag sit across the chest to create visual lines that break up the graphic print.`
        }
    }
];

// PORTFOLIO PROMPTS RENDER LOGIC
const promptsContainer = document.getElementById('prompts-container');
const promptsCount = document.getElementById('prompts-count');
const categoryButtons = document.querySelectorAll('.cat-btn');

function renderPrompts(category = "all") {
    promptsContainer.innerHTML = '';
    const filtered = category === 'all' 
        ? promptsDatabase 
        : promptsDatabase.filter(p => p.category === category);

    promptsCount.textContent = `Showing ${filtered.length} prompts`;

    filtered.forEach(p => {
        promptsContainer.innerHTML += `
            <div class="prompt-card">
                <div class="prompt-card-header">
                    <h4>${p.name}</h4>
                    <span class="badge badge-accent">${p.category.toUpperCase()}</span>
                </div>
                <div class="prompt-card-body">
                    <p class="prompt-goal"><strong>Goal:</strong> ${p.goal}</p>
                    <div class="code-editor mt-2">
                        <div class="editor-header">
                            <span class="file-name">system_instruction.txt</span>
                            <button class="btn-copy" onclick="copyPrompt('sys-${p.id}')">Copy</button>
                        </div>
                        <pre id="sys-${p.id}" class="code-content font-small" style="color: #6EE7B7">${p.system}</pre>
                    </div>
                    <div class="code-editor mt-2">
                        <div class="editor-header">
                            <span class="file-name">example_user_input.txt</span>
                            <button class="btn-copy" onclick="copyPrompt('in-${p.id}')">Copy</button>
                        </div>
                        <pre id="in-${p.id}" class="code-content font-small" style="color: #93C5FD">${p.input}</pre>
                    </div>
                </div>
            </div>
        `;
    });
}

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        renderPrompts(cat);
    });
});

// CASE STUDY RENDER LOGIC
const caseBody = document.getElementById('case-study-body');
const caseTabButtons = document.querySelectorAll('.case-tab-btn');

function loadCaseStudy(index) {
    caseTabButtons.forEach((btn, idx) => {
        if (idx === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const study = caseStudies[index];

    caseBody.innerHTML = `
        <div class="card card-wide">
            <h3>Demographic Context</h3>
            <p class="card-desc"><strong>User Profile:</strong> ${study.user}</p>
        </div>

        <div class="case-grid">
            <!-- Version 1.0 (Initial) -->
            <div class="case-version-card">
                <div class="version-header">
                    <h4>Prompt Version 1.0</h4>
                    <span class="badge" style="background: rgba(239, 68, 68, 0.1); color: #EF4444; border-color: rgba(239, 68, 68, 0.3)">Basic Draft</span>
                </div>
                <div class="code-editor mt-2">
                    <pre class="code-content font-small" style="color: #D1D5DB">${study.v1.prompt}</pre>
                </div>
                <h5 class="mt-3" style="font-size:0.85rem; text-transform:uppercase; color:var(--text-secondary)">Simulated Output 1.0</h5>
                <pre class="mt-2" style="font-family: var(--font-body); font-size: 0.8rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; line-height: 1.4; color: var(--text-secondary)">${study.v1.output}</pre>
            </div>

            <!-- Version 2.0 (Optimized) -->
            <div class="case-version-card v2">
                <div class="version-header">
                    <h4>Prompt Version 2.0</h4>
                    <span class="badge badge-success">Optimized</span>
                </div>
                <div class="code-editor mt-2">
                    <pre class="code-content font-small" style="color: #6EE7B7">${study.v2.prompt}</pre>
                </div>
                <h5 class="mt-3" style="font-size:0.85rem; text-transform:uppercase; color:var(--text-primary)">Simulated Output 2.0</h5>
                <pre class="mt-2" style="font-family: var(--font-body); font-size: 0.8rem; background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; line-height: 1.4; border: 1px solid rgba(16, 185, 129, 0.15)">${study.v2.output}</pre>
            </div>
        </div>

        <div class="card card-wide case-critique-box">
            <h5>Critique and Deficiencies of Initial Draft</h5>
            <ul>
                ${study.critique.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Live Prompt Construction Elements
const colorPromptCode = document.getElementById('color-prompt-code');
const fashionPromptCode = document.getElementById('fashion-prompt-code');

// Read select elements
const selectSkinUndertone = document.getElementById('skin-undertone');
const selectSkinProfile = document.getElementById('skin-profile');
const selectColorContrast = document.getElementById('color-contrast');
const selectHairColor = document.getElementById('hair-color');
const selectEyeColor = document.getElementById('eye-color');

const selectBodyShape = document.getElementById('body-shape');
const selectFashionSkinTone = document.getElementById('fashion-skin-tone');
const selectTargetOccasion = document.getElementById('target-occasion');
const selectAgeGroup = document.getElementById('age-group');
const selectStyleVibe = document.getElementById('style-vibe');

// Update Color Prompt in UI
function updateColorPrompt() {
    const undertone = selectSkinUndertone.value.toUpperCase();
    const profile = selectSkinProfile.options[selectSkinProfile.selectedIndex].text;
    const contrast = selectColorContrast.value.toUpperCase();
    const hair = selectHairColor.value.replace('-', ' ').toUpperCase();
    const eye = selectEyeColor.value.replace('-', ' ').toUpperCase();

    const promptText = `// SYSTEM SETTINGS
ROLE: J.E.R.K. Senior Color Analyst AI
GOAL: Categorize user and output structured JSON styling palette.

// USER DIAGNOSTICS INPUTS
[Skin undertone]: ${undertone}
[Skin profile scale]: ${profile}
[Contrast density]: ${contrast}
[Natural hair tone]: ${hair}
[Natural eye tone]: ${eye}

// PROMPT EXECUTION RULES
1. Determine seasonal archetype: Western (12-Season) and Korean (16-Tone).
2. Curate 4 Hex colors for power matching, and 3 hex colors to strictly avoid.
3. Formulate styling tips targeting Gen Z streetwear or professional vibes.
4. Output MUST fit the J.E.R.K. JSON format exactly. Do not output prose.`;

    colorPromptCode.textContent = promptText;
}

// Update Fashion Prompt in UI
function updateFashionPrompt() {
    const body = selectBodyShape.value.toUpperCase();
    const skin = selectFashionSkinTone.options[selectFashionSkinTone.selectedIndex].text;
    const occasion = selectTargetOccasion.options[selectTargetOccasion.selectedIndex].text;
    const age = selectAgeGroup.options[selectAgeGroup.selectedIndex].text;
    const vibe = selectStyleVibe.value.toUpperCase();

    const promptText = `// SYSTEM SETTINGS
ROLE: J.E.R.K. Outfit Recommender AI
MODEL INPUTS: User Silhouette Classification + User Skin Tone Tone Mapping

// SEARCH & RETRIEVAL (DATABASE CONTEXT)
[Search Query]: "${vibe} style clothing for ${occasion}"
[Retrieved Candidate Inventory IDs]: ["A342", "B671", "C109", "D954", "E120", "F492", "G088", "H310", "I550", "J981", "K444", "L712", "M331", "N129", "O802", "P550"]

// USER PROFILE VARIABLES
[Body Silhouette]: ${body}
[Skin Tone Group]: ${skin}
[Occasion Context]: ${occasion}
[Age Category]: ${age}
[Vibe Filter]: ${vibe}

// PROMPT STYLIST INSTRUCTIONS
1. Select 4 items from the retrieved list that form a cohesive outfit matching the vibe and occasion.
2. Formulate a Gen Z styling rationale explaining how the outfit balances the ${body} silhouette and contrasts the ${skin} skin tone.
3. Keep the styling tips energetic, confident, and trend-focused.`;

    fashionPromptCode.textContent = promptText;
}

// Add event listeners for dynamic updates
const colorInputs = [selectSkinUndertone, selectSkinProfile, selectColorContrast, selectHairColor, selectEyeColor];
colorInputs.forEach(input => input.addEventListener('change', updateColorPrompt));

const fashionInputs = [selectBodyShape, selectFashionSkinTone, selectTargetOccasion, selectAgeGroup, selectStyleVibe];
fashionInputs.forEach(input => input.addEventListener('change', updateFashionPrompt));

// Copy Prompt to Clipboard
function copyPrompt(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`#${elementId}`).previousElementSibling.querySelector('.btn-copy') || document.querySelector(`button[onclick="copyPrompt('${elementId}')"]`);
        const originalText = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    });
}

// RUN COLOR AI ENGINE SIMULATION
const btnRunColor = document.getElementById('btn-run-color');
const colorPlaceholder = document.getElementById('color-output-placeholder');
const colorResults = document.getElementById('color-output-results');

btnRunColor.addEventListener('click', () => {
    const spinner = btnRunColor.querySelector('.btn-spinner');
    spinner.style.display = 'inline-block';
    btnRunColor.disabled = true;

    setTimeout(() => {
        spinner.style.display = 'none';
        btnRunColor.disabled = false;
        colorPlaceholder.classList.add('hidden');
        colorResults.classList.remove('hidden');

        const undertoneVal = selectSkinUndertone.value;
        const contrastVal = selectColorContrast.value;
        const profileVal = selectSkinProfile.value;

        let season = "Deep Autumn";
        if (undertoneVal === 'warm') {
            season = (contrastVal === 'high') ? "Clear Spring" : "Warm Spring";
        } else if (undertoneVal === 'cool') {
            season = (contrastVal === 'high') ? "Cool Winter" : "Cool Summer";
        } else if (undertoneVal === 'olive') {
            season = (contrastVal === 'high') ? "Deep Winter" : "Deep Autumn";
        } else {
            season = (contrastVal === 'low') ? "Soft Summer" : "Soft Autumn";
        }

        const data = colorDatabases[season];

        document.getElementById('result-season').textContent = season;
        document.getElementById('result-korean-tone').textContent = `Korean Tone: ${season.includes('Spring') ? 'Light' : season.includes('Summer') ? 'Muted' : season.includes('Autumn') ? 'Muted Deep' : 'Clear Dark'} ${season}`;
        document.getElementById('result-vibe-desc').textContent = data.vibe;
        document.getElementById('result-metal').textContent = data.metal;
        document.getElementById('result-makeup').textContent = data.makeup;

        const skinSwatch = document.getElementById('result-skin-swatch');
        if (profileVal === 'profile-12') skinSwatch.style.backgroundColor = '#E5C298';
        if (profileVal === 'profile-24') skinSwatch.style.backgroundColor = '#C68E65';
        if (profileVal === 'profile-32') skinSwatch.style.backgroundColor = '#965C3E';
        if (profileVal === 'profile-40') skinSwatch.style.backgroundColor = '#5C341F';

        const powerPalette = document.getElementById('power-palette');
        powerPalette.innerHTML = '';
        data.powerColors.forEach(color => {
            powerPalette.innerHTML += `
                <div class="color-swatch">
                    <div class="swatch-fill" style="background-color: ${color.hex}"></div>
                    <div class="swatch-info">
                        <div class="swatch-name">${color.name}</div>
                        <div class="swatch-hex">${color.hex}</div>
                    </div>
                </div>
            `;
        });

        const avoidPalette = document.getElementById('avoid-palette');
        avoidPalette.innerHTML = '';
        data.avoidColors.forEach(color => {
            avoidPalette.innerHTML += `
                <div class="color-swatch">
                    <div class="swatch-fill" style="background-color: ${color.hex}"></div>
                    <div class="swatch-info">
                        <div class="swatch-name">${color.name}</div>
                        <div class="swatch-hex">${color.hex}</div>
                    </div>
                </div>
            `;
        });

        document.getElementById('val-tokens').textContent = `~${Math.floor(Math.random() * 50) + 820}`;
        document.getElementById('val-latency').textContent = `${(Math.random() * 0.3 + 0.5).toFixed(1)}s`;

    }, 800);
});

// RUN FASHION AI ENGINE SIMULATION
const btnRunFashion = document.getElementById('btn-run-fashion');
const fashionPlaceholder = document.getElementById('fashion-output-placeholder');
const fashionResults = document.getElementById('fashion-output-results');

btnRunFashion.addEventListener('click', () => {
    const spinner = btnRunFashion.querySelector('.btn-spinner');
    spinner.style.display = 'inline-block';
    btnRunFashion.disabled = true;

    setTimeout(() => {
        spinner.style.display = 'none';
        btnRunFashion.disabled = false;
        fashionPlaceholder.classList.add('hidden');
        fashionResults.classList.remove('hidden');

        const vibeVal = selectStyleVibe.value;
        const bodyVal = selectBodyShape.value;

        const data = fashionOutfits[vibeVal];

        document.getElementById('outfit-name').textContent = data.name;
        document.getElementById('outfit-vibe').textContent = `Theme: ${data.vibe}`;
        document.getElementById('outfit-reasoning').textContent = data[bodyVal];

        const clothingGrid = document.getElementById('clothing-items');
        clothingGrid.innerHTML = '';
        data.items.forEach(item => {
            clothingGrid.innerHTML += `
                <div class="clothing-card">
                    <div class="clothing-img-fallback">
                        <svg class="fallback-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <path d="M21 15l-5-5L5 21"/>
                        </svg>
                        <span class="fallback-text">${item.color}</span>
                    </div>
                    <h5>${item.type}</h5>
                    <p class="text-small text-muted" style="line-height: 1.2">${item.desc}</p>
                    <div class="clothing-details">
                        <span class="clothing-tag">${vibeVal.toUpperCase()}</span>
                        <span class="clothing-id">${item.id}</span>
                    </div>
                </div>
            `;
        });

        document.getElementById('fashion-tokens').textContent = `~${Math.floor(Math.random() * 80) + 1050}`;
        document.getElementById('fashion-latency').textContent = `${(Math.random() * 0.4 + 0.7).toFixed(1)}s`;

    }, 1000);
});

// Initialize dynamic lists on load
updateColorPrompt();
updateFashionPrompt();
renderPrompts("all");
loadCaseStudy(0);
