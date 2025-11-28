<!-- 6b8c0f0f-68e9-49bf-9161-5c44c13aa366 3107854f-acce-4cef-8699-d82d442b8a24 -->
# Content Revamp Spec: AI-Powered Breast Imaging Platform

## Overview

Revamp all content and messaging across the GammaLex website to position it as a cutting-edge platform for AI-powered breast imaging diagnosis and detection, while preserving 100% of the existing design system, layout structure, color palette, fonts, navigation style, and hero background images.

## Design Preservation Requirements

### Must Preserve Exactly As-Is:

- All hero section background images (no changes to image paths or styling)
- Page structure and layout (grid systems, spacing, sections)
- Color palette (GammaLex brand colors, purple accents, white backgrounds)
- Typography (Inter font family, font sizes, weights, tracking)
- Navigation structure and dropdown menus
- Button styles, CTAs, and interaction patterns
- Animation patterns and motion design
- Component structure and organization

### Only Update:

- Text content (headlines, subheadlines, body copy)
- Foreground visual elements (icons, if needed for context)
- CTA button labels and destination copy
- Section purposes (repurpose existing sections for breast imaging focus)

## Content Strategy: Breast Imaging Focus

### Primary Messaging Pillars:

1. **AI-Driven Breast Cancer Detection**: Advanced algorithms for early detection and diagnosis
2. **Decision Support for Radiologists**: AI assistance for mammography interpretation and triage
3. **Augmented Reality Tools**: AR overlays for imaging views and 3D interpretation
4. **Voice-Enabled Workflows**: Hands-free reporting, navigation, and querying
5. **Radiology Authorization Integration**: Maintain connection to existing authorization/pre-auth value proposition

## Page-by-Page Content Updates

### 1. Homepage (`app/page.tsx` + `components/CopilotHero.tsx`)

**Hero Section** (`components/CopilotHero.tsx`):

- **Current**: "Approval intelligence for radiology imaging"
- **New**: "AI-powered breast imaging diagnosis and detection"
- **Subheadline**: Update to focus on AI algorithms for breast cancer detection, early diagnosis, and decision support
- **Background**: Keep `/images/main-page/hero-background.png` unchanged
- **CTA**: Update "See it in Action" to "Book a Demo" (link to demo booking)

**Three Column Section** (lines 120-179):

- **Column 1**: Change from "Stop denials before they start" to "AI-powered early detection"
- **Column 2**: Change from "Secure margins and patient care" to "Decision support for radiologists"
- **Column 3**: Change from "Adapt to changing regulations" to "Voice-enabled workflows"

**Revenue Optimization Section** (`components/main-page/RevenueOptimizationSection.tsx`):

- **Headline**: Update to focus on AI breast imaging outcomes (reduced false positives, improved detection rates)
- **Three columns**: Repurpose to highlight:
- AI detection accuracy and sensitivity
- Risk stratification and triage
- Workflow optimization for breast imaging

**AI Applications Section** (`components/main-page/AIApplicationsSection.tsx`):

- **Headline**: "Intelligence That Moves With Breast Imaging"
- **Grid items**: Update all four columns to focus on:

1. AI Algorithms for Breast Cancer Detection
2. Augmented Reality Imaging Tools
3. Voice-Enabled Reporting & Navigation
4. Integration with Imaging Centers & Hospitals

- **Background**: Keep `/images/intelligence-moves/intelligence-that-moves-background.png` unchanged

**CTA Section** (lines 52-74 in `app/page.tsx`):

- Update to focus on booking demos of AI breast imaging solution
- Update "Partner with GammaLex" to "Request a Demo" or "Schedule Integration Consultation"

### 2. What We Do Page (`app/whatwedo/page.tsx`)

**Hero** (`components/whatwedo/WhatWeDoHero.tsx`):

- **Headline**: "What is GammaLex?"
- **Subheadline**: Update to describe AI-powered breast imaging platform, focusing on detection, diagnosis, and decision support
- **Background**: Keep `/images/whatwedo/hero-background.png` unchanged

**Content** (`components/whatwedo/WhatWeDoContent.tsx`):

- Rewrite both paragraphs to explain:
- How AI analyzes mammography and breast imaging
- Image analysis, risk stratification, diagnostic support
- AR tools for 3D interpretation
- Voice-enabled features for hands-free workflows
- Connection to radiology authorization workflows

### 3. Problems We Solve Page (`app/problemswesolve/page.tsx`)

**Hero** (`components/problemswesolve/ProblemsHero.tsx`):

- **Headline**: Update to focus on challenges in breast imaging (false positives, reading time, early detection)
- **Subheadline**: Update to mention detection accuracy, workflow efficiency, diagnostic confidence
- **Background**: Keep `/images/problems-we-solve/hero-background.png` unchanged

**Content Sections**: Update to describe:

- Challenges radiologists face in breast imaging interpretation
- Impact of missed detections and false positives
- Workflow inefficiencies in mammography reading
- Need for AI decision support

### 4. How We Do It Page (`app/howwedoit/page.tsx`)

**Hero** (`components/howwedoit/HowWeDoItHero.tsx`):

- **Headline**: "How We Do It"
- **Subheadline**: Update to explain AI algorithms, AR tools, and voice features for breast imaging
- **Background**: Keep `/images/howwedoit/hero-background.png` unchanged

**Content** (`components/howwedoit/HowWeDoItDetailed.tsx`):

- Update workflow sections to describe:
- AI image analysis algorithms for breast imaging
- Machine learning models trained on mammography datasets
- AR overlay technology for findings visualization
- Voice-enabled reporting and navigation
- Integration with PACS/RIS systems
- Maintain connection to authorization workflows

### 5. Application/Product Page (`app/application/page.tsx`)

**Hero** (`components/application/ApplicationHero.tsx`):

- **Headline**: Update to "GammaLex AI Breast Imaging Platform"
- **Subheadline**: Focus on AI detection, AR visualization, voice workflows
- **Background**: Keep `/images/vertical-ai/hero-background.png` unchanged

**Content** (`components/application/ApplicationDetailed.tsx`):

- Update product features to highlight:
- AI algorithms for breast cancer detection and triage
- Augmented Reality tools for imaging interpretation
- Voice-enabled features for hands-free operation
- Integration capabilities for hospitals and imaging centers
- Technical documentation and regulatory compliance

### 6. Impact Page (`app/impact/page.tsx`)

**Content Updates**:

- Update metrics and stats to focus on:
- Detection accuracy improvements
- Reduction in false positives
- Time savings for radiologists
- Early detection outcomes
- Patient outcomes and care quality

### 7. Navigation Updates (`components/Navigation.tsx`)

**Dropdown Labels**: Update descriptions (keep structure):

- **Why GammaLex**: Update descriptions to mention breast imaging focus
- **Product**: Update "Vertical AI Suite" description to "AI Breast Imaging Platform"
- Keep all navigation structure and styling unchanged

### 8. Footer & Other Pages

**Footer** (`components/FooterGV.tsx`): No content changes needed

**Other Pages** (About, Ethical AI, Trust & Compliance):

- Update only where content references radiology authorization to also mention breast imaging AI capabilities
- Keep all hero backgrounds unchanged

## New Content Themes to Introduce

### AI Algorithms Section (repurpose existing section):

- Deep learning models for mammography analysis
- Computer vision for lesion detection
- Risk stratification algorithms
- Triage and prioritization AI

### Augmented Reality Section (repurpose existing section):

- AR overlays on imaging views
- 3D visualization tools
- Interactive findings display
- Enhanced interpretation support

### Voice-Enabled Features Section (repurpose existing section):

- Hands-free reporting
- Voice navigation through imaging studies
- Voice queries for findings
- Dictation and transcription integration

## Implementation Guidelines

### Content Writing Style:

- Maintain founder tone (concise, impactful)
- Focus on key highlights, not verbose detail
- Avoid "cardy" marketing language
- Use technical accuracy with clinical precision
- Emphasize AI transparency and source-backed accuracy

### Technical Accuracy:

- Reference real AI capabilities (image analysis, pattern recognition)
- Mention integration with existing radiology workflows
- Connect to authorization/pre-auth value proposition
- Maintain regulatory compliance messaging

### CTA Updates:

- "Book a Demo" → Link to demo booking (cal.com or similar)
- "Request Integration" → Link to integration inquiry form
- "Technical Documentation" → Link to docs/API resources
- "Regulatory Compliance" → Link to compliance documentation

## Files to Update

### Hero Components (update text only):

- `components/CopilotHero.tsx`
- `components/whatwedo/WhatWeDoHero.tsx`
- `components/problemswesolve/ProblemsHero.tsx`
- `components/howwedoit/HowWeDoItHero.tsx`
- `components/application/ApplicationHero.tsx`
- `components/impact/ImpactHero.tsx`

### Content Components (rewrite content):

- `components/main-page/RevenueOptimizationSection.tsx`
- `components/main-page/AIApplicationsSection.tsx`
- `components/whatwedo/WhatWeDoContent.tsx`
- `components/problemswesolve/ProblemsDetailed.tsx`
- `components/howwedoit/HowWeDoItDetailed.tsx`
- `components/application/ApplicationDetailed.tsx`
- `components/main-page/ProblemsWeSolveSection.tsx`

### Navigation (update labels/descriptions):

- `components/Navigation.tsx` (dropdown descriptions only)

### Page CTAs (update button text and links):

- `app/page.tsx` (CTA section)
- All hero sections with CTAs

## Verification Checklist

After implementation, verify:

- [ ] All hero background images remain unchanged
- [ ] Layout structure and spacing preserved
- [ ] Color palette and fonts unchanged
- [ ] Navigation structure intact
- [ ] All content updated to breast imaging focus
- [ ] AR, Voice, and AI algorithm features described
- [ ] CTAs updated to demo/integration focus
- [ ] Connection to authorization workflows maintained
- [ ] No design system violations
- [ ] All pages build successfully