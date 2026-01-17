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
                pricingDetails: "Unit Rate: $0.22 per square foot (standard jobs)\nBulk Rate: $0.18 per square foot (5,000+ sq ft)\nMinimum Charge: $150"
            },
            { 
                id: "tennis", 
                name: "Tennis & Basketball Courts", 
                price: "Custom Quote", 
                desc: "Gentle cleaning to preserve specialized court surface coatings.", 
                benefits: ["Slip prevention", "Color preservation", "Surface longevity"],
                process: ["Surface Clearing", "Low-Pressure Chemical Treatment", "Soft Rinse", "Algae Prevention Soak"],
                pricingDetails: "Custom Quote based on court dimensions and condition."
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Sanitization and odor removal for commercial pads.", 
                benefits: ["Health code compliance", "Pest reduction"],
                process: ["Degreasing Soak", "Hot Water High-Pressure Blast", "Sanitizing Agent Application", "Odor Neutralizer Rinse"],
                pricingDetails: "Starting at $75 per pad (weekly service contracts available)"
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Zero-pressure chemical treatment for shingle longevity.", 
                benefits: ["Extends roof life", "Removes black streaks"],
                process: ["Gutter Protection Setup", "Algae-Killing Chemical Application", "Dwell Time Observation", "Rain-Activated Self-Cleaning Agent"],
                pricingDetails: "Unit Rate: $0.44 per square foot\nIncludes 2-year 'no-streak' guarantee."
            }
        ]
    },
    categoryB: {
        title: "Specialty Cleaning",
        items: [
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "High-heat sanitization and deodorizing.", 
                benefits: ["Bacteria removal", "No more smells"],
                process: ["High-Heat Internal Blast", "Bio-degradable Deodorizer", "Exterior Wipe", "Bin Return"],
                pricingDetails: "Standard Bins: $6 per bin (monthly subscription)\nOne-time clean: $15 per bin"
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Specialized chemical removal without ghosting.", 
                benefits: ["Fast response", "Surface preservation"],
                process: ["Tag Analysis", "Chemical Solvent Application", "Agitation & Gentle Extraction", "Surface Protective Coating"],
                pricingDetails: "Starting at $400 per tag (includes removal of up to 50 sq ft of graffiti)"
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "Steam cleaning for sidewalk gum spots.", 
                benefits: ["Professional aesthetics", "Cleaner sidewalks"],
                process: ["Steam Jet Treatment", "Scraping of Residue", "Shadow Cleaning", "Rinse"],
                pricingDetails: "Base Rate: $300 (covers up to 200 gum spots)\nAdditional spots: $0.50 each"
            }
        ]
    }
};

// Populate Home Page Services
const container = document.getElementById('services-container');
const dropdown = document.getElementById('service-dropdown');

Object.keys(servicesData).forEach(catKey => {
    const category = servicesData[catKey];
    const card = document.createElement('div');
    card.className = "bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 service-category-card";
    
    let itemsHtml = `<h3 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50">${category.title}</h3> <div class="space-y-4">`;
    
    const optGroup = document.createElement('optgroup');
    optGroup.label = category.title;

    category.items.forEach(item => {
        itemsHtml += `
            <div class="flex justify-between items-center group cursor-pointer border-b border-blue-50 pb-3 hover:border-blue-200 transition-colors" onclick="showPage('${item.id}')">
                <span class="text-blue-600 font-bold text-lg group-hover:translate-x-1 transition-transform">${item.name}</span>
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

// Routing logic
function showPage(pageId) {
    const home = document.getElementById('home-page');
    const detail = document.getElementById('detail-page');
    
    if (pageId === 'home') {
        detail.classList.add('hidden');
        home.classList.remove('hidden');
        window.scrollTo(0, 0);
    } else {
        renderServiceDetail(pageId);
        home.classList.add('hidden');
        detail.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

function renderServiceDetail(serviceId) {
    let selectedItem = null;
    Object.values(servicesData).forEach(cat => {
        const item = cat.items.find(i => i.id === serviceId);
        if (item) selectedItem = item;
    });

    if (!selectedItem) return;

    const content = document.getElementById('service-detail-content');
    content.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h1 class="text-5xl font-bold text-gray-900 mb-6">${selectedItem.name}</h1>
                <p class="text-2xl text-blue-600 font-bold mb-8">${selectedItem.price}</p>
                <p class="text-xl text-gray-600 leading-relaxed mb-10">${selectedItem.desc}</p>
                
                <div class="bg-blue-50 rounded-3xl p-8 mb-10">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <i data-lucide="info" class="w-6 h-6 mr-2 text-blue-600"></i>
                        Pricing Breakdown
                    </h3>
                    <p class="text-gray-700 whitespace-pre-line leading-relaxed font-medium">${selectedItem.pricingDetails}</p>
                </div>

                <div class="space-y-4">
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    ${selectedItem.benefits.map(b => `
                        <div class="flex items-center text-gray-700">
                            <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                            ${b}
                        </div>
                    `).join('')}
                </div>
            </div>
            <div>
                <div class="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-8">Our Process</h3>
                    <div class="space-y-8">
                        ${selectedItem.process.map((step, idx) => `
                            <div class="flex">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                                    ${idx + 1}
                                </div>
                                <div class="text-gray-700 font-medium pt-1">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                    <button onclick="document.getElementById('service-dropdown').value = '${selectedItem.id}'; showPage('home'); document.getElementById('contact').scrollIntoView();" 
                            class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg mt-12 hover:bg-blue-700 transition-all">
                        Get Estimate for this Service
                    </button>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Slider logic
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