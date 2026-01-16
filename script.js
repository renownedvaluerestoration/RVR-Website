const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { id: "house-wash", name: "House Washing", price: "From $300", pricing: "$300 (Small/Single Story) | $450+ (2-Story/Estate)", desc: "Safely removing organic growth and environmental pollutants from your home's exterior using professional soft-wash techniques.", process: ["Surface Inspection & Protection: We bag all outdoor outlets and pre-soak surrounding vegetation to prevent chemical burn.", "Biodegradable Treatment: Application of professional-grade surfactant and sodium hypochlorite blend to kill mold at the root.", "Low-Pressure Rinse: Gentle 150-PSI rinse to remove dirt and debris without damaging vinyl siding, brick, or stucco.", "Final Wax & Shield: Spot-free rinse application to repel future dust and enhance siding luster."], benefits: ["Eliminates mold spores", "Protects siding integrity", "Boosts curb value instantly"] },
            { id: "driveway", name: "Driveway & Parking Lot Pressure Washing", price: "$0.22/sq ft", pricing: "$0.22 per sq ft ($250 Minimum)", desc: "Industrial-strength concrete restoration for high-traffic surfaces.", process: ["Oil & Grease Pre-Treatment: Application of high-PH degreasers to lift deep-set petroleum stains.", "Surface Cleaning: Uniform 4200-PSI orbital cleaning using professional flat-surface tools to prevent 'tiger striping'.", "Edge Detailing: Precision wand-work for joints, curbs, and perimeter corners.", "Post-Treatment Brightening: Sodium-based treatment to eliminate remaining organic streaks and leave concrete white and bright."], benefits: ["Removes hazardous oil slips", "Prevents concrete pitting", "Professional, even finish"] },
            { id: "dumpster", name: "Dumpster Pads", price: "Custom Quote", pricing: "Custom Quote (Starting at $250)", desc: "Commercial-grade sanitization and deodorization for health code compliance.", process: ["Sanitization Spray: High-strength antimicrobial application to kill bacteria and neutralize odors.", "Heavy-Duty Degreasing: Scouring of animal fats, oils, and waste runoff.", "High-Heat Extraction: Using the Simpson ALH 4240 to strip grime from porous concrete.", "Deodorizing Seal: Final application of an enzyme-based cleaner that continues to work after we leave."], benefits: ["Health code compliance", "Drastic pest reduction", "Eliminates foul odors"] },
            { id: "roof", name: "Rooftop Softwash", price: "$0.44/sq ft", pricing: "$0.44 per sq ft ($500 Minimum)", desc: "The only shingle manufacturer-approved method for removing black streaks (Gloeocapsa magma).", process: ["Gutter Protection: Installation of temporary diversions to ensure chemical runoff doesn't impact landscaping.", "Eco-Friendly Chemical Application: A non-pressure chemical 'kill-coat' is applied to the entire roof surface.", "Organic Dissolution: Allowing chemistry to break down moss, algae, and lichen roots.", "Nature-Rinse Protocol: The treatment is left to react; rain naturally washes away dead organic material over 4-6 weeks."], benefits: ["Restores heat-reflectivity", "Extends roof life by 5-10 years", "Removes damaging moss roots"] },
            { id: "bins", name: "Garbage Bins", price: "$6 per bin", pricing: "$6 per bin (Minimum 10 bins or as an add-on)", desc: "High-heat sanitization for residential and commercial waste containers.", process: ["Interior Scour: 200-degree water blast to remove stuck-on waste.", "Antimicrobial Rinse: Kills 99.9% of E. coli, Salmonella, and Listeria.", "Deodorization: Refreshing citrus-scent application.", "Hand-Dry Finish: Ensuring no standing water is left to breed new bacteria."], benefits: ["Bacteria-free storage", "Zero smell", "Reduces maggot/fly issues"] },
            { id: "graffiti", name: "Graffiti Removal", price: "From $400", pricing: "From $400 (Based on surface and tag size)", desc: "Specialized chemical removal that preserves the underlying substrate.", process: ["Tag Identification: Determining if the paint is oil, acrylic, or spray-based to select the correct solvent.", "Ghosting Prevention: Applying a 'shadow' remover to ensure no faint outlines remain.", "Gentle Extraction: Using controlled heat rather than high pressure to avoid scarring the brick or stone.", "Neutralization: Restoring the PH of the wall to prevent long-term masonry damage."], benefits: ["Restores brand image", "Preserves masonry", "Prevents further vandalism"] },
            { id: "gum", name: "Chewing Gum Removal", price: "$300", pricing: "$300 Minimum (Or $1.50 per spot for large lots)", desc: "Eliminating unsightly gum spots from sidewalks and entryways.", process: ["Steam Dissolution: Using 200°F steam to melt the gum's bond to the concrete.", "Low-Pressure Removal: Softly lifting the gum without creating 'pockmarks' in the cement.", "Stain Treatment: Targeted cleaning of the dark 'oil ring' left behind by old gum.", "Full Walkway Rinse: Ensuring a uniform look across the entire entryway."], benefits: ["Spotless storefronts", "Better first impressions", "Cleaner indoor carpets"] },
            { id: "algae", name: "Efflorescence, Algae & Moss Removal", price: "$0.44/sq ft", pricing: "$0.44 per sq ft", desc: "Specific mineral and organic stain treatment for masonry and pavers.", process: ["Mineral Breakdown: Applying a specialized acid-based cleaner to dissolve white salt deposits (efflorescence).", "Soft-Scrub: Using a stiff-bristled brush to agitate deep moss roots without damaging the stone.", "Neutralizing Rinse: Balancing the surface PH to protect the surrounding environment.", "Prevention Spray: Applying an inhibitor to slow the return of organic growth."], benefits: ["Restores original color", "Stops structural erosion", "Eliminates slip hazards"] }
        ]
    },
    categoryB: {
        title: "Protection & Finishing",
        items: [
            { id: "concrete-seal", name: "Concrete Cleaning & Resealing", price: "$0.90/sq ft", pricing: "$0.90 per sq ft ($350 Minimum)", desc: "Protecting your driveway from Michigan winters and salt damage.", process: ["Deep Pore Clean: High-pressure extraction of all dirt and contaminants.", "Drying Phase: Ensuring the concrete is below 15% moisture for optimal sealer bond.", "Silane-Siloxane Application: Applying a penetrating sealer that protects from the inside out.", "Hydrophobic Check: Verifying that water beads on the surface before we finish."], benefits: ["Prevents salt pitting", "Stops freeze-thaw cracking", "Keeps concrete looking new"] },
            { id: "paver-seal", name: "Paver Sanding & Sealing", price: "$1.75/sq ft", pricing: "$1.75 - $2.25 per sq ft", desc: "A premium 3-stage restoration for driveways, patios, and pool decks.", process: ["Deep Extraction Clean: High-pressure washing to remove old sand, weeds, and ant hills from joints.", "Polymeric Sand Infill: Application of premium sand to stabilize joints and prevent shifting.", "Compaction: Vibratory plate compaction to ensure sand is locked into the joints.", "Flood-Coat Sealing: Application of two coats of premium acrylic sealer (Matte or Wet-look)."], benefits: ["Prevents weed growth", "Locks pavers in place", "Enhances stone color"] },
            { id: "dusting", name: "Concrete Surface Dusting", price: "$1.30/sq ft", pricing: "$1.30 per sq ft", desc: "Hardener treatment for garage and industrial floors that constantly 'dust'.", process: ["Mechanical Scrub: Removing the 'laitance' (weak surface layer) of the concrete.", "Lithium Densification: Chemical treatment that reacts with the concrete to harden the top layer.", "Micro-Buff: Polishing the surface to a smooth, dust-free finish.", "Penetrating Dust Shield: Final seal to lock in the surface permanently."], benefits: ["Industrial-level durability", "Easier cleaning", "Safe for vehicles"] },
            { id: "stone", name: "Resin-Bound Stone & Rock Stabilization", price: "Custom Quote", pricing: "Custom Quote", desc: "Binding loose gravel and decorative stone into a permanent, walkable surface.", process: ["Surface Leveling: Preparing the sub-base for uniform stone distribution.", "Resin Mixing: Combining high-strength UV-stable polymers with your choice of stone.", "Trowel Application: Hand-finishing the surface for a seamless, ADA-compliant result.", "Curing Protocol: 24-hour protected curing phase for maximum strength."], benefits: ["Permeable (no puddles)", "ADA compliant", "Stops loose rock movement"] }
        ]
    },
    categoryC: {
        title: "Restoration & Maintenance",
        items: [
            { id: "deck", name: "Deck & Fence Restoration", price: "$0.55/sq ft", pricing: "$0.55 per sq ft", desc: "Removing years of oxidation and grey-weathering from wood surfaces.", process: ["Oxygenated Cleaning: Using sodium percarbonate to lift grey dead-wood fibers without pressure damage.", "pH Balancing: Applying a wood brightener to restore the natural 'golden' look of the timber.", "Furring Removal: Softly sanding any raised wood grain for a smooth-to-the-touch finish.", "Stain Readiness: De-moisturizing phase to prepare for your choice of stain or seal."], benefits: ["Increases wood lifespan", "Removes splinter hazards", "Restores natural beauty"] },
            { id: "gutters", name: "Gutter Cleaning", price: "Custom Quote", pricing: "From $150 (Varies by height and debris)", desc: "Full interior debris removal and exterior cosmetic brightening.", process: ["Manual Extraction: Removing all large debris, leaves, and shingle grit by hand.", "Downspout Flush: Verifying clear flow to the ground level.", "Exterior Gutter Scrub: Using 'Black Streak Remover' to clean the 'tiger stripes' off the white exterior.", "System Inspection: Checking for loose hangers or damaged seams."], benefits: ["Prevents basement flooding", "Protects foundation", "Restores curb appeal"] },
            { id: "softwash-any", name: "Softwash Any Surface", price: "$0.25/sq ft", pricing: "$0.25 per sq ft", desc: "Customized low-pressure chemical cleaning for delicate or unique surfaces.", process: ["Substrate Analysis: Determining the material sensitivity and stain type.", "Chemical Tailoring: Creating a specific ratio of surfactant and water-based cleaners.", "Dwell Time Management: Allowing chemistry to do the work, not pressure.", "Neutralizing Rinse: Ensuring the surface is safe for pets and children immediately."], benefits: ["Safe for all materials", "Deeper clean than pressure", "Eco-friendly approach"] }
        ]
    }
};

// 1. Initial Page Load - Build the Home Services List
function initHome() {
    const container = document.getElementById('services-container');
    container.innerHTML = '';

    Object.values(servicesData).forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = "bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm";
        
        let itemsHtml = category.items.map((item, index) => `
            <div class="flex justify-between items-center py-2 ${index !== category.items.length - 1 ? 'border-b border-blue-100/50' : ''}">
                <span class="text-blue-600 font-medium cursor-pointer hover:underline" onclick="showService('${item.id}')">${item.name}</span>
                <span class="text-slate-600">${item.price} </span>
            </div>
        `).join('');

        categoryCard.innerHTML = `
            <h3 class="text-2xl font-bold text-slate-900 mb-6">${category.title} </h3>
            <div class="space-y-4">${itemsHtml}</div>
        `;
        container.appendChild(categoryCard);
    });
}

// 2. Navigation - Show Individual Service Page
function showService(id) {
    // Find the service data
    let selectedService = null;
    Object.values(servicesData).forEach(cat => {
        const found = cat.items.find(item => item.id === id);
        if (found) selectedService = found;
    });

    if (!selectedService) return;

    // Populate Detail View
    document.getElementById('detail-name').innerText = selectedService.name;
    document.getElementById('detail-desc').innerText = selectedService.desc;
    document.getElementById('detail-pricing').innerText = selectedService.pricing;

    // Populate Process Steps 
    const processContainer = document.getElementById('detail-process');
    processContainer.innerHTML = selectedService.process.map((step, i) => `
        <div class="process-step">
            <div class="step-number">${i + 1}</div>
            <p class="text-slate-700 leading-relaxed">${step}</p>
        </div>
    `).join('');

    // Populate Benefits 
    const benefitsContainer = document.getElementById('detail-benefits');
    benefitsContainer.innerHTML = selectedService.benefits.map(benefit => `
        <li class="flex items-start text-slate-600">
            <svg class="w-5 h-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            ${benefit}
        </li>
    `).join('');

    // Switch Views
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

// Run on start
initHome();
