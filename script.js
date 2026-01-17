const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { 
                id: "house-wash", 
                name: "House Washing", 
                price: "From $300", 
                pricing: "$300 (Small/Single Story) | $450+ (2-Story/Estate)", 
                desc: "Safely removing organic growth and environmental pollutants from your home's exterior using professional soft-wash techniques.", 
                process: ["Surface Inspection & Protection: We bag all outdoor outlets and pre-soak surrounding vegetation.", "Biodegradable Treatment: Application of professional-grade surfactant and sodium hypochlorite blend.", "Low-Pressure Rinse: Gentle 150-PSI rinse to remove dirt and debris without damaging siding.", "Final Wax & Shield: Spot-free rinse application to repel future dust."], 
                benefits: ["Eliminates mold spores", "Protects siding integrity", "Boosts curb value instantly"] 
            },
            { 
                id: "driveway", 
                name: "Driveway & Parking Lot Pressure Washing", 
                price: "$0.22/sq ft", 
                pricing: "$0.22 per sq ft ($250 Minimum)", 
                desc: "Industrial-strength concrete restoration for high-traffic surfaces.", 
                process: ["Oil & Grease Pre-Treatment: Application of high-PH degreasers.", "Surface Cleaning: Uniform 4200-PSI orbital cleaning using professional flat-surface tools.", "Edge Detailing: Precision wand-work for joints, curbs, and perimeter corners.", "Post-Treatment Brightening: Sodium-based treatment to eliminate organic streaks."], 
                benefits: ["Removes hazardous oil slips", "Prevents concrete pitting", "Professional, even finish"] 
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                pricing: "Custom Quote (Starting at $250)", 
                desc: "Commercial-grade sanitization and deodorization using the Simpson ALH 4240.", 
                process: ["Sanitization Spray: High-strength antimicrobial application.", "Heavy-Duty Degreasing: Scouring of animal fats, oils, and waste runoff.", "High-Heat Extraction: Using the Simpson ALH 4240 to strip grime from porous concrete.", "Deodorizing Seal: Final application of an enzyme-based cleaner."], 
                benefits: ["Health code compliance", "Drastic pest reduction", "Eliminates foul odors"] 
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                pricing: "$0.44 per sq ft ($500 Minimum)", 
                desc: "The only shingle manufacturer-approved method for removing black streaks.", 
                process: ["Gutter Protection: Installation of temporary diversions.", "Eco-Friendly Chemical Application: A non-pressure chemical 'kill-coat' is applied.", "Organic Dissolution: Allowing chemistry to break down moss and algae roots.", "Nature-Rinse Protocol: Rain naturally washes away dead organic material over 4-6 weeks."], 
                benefits: ["Restores heat-reflectivity", "Extends roof life by 5-10 years", "Removes damaging moss roots"] 
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                pricing: "$6 per bin (Minimum 10 bins or as an add-on)", 
                desc: "High-heat sanitization for residential and commercial waste containers.", 
                process: ["Interior Scour: 200-degree water blast to remove stuck-on waste.", "Antimicrobial Rinse: Kills 99.9% of bacteria.", "Deodorization: Refreshing citrus-scent application.", "Hand-Dry Finish: Ensuring no standing water is left."], 
                benefits: ["Bacteria-free storage", "Zero smell", "Reduces maggot/fly issues"] 
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                pricing: "From $400 (Based on surface and tag size)", 
                desc: "Specialized chemical removal that preserves the underlying substrate.", 
                process: ["Tag Identification: Determining paint type (oil/acrylic/spray).", "Ghosting Prevention: Applying a 'shadow' remover.", "Gentle Extraction: Using controlled heat to avoid scarring brick.", "Neutralization: Restoring the PH of the wall."], 
                benefits: ["Restores brand image", "Preserves masonry", "Prevents further vandalism"] 
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                pricing: "$300 Minimum (Or $1.50 per spot for large lots)", 
                desc: "Eliminating unsightly gum spots from sidewalks and entryways.", 
                process: ["Steam Dissolution: Using 200°F steam to melt gum bonds.", "Low-Pressure Removal: Softly lifting gum without pitting cement.", "Stain Treatment: Cleaning the dark 'oil ring' left behind.", "Full Walkway Rinse: Ensuring a uniform look."], 
                benefits: ["Spotless storefronts", "Better first impressions", "Cleaner indoor carpets"] 
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                pricing: "$0.44 per sq ft", 
                desc: "Specific mineral and organic stain treatment for masonry and pavers.", 
                process: ["Mineral Breakdown: Acid-based cleaner for salt deposits.", "Soft-Scrub: Agitating deep moss roots without damage.", "Neutralizing Rinse: Balancing surface PH.", "Prevention Spray: Applying an inhibitor."], 
                benefits: ["Restores original color", "Stops structural erosion", "Eliminates slip hazards"] 
            }
        ]
    },
    categoryB: {
        title: "Protection & Finishing",
        items: [
            { 
                id: "concrete-seal", 
                name: "Concrete Cleaning & Resealing", 
                price: "$0.90/sq ft", 
                pricing: "$0.90 per sq ft ($350 Minimum)", 
                desc: "Protecting your driveway from Michigan winters and salt damage.", 
                process: ["Deep Pore Clean: High-pressure extraction of contaminants.", "Drying Phase: Ensuring concrete is below 15% moisture.", "Silane-Siloxane Application: Penetrating sealer that protects from inside out.", "Hydrophobic Check: Verifying water beads on surface."], 
                benefits: ["Prevents salt pitting", "Stops freeze-thaw cracking", "Keeps concrete looking new"] 
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                pricing: "$1.75 - $2.25 per sq ft", 
                desc: "A premium 3-stage restoration for driveways, patios, and pool decks.", 
                process: ["Deep Extraction Clean: Removing old sand and weeds.", "Polymeric Sand Infill: Stabilizing joints to prevent shifting.", "Compaction: Vibratory plate compaction.", "Flood-Coat Sealing: Application of premium acrylic sealer."], 
                benefits: ["Prevents weed growth", "Locks pavers in place", "Enhances stone color"] 
            },
            {
                id: "tennis-court",
                name: "Tennis & Pickleball Courts",
                price: "Custom Quote",
                pricing: "Custom Quote (Based on surface condition)",
                desc: "Specialized soft wash for recreational surfaces to maintain grip and appearance.",
                process: ["Debris Removal: Blower removal of leaves and loose dirt.", "Mild Surfactant Application: Soft chemical treatment to lift algae without damaging acrylic paint.", "Low-Pressure Rinse: Gentle rinsing to preserve surface texture.", "Squeegee Finish: Removing standing water to prevent spotting."],
                benefits: ["Restores surface grip", "Brightens court lines", "Prevents slip hazards"]
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                pricing: "$1.30 per sq ft", 
                desc: "Hardener treatment for garage and industrial floors that constantly 'dust'.", 
                process: ["Mechanical Scrub: Removing the weak surface layer.", "Lithium Densification: Chemical treatment to harden the top layer.", "Micro-Buff: Polishing the surface.", "Penetrating Dust Shield: Final seal."], 
                benefits: ["Industrial-level durability", "Easier cleaning", "Safe for vehicles"] 
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                pricing: "Custom Quote", 
                desc: "Binding loose gravel and decorative stone into a permanent, walkable surface.", 
                process: ["Surface Leveling: Preparing sub-base.", "Resin Mixing: Combining UV-stable polymers with stone.", "Trowel Application: Hand-finishing the surface.", "Curing Protocol: 24-hour protected curing phase."], 
                benefits: ["Permeable (no puddles)", "ADA compliant", "Stops loose rock movement"] 
            }
        ]
    },
    categoryC: {
        title: "Restoration & Maintenance",
        items: [
            { 
                id: "deck", 
                name: "Deck & Fence Restoration", 
                price: "$0.55/sq ft", 
                pricing: "$0.55 per sq ft", 
                desc: "Removing years of oxidation and grey-weathering from wood surfaces.", 
                process: ["Oxygenated Cleaning: Lifting grey dead-wood fibers.", "pH Balancing: Wood brightener to restore natural color.", "Furring Removal: Soft sanding for a smooth finish.", "Stain Readiness: Preparation for staining."], 
                benefits: ["Increases wood lifespan", "Removes splinter hazards", "Restores natural beauty"] 
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                pricing: "From $150 (Varies by height and debris)", 
                desc: "Full interior debris removal and exterior cosmetic brightening.", 
                process: ["Manual Extraction: Removing debris by hand.", "Downspout Flush: Verifying clear flow.", "Exterior Gutter Scrub: Cleaning 'tiger stripes' off exterior.", "System Inspection: Checking for loose hangers."], 
                benefits: ["Prevents basement flooding", "Protects foundation", "Restores curb appeal"] 
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                pricing: "$0.25 per sq ft", 
                desc: "Customized low-pressure chemical cleaning for delicate or unique surfaces.", 
                process: ["Substrate Analysis: Determining material sensitivity.", "Chemical Tailoring: Creating a specific ratio of cleaners.", "Dwell Time Management: Allowing chemistry to do the work.", "Neutralizing Rinse: Making surface safe for pets/kids."], 
                benefits: ["Safe for all materials", "Deeper clean than pressure", "Eco-friendly approach"] 
            }
        ]
    }
};

// 1. Initial Page Load - Build the Home Services List
function initHome() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = '';

    Object.values(servicesData).forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = "bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm";
        
        // This loop structure creates the exact layout: Name (Left) - Price (Right)
        // It maintains a single column vertical stack.
        let itemsHtml = category.items.map((item, index) => `
            <div class="flex justify-between items-center py-2 ${index !== category.items.length - 1 ? 'border-b border-blue-100/50' : ''}">
                <span class="text-blue-600 font-medium cursor-pointer hover:underline" onclick="showService('${item.id}')">${item.name}</span>
                <span class="text-slate-600">${item.price}</span>
            </div>
        `).join('');

        categoryCard.innerHTML = `
            <h3 class="text-2xl font-bold text-slate-900 mb-6">${category.title}</h3>
            <div class="space-y-4">${itemsHtml}</div>
        `;
        container.appendChild(categoryCard);
    });
}

// 2. Navigation - Show Individual Service Page
function showService(id) {
    let selectedService = null;
    Object.values(servicesData).forEach(cat => {
        const found = cat.items.find(item => item.id === id);
        if (found) selectedService = found;
    });

    if (!selectedService) return;

    // Fill Detail Data
    document.getElementById('detail-name').innerText = selectedService.name;
    document.getElementById('detail-desc').innerText = selectedService.desc;
    document.getElementById('detail-pricing').innerText = selectedService.pricing;

    // Process Steps
    const processContainer = document.getElementById('detail-process');
    if (processContainer) {
        processContainer.innerHTML = selectedService.process.map((step, i) => `
            <div class="process-step">
                <div class="step-number">${i + 1}</div>
                <p class="text-slate-700 leading-relaxed">${step}</p>
            </div>
        `).join('');
    }

    // Benefits
    const benefitsContainer = document.getElementById('detail-benefits');
    if (benefitsContainer) {
        benefitsContainer.innerHTML = selectedService.benefits.map(benefit => `
            <li class="flex items-start text-slate-600">
                <svg class="w-5 h-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                ${benefit}
            </li>
        `).join('');
    }

    // Toggle Views
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('detail-page').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// 3. Navigation - Go back to list
function showHome() {
    document.getElementById('detail-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Initialize
initHome();
