const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { 
                id: "house-wash", 
                name: "House Washing", 
                price: "From $300", 
                desc: "Professional soft washing service that safely removes dirt, mold, mildew, and organic stains from your home's exterior.", 
                benefits: ["Enhanced curb appeal", "Prevents long-term damage", "Safe for all siding types", "Eco-friendly cleaning solutions"],
                detailedPricing: { flatRates: [{ size: 'Small (1,500 sq ft)', price: '$300' }, { size: 'Medium (2,000 sq ft)', price: '$400' }, { size: 'Large (3,000 sq ft)', price: '$550' }], unitRate: '$0.25 per square foot' }
            },
            { 
                id: "driveway", 
                name: "Driveway & Parking Lot Pressure Washing", 
                price: "$0.22/sq ft", 
                desc: "High-pressure cleaning removes oil stains, tire marks, and grime, restoring your surface.", 
                benefits: ["Enhanced property value", "Improved safety", "Extended surface life", "Professional appearance"],
                detailedPricing: { unitRate: '$0.22 per square foot (standard jobs)', bulkRate: '$0.20 per square foot (large jobs)', note: 'Pricing based on square footage. Bulk pricing available for larger commercial areas.' }
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Eliminate odors and bacteria with thorough cleaning and sanitization.", 
                benefits: ["Odor elimination", "Health code compliance", "Pest prevention", "Clean environment"],
                detailedPricing: { note: 'Custom quote based on pad size and contamination level.' }
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Gentle yet effective roof cleaning removes algae, moss, and debris.", 
                benefits: ["Extended roof life", "Energy efficiency", "Prevent water damage", "Aesthetic improvement"],
                detailedPricing: { flatRates: [{ size: 'Small Roof', price: '$700' }, { size: 'Medium Roof', price: '$1,000' }, { size: 'Large Roof', price: '$1,500' }], unitRate: '$0.44 per square foot' }
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "Deep cleaning and sanitization of waste containers.", 
                benefits: ["Eliminate bacteria", "Remove odors", "Professional image", "Regular maintenance available"],
                detailedPricing: { flatRates: [{ size: 'Single Bin', price: '$6' }, { size: '2 Bins', price: '$10' }] }
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Professional graffiti removal using specialized techniques.", 
                benefits: ["Complete removal", "Surface protection", "Quick turnaround", "No damage to substrate"],
                detailedPricing: { flatRates: [{ size: 'Small Graffiti Area', price: '$400' }, { size: 'Large Graffiti Area', price: '$550' }] }
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "Specialized gum removal service using heat and pressure.", 
                benefits: ["Complete gum removal", "Surface safe methods", "Improved appearance", "Quick service"],
                detailedPricing: { flatRates: [{ size: 'Standard Service', price: '$300' }] }
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                desc: "Specialized treatment for mineral deposits and organic growth.", 
                benefits: ["Complete removal", "Prevents recurrence", "Surface protection", "Restores original appearance"],
                detailedPricing: { unitRate: '$0.44 per square foot' }
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
                desc: "Complete concrete restoration including deep cleaning and professional sealing.", 
                benefits: ["Stain resistance", "Weather protection", "Enhanced appearance", "Long-lasting protection"],
                detailedPricing: { unitRate: '$0.90 per square foot' }
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                desc: "Restore and protect pavers with proper joint stabilization.", 
                benefits: ["Weed prevention", "Joint stabilization", "Color enhancement", "Extended lifespan"],
                detailedPricing: { unitRate: '$1.75 per square foot' }
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                desc: "Professional treatment to eliminate concrete dusting.", 
                benefits: ["Eliminate dusting", "Strengthen surface", "Clean appearance", "Low maintenance"],
                detailedPricing: { unitRate: '$1.30 per square foot' }
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                desc: "Transform your landscape with our premium resin-bound stone stabilization system.", 
                benefits: ["Permanent rock stabilization", "Complete weed suppression", "Easy to maintain", "ADA-compliant walkable surfaces", "100% permeable", "UV-stable and weather-resistant"],
                detailedPricing: { note: 'Custom quote based on project size, stone type, and site conditions.' }
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
                desc: "Bring wood surfaces back to life with expert cleaning and treatment.", 
                benefits: ["Restore natural beauty", "Prevent rot and decay", "Increase property value", "Long-lasting results"],
                detailedPricing: { unitRate: '$0.55 per square foot' }
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                desc: "Prevent water damage with thorough gutter and downspout cleaning.", 
                benefits: ["Prevent water damage", "Protect foundation", "Avoid pest nesting", "Maintain proper drainage"],
                detailedPricing: { note: 'Custom quote based on linear feet of gutters and number of stories.' }
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                desc: "Gentle yet highly effective soft washing technique for delicate surfaces.", 
                benefits: ["Safe for delicate surfaces", "Long-lasting results", "Kills mold and algae at the root", "Environmentally friendly solutions"],
                detailedPricing: { unitRate: '$0.25 per square foot' }
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
        window.scrollTo(0, 0);
        return;
    }

    let service = null;
    for (const cat in servicesData) {
        service = servicesData[cat].items.find(i => i.id === pageId);
        if (service) break;
    }

    if (service) {
        home.classList.add('hidden');
        detail.classList.remove('hidden');
        window.scrollTo(0, 0);

        // Build Pricing HTML based on React logic
        let pricingHtml = `
            <div class="bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl p-8 text-white mb-12 shadow-xl">
                <h3 class="text-2xl font-bold mb-6">Service Pricing</h3>
        `;

        const dp = service.detailedPricing;
        if (dp.flatRates) {
            pricingHtml += `<p class="font-bold mb-4 opacity-90">Flat Rate Pricing:</p><div class="space-y-3 mb-6">`;
            dp.flatRates.forEach(rate => {
                pricingHtml += `
                    <div class="flex justify-between items-center bg-white/10 rounded-xl p-4 border border-white/10">
                        <span class="font-medium">${rate.size}</span>
                        <span class="font-bold text-xl">${rate.price}</span>
                    </div>`;
            });
            pricingHtml += `</div>`;
        }

        if (dp.unitRate) {
            pricingHtml += `<div class="flex items-center gap-2 text-lg mb-2"><span class="font-bold">Unit Rate:</span> ${dp.unitRate}</div>`;
        }
        if (dp.bulkRate) {
            pricingHtml += `<div class="flex items-center gap-2 text-lg mb-2"><span class="font-bold">Bulk Rate:</span> ${dp.bulkRate}</div>`;
        }
        if (dp.note) {
            pricingHtml += `<p class="mt-4 text-blue-100 italic text-sm border-t border-white/20 pt-4">${dp.note}</p>`;
        }
        pricingHtml += `</div>`;

        content.innerHTML = `
            <h1 class="text-5xl font-bold text-gray-900 mb-6">${service.name}</h1>
            <p class="text-2xl text-gray-600 mb-10 leading-relaxed">${service.desc}</p>
            
            <div class="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 class="text-2xl font-bold mb-6 text-gray-900">Key Benefits</h3>
                    <ul class="space-y-4">
                        ${service.benefits.map(b => `
                            <li class="flex items-start gap-3">
                                <div class="bg-blue-100 p-1 rounded-full mt-1">
                                    <i data-lucide="check" class="w-5 h-5 text-blue-600"></i>
                                </div>
                                <span class="text-lg text-gray-700">${b}</span>
                            </li>`).join('')}
                    </ul>
                </div>
                <div>${pricingHtml}</div>
            </div>

            <div class="bg-gray-50 rounded-3xl p-10 border border-gray-200 mt-12">
                <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Before & After Gallery</h3>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-video flex items-center justify-center border-4 border-white shadow-lg">
                        <span class="text-gray-400 font-bold uppercase tracking-widest">Before Image</span>
                    </div>
                    <div class="group relative overflow-hidden rounded-2xl bg-gray-200 aspect-video flex items-center justify-center border-4 border-white shadow-lg">
                        <span class="text-gray-400 font-bold uppercase tracking-widest text-blue-600/50">After Image</span>
                    </div>
                </div>
                <div class="text-center mt-10">
                    <button onclick="document.getElementById('quote').scrollIntoView({behavior: 'smooth'}); showPage('home');" class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg">Get My Free Quote</button>
                </div>
            </div>
        `;
        lucide.createIcons();
    }
}

// Render Services on Home Page
const container = document.getElementById('services-container');
const dropdown = document.getElementById('service-dropdown');

for (const key in servicesData) {
    const cat = servicesData[key];
    const optGroup = document.createElement('optgroup');
    optGroup.label = cat.title;

    const card = document.createElement('div');
    card.className = "service-category-card bg-gray-50 rounded-3xl p-10 border border-gray-100";
    
    let itemsHtml = `<h3 class="text-3xl font-bold text-gray-900 mb-8">${cat.title}</h3><div class="grid md:grid-cols-2 gap-x-12 gap-y-6">`;
    
    cat.items.forEach(item => {
        itemsHtml += `
            <div class="flex justify-between items-center group cursor-pointer border-b border-blue-100 pb-4 hover:border-blue-400 transition" onclick="showPage('${item.id}')">
                <span class="text-blue-600 font-bold text-xl group-hover:text-blue-800 transition">${item.name}</span>
                <span class="text-gray-900 font-bold bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">${item.price}</span>
            </div>`;
        
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = item.name;
        optGroup.appendChild(opt);
    });
    
    card.innerHTML = itemsHtml + `</div>`;
    container.appendChild(card);
    dropdown.appendChild(optGroup);
}

// Slider logic
const slider = document.querySelector('.slider-container');
const handle = document.getElementById('slider-handle');
const afterWrap = document.getElementById('after-img-wrap');

function slide(e) {
    const rect = slider.getBoundingClientRect();
    let x = (e.pageX || e.touches[0].pageX) - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0; if (pos > 100) pos = 100;
    handle.style.left = `${pos}%`;
    afterWrap.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
}

slider.addEventListener('mousemove', (e) => { if (e.buttons === 1) slide(e); });
slider.addEventListener('mousedown', slide);
slider.addEventListener('touchmove', slide);

lucide.createIcons();
