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
                id: "driveway", 
                name: "Driveway & Parking Lot Pressure Washing", 
                price: "$0.22/sq ft", 
                desc: "4200 PSI deep cleaning for concrete to remove years of grime.", 
                benefits: ["Removes oil stains", "Eliminates tire marks", "Safe for neighbors"],
                process: ["Debris Removal & Edging", "Surface Pre-Treatment for Stains", "Commercial Surface Cleaner Pass", "High-Volume Rinse & Sediment Flush"],
                pricingDetails: "Unit Rate: $0.22 per square foot (standard jobs)\nBulk Rate: $0.18 per square foot (over 5,000 sq ft)"
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Sanitization and odor removal for commercial pads.", 
                benefits: ["Health code compliance", "Pest reduction"],
                process: ["Degreasing Soak", "Hot Water High-Pressure Scrub", "Sanitization & Deodorizing", "Containment Inspection"]
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Zero-pressure chemical treatment for shingle longevity.", 
                benefits: ["Extends roof life", "Removes black streaks"],
                process: ["Gutter Protection Setup", "Algaecide Treatment Application", "Dwell Time Monitoring", "Neutralizing Rinse"]
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "High-heat sanitization and deodorizing.", 
                benefits: ["Bacteria removal", "No more smells"],
                process: ["High-Temp Pressure Wash", "Antibacterial Scrubbing", "Deodorizing Spray", "Exterior Polish"]
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Specialized chemical removal without ghosting.", 
                benefits: ["Fast response", "Surface preservation"],
                process: ["Paint Identification", "Eco-friendly Solvents Application", "Agitation & Steam Pressure Lift", "Neutralizing Wash"]
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "High-temp steam removal for sidewalks.", 
                benefits: ["Spotless entrance", "Enhanced property value"],
                process: ["Area Cordoning", "Targeted Steam Treatment", "Pressure Extraction", "Uniform Rinse"]
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                desc: "Specific mineral and organic stain treatment.", 
                benefits: ["Restores color", "Stops structural erosion"],
                process: ["Organic Growth Assessment", "Mineral Dissolving Pre-treatment", "Pressure Clean", "Growth Inhibitor Application"]
            },
            { 
                id: "tennis-courts", 
                name: "Tennis Courts", 
                price: "$330", 
                desc: "Deep cleaning for tennis and pickleball courts to restore traction and professional aesthetics.", 
                benefits: ["Improved playability", "Removes slippery moss/algae", "Extends surface life"],
                process: ["Surface Assessment & Debris Removal", "Application of Surface-Safe Specialized Cleaners", "Precision Pressure Wash Treatment", "Final High-Volume Rinse & Inspection"],
                pricingDetails: "Flat Rate: $330 per standard court\nMulti-court discount available."
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
                process: ["Deep Clean & Stain Extraction", "24-Hour Drying Window", "Siloxane Sealer Application", "Uniform Finish Inspection"]
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                desc: "Re-sanding joints and wet-look or matte sealing.", 
                benefits: ["Stabilizes joints", "Prevents weeds"],
                process: ["Bio-wash Clean", "Polymeric Sand Installation", "Compaction & Joint Setting", "Premium Sealant Coating"]
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                desc: "Hardener treatment for dusting concrete floors.", 
                benefits: ["Industrial durability", "Easy cleaning"],
                process: ["Industrial Scrubber Prep", "Lithium Densifier Application", "Buffing & Polishing", "Dust-Proof Testing"]
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                desc: "Binding loose gravel for a permanent walkable surface.", 
                benefits: ["ADA compliant", "100% permeable"],
                process: ["Substrate Preparation", "Resin-Aggregate Mixing", "Hand-Troweled Application", "Curing & Strength Check"]
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
                process: ["Wood Conditioning Treatment", "Controlled Pressure Wash", "Brightener Application", "Grain Inspection & Sanding Advice"]
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                desc: "Debris removal and downspout flushing.", 
                benefits: ["Prevents water damage", "Foundation protection"],
                process: ["Manual Debris Removal", "Downspout Pressure Flush", "Structural Fastener Check", "Cleanup & Site Clearance"]
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                desc: "Customized chemical cleaning for delicate areas.", 
                benefits: ["Safe & effective", "Kills spores at root"],
                process: ["Material Testing", "Chemical Dilution Setup", "Dwell-and-Rise Application", "Final PH Balance Check"]
            }
        ]
    }
};

function showPage(pageId) {
    const home = document.getElementById('home-page');
    const detail = document.getElementById('detail-page');
    const content = document.getElementById('service-detail-content');

    if (pageId === 'home') {
        home.classList.remove('hidden');
        detail.classList.add('hidden');
        lucide.createIcons();
    } else {
        home.classList.add('hidden');
        detail.classList.remove('hidden');

        let service = null;
        Object.values(servicesData).forEach(cat => {
            const found = cat.items.find(i => i.id === pageId);
            if (found) service = found;
        });

        if (service) {
            content.innerHTML = `
                <div class="mb-12">
                    <h1 class="text-5xl font-extrabold mb-4 text-gray-900">${service.name}</h1>
                    <p class="text-2xl text-blue-600 font-semibold mb-6">${service.price}</p>
                    <p class="text-xl text-gray-700 leading-relaxed max-w-3xl">${service.desc}</p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 items-start mb-16">
                    <div class="space-y-8">
                        <div class="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                            <h3 class="text-2xl font-bold mb-6 flex items-center">
                                <i data-lucide="shield-check" class="mr-3 text-blue-600"></i> Why Choose This Service?
                            </h3>
                            <ul class="space-y-4">
                                ${service.benefits.map(b => `
                                    <li class="flex items-start text-lg text-gray-700">
                                        <i data-lucide="check-circle" class="text-green-500 mr-3 w-6 h-6 flex-shrink-0 mt-0.5"></i>
                                        ${b}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 class="text-2xl font-bold mb-8 flex items-center">
                            <i data-lucide="clock" class="mr-3 text-blue-600"></i> Our Restoration Process
                        </h3>
                        <div class="space-y-8">
                            ${service.process.map((step, index) => `
                                <div class="flex gap-4">
                                    <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                        ${index + 1}
                                    </div>
                                    <p class="text-lg text-gray-700 font-medium pt-0.5">${step}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-12 text-center text-white">
                    <h3 class="text-3xl font-bold mb-4">Ready to Restore Your Property?</h3>
                    <p class="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote for your ${service.name} project today.</p>
                    <button onclick="showPage('home'); setTimeout(() => { document.getElementById('quote').scrollIntoView({ behavior: 'smooth' }); }, 100);" class="bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-xl">
                        Request Your Quote
                    </button>
                </div>
            `;
            lucide.createIcons();
            window.scrollTo(0, 0);
        }
    }
}

const container = document.getElementById('services-container');
const dropdown = document.getElementById('quote-service-dropdown');

Object.values(servicesData).forEach(category => {
    const card = document.createElement('div');
    card.className = 'service-category-card bg-white rounded-3xl shadow-sm border border-gray-100 p-8';
    
    let itemsHtml = `<h3 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50">${category.title}</h3>
                     <div class="grid md:grid-cols-2 gap-x-12 gap-y-6">`;
    
    const optGroup = document.createElement('optgroup');
    optGroup.label = category.title;

    category.items.forEach(item => {
        itemsHtml += `
            <div class="flex justify-between items-center group cursor-pointer border-b border-blue-100 pb-3" onclick="showPage('${item.id}')">
                <span class="text-blue-600 font-bold text-lg group-hover:underline">${item.name}</span>
                <span class="text-gray-900 font-medium">${item.price}</span>
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

const slider = document.querySelector('.slider-container');
const handle = document.getElementById('slider-handle');
const afterWrap = document.getElementById('after-img-wrap');

function slide(e) {
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    let x = (e.pageX || (e.touches ? e.touches[0].pageX : 0)) - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0; if (pos > 100) pos = 100;
    handle.style.left = `${pos}%`;
    afterWrap.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
}

if (slider) {
    ['mousedown', 'touchstart'].forEach(evt => {
        slider.addEventListener(evt, (e) => {
            window.addEventListener('mousemove', slide);
            window.addEventListener('touchmove', slide);
            slide(e);
        });
    });

    ['mouseup', 'touchend'].forEach(evt => {
        window.addEventListener(evt, () => {
            window.removeEventListener('mousemove', slide);
            window.removeEventListener('touchmove', slide);
        });
    });
}

lucide.createIcons();