[file name]: script.js
[file content begin]
const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { 
                id: "house-wash", 
                name: "House Washing", 
                price: "From $300", 
                desc: "Safe soft washing for vinyl, brick, and stucco using low-pressure nozzles.", 
                benefits: ["Prevents siding damage", "Removes mold/algae", "Instant curb appeal"],
                process: ["Property Inspection & Plant Protection", "Eco-friendly Detergent Application", "Low-Pressure Soft Wash Rinse", "Final Detail & Window Spot-Check"],
                pricingDetails: "Flat Rate Pricing:\nSmall (1,500 sq ft) $300\nMedium (2,000 sq ft) $400\nLarge (3,000 sq ft) $550\n\nUnit Rate: $0.25 per square foot"
            },
            { 
                id: 'tennis-courts', 
                name: 'Tennis Courts', 
                price: '$1100', 
                desc: 'Deep cleaning and restoration for sports surfaces.', 
                benefits: ['Improved traction', 'Surface longevity'], 
                rate: 'Starting at $1100',
                process: ["Surface Inspection & Preparation", "Specialized Sports Surface Cleaner Application", "Low-Pressure Rinse & Extraction", "Traction & Line Inspection"],
                pricingDetails: "Flat Rate Pricing:\nStandard Court: $1,100\nMultiple Courts: Call for Quote"
            },
            { 
                id: "driveway", 
                name: "Driveway & Parking Lot Pressure Washing", 
                price: "$0.22/sq ft", 
                desc: "4200 PSI deep cleaning for concrete to remove years of grime.", 
                benefits: ["Removes oil stains", "Eliminates tire marks", "Safe for neighbors"],
                process: ["Debris Removal & Edging", "Surface Pre-Treatment for Stains", "Commercial Surface Cleaner Pass", "High-Volume Rinse & Sediment Flush"],
                pricingDetails: "Unit Rate: $0.22 per square foot (standard jobs)\nBulk Rate: $0.20 per square foot (large jobs)"
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Sanitization and odor removal for commercial pads.", 
                benefits: ["Health code compliance", "Pest reduction"],
                process: ["Degreasing Soak", "Hot Water High-Pressure Scrub", "Sanitization & Deodorizing", "Containment Inspection"],
                pricingDetails: "Custom quote based on size and frequency of cleaning."
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Zero-pressure chemical treatment for shingle longevity.", 
                benefits: ["Extends roof life", "Removes black streaks"],
                process: ["Gutter Protection Setup", "Algaecide Treatment Application", "Dwell Time Monitoring", "Neutralizing Rinse"],
                pricingDetails: "Flat Rate Pricing:\nSmall Roof $700\nMedium Roof $1,000\nLarge Roof $1,500\n\nUnit Rate: $0.44 per square foot"
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "High-heat sanitization and deodorizing.", 
                benefits: ["Bacteria removal", "No more smells"],
                process: ["High-Temp Pressure Wash", "Antibacterial Scrubbing", "Deodorizing Spray", "Exterior Polish"],
                pricingDetails: "Flat Rate Pricing:\nSingle Bin $6\n2 Bins $10"
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Specialized chemical removal without ghosting.", 
                benefits: ["Fast response", "Surface preservation"],
                process: ["Paint Identification", "Eco-friendly Solvents Application", "Agitation & Steam Pressure Lift", "Neutralizing Wash"],
                pricingDetails: "Flat Rate Pricing:\nSmall Graffiti Area $400\nLarge Graffiti Area $550"
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "High-temp steam removal for sidewalks.", 
                benefits: ["Spotless entrance", "Enhanced property value"],
                process: ["Area Cordoning", "Targeted Steam Treatment", "Pressure Extraction", "Uniform Rinse"],
                pricingDetails: "Flat Rate Pricing:\nStandard Service $300"
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                desc: "Specific mineral and organic stain treatment.", 
                benefits: ["Restores color", "Stops structural erosion"],
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
                desc: "Wash followed by premium siloxane sealer.", 
                benefits: ["Waterproofing", "Salt protection"],
                process: ["Deep Clean & Stain Extraction", "24-Hour Drying Window", "Siloxane Sealer Application", "Uniform Finish Inspection"],
                pricingDetails: "Unit Rate: $0.90 per square foot"
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                desc: "Re-sanding joints and wet-look or matte sealing.", 
                benefits: ["Stabilizes joints", "Prevents weeds"],
                process: ["Bio-wash Clean", "Polymeric Sand Installation", "Compaction & Joint Setting", "Premium Sealant Coating"],
                pricingDetails: "Unit Rate: $1.75 per square foot"
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                desc: "Hardener treatment for dusting concrete floors.", 
                benefits: ["Industrial durability", "Easy cleaning"],
                process: ["Industrial Scrubber Prep", "Lithium Densifier Application", "Buffing & Polishing", "Dust-Proof Testing"],
                pricingDetails: "Unit Rate: $1.30 per square foot"
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                desc: "Binding loose gravel for a permanent walkable surface.", 
                benefits: ["ADA compliant", "100% permeable"],
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
                desc: "Restoring grey wood to natural color.", 
                benefits: ["Removes oxidation", "Prepares for stain"],
                process: ["Wood Conditioning Treatment", "Controlled Pressure Wash", "Brightener Application", "Grain Inspection & Sanding Advice"],
                pricingDetails: "Unit Rate: $0.55 per square foot"
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                desc: "Debris removal and downspout flushing.", 
                benefits: ["Prevents water damage", "Foundation protection"],
                process: ["Manual Debris Removal", "Downspout Pressure Flush", "Structural Fastener Check", "Cleanup & Site Clearance"],
                pricingDetails: "Custom quote based on linear feet of gutters and number of stories."
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                desc: "Customized chemical cleaning for delicate areas.", 
                benefits: ["Safe & effective", "Kills spores at root"],
                process: ["Material Testing", "Chemical Dilution Setup", "Dwell-and-Rise Application", "Final PH Balance Check"],
                pricingDetails: "Unit Rate: $0.25 per square foot"
            }
        ]
    }
};

// Service to Procedures Mapping
const serviceToProcedures = {
    'house-wash': {
        title: "House Washing",
        procedures: [
            { name: "Vinyl Siding", key: "house_wash_vinyl" },
            { name: "Brick/Stucco", key: "house_wash_masonry" }
        ]
    },
    'tennis-courts': {
        title: "Tennis Court",
        procedures: [{ name: "Tennis Court Procedure", key: "tennis_court" }]
    },
    'driveway': {
        title: "Driveway",
        procedures: [{ name: "Cement Driveway", key: "cement_driveway" }]
    },
    'dumpster': {
        title: "Dumpster Pad",
        procedures: [{ name: "Dumpster Pad", key: "dumpster_pad" }]
    },
    'roof': {
        title: "Rooftop Softwash",
        procedures: [{ name: "Rooftop Softwash", key: "rooftop_softwash" }]
    },
    'bins': {
        title: "Garbage Bins",
        procedures: [{ name: "Garbage Bins", key: "garbage_bins" }]
    },
    'graffiti': {
        title: "Graffiti Removal",
        procedures: [{ name: "Graffiti Removal", key: "graffiti_removal" }]
    },
    'gum': {
        title: "Gum Removal",
        procedures: [{ name: "Gum Removal", key: "gum_removal" }]
    },
    'algae': {
        title: "Efflorescence, Algae & Moss",
        procedures: [{ name: "Efflorescence, Algae & Moss", key: "efflorescence_algae_moss" }]
    },
    'concrete-seal': {
        title: "Concrete Wash & Reseal",
        procedures: [{ name: "Concrete Wash & Reseal", key: "concrete_wash_reseal" }]
    },
    'paver-seal': {
        title: "Brick Paver Wash & Reseal",
        procedures: [{ name: "Brick Driveway", key: "brick_driveway" }]
    },
    'dusting': {
        title: "Concrete Dusting",
        procedures: [{ name: "Concrete Dusting", key: "concrete_dusting_shake" }]
    },
    'stone': {
        title: "Resin Stone Stabilization",
        procedures: [{ name: "Resin Stone Stabilization", key: "resin_stone_stabilization" }]
    }
};

function showPage(pageId) {
    const home = document.getElementById('home-page');
    const detail = document.getElementById('detail-page');
    const blog = document.getElementById('blog-page');
    const content = document.getElementById('service-detail-content');

    // Hide all pages first
    home.classList.add('hidden');
    detail.classList.add('hidden');
    blog.classList.add('hidden');

    if (pageId === 'home') {
        home.classList.remove('hidden');
        window.scrollTo(0,0);
    } else if (pageId === 'blog') {
        blog.classList.remove('hidden');
        window.scrollTo(0,0);
    } else {
        detail.classList.remove('hidden');
        
        let service = null;
        Object.values(servicesData).forEach(cat => {
            const found = cat.items.find(i => i.id === pageId);
            if (found) service = found;
        });

        if (service) {
            content.innerHTML = `
                <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white mb-12">
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div class="flex-1">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                                    <i data-lucide="sparkles" class="w-8 h-8"></i>
                                </div>
                                <span class="bg-white/20 backdrop-blur-sm text-sm font-bold px-4 py-2 rounded-full">PREMIUM SERVICE</span>
                            </div>
                            <h1 class="text-5xl font-extrabold mb-4">${service.name}</h1>
                            <div class="flex items-center gap-6">
                                <div class="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                                    <p class="text-2xl font-bold">${service.price}</p>
                                </div>
                                <p class="text-xl text-blue-100">Commercial-Grade Equipment</p>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            <a href="#quote" onclick="showPage('home'); trackQuoteSubmission();" class="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition shadow-2xl hover:shadow-3xl whitespace-nowrap">
                                Get Free Quote
                            </a>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-8 mb-16">
                    <!-- Main Content Column -->
                    <div class="md:col-span-2 space-y-8">
                        <!-- Service Description Card -->
                        <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <div class="flex items-center gap-3 mb-6">
                                <i data-lucide="info" class="w-8 h-8 text-blue-600"></i>
                                <h2 class="text-3xl font-bold text-gray-900">Service Overview</h2>
                            </div>
                            <p class="text-xl text-gray-700 leading-relaxed mb-8">${service.desc}</p>
                            
                            <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <h3 class="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                                    <i data-lucide="target" class="w-6 h-6"></i>
                                    Ideal For:
                                </h3>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    ${service.benefits.map(benefit => `
                                        <div class="flex items-center gap-3 bg-white rounded-xl p-4 border border-blue-100">
                                            <i data-lucide="check-circle" class="w-6 h-6 text-green-500 flex-shrink-0"></i>
                                            <span class="font-medium text-gray-800">${benefit}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        ${serviceToProcedures[service.id] ? `
                        <!-- Detailed Procedures Card -->
                        <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <div class="flex items-center gap-3 mb-6">
                                <i data-lucide="clipboard-check" class="w-8 h-8 text-blue-600"></i>
                                <h2 class="text-3xl font-bold text-gray-900">Detailed Procedures</h2>
                            </div>
                            <p class="text-lg text-gray-700 mb-6">View our step-by-step professional procedures for this service:</p>
                            <div class="space-y-4">
                                ${serviceToProcedures[service.id].procedures.map(proc => `
                                    <a href="procedure-detail.html?key=${proc.key}" 
                                       class="flex items-center justify-between bg-blue-50 hover:bg-blue-100 rounded-xl p-4 border border-blue-200 transition group">
                                        <div class="flex items-center gap-3">
                                            <i data-lucide="file-text" class="w-5 h-5 text-blue-600"></i>
                                            <span class="font-medium text-gray-800">${proc.name} Procedure</span>
                                        </div>
                                        <i data-lucide="arrow-right" class="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition"></i>
                                    </a>
                                `).join('')}
                                ${service.id === 'house-wash' ? `
                                <div class="mt-4 text-sm text-gray-600 flex items-center gap-2">
                                    <i data-lucide="info" class="w-4 h-4"></i>
                                    <span>House washing has different procedures for different siding materials</span>
                                </div>
                                ` : ''}
                            </div>
                            <div class="mt-8 pt-8 border-t border-gray-200">
                                <a href="procedures.html" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                                    <i data-lucide="list" class="w-5 h-5"></i>
                                    View All Procedures
                                </a>
                            </div>
                        </div>
                        ` : ''}

                        <!-- Professional Process -->
                        <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <div class="flex items-center gap-3 mb-8">
                                <i data-lucide="list-ordered" class="w-8 h-8 text-blue-600"></i>
                                <h2 class="text-3xl font-bold text-gray-900">Our 4-Step Professional Process</h2>
                            </div>
                            
                            <div class="relative">
                                <!-- Timeline line -->
                                <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-200"></div>
                                
                                <div class="space-y-10">
                                    ${service.process.map((step, index) => `
                                        <div class="flex gap-6 relative">
                                            <div class="flex-shrink-0 z-10">
                                                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                    <span class="text-white text-2xl font-bold">${index + 1}</span>
                                                </div>
                                            </div>
                                            <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                                <h3 class="text-xl font-bold text-gray-900 mb-3">Step ${index + 1}: ${step.split(':')[0]}</h3>
                                                <p class="text-gray-700 leading-relaxed">${step.split(':').slice(1).join(':') || step}</p>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Column -->
                    <div class="space-y-8">
                        <!-- Pricing Card -->
                        <div class="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-8 border border-blue-200">
                            <div class="text-center mb-6">
                                <p class="text-5xl font-extrabold text-blue-700 mb-2">${service.price}</p>
                                <p class="text-blue-600 font-medium">Transparent Pricing</p>
                            </div>
                            
                            <div class="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                                <div class="space-y-4">
                                    ${service.pricingDetails.split('\n').map(line => line.trim()).filter(line => line).map(line => {
                                        if (line.includes(':')) {
                                            const [label, value] = line.split(':');
                                            return `
                                                <div class="flex justify-between items-center py-3 border-b border-blue-100 last:border-b-0">
                                                    <span class="font-medium text-gray-700">${label.trim()}</span>
                                                    <span class="font-bold text-blue-700">${value.trim()}</span>
                                                </div>
                                            `;
                                        } else {
                                            return `
                                                <div class="text-center py-3 border-b border-blue-100 last:border-b-0">
                                                    <span class="font-bold text-blue-800">${line}</span>
                                                </div>
                                            `;
                                        }
                                    }).join('')}
                                </div>
                                
                                <div class="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <div class="flex items-center gap-3">
                                        <i data-lucide="shield-check" class="w-6 h-6 text-green-500"></i>
                                        <div>
                                            <p class="font-bold text-blue-800">100% Satisfaction Guarantee</p>
                                            <p class="text-sm text-blue-600">If you're not happy, we'll make it right</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Action Card -->
                        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-8 text-white">
                            <h3 class="text-2xl font-bold mb-6">Ready to Transform?</h3>
                            
                            <div class="space-y-6">
                                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                                    <div class="flex items-center gap-3 mb-3">
                                        <i data-lucide="phone" class="w-5 h-5 text-blue-300"></i>
                                        <p class="font-bold">Call Now</p>
                                    </div>
                                    <a href="tel:2483138955" onclick="trackPhoneCall()" class="text-2xl font-bold hover:text-blue-300 transition">(248) 313-8955</a>
                                </div>
                                
                                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                                    <div class="flex items-center gap-3 mb-3">
                                        <i data-lucide="clock" class="w-5 h-5 text-blue-300"></i>
                                        <p class="font-bold">Response Time</p>
                                    </div>
                                    <p class="text-xl font-bold text-green-400">Within 24 Hours</p>
                                </div>
                                
                                <a href="#quote" onclick="showPage('home'); trackQuoteSubmission();" class="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center font-bold py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition shadow-lg hover:shadow-xl">
                                    Request Instant Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Visual Results Section -->
                <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-10 border border-gray-200">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold text-gray-900 mb-4">Visual Transformation</h2>
                        <p class="text-xl text-gray-700 max-w-3xl mx-auto">See the dramatic difference professional ${service.name} makes for properties in Oakland County</p>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="relative group">
                            <div class="aspect-video w-full rounded-2xl overflow-hidden border-4 border-gray-300 shadow-lg">
                                <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div class="text-center p-8">
                                        <i data-lucide="image-off" class="w-16 h-16 text-gray-400 mx-auto mb-4"></i>
                                        <p class="text-gray-500 font-bold uppercase tracking-widest text-lg">Before Restoration</p>
                                        <p class="text-gray-400 mt-2">Example of typical ${service.name.toLowerCase()} condition</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-6 left-6 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg">Before</div>
                        </div>
                        
                        <div class="relative group">
                            <div class="aspect-video w-full rounded-2xl overflow-hidden border-4 border-blue-100 shadow-lg">
                                <div class="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                                    <div class="text-center p-8">
                                        <i data-lucide="sparkles" class="w-16 h-16 text-blue-400 mx-auto mb-4"></i>
                                        <p class="text-blue-500 font-bold uppercase tracking-widest text-lg">Professional After</p>
                                        <p class="text-blue-400 mt-2">Renowned Value Restoration result</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-lg">After</div>
                        </div>
                    </div>
                    
                    <div class="mt-12 text-center">
                        <a href="#quote" onclick="showPage('home'); trackQuoteSubmission();" class="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition shadow-xl hover:shadow-2xl">
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
    
    // Safety check: Stop if the container doesn't exist
    if (!container) return; 
    
    container.innerHTML = '';
    
    // Safety check for dropdown
    if (dropdown) {
        dropdown.innerHTML = '<option value="">Select Service *</option>';
    }

    Object.values(servicesData).forEach(category => {
        const card = document.createElement('div');
        card.className = "service-category-card bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100";
        let itemsHtml = `<h3 class="text-3xl font-black mb-8 tracking-tight">${category.title}</h3><div class="space-y-4">`;
        
        // Only create optGroups if the dropdown exists
        let optGroup = dropdown ? document.createElement('optgroup') : null;
        if (optGroup) optGroup.label = category.title;

        category.items.forEach(item => {
            itemsHtml += `
                <div class="flex justify-between items-center group cursor-pointer border-b border-blue-100 pb-3" onclick="showPage('${item.id}')">
                    <span class="text-blue-600 font-bold text-lg group-hover:underline">${item.name}</span>
                    <span class="text-gray-900 font-medium">${item.price}</span>
                </div>`;
            
            if (dropdown && optGroup) {
                const opt = document.createElement('option');
                opt.value = item.id;
                opt.textContent = item.name;
                optGroup.appendChild(opt);
            }
        });
        
        card.innerHTML = itemsHtml + `</div>`;
        container.appendChild(card);
        if (dropdown && optGroup) dropdown.appendChild(optGroup);
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
    lucide.createIcons();
    
    // Add click listeners to all phone links
    document.querySelectorAll('a[href^="tel"]').forEach(link => {
        link.addEventListener('click', trackPhoneCall);
    });
});

// Also initialize on window load for safety
window.addEventListener('load', function() {
    lucide.createIcons();
});

[file content end]
