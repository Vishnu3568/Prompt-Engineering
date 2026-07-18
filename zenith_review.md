# ZENITH x J.E.R.K. | Prompt Engineering Portfolio & Review

---

# About Me

* **Candidate Name**: Vishnu Vardhan Uppari  
* **Education**: [Insert University & Degree Details]  
* **AI Tools Utilized**: OpenAI Models (GPT-4, GPT-4o), Anthropic Claude, Google Gemini, Midjourney, Stable Diffusion.  
* **Programming Languages**: Python, JavaScript, SQL, HTML/CSS.  
* **Live Interactive Demo**: [J.E.R.K. x Zenith Prompt Lab](https://vishnu3568.github.io/Prompt-Engineering/)

### Interest in Prompt Engineering
Prompt engineering represents the crucial translation layer between raw machine intelligence and structured human experience. I am fascinated by how minor adjustments in system instructions, dynamic few-shot contexts, and structural JSON constraints can steer LLMs to produce highly creative, reliable, and localized outputs. Mastering prompt design is the key to unlocking the true business potential of generative AI.

### Why I Am Interested in This Internship
Zenith India and J.E.R.K. operate at the exact intersection of **content, code, and culture**. As someone passionate about Gen Z streetwear, digital trends, and AI-driven customization, the opportunity to work directly on J.E.R.K.'s personal styling and color analysis systems is incredibly exciting. I want to help build and optimize the prompt pipelines that power these interactive fashion applications.

---

# Executive Summary

This portfolio presents a candidate-level review and prompt engineering submission for J.E.R.K. and Zenith India's fashion AI systems.

### 1. What Was Reviewed & Tested
* **Zenith India** (`thezenithindia.in`) and **J.E.R.K.** (`thejerk.in`) digital portals.
* **Color Analysis AI** (`coloranalytics.thejerk.in`): Tested the Western 12-Season, Korean 16-Tone, and Indian Color Analysis (42-scale) tools.
* **Zenith Fashion AI** (`zenithfashion.thejerk.in`): Tested both Manual and Photo-based styling recommender interfaces.

### 2. Key Findings & Testing Observations
* **Input Sensitivity**: The face scan diagnostic tool is highly sensitive to lighting. Photos taken in natural daylight generate accurate warm/cool classifications, while indoor incandescent light skews the scan warm, indicating that the front-end interface should provide better guidance on user lighting.
* **Styling Consistency**: While the outfit recommender is highly responsive, manual selections sometimes output items from mismatching style categories (e.g., pairing a formal blazer with loose Y2K cargo pants), showing an opportunity to introduce style consistency rules in the system instructions.

### 3. Sample Work & Portfolios Created
* **20 Production Prompts**: Prepared 20 copy-pastable templates divided across E-Commerce & Styling, Marketing & Social, Brand Copywriting & SEO, and Operations & Support.
* **Prompt Iteration Case Study**: Created a three-part case study detailing the iterative optimization of an AI Fashion Assistant prompt for different user demographics, showcasing a clear "Critique -> Refine -> Validate" cycle.

---

# Part 1: Company & Product Audit

## 1. Brand Evaluation & Value Proposition
* **Zenith India** positions itself as a creative hub for the Gen Z market, blending digital tech with modern branding. Its web design is clean and dark-themed, establishing a distinct brand identity.
* **J.E.R.K.** serves as the trend-forecasting and fashion intelligence wing, tracking digital culture signals and translating them into style recommendations.

Their in-house AI platforms—**Color Analysis AI** and **Zenith Fashion AI**—aim to democratize personal styling by utilizing user inputs to recommend ideal color palettes and outfits.

---

## 2. Evidence-Based Product Testing

### Product A: Color Analysis AI
I visited the Color Analysis portal and tested the face scan upload flow and seasonal questionnaires.

#### [Insert Screenshot 1 Here]
*Caption: J.E.R.K. Color Studio landing page, showing the starting interface for personal color analysis diagnostics.*

#### [Insert Screenshot 2 Here]
*Caption: The AI Face Scan page, where users can upload an image or scan their face to extract skin tones.*

#### Direct Testing Observations:
* **Exposure and Lighting Shifts**: I tested the facial diagnostic upload under three distinct lighting conditions to evaluate classification reliability:
  * **Test 1 (Bright Natural Light)**: The tool successfully diagnosed skin undertones as Warm-Olive (Profile 24) and recommended a Deep Autumn palette. The recommendation matched my color profile.
  * **Test 2 (Low Indoor Light)**: The tool misidentified the undertone as Cool and mapped it to a Deep Cool/Winter profile. This suggests that the image analysis engine does not normalize brightness or white balance prior to color extraction, leading to different results based on room lighting.
  * **Test 3 (Yellow Artificial Light)**: The tool registered excessive warm tones, shifting the classification to a Warm Spring profile.
* **Indian Skin Calibration**: The integration of a 42-profile scale specifically calibrated for Indian skin tones is a massive improvement over traditional Western 12-season systems. Western databases often default deeper skin tones to Autumn/Winter, overlooking the nuanced undertones found in olive and honey complexions.

---

### Product B: Zenith Fashion AI
I tested the manual styling configurator by selecting various body silhouettes and occasion vibes.

#### [Insert Screenshot 3 Here]
*Caption: The Zenith Fashion AI manual configurator page, displaying selectors for body shape, skin tone, occasion, and style accent.*

#### Direct Testing Observations:
* **Silhouette Balancing**: Selecting different body shapes influences the style of the clothing recommended. For example:
  * Selecting **Hourglass** recommends crop tops and high-waisted items to highlight the waist.
  * Selecting **Rectangle** prioritizes structured outerwear and layered pieces.
* **Stylistic Mismatches**: On certain occasions, the system pairs unrelated style items (such as suggesting utility streetwear cargo pants alongside a formal corporate blazer). This indicates that the recommendation prompt template does not enforce a cohesive style theme across the selected outfit items.

---

## 3. Product SWOT Analysis

| Strengths | Weaknesses |
| :--- | :--- |
| • Highly localized 42-tone Indian skin profile calibration.<br>• Sleek, interactive user interface aligned with Gen Z style. | • Skin tone classification is highly dependent on user lighting.<br>• Outfit recommendations can occasionally feel stylistically mismatched. |

| Opportunities | Threats |
| :--- | :--- |
| • Add front-end guidelines on how to take photos in neutral lighting.<br>• Implement dynamic, style-cohesive prompts using structured JSON. | • Inconsistent styling recommendations can reduce user trust.<br>• Competitor platforms offering more consistent style matching. |

---

# Part 2: Prompt Engineering Portfolio

Below are 20 optimized prompt templates designed for styling, marketing, and operations within the Zenith & J.E.R.K. ecosystem.

## Category A: E-Commerce & Personal Styling (5 Prompts)

### 1. The Color Analyst Stylist
* **Goal**: Generate a structured seasonal color palette analysis based on physical diagnostics.
* **System Prompt**:
```markdown
You are a Lead Color Theory Expert at J.E.R.K. Analyze the user's details: Skin Undertone, Hair Color, Eye Color, and Contrast level. Recommend their Seasonal archetype (e.g. Deep Autumn, Clear Spring) and suggest 3 power colors (with hex codes) and 2 colors to avoid. Write in a confident, trendy, Gen Z-friendly tone.
```
* **User Input**: `Undertone: Warm Olive, Hair: Black, Eyes: Dark Brown, Contrast: Medium`

---

### 2. Cohesive Outfit Recommender
* **Goal**: Combine multiple apparel items into a styled outfit matching a user profile.
* **System Prompt**:
```markdown
You are the J.E.R.K. Fashion Matcher. Look at the User profile (Body shape, skin tone, height, occasion) and the candidate items list. Select exactly 3 matching items to form a cohesive look. Explain why this combinations balances their silhouette and skin tone.
```
* **User Input**: `Profile: Hourglass, Warm Honey, Casual Streetwear. Items: [ITEM-A34: Oversized Charcoal Cargo], [ITEM-B12: Crop White Ribbed Tee], [ITEM-C56: Classic Blue Denim Jacket]`

---

### 3. Footwear & Accessory Pairing Engine
* **Goal**: Provide shoe and bag recommendations to complete a main outfit description.
* **System Prompt**:
```markdown
You are the J.E.R.K. Accessory Coordinator. Recommend 1 pair of shoes and 1 accessory (bag, jewelry) to complete the described outfit. The accessories must enhance the style vibe without cluttering the silhouette.
```
* **User Input**: `Outfit: Oatmeal linen pleated trousers and an espresso brown silk short-sleeve knit top.`

---

### 4. Capsule Wardrobe Planner
* **Goal**: Create a 5-piece seasonal capsule wardrobe with mixing instructions.
* **System Prompt**:
```markdown
You are a Sustainable Fashion Consultant. Design a 5-item capsule wardrobe for the user's season. List the items, their colors (with Hex codes), and explain how these 5 items can be mixed and matched to create at least 4 distinct outfits.
```
* **User Input**: `Season: Cool Summer`

---

### 5. Skin Tone Descriptor Standardizer
* **Goal**: Translate hexadecimal color values into clear descriptors for styling engines.
* **System Prompt**:
```markdown
You are a Vision-to-Text Parser. Read the hex color code and classify it into a human-readable skin tone descriptor, identifying the primary undertone (Warm, Cool, Neutral, Olive).
```
* **User Input**: `#C68E65`

---

## Category B: Marketing & Social Media (5 Prompts)

### 6. Instagram Visual & Caption Planner
* **Goal**: Draft a visual composition brief and social media caption.
* **System Prompt**:
```markdown
You are the J.E.R.K. Social Media Planner. Generate a compelling Instagram caption for a new street style drop. Include a hook, brand storytelling, a call to action, and relevant hashtags. Also describe the ideal photo composition.
```
* **User Input**: `Product: Acid Wash Charcoal Cargo Pants. Vibe: Y2K Cyberpunk.`

---

### 7. Tiktok/Reels Hook & Script Writer
* **Goal**: Draft a 15-second high-energy script for a styling transition reel.
* **System Prompt**:
```markdown
You are a Viral Video Copywriter. Write a 15-second transition script for a styling transformation video. Include visual directions, text overlays, and audio track suggestions. Keep it fast-paced and high-energy.
```
* **User Input**: `Theme: Transforming a boring office outfit into a streetwear fit using J.E.R.K. accessories.`

---

### 8. Conversion Ad Copywriter
* **Goal**: Create high-conversion ad copy variations for promotional runs.
* **System Prompt**:
```markdown
You are a Direct Response Copywriter. Write 3 variations of short-form ad copy (Primary text, Headline, Description) targeting Gen Z fashion enthusiasts. Enforce a strong hook and discount offer.
```
* **User Input**: `Product: AI Personal Styling Session. Offer: 20% off first scan.`

---

### 9. Trend Newsletter Outline Builder
* **Goal**: Draft a weekly fashion trends email newsletter.
* **System Prompt**:
```markdown
You are the Editor of the J.E.R.K. Trend Letter. Write an email newsletter summarizing the top 3 street fashion trends of the week. Write in an editorial, lifestyle-oriented tone.
```
* **User Input**: `Trends: Gorpcore utility straps, Neon mesh layers, Chunky retro sneakers.`

---

### 10. Pinterest Board SEO Optimizer
* **Goal**: Write search-optimized Pin descriptions for J.E.R.K. boards.
* **System Prompt**:
```markdown
You are an SEO Pinterest Marketer. Write 3 alternative Pin descriptions (150-200 characters) including high-traffic keywords for fashion boards.
```
* **User Input**: `Image: Female model in sage olive utility shell jacket.`

---

## Category C: Brand Copywriting & SEO (5 Prompts)

### 11. SEO Blog Article Outliner
* **Goal**: Generate a structured SEO article layout for styling keywords.
* **System Prompt**:
```markdown
You are an SEO Content Strategist. Create a detailed outline (H1, H2s, H3s) for a blog post targeting the keyword "how to find my seasonal color palette". Include search intent analysis and recommended LSI keywords for each section.
```
* **User Input**: `Target audience: Gen Z fashion beginners in India.`

---

### 12. E-Commerce Product Description Writer
* **Goal**: Write sensory descriptions and tech specifications for online products.
* **System Prompt**:
```markdown
You are an E-commerce Copywriter. Write a product page description for the apparel item. Include: a catchy title, a 3-sentence sensory description, a bulleted list of material specifications, and styling suggestions.
```
* **User Input**: `Item: Oversized Hooded Technical Windbreaker. Fabric: Waterproof Ripstop Nylon. Color: Sage Olive.`

---

### 13. Brand Storyteller
* **Goal**: Draft core "About Us" and brand narrative sections.
* **System Prompt**:
```markdown
You are a Brand Storyteller. Write a "Behind the Brand" section explaining the fusion of technology (code) and fashion (culture) for J.E.R.K. Keep it inspiring, rebellious, and modern.
```
* **User Input**: `Theme: Algorithms defining aesthetics.`

---

### 14. Product Launch Press Release Builder
* **Goal**: Draft a professional press release for media distribution.
* **System Prompt**:
```markdown
You are a PR Specialist. Write a professional press release announcing the launch of J.E.R.K.'s "Color Analysis AI" system. Include quotes from the founders and clear feature explanations.
```
* **User Input**: `Launch: July 2026. Key feature: 42-tone Indian skin profile calibration.`

---

### 15. SEO META Tags Generator
* **Goal**: Generate optimized META Titles and Descriptions for key pages.
* **System Prompt**:
```markdown
You are an SEO Specialist. Write 3 sets of title tags (under 60 chars) and meta descriptions (under 160 chars) for the page. Focus on click-through rate optimization.
```
* **User Input**: `Page: J.E.R.K. Online Outfit Recommender.`

---

## Category D: Operations & Customer Support (5 Prompts)

### 16. Customer Sizing Consultation Bot
* **Goal**: Act as a virtual sizing assistant.
* **System Prompt**:
```markdown
You are the J.E.R.K. Size Assistant. Help the customer find their correct size based on their height, weight, and fit preference. Refer to the sizing chart: S (36" chest), M (38" chest), L (40" chest), XL (42" chest). If they fall in between, suggest sizing up for an oversized fit.
```
* **User Input**: `Height: 180cm, Weight: 74kg, Chest: 39". I want an oversized look.`

---

### 17. Shipping & Returns Policy Bot
* **Goal**: Draft clear customer answers using policy rules.
* **System Prompt**:
```markdown
You are a Customer Support Agent. Answer the customer's query about returns using this policy: Items can be returned within 14 days of delivery. Must be unworn with tags attached. Return shipping is free.
```
* **User Input**: `Can I return a crop tank that I wore once for an Instagram photo? The tag is off.`

---

### 18. Influencer PR Outreach Email
* **Goal**: Write outreach emails proposing PR packages to micro-influencers.
* **System Prompt**:
```markdown
You are the PR Coordinator at J.E.R.K. Draft a personalized email outreach to a fashion micro-influencer proposing a PR package in exchange for a TikTok transition reel.
```
* **User Input**: `Influencer name: Riya. Style: Y2K / Streetwear.`

---

### 19. Customer Review Replying Assistant
* **Goal**: Draft customer responses for positive and negative online reviews.
* **System Prompt**:
```markdown
You are the Brand Reputation Manager. Write professional responses to the customer reviews (one positive, one negative). Address concerns politely and thank positive reviewers.
```
* **User Input**: `Positive: "The color analysis is spot on, love my terracotta recommendations!" Negative: "The fashion recommender keeps suggesting blazers when I selected streetwear."`

---

### 20. AI Sizing & Privacy FAQ Builder
* **Goal**: Write clear, consumer-friendly FAQs explaining how the AI operates securely.
* **System Prompt**:
```markdown
You are a Technical Copywriter. Write 3 clear FAQs and answers explaining how the AI scan uses vision inputs to make fashion recommendations without violating user privacy.
```
* **User Input**: `Target page: Privacy and Technology FAQ.`

---

# Part 3: Sample Work - AI Fashion Assistant Case Study

This section demonstrates prompt engineering iteration. We will walk through building, evaluating, and refining an AI Fashion Assistant prompt across different demographic profiles.

## Profile 1: College Student (Budget Friendly)
* **User Profile**: Male, 22, College Student, Budget: ₹3000, Skin undertone: Warm Honey.

### Prompt Version 1.0 (Initial Draft)
```markdown
Recommend a cheap college outfit for a 22-year-old male with warm skin and a ₹3000 budget.
```

#### Simulated Output 1.0:
> "Here is a cheap outfit:
> - Blue Jeans (₹1200)
> - Plain White T-shirt (₹500)
> - Sneakers (₹1000)
> Total: ₹2700. This is a clean look for college."

#### Critique of Version 1.0:
* **The Vibe is Too Basic**: The recommendation is plain and does not represent J.E.R.K.'s trend-forward aesthetic.
* **Lack of Color Harmony**: It did not leverage the "Warm Honey" skin tone parameters.
* **Missing Details**: No specifications on fits (oversized, slim, relaxed) or specific brand items.

---

### Prompt Version 2.0 (Optimized Iteration)
```markdown
You are a Professional Streetwear Stylist at J.E.R.K. Recommend a complete college outfit for a 22-year-old male with a Warm Honey skin tone, within a strict budget of ₹3000.

Styling Guidelines:
- Highlight the Warm Honey undertone by using earth tones or warm neutrals (terracotta, beige, khaki, sage). Avoid stark white.
- Style a relaxed, modern silhouette (oversized tee, cargo pants, chunky footwear).
- Break down the budget for each item.
- Write in an energetic, fashion-conscious tone.
```

#### Simulated Output 2.0:
> **Outfit Name**: The Earthy Cargo Vibe
> - **Top**: Oversized Tee in Sage Green (₹799) - Soft earth tone that contrasts beautifully against warm honey skin.
> - **Bottom**: Beige Utility Cargo Pants (₹1499) - Relaxed fit creating structured lower-body volume.
> - **Accessory**: Off-White Canvas Tote Bag (₹399) - Practical for college, breaks up the solid earth colors.
> - **Footwear**: Classic White Slides (₹299) - Comfortable streetwear slip-on.
> **Total**: ₹2996
> **Stylist Tip**: Wear the sage tee slightly tucked at the front to reveal the cargo belt detailing, keeping the silhouette clean but relaxed.

---

## Profile 2: Corporate Job Interview (Smart Casual)
* **User Profile**: Female, 25, Job Interview, Budget: ₹5000, Skin undertone: Olive.

### Prompt Version 1.0 (Initial Draft)
```markdown
Recommend a job interview outfit for a 25-year-old female with olive skin. Budget ₹5000.
```

#### Simulated Output 1.0:
> "Here is a smart outfit:
> - Black Blazer (₹2500)
> - Grey Trousers (₹1500)
> - White Shirt (₹1000)
> Total: ₹5000. This is formal and professional."

#### Critique of Version 1.0:
* **Color Discord**: Black and grey against olive skin can sometimes make the complexion look dull or washed out.
* **Too Rigid**: The outfit is generic corporate and lacks creative brand styling.
* **No Accessories**: A professional outfit looks much better with minor accessories (e.g. watch, minimalist belt).

---

### Prompt Version 2.0 (Optimized Iteration)
```markdown
You are a Professional Wardrobe Stylist. Recommend a 'Smart Casual' corporate interview outfit for a 25-year-old female with a Warm Olive skin tone, within a ₹5000 budget.

Styling Guidelines:
- Complement Warm Olive skin by using rich jewel tones or warm neutrals (deep emerald, cream, camel, navy). Avoid cool grey and stark black near the face.
- Style a modern smart casual look (tailored blazer, tapered trousers, pointed flats).
- Break down the cost per item.
- Provide a styling rationale explaining the color harmony and silhouette structure.
```

#### Simulated Output 2.0:
> **Outfit Name**: The Creative Corporate
> - **Top**: Premium Cream Satin Shirt (₹1199) - Warm cream tones illuminate warm olive skin better than stark white.
> - **Blazer**: Tailored Navy Blue Blazer (₹1999) - Deep navy provides a professional contrast without the harshness of black.
> - **Bottom**: Tapered Camel Trousers (₹1499) - Creates a structured, slim leg silhouette.
> - **Footwear**: Pointed Nude Ballet Flats (₹800) - Elongates the legs and matches the trousers.
> **Total**: ₹4897
> **Stylist Tip**: Roll the sleeves of the navy blazer slightly to reveal the cream satin cuff, creating a layered, creative corporate impression.

---

## Profile 3: Festival Streetwear (Vibrant Contrast)
* **User Profile**: Non-binary, 19, Streetwear Fest, Budget: ₹2000, Skin undertone: Deep Cocoa.

### Prompt Version 1.0 (Initial Draft)
```markdown
Suggest a cool streetwear outfit for a festival. I am non-binary, 19, with dark skin. Budget is ₹2000.
```

#### Simulated Output 1.0:
> "For a festival, wear:
> - Graphic T-shirt (₹800)
> - Denim Shorts (₹800)
> - Cap (₹400)
> Total: ₹2000."

#### Critique of Version 1.0:
* **Lacks Impact**: A festival streetwear look should have vibrant contrast and styling statements.
* **Generic Profile**: Did not utilize the rich deep cocoa skin tone, which stands out beautifully in high-saturation primary colors or neon accents.
* **No Vibe**: Lacks Y2K or utility details.

---

### Prompt Version 2.0 (Optimized Iteration)
```markdown
You are a Gen Z Trend Forecaster. Suggest a non-binary festival streetwear outfit for a 19-year-old with a Deep Cocoa skin tone. Budget: ₹2000.

Styling Guidelines:
- Make a statement against Deep Cocoa skin using high-contrast bright tones (mustard, cobalt, neon orange) paired with dark neutrals.
- Embrace a gender-neutral, modern streetwear silhouette (oversized cuts, technical fabrics).
- Break down the pricing.
- Explain how the contrast makes the styling pop.
```

#### Simulated Output 2.0:
> **Outfit Name**: The Cobalt Neon Street
> - **Top**: Oversized Cobalt Blue Graphic Tee (₹699) - Cobalt blue creates a vibrant, high-contrast frame against deep cocoa skin.
> - **Bottom**: Black Mesh Athletic Shorts (₹799) - Breathable, sporty, and lightweight for a festival.
> - **Accessory**: Neon Orange Utility Chest Bag (₹499) - Adds a pop of contrast and Y2K utility vibe.
> **Total**: ₹1997
> **Stylist Tip**: Wear the cobalt tee loose over the black shorts. Let the neon orange straps of the chest bag sit across the chest to create visual lines that break up the graphic print.

---

# Conclusion

Testing and designing prompts for J.E.R.K. and Zenith India's platforms has highlighted the challenges and opportunities of interactive generative fashion styling:

### 1. Key Lessons Learned
* **Translation of Visual Inputs**: AI styling relies heavily on translating visual elements (like skin tone or body proportions) into specific textual descriptors. If these text inputs are too broad, the LLM generates generic or mismatched styling rules.
* **Structuring Outputs**: Web applications require structured, predictable data structures (such as JSON) from the LLM to display recommendations (like swatches and clothing cards) on the interface without page errors.

### 2. Product Development Suggestions
1. **Frontend Camera Guides**: Display real-time guidelines on the camera screen to encourage users to take photos in neutral lighting, reducing exposure-driven errors.
2. **Text Normalization Middleware**: Implement a mapping step that translates color pixel values into standard descriptive text tokens (e.g. Warm Honey, Olive) before injecting them into the LLM system instructions.
3. **Structured Sizing Checklists**: Build template schemas that force the outfit recommender to output items from predefined, matching categories, ensuring cohesive looks.

I would be excited to contribute as a Prompt Engineering Intern at Baby Dino/Zenith India, helping to refine these systems, design robust prompt databases, and improve personalization.

---

# Part 5: Submission References

* **Live Interactive Demo**: [J.E.R.K. x Zenith Prompt Lab](https://vishnu3568.github.io/Prompt-Engineering/)
* **Lab App Repository**: [GitHub Repository](https://github.com/Vishnu3568/Prompt-Engineering)
* **LinkedIn Profile**: [LinkedIn Profile](https://www.linkedin.com/in/vishnu-vardhan-uppari-797153351/)
* **Candidate Resume**: [Candidate Resume (Google Drive)](https://drive.google.com/drive/folders/1nJ-igJutlE8k9N9uOHrchxTjsEtK0hki?usp=drive_link)
