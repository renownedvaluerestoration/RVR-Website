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

function initializeServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    Object.values(servicesData).forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'mb-16';
        categorySection.innerHTML = `
            <h2 class="text-3xl font-bold text-gray-900 mb-8">${category.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${category.items.map(service => `
                    <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                         onclick="showPage('service', '${service.id}')">
                        <div class="w-14 h-14 bg-blue-600 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i data-lucide="droplets" class="text-white w-7 h-7"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">${service.name}</h3>
                        <p class="text-gray-600 mb-4 line-clamp-2">${service.desc}</p>
                        <div class="text-blue-600 font-bold text-lg mb-4">${service.price}</div>
                        <ul class="space-y-2">
                            ${service.benefits.map(benefit => `
                                <li class="flex items-center text-sm text-gray-500">
                                    <i data-lucide="check" class="w-4 h-4 mr-2 text-green-500"></i>
                                    ${benefit}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        `;
        servicesGrid.appendChild(categorySection);
    });
    lucide.createIcons();
}

function showPage(pageId, serviceId = null) {
    const main = document.querySelector('main');
    const contentDiv = document.getElementById('page-content');
    const docPage = document.getElementById('documentation-page');
    
    main.classList.add('hidden');
    contentDiv.classList.add('hidden');
    if (docPage) docPage.classList.add('hidden');
    
    window.scrollTo(0, 0);

    if (pageId === 'home') {
        main.classList.remove('hidden');
        return;
    }

    if (pageId === 'documentation') {
        if (docPage) docPage.classList.remove('hidden');
        return;
    }

    if (pageId === 'service') {
        contentDiv.classList.remove('hidden');
        let service;
        for (const cat in servicesData) {
            const found = servicesData[cat].items.find(i => i.id === serviceId);
            if (found) {
                service = found;
                break;
            }
        }

        if (service) {
            contentDiv.innerHTML = `
                <div class="max-w-7xl mx-auto px-6 py-12">
                    <button onclick="showPage('home')" class="flex items-center text-blue-600 font-bold mb-8 hover:underline">
                        <i data-lucide="arrow-left" class="mr-2"></i> Back to Services
                    </button>

                    <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-[40px] p-12 text-white mb-12">
                        <div class="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 class="text-5xl font-extrabold mb-6 leading-tight">${service.name}</h1>
                                <p class="text-xl text-blue-100 mb-8">${service.desc}</p>
                                <div class="flex flex-wrap gap-4">
                                    <div class="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                                        <span class="block text-sm text-blue-200">Starting Price</span>
                                        <span class="text-2xl font-bold">${service.price}</span>
                                    </div>
                                    <button onclick="scrollToQuote()" class="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition shadow-lg">
                                        Get Free Quote
                                    </button>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                ${service.benefits.map(benefit => `
                                    <div class="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                                        <i data-lucide="shield-check" class="w-8 h-8 mb-3 text-blue-300"></i>
                                        <p class="font-medium">${benefit}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="grid lg:grid-cols-3 gap-12">
                        <div class="lg:col-span-2 space-y-8">
                            <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <div class="flex items-center justify-between mb-8">
                                    <div class="flex items-center gap-3">
                                        <i data-lucide="camera" class="w-8 h-8 text-blue-600"></i>
                                        <h2 class="text-3xl font-bold text-gray-900">Before & After Restoration</h2>
                                    </div>
                                </div>
                                
                                <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video mb-8 group" id="before-after-container">
                                    <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
                                         class="absolute inset-0 w-full h-full object-cover" alt="Before">
                                    <div class="absolute inset-0 w-full h-full overflow-hidden" id="after-image-container">
                                        <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80" 
                                             class="absolute inset-0 w-full h-full object-cover" style="width: 1280px; max-width: none;" alt="After">
                                    </div>
                                    <div class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center" id="slider-handle">
                                        <div class="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-blue-600">
                                            <i data-lucide="arrow-left-right" class="w-6 h-6"></i>
                                        </div>
                                    </div>
                                    <div class="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-bold border border-white/20">BEFORE</div>
                                    <div class="absolute bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">AFTER</div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-8">
                            <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <h3 class="text-2xl font-bold text-gray-900 mb-6">Service Pricing</h3>
                                <div class="bg-gray-50 rounded-2xl p-6 mb-6">
                                    <pre class="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">${service.pricingDetails}</pre>
                                </div>
                                <p class="text-sm text-gray-500 italic">Prices may vary based on actual site conditions, surface material, and level of cleaning required.</p>
                            </div>

                            ${getProcedureLink(service.id) ? `
                                <div class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Detailed Procedure</h3>
                                    <p class="text-gray-600 mb-6 text-sm">Review our technical "Gold Standard" cleaning procedure for this service.</p>
                                    <button onclick="showDocumentation('procedures', '${getProcedureLink(service.id)}')" 
                                       class="w-full flex items-center justify-between p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-700 font-bold hover:bg-blue-100 transition">
                                        View Documentation
                                        <i data-lucide="external-link" class="w-5 h-5"></i>
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
            initializeSlider();
        }
    }
}

function initializeDocumentation() {
    const main = document.querySelector('main');
    if (!document.getElementById('documentation-page')) {
        const docPage = document.createElement('main');
        docPage.id = 'documentation-page';
        docPage.className = 'hidden max-w-5xl mx-auto px-6 py-12';
        main.parentNode.insertBefore(docPage, main.nextSibling);
    }
}

function showDocumentation(file, procedure) {
    showPage('documentation');
    loadDocumentationFile(file, procedure);
}

async function loadDocumentationFile(file, procedure) {
    const docPage = document.getElementById('documentation-page');
    docPage.innerHTML = `
        <button onclick="showPage('home')" class="flex items-center text-blue-600 font-bold mb-8 hover:underline">
            <i data-lucide="arrow-left" class="mr-2"></i> Back to Home
        </button>
        <div id="documentation-content" class="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"></div>
    `;
    const contentDiv = document.getElementById('documentation-content');
    contentDiv.innerHTML = `<div class="text-center py-12"><i data-lucide="loader-2" class="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4"></i><p class="text-gray-600">Loading documentation...</p></div>`;
    lucide.createIcons();

    try {
        const response = await fetch(`${file}.json`);
        const data = await response.json();
        let html = '';
        if (file === 'equipment') html = renderEquipmentDocumentation(data);
        if (file === 'safety') html = renderSafetyDocumentation(data);
        if (file === 'procedures') html = renderProceduresDocumentation(data, procedure);
        contentDiv.innerHTML = html;
        lucide.createIcons();
    } catch (e) {
        contentDiv.innerHTML = `<p class="text-red-500">Error loading documentation.</p>`;
    }
}

function getProcedureLink(serviceId) {
    const procedureMap = { 'house-wash': 'house_wash_vinyl', 'driveway': 'cement_driveway', 'roof': 'rooftop_softwash' };
    return procedureMap[serviceId] || '';
}

function initializeSlider() {
    const container = document.getElementById('before-after-container');
    const afterImage = document.getElementById('after-image-container');
    const handle = document.getElementById('slider-handle');
    if (container && afterImage && handle) {
        let isResizing = false;
        const setPosition = (x) => {
            const rect = container.getBoundingClientRect();
            let pos = ((x - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos));
            afterImage.style.width = `${pos}%`;
            handle.style.left = `${pos}%`;
        };
        handle.addEventListener('mousedown', () => isResizing = true);
        window.addEventListener('mouseup', () => isResizing = false);
        window.addEventListener('mousemove', (e) => isResizing && setPosition(e.clientX));
    }
}

function scrollToQuote() {
    showPage('home');
    setTimeout(() => {
        document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function initializeForm() {
    const form = document.getElementById('quote-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Quote request sent!');
            form.reset();
        });
    }
}

function trackPhoneCall() { console.log('Phone call tracked'); }

document.addEventListener('DOMContentLoaded', function() {
    initializeServices();
    initializeDocumentation();
    initializeForm();
    lucide.createIcons();
});
