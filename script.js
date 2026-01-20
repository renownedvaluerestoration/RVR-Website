const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { 
                id: "house-wash", 
                name: "House Washing", 
                price: "From $300", 
                desc: "Our professional house washing service uses safe soft washing techniques specifically designed for vinyl, brick, and stucco surfaces. We employ low-pressure nozzles and eco-friendly detergents to remove mold, algae, and grime without damaging your home's exterior. This process not only restores your home's appearance but also prevents long-term damage caused by organic growth.", 
                benefits: ["Prevents siding damage", "Removes mold/algae at root level", "Instant curb appeal improvement", "Protects home value"],
                process: ["Property Inspection & Plant Protection", "Eco-friendly Detergent Application", "Low-Pressure Soft Wash Rinse", "Final Detail & Window Spot-Check"],
                pricingDetails: "Flat Rate Pricing:\nSmall (1,500 sq ft) $300\nMedium (2,000 sq ft) $400\nLarge (3,000 sq ft) $550\n\nUnit Rate: $0.25 per square foot"
            },
            { 
                id: 'tennis-courts', 
                name: 'Tennis Courts', 
                price: '$1100', 
                desc: 'Professional deep cleaning and restoration for sports surfaces using specialized equipment and cleaners. Our tennis court cleaning removes built-up dirt, algae, and debris that can affect ball bounce and player traction. We restore your court to tournament-ready condition while maintaining surface integrity.', 
                benefits: ['Improved traction and safety', 'Extended surface longevity', 'Professional appearance', 'Better ball bounce consistency'], 
                rate: 'Starting at $1100',
                process: ["Surface Inspection & Preparation", "Specialized Sports Surface Cleaner Application", "Low-Pressure Rinse & Extraction", "Traction & Line Inspection"],
                pricingDetails: "Flat Rate Pricing:\nStandard Court: $1,100\nMultiple Courts: Call for Quote"
            },
            { 
                id: "driveway", 
                name: "Driveway & Parking Lot Pressure Washing", 
                price: "$0.22/sq ft", 
                desc: "Industrial-grade 4200 PSI deep cleaning for concrete surfaces to remove years of accumulated grime, oil stains, and tire marks. Our commercial equipment and techniques safely eliminate stubborn stains while protecting surrounding landscaping and ensuring proper drainage.", 
                benefits: ["Removes oil and chemical stains", "Eliminates dangerous tire marks", "Safe for neighbors and environment", "Restores original concrete color"],
                process: ["Debris Removal & Edging", "Surface Pre-Treatment for Stains", "Commercial Surface Cleaner Pass", "High-Volume Rinse & Sediment Flush"],
                pricingDetails: "Unit Rate: $0.22 per square foot (standard jobs)\nBulk Rate: $0.20 per square foot (large jobs)"
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Complete sanitization and odor removal for commercial dumpster pads using high-temperature pressure washing and specialized deodorizers. Our service eliminates health hazards, prevents pest infestations, and ensures compliance with health department regulations.", 
                benefits: ["Health code compliance", "Pest and rodent reduction", "Odor elimination", "Improved workplace safety"],
                process: ["Degreasing Soak", "Hot Water High-Pressure Scrub", "Sanitization & Deodorizing", "Containment Inspection"],
                pricingDetails: "Custom quote based on size and frequency of cleaning."
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Gentle zero-pressure chemical treatment specifically designed for shingle longevity and roof preservation. Our rooftop softwash eliminates damaging black algae streaks, moss growth, and organic stains without the risk of water infiltration or shingle damage associated with pressure washing.", 
                benefits: ["Extends roof life by 5-10 years", "Removes damaging black streaks", "Prevents moss and algae regrowth", "Maintains shingle integrity"],
                process: ["Gutter Protection Setup", "Algaecide Treatment Application", "Dwell Time Monitoring", "Neutralizing Rinse"],
                pricingDetails: "Flat Rate Pricing:\nSmall Roof $700\nMedium Roof $1,000\nLarge Roof $1,500\n\nUnit Rate: $0.44 per square foot"
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "High-heat sanitization and deodorizing service for residential and commercial garbage bins. Our process eliminates bacteria, viruses, and persistent odors using steam cleaning technology and EPA-approved disinfectants, ensuring a hygienic waste management solution.", 
                benefits: ["Bacteria and virus removal", "Complete odor elimination", "Prevents pest attraction", "Environmentally friendly cleaning"],
                process: ["High-Temp Pressure Wash", "Antibacterial Scrubbing", "Deodorizing Spray", "Exterior Polish"],
                pricingDetails: "Flat Rate Pricing:\nSingle Bin $6\n2 Bins $10"
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Specialized chemical removal service that eliminates graffiti without damaging underlying surfaces or leaving ghosting. We use environmentally friendly solvents and precise application techniques to restore your property's appearance while preserving the integrity of the original material.", 
                benefits: ["Fast emergency response", "Surface preservation", "No residual ghosting", "Eco-friendly solutions"],
                process: ["Paint Identification", "Eco-friendly Solvents Application", "Agitation & Steam Pressure Lift", "Neutralizing Wash"],
                pricingDetails: "Flat Rate Pricing:\nSmall Graffiti Area $400\nLarge Graffiti Area $550"
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "Professional high-temperature steam removal for sidewalks, pavements, and entryways. Our specialized equipment lifts hardened chewing gum without damaging the underlying surface, restoring a clean, professional appearance to your property's high-traffic areas.", 
                benefits: ["Spotless entrance appearance", "Enhanced property value", "Prevents permanent staining", "Quick and efficient service"],
                process: ["Area Cordoning", "Targeted Steam Treatment", "Pressure Extraction", "Uniform Rinse"],
                pricingDetails: "Flat Rate Pricing:\nStandard Service $300"
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                desc: "Specialized treatment for mineral deposits (efflorescence) and organic growth (algae and moss) on masonry and concrete surfaces. Our chemical formulas dissolve mineral buildup and eliminate organic growth at the root level, preventing structural damage and restoring surface appearance.", 
                benefits: ["Restores original color and texture", "Prevents structural erosion", "Long-lasting results", "Growth inhibitor application"],
                process: ["Organic Growth Assessment", "Mineral Dissolving Pre-treatment", "Pressure Clean", "Growth Inhibitor Application"],
                pricingDetails: "Unit Rate: $0.44 per square foot"
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
                desc: "Complete concrete restoration including deep cleaning followed by application of premium siloxane penetrating sealer. This two-step process not only cleans your concrete but provides long-lasting protection against water penetration, salt damage, oil stains, and UV degradation.", 
                benefits: ["Waterproofing protection", "Salt and chemical resistance", "UV protection", "Extended surface life"],
                process: ["Deep Clean & Stain Extraction", "24-Hour Drying Window", "Siloxane Sealer Application", "Uniform Finish Inspection"],
                pricingDetails: "Unit Rate: $0.90 per square foot"
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                desc: "Comprehensive paver maintenance including cleaning, joint re-sanding with polymeric sand, and application of premium wet-look or matte sealant. This process stabilizes pavers, prevents weed growth, enhances color, and provides long-term protection against staining and erosion.", 
                benefits: ["Stabilizes paver joints", "Prevents weed growth", "Enhances natural colors", "Protects against stains"],
                process: ["Bio-wash Clean", "Polymeric Sand Installation", "Compaction & Joint Setting", "Premium Sealant Coating"],
                pricingDetails: "Unit Rate: $1.75 per square foot"
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                desc: "Professional treatment for concrete dusting using lithium-based densifiers that penetrate deep into the concrete surface. This process hardens the surface, eliminates dusting issues, and creates a durable, easy-to-clean finish ideal for garages, basements, and industrial floors.", 
                benefits: ["Industrial-grade durability", "Eliminates concrete dust", "Easy cleaning maintenance", "Chemical resistance"],
                process: ["Industrial Scrubber Prep", "Lithium Densifier Application", "Buffing & Polishing", "Dust-Proof Testing"],
                pricingDetails: "Unit Rate: $1.30 per square foot"
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                desc: "Professional stabilization of loose gravel and stone surfaces using resin-bound systems that create a permanent, walkable surface. This solution transforms unstable gravel areas into ADA-compliant, 100% permeable surfaces suitable for pathways, patios, and decorative landscaping.", 
                benefits: ["ADA compliant surfaces", "100% permeable design", "Permanent stabilization", "Low maintenance"],
                process: ["Substrate Preparation", "Resin-Aggregate Mixing", "Hand-Troweled Application", "Curing & Strength Check"],
                pricingDetails: "Custom quote based on project size, stone type, and site conditions."
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
                desc: "Complete wood restoration service that transforms grey, weathered wood back to its natural color. Our gentle cleaning process removes oxidation, mold, mildew, and dirt without damaging the wood grain, preparing surfaces for staining or sealing while extending the life of your wooden structures.", 
                benefits: ["Removes oxidation and greying", "Prepares surface for staining", "Restores natural wood color", "Extends wood life"],
                process: ["Wood Conditioning Treatment", "Controlled Pressure Wash", "Brightener Application", "Grain Inspection & Sanding Advice"],
                pricingDetails: "Unit Rate: $0.55 per square foot"
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                desc: "Professional gutter cleaning and maintenance service that removes debris, flushes downspouts, and inspects for proper water flow. Our service prevents water damage to your roof, siding, and foundation while ensuring your gutter system functions optimally throughout all seasons.", 
                benefits: ["Prevents water damage", "Foundation protection", "Extends gutter life", "Prevents ice dams"],
                process: ["Manual Debris Removal", "Downspout Pressure Flush", "Structural Fastener Check", "Cleanup & Site Clearance"],
                pricingDetails: "Custom quote based on linear feet of gutters and number of stories."
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                desc: "Customized chemical cleaning solution for delicate surfaces that cannot withstand pressure washing. Our softwash technique uses specialized low-pressure application of cleaning solutions that safely remove dirt, mold, algae, and stains from sensitive materials while preserving surface integrity.", 
                benefits: ["Safe for delicate surfaces", "Kills organic growth at root", "No surface damage", "Effective on all materials"],
                process: ["Material Testing", "Chemical Dilution Setup", "Dwell-and-Rise Application", "Final PH Balance Check"],
                pricingDetails: "Unit Rate: $0.25 per square foot"
            }
        ]
    }
};

// Documentation functionality - UPDATED WITH REAL JSON FETCHING
function initializeDocumentation() {
    // Create documentation page if it doesn't exist
    const main = document.querySelector('main');
    if (!document.getElementById('documentation-page')) {
        const docPage = document.createElement('main');
        docPage.id = 'documentation-page';
        docPage.className = 'hidden max-w-5xl mx-auto px-6 py-12';
        main.parentNode.insertBefore(docPage, main.nextSibling);
    }
}

// Show documentation pages
function showDocumentation(file, procedure) {
    showPage('documentation');
    loadDocumentationFile(file, procedure);
}

// Load documentation content from JSON files
async function loadDocumentationFile(file, procedure) {
    const docPage = document.getElementById('documentation-page');
    
    docPage.innerHTML = `
        <button onclick="showPage('home')" class="flex items-center text-blue-600 font-bold mb-8 hover:underline">
            <i data-lucide="arrow-left" class="mr-2"></i> Back to Home
        </button>
        <div id="documentation-content" class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"></div>
    `;
    
    const contentDiv = document.getElementById('documentation-content');
    
    // Show loading state
    contentDiv.innerHTML = `
        <div class="text-center py-12">
            <i data-lucide="loader-2" class="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4"></i>
            <p class="text-gray-600">Loading ${file} documentation...</p>
        </div>
    `;
    
    try {
        // Fetch the JSON file
        const response = await fetch(`${file}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load ${file}.json`);
        }
        
        const data = await response.json();
        
        // Render based on file type
        let html = '';
        switch(file) {
            case 'equipment':
                html = renderEquipmentDocumentation(data);
                break;
            case 'safety':
                html = renderSafetyDocumentation(data);
                break;
            case 'procedures':
                html = renderProceduresDocumentation(data, procedure);
                break;
        }
        
        contentDiv.innerHTML = html;
        lucide.createIcons();
        
    } catch (error) {
        console.error('Error loading documentation:', error);
        contentDiv.innerHTML = `
            <div class="text-center py-12 text-red-600">
                <i data-lucide="alert-circle" class="w-12 h-12 mx-auto mb-4"></i>
                <p class="text-lg font-bold">Error loading documentation</p>
                <p class="text-gray-600 mt-2">${error.message}</p>
                <p class="text-sm text-gray-500 mt-4">Make sure ${file}.json is in the same directory</p>
            </div>
        `;
    }
}

// Get procedure link based on service ID
function getProcedureLink(serviceId) {
    const procedureMap = {
        'house-wash': 'house_wash_vinyl',
        'tennis-courts': 'tennis_court',
        'driveway': 'cement_driveway',
        'dumpster': 'dumpster_pad',
        'roof': 'rooftop_softwash',
        'bins': 'garbage_bins',
        'graffiti': 'graffiti_removal',
        'gum': 'gum_removal',
        'algae': 'efflorescence_algae_moss',
        'concrete-seal': 'concrete_wash_reseal',
        'paver-seal': 'brick_wash_reseal',
        'dusting': 'concrete_dusting_shake',
        'stone': 'resin_stone_stabilization',
        'deck': 'deck_fence_restoration',
        'gutters': 'gutter_cleaning',
        'softwash-any': 'softwash_any_surface'
    };
    
    return procedureMap[serviceId] || '';
}

// Render equipment documentation from JSON
function renderEquipmentDocumentation(data) {
    const formatKey = (key) => {
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };
    
    return `
        <div class="space-y-8">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white mb-8">
                <h1 class="text-5xl font-extrabold mb-4">Equipment & Chemicals</h1>
                <p class="text-xl text-blue-100">${data.company_philosophy || 'Commercial-grade tools and specialized cleaning agents'}</p>
            </div>
            
            <!-- Restorative Agents -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="droplets" class="w-8 h-8 text-blue-600"></i>
                    Restorative Cleaning Agents
                </h2>
                <div class="space-y-6">
                    ${(data.restorative_agents || []).map(agent => `
                        <div class="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h3 class="text-xl font-bold text-blue-800 mb-2">${agent.name}</h3>
                            <p class="text-gray-700">${agent.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Wood & Specialty -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="trees" class="w-8 h-8 text-green-600"></i>
                    Wood & Specialty Cleaners
                </h2>
                <div class="space-y-4">
                    ${(data.wood_and_specialty || []).map(item => `
                        <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                            <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0"></i>
                            <span class="text-gray-700">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Masonry & Commercial -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="building" class="w-8 h-8 text-gray-600"></i>
                    Masonry & Commercial Cleaners
                </h2>
                <div class="space-y-4">
                    ${(data.masonry_and_commercial || []).map(item => `
                        <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                            <i data-lucide="shield" class="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"></i>
                            <span class="text-gray-700">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Safety & Protection -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="shield-alert" class="w-8 h-8 text-amber-600"></i>
                    Safety & Protection Products
                </h2>
                <div class="space-y-4">
                    ${(data.safety_and_protection_products || []).map(item => `
                        <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                            <i data-lucide="alert-circle" class="w-5 h-5 text-amber-500 mt-1 flex-shrink-0"></i>
                            <span class="text-gray-700">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Industrial Hardware -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="wrench" class="w-8 h-8 text-gray-700"></i>
                    Industrial Hardware
                </h2>
                <div class="space-y-4">
                    ${(data.industrial_hardware || []).map(item => `
                        <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border">
                            <i data-lucide="hard-drive" class="w-5 h-5 text-gray-500 mt-1 flex-shrink-0"></i>
                            <span class="text-gray-700">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render safety documentation from JSON
function renderSafetyDocumentation(data) {
    return `
        <div class="space-y-8">
            <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-10 text-white mb-8">
                <h1 class="text-5xl font-extrabold mb-4">Safety Standards</h1>
                <p class="text-xl text-green-100">Our commitment to safe, professional operations</p>
            </div>
            
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="shield-check" class="w-8 h-8 text-green-600"></i>
                    Operational Standards & Safety Protocols
                </h2>
                <div class="space-y-6">
                    ${(data.operational_standards || []).map((standard, index) => `
                        <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-white rounded-xl border border-green-100">
                            <div class="flex-shrink-0">
                                <div class="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">
                                    ${index + 1}
                                </div>
                            </div>
                            <div class="flex-1">
                                <p class="text-gray-800 leading-relaxed">${standard}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Safety Commitment -->
            <div class="bg-gradient-to-r from-green-50 to-white rounded-2xl shadow-lg p-8 border border-green-200">
                <h2 class="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
                    <i data-lucide="heart-handshake" class="w-6 h-6"></i>
                    Our Safety Commitment
                </h2>
                <p class="text-gray-700 mb-4">At Renowned Value Restoration, safety isn't just a policy—it's our foundation. Every procedure, every chemical application, and every equipment operation follows our Gold Standard safety protocols.</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div class="bg-white p-4 rounded-lg border border-green-100 text-center">
                        <i data-lucide="users" class="w-8 h-8 text-green-600 mx-auto mb-2"></i>
                        <p class="font-bold text-green-700">Team Safety</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-green-100 text-center">
                        <i data-lucide="home" class="w-8 h-8 text-green-600 mx-auto mb-2"></i>
                        <p class="font-bold text-green-700">Property Protection</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border border-green-100 text-center">
                        <i data-lucide="leaf" class="w-8 h-8 text-green-600 mx-auto mb-2"></i>
                        <p class="font-bold text-green-700">Environmental Care</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render procedures documentation from JSON
function renderProceduresDocumentation(data, procedure) {
    const procedures = data.service_procedures || {};
    const procedureKeys = Object.keys(procedures);
    
    // If a specific procedure is requested, show only that
    if (procedure && procedures[procedure]) {
        return renderSingleProcedure(procedure, procedures[procedure]);
    }
    
    // Otherwise show all procedures
    return `
        <div class="space-y-8">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-10 text-white mb-8">
                <h1 class="text-5xl font-extrabold mb-4">Service Procedures</h1>
                <p class="text-xl text-purple-100">Step-by-step protocols for every service</p>
                <div class="mt-4 text-purple-200">
                    <p>${procedureKeys.length} detailed procedures available</p>
                </div>
            </div>
            
            <!-- All Procedures List -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <i data-lucide="clipboard-list" class="w-8 h-8 text-purple-600"></i>
                    All Service Procedures
                </h2>
                <div class="space-y-4">
                    ${procedureKeys.map(key => {
                        const displayName = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                        return `
                            <a href="documentation.html?file=procedures&procedure=${key}" 
                               class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition group cursor-pointer">
                                <div class="flex items-center gap-3">
                                    <i data-lucide="file-text" class="w-5 h-5 text-purple-600 group-hover:text-purple-700"></i>
                                    <span class="font-medium text-gray-800 group-hover:text-purple-700">${displayName}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-sm text-gray-500">${procedures[key].length} steps</span>
                                    <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400 group-hover:text-purple-600"></i>
                                </div>
                            </a>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <!-- Procedure Categories -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-6 border border-purple-100">
                    <h3 class="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                        <i data-lucide="home" class="w-5 h-5"></i>
                        Residential Services
                    </h3>
                    <p class="text-gray-700 mb-4">Detailed procedures for house washing, roof cleaning, decks, and more residential services.</p>
                    <div class="text-sm text-purple-600">
                        ${procedureKeys.filter(key => key.includes('house') || key.includes('roof') || key.includes('deck') || key.includes('gutter')).length} procedures
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 border border-blue-100">
                    <h3 class="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <i data-lucide="building" class="w-5 h-5"></i>
                        Commercial Services
                    </h3>
                    <p class="text-gray-700 mb-4">Professional protocols for dumpster pads, parking lots, graffiti removal, and commercial applications.</p>
                    <div class="text-sm text-blue-600">
                        ${procedureKeys.filter(key => key.includes('dumpster') || key.includes('driveway') || key.includes('graffiti') || key.includes('gum')).length} procedures
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render single procedure detail
function renderSingleProcedure(procedureKey, steps) {
    const displayName = procedureKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    return `
        <div class="space-y-8">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-10 text-white mb-8">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 class="text-4xl font-extrabold mb-2">${displayName}</h1>
                        <p class="text-xl text-purple-100">Professional Step-by-Step Procedure</p>
                    </div>
                    <a href="#" onclick="showDocumentation('procedures'); return false;" 
                       class="flex items-center gap-2 text-purple-200 hover:text-white font-medium">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        Back to All Procedures
                    </a>
                </div>
            </div>
            
            <!-- Procedure Steps -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <i data-lucide="list-ordered" class="w-8 h-8 text-purple-600"></i>
                        Procedure Steps
                    </h2>
                    <div class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold">
                        ${steps.length} Steps
                    </div>
                </div>
                
                <div class="relative">
                    <!-- Timeline line -->
                    <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-purple-100"></div>
                    
                    <div class="space-y-8">
                        ${steps.map((step, index) => {
                            // Extract citation if present
                            const hasCitation = step.includes('[cite:');
                            const stepText = hasCitation ? step.split(' [cite:')[0] : step;
                            const citation = hasCitation ? step.match(/\[cite: (\d+)\]/)?.[1] : null;
                            
                            return `
                                <div class="flex gap-6 relative">
                                    <div class="flex-shrink-0 z-10">
                                        <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                            <span class="text-white text-2xl font-bold">${index + 1}</span>
                                        </div>
                                    </div>
                                    <div class="flex-1 bg-gradient-to-r from-purple-50 to-white rounded-2xl p-6 border border-purple-100">
                                        <div class="flex justify-between items-start mb-3">
                                            <h3 class="text-xl font-bold text-gray-900">Step ${index + 1}</h3>
                                            ${citation ? `
                                                <span class="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                                                    Ref: ${citation}
                                                </span>
                                            ` : ''}
                                        </div>
                                        <p class="text-gray-700 leading-relaxed">${stepText}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <!-- Procedure Notes -->
            <div class="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <i data-lucide="info" class="w-6 h-6 text-gray-600"></i>
                    Procedure Notes
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-4 rounded-lg border">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="clock" class="w-5 h-5 text-blue-600"></i>
                            <span class="font-bold text-gray-800">Time Required</span>
                        </div>
                        <p class="text-gray-600 text-sm">Varies by property size and condition</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="users" class="w-5 h-5 text-green-600"></i>
                            <span class="font-bold text-gray-800">Team Size</span>
                        </div>
                        <p class="text-gray-600 text-sm">1-2 trained technicians</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg border">
                        <div class="flex items-center gap-2 mb-2">
                            <i data-lucide="shield" class="w-5 h-5 text-amber-600"></i>
                            <span class="font-bold text-gray-800">Safety Level</span>
                        </div>
                        <p class="text-gray-600 text-sm">Requires PPE and proper training</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Update showPage to handle documentation page
function showPage(pageId) {
    const home = document.getElementById('home-page');
    const detail = document.getElementById('detail-page');
    const blog = document.getElementById('blog-page');
    const content = document.getElementById('service-detail-content');
    const docPage = document.getElementById('documentation-page');

    // Hide all pages first
    home.classList.add('hidden');
    detail.classList.add('hidden');
    blog.classList.add('hidden');
    if (docPage) docPage.classList.add('hidden');

    if (pageId === 'home') {
        home.classList.remove('hidden');
        window.scrollTo(0,0);
    } else if (pageId === 'blog') {
        blog.classList.remove('hidden');
        window.scrollTo(0,0);
    } else if (pageId === 'documentation') {
        if (docPage) docPage.classList.remove('hidden');
        window.scrollTo(0,0);
    } else {
        detail.classList.remove('hidden');
        
        let service = null;
        Object.values(servicesData).forEach(cat => {
            const found = cat.items.find(i => i.id === pageId);
            if (found) service = found;
        });

        if (service) {
            // Get procedure link for this service
            const procedureKey = getProcedureLink(service.id);
            const procedureLink = procedureKey ? 
                `<div class="mt-8 pt-8 border-t border-blue-100">
                    <a href="documentation.html?file=procedures&procedure=${procedureKey}"
                       class="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 font-medium text-lg hover:underline">
                        <i data-lucide="file-text" class="w-5 h-5"></i>
                        View Detailed Procedure Steps
                    </a>
                    <p class="text-gray-600 text-sm mt-2">See our step-by-step professional process for ${service.name}</p>
                </div>` : '';
            
            content.innerHTML = `
                <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white mb-8 md:mb-12">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                        <div class="flex-1">
                            <div class="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-2 md:p-3">
                                    <i data-lucide="sparkles" class="w-6 h-6 md:w-8 md:h-8"></i>
                                </div>
                                <span class="bg-white/20 backdrop-blur-sm text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full">PREMIUM SERVICE</span>
                            </div>
                            <h1 class="text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">${service.name}</h1>
                            <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                <div class="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 md:px-6 md:py-3">
                                    <p class="text-xl md:text-2xl font-bold">${service.price}</p>
                                </div>
                                <p class="text-lg md:text-xl text-blue-100">Commercial-Grade Equipment</p>
                            </div>
                        </div>
                        <div class="flex-shrink-0 mt-4 md:mt-0">
                            <a href="#quote" onclick="showPage('home'); trackQuoteSubmission();" class="bg-white text-blue-600 px-6 py-3 md:px-10 md:py-5 rounded-xl font-bold text-lg md:text-xl hover:bg-blue-50 transition shadow-2xl hover:shadow-3xl whitespace-nowrap block w-full md:w-auto text-center">
                                Get Free Quote
                            </a>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                    <!-- Main Content Column -->
                    <div class="md:col-span-2 space-y-6 md:space-y-8">
                        <!-- Service Description Card - Enhanced -->
                        <div class="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
                            <div class="flex items-center gap-3 mb-4 md:mb-6">
                                <i data-lucide="info" class="w-6 h-6 md:w-8 md:h-8 text-blue-600"></i>
                                <h2 class="text-2xl md:text-3xl font-bold text-gray-900">Service Overview</h2>
                            </div>
                            <div class="space-y-4">
                                <p class="text-lg md:text-xl text-gray-700 leading-relaxed">${service.desc}</p>
                                <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 md:p-6 border border-blue-200">
                                    <h3 class="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                                        <i data-lucide="target" class="w-5 h-5 md:w-6 md:h-6"></i>
                                        Key Benefits:
                                    </h3>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                        ${service.benefits.map(benefit => `
                                            <div class="flex items-start gap-3 bg-white/80 rounded-xl p-3 md:p-4 border border-blue-100 shadow-sm">
                                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"></i>
                                                <span class="font-medium text-gray-800">${benefit}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                ${procedureLink}
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Column - Only Pricing Card -->
                    <div class="space-y-6 md:space-y-8">
                        <!-- Pricing Card -->
                        <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border border-blue-200">
                            <div class="text-center mb-4 md:mb-6">
                                <p class="text-3xl md:text-5xl font-extrabold text-blue-700 mb-1 md:mb-2">${service.price}</p>
                                <p class="text-blue-600 font-medium">Transparent Pricing</p>
                            </div>
                            
                            <div class="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-100 shadow-sm">
                                <div class="space-y-3 md:space-y-4">
                                    ${service.pricingDetails.split('\n').map(line => line.trim()).filter(line => line).map(line => {
                                        if (line.includes(':')) {
                                            const [label, value] = line.split(':');
                                            return `
                                                <div class="flex justify-between items-center py-2 md:py-3 border-b border-blue-100 last:border-b-0">
                                                    <span class="font-medium text-gray-700 text-sm md:text-base">${label.trim()}</span>
                                                    <span class="font-bold text-blue-700 text-sm md:text-base">${value.trim()}</span>
                                                </div>
                                            `;
                                        } else {
                                            return `
                                                <div class="text-center py-2 md:py-3 border-b border-blue-100 last:border-b-0">
                                                    <span class="font-bold text-blue-800 text-sm md:text-base">${line}</span>
                                                </div>
                                            `;
                                        }
                                    }).join('')}
                                </div>
                                
                                <div class="mt-6 md:mt-8 p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div class="flex items-center gap-3">
                                        <i data-lucide="shield-check" class="w-5 h-5 md:w-6 md:h-6 text-green-500"></i>
                                        <div>
                                            <p class="font-bold text-blue-800 text-sm md:text-base">100% Satisfaction Guarantee</p>
                                            <p class="text-xs md:text-sm text-blue-600">If you're not happy, we'll make it right</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Visual Results Section - Fixed Black Text & Mobile Button -->
                <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-10 border border-gray-200">
                    <div class="text-center mb-8 md:mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Visual Transformation</h2>
                        <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">See the dramatic difference professional ${service.name} makes for properties in Oakland County</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div class="relative group">
                            <div class="aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden border-4 border-gray-300 shadow-lg">
                                <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div class="text-center p-4 md:p-8">
                                        <i data-lucide="image-off" class="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4"></i>
                                        <p class="text-gray-500 font-bold uppercase tracking-widest text-base md:text-lg">Before Restoration</p>
                                        <p class="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">Example of typical ${service.name.toLowerCase()} condition</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-4 left-4 md:top-6 md:left-6 bg-black/80 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg">Before</div>
                        </div>
                        
                        <div class="relative group">
                            <div class="aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden border-4 border-blue-100 shadow-lg">
                                <div class="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                                    <div class="text-center p-4 md:p-8">
                                        <i data-lucide="sparkles" class="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-3 md:mb-4"></i>
                                        <p class="text-blue-500 font-bold uppercase tracking-widest text-base md:text-lg">Professional After</p>
                                        <p class="text-blue-400 mt-1 md:mt-2 text-sm md:text-base">Renowned Value Restoration result</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-4 left-4 md:top-6 md:left-6 bg-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg">After</div>
                        </div>
                    </div>
                    
                    <div class="mt-8 md:mt-12 text-center">
                        <a href="#quote" onclick="showPage('home'); trackQuoteSubmission();" class="bg-blue-600 text-white px-6 py-4 md:px-12 md:py-5 rounded-xl font-bold text-lg md:text-xl hover:bg-blue-700 transition shadow-xl hover:shadow-2xl inline-block w-full md:w-auto">
                            Schedule Your ${service.name} Today
                        </a>
                    </div>
                </div>`;
            
            // Recreate icons after content is loaded
            setTimeout(() => {
                lucide.createIcons();
            }, 100);
        }
    }
}

// Populate Home Page Services and Dropdown Groups
function initializeServices() {
    const container = document.getElementById('services-container');
    const dropdown = document.getElementById('service-dropdown');
    
    // Clear existing content
    container.innerHTML = '';
    
    // Clear and reset dropdown
    dropdown.innerHTML = '<option value="">Select Service *</option>';

    Object.values(servicesData).forEach(category => {
        const card = document.createElement('div');
        card.className = "service-category-card bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100";
        let itemsHtml = `<h3 class="text-3xl font-black mb-8 tracking-tight">${category.title}</h3><div class="space-y-4">`;
        
        const optGroup = document.createElement('optgroup');
        optGroup.label = category.title;

        category.items.forEach(item => {
                        itemsHtml += `
                <div class="flex justify-between items-center group cursor-pointer border-b border-blue-100 pb-3" onclick="showPage('${item.id}')">
                    <span class="text-blue-600 font-bold text-sm md:text-lg group-hover:underline truncate flex-1 pr-2" title="${item.name}">${item.name}</span>
                    <span class="text-gray-900 font-medium text-sm md:text-base whitespace-nowrap flex-shrink-0">${item.price}</span>
                </div>`;
            
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.textContent = item.name;
            optGroup.appendChild(opt);
        });
        
        card.innerHTML = itemsHtml + `</div>`;
        container.appendChild(card);
        dropdown.appendChild(optGroup);
    });
}

// Slider logic
function initializeSlider() {
    const slider = document.querySelector('.slider-container');
    const handle = document.getElementById('slider-handle');
    const afterWrap = document.getElementById('after-img-wrap');

    function slide(e) {
        if (!slider) return;
        const rect = slider.getBoundingClientRect();
        let x = (e.pageX || (e.touches ? e.touches[0].pageX : 0)) - rect.left;
        let pos = (x / rect.width) * 100;
        if (pos < 0) pos = 0; 
        if (pos > 100) pos = 100;
        handle.style.left = `${pos}%`;
        afterWrap.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    }

    if (slider) {
        slider.addEventListener('mousemove', (e) => { 
            if(e.buttons === 1) slide(e); 
        });
        slider.addEventListener('touchmove', slide);
    }
}

// Form submission with tracking
function initializeForm() {
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Track in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'quote_request', {
                    'event_category': 'conversion',
                    'event_label': 'free_quote_form'
                });
            }
            
            // Track in Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead');
            }
            
            alert("Quote request sent! We will contact you within 24 hours.");
            form.reset();
        });
    }
}

// Track phone calls
function trackPhoneCall() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'phone_call', {
            'event_category': 'conversion',
            'event_label': 'header_phone'
        });
    }
    
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact');
    }
}

// Track quote submissions
function trackQuoteSubmission() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'quote_request', {
            'event_category': 'conversion',
            'event_label': 'quote_button'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeServices();
    initializeSlider();
    initializeForm();
    initializeDocumentation(); // NEW: Initialize documentation
    lucide.createIcons();
    
    // Add click listeners to all phone links
    document.querySelectorAll('a[href^="tel"]').forEach(link => {
        link.addEventListener('click', trackPhoneCall);
    });
    
    // Check for documentation page request
    const urlParams = new URLSearchParams(window.location.search);
    const docFile = urlParams.get('file');
    const procedure = urlParams.get('procedure');
    
    if (docFile) {
        showDocumentation(docFile, procedure);
    }
});

// Also initialize on window load for safety
window.addEventListener('load', function() {
    lucide.createIcons();
});



