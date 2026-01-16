const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { id: "house-wash", name: "House Washing", price: "From $300", desc: "Safe soft washing for vinyl, brick, and stucco.", benefits: ["Prevents siding damage", "Removes mold/algae", "Instant curb appeal"] },
            { id: "driveway", name: "Driveway & Parking Lot Pressure Washing", price: "$0.22/sq ft", desc: "4200 PSI deep cleaning for concrete.", benefits: ["Removes oil stains", "Eliminates tire marks", "Safe for neighbors"] },
            { id: "dumpster", name: "Dumpster Pads", price: "Custom Quote", desc: "Sanitization and odor removal for commercial pads.", benefits: ["Health code compliance", "Pest reduction"] },
            { id: "roof", name: "Rooftop Softwash", price: "$0.44/sq ft", desc: "Zero-pressure chemical treatment for shingle longevity.", benefits: ["Extends roof life", "Removes black streaks"] },
            { id: "bins", name: "Garbage Bins", price: "$6 per bin", desc: "High-heat sanitization and deodorizing.", benefits: ["Bacteria removal", "No more smells"] },
            { id: "graffiti", name: "Graffiti Removal", price: "From $400", desc: "Specialized chemical removal without ghosting.", benefits: ["Fast response", "Surface preservation"] },
            { id: "gum", name: "Chewing Gum Removal", price: "$300", desc: "High-temp steam removal for sidewalks.", benefits: ["Spotless entrance", "Enhanced property value"] },
            { id: "algae", name: "Efflorescence, Algae & Moss Removal", price: "$0.44/sq ft", desc: "Specific mineral and organic stain treatment.", benefits: ["Restores color", "Stops structural erosion"] }
        ]
    },
    categoryB: {
        title: "Protection & Finishing",
        items: [
            { id: "concrete-seal", name: "Concrete Cleaning & Resealing", price: "$0.90/sq ft", desc: "Wash followed by premium siloxane sealer.", benefits: ["Waterproofing", "Salt protection"] },
            { id: "paver-seal", name: "Paver Sanding & Sealing", price: "$1.75/sq ft", desc: "Re-sanding joints and wet-look or matte sealing.", benefits: ["Stabilizes joints", "Prevents weeds"] },
            { id: "dusting", name: "Concrete Surface Dusting", price: "$1.30/sq ft", desc: "Hardener treatment for dusting concrete floors.", benefits: ["Industrial durability", "Easy cleaning"] },
            { id: "stone", name: "Resin-Bound Stone & Rock Stabilization", price: "Custom Quote", desc: "Binding loose gravel for a permanent walkable surface.", benefits: ["ADA compliant", "100% permeable"] }
        ]
    },
    categoryC: {
        title: "Restoration & Maintenance",
        items: [
            { id: "deck", name: "Deck & Fence Restoration", price: "$0.55/sq ft", desc: "Restoring grey wood to natural color.", benefits: ["Removes oxidation", "Prepares for stain"] },
            { id: "gutters", name: "Gutter Cleaning", price: "Custom Quote", desc: "Debris removal and downspout flushing.", benefits: ["Prevents water damage", "Foundation protection"] },
            { id: "softwash-any", name: "Softwash Any Surface", price: "$0.25/sq ft", desc: "Customized chemical cleaning for delicate areas.", benefits: ["Safe & effective", "Kills spores at root"] }
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
                <h1 class="text-5xl font-extrabold mb-6">${service.name}</h1>
                <div class="bg-blue-50 border border-blue-200 rounded-3xl p-8 md:p-12 shadow-sm">
                    <div class="grid md:grid-cols-2 gap-12">
                        <div>
                            <p class="text-2xl font-bold text-blue-600 mb-4">Pricing: ${service.price}</p>
                            <p class="text-xl text-gray-700 leading-relaxed mb-8">${service.desc}</p>
                            <h3 class="text-xl font-bold mb-4">Key Benefits:</h3>
                            <ul class="space-y-3 mb-8">
                                ${service.benefits.map(b => `<li class="flex items-center text-lg"><i data-lucide="check-circle" class="text-green-500 mr-3 w-6 h-6"></i> ${b}</li>`).join('')}
                            </ul>
                            <a href="#quote" onclick="showPage('home')" class="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700">Request Service</a>
                        </div>
                    </div>
                </div>`;
            lucide.createIcons();
        }
    }
    window.scrollTo(0,0);
}

// Populate Home Page Services and Dropdown Groups
const container = document.getElementById('services-container');
const dropdown = document.getElementById('service-dropdown');

Object.values(servicesData).forEach(category => {
    // 1. Home Page Cards
    const card = document.createElement('div');
    card.className = "service-category-card bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100";
    let itemsHtml = `<h3 class="text-3xl font-black mb-8">${category.title}</h3><div class="space-y-4">`;
    
    // 2. Dropdown Grouping
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

slider.addEventListener('mousemove', (e) => { if(e.buttons === 1) slide(e); });
slider.addEventListener('touchmove', slide);

document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Quote request sent! We will contact you within 24 hours.");
    e.target.reset();
});
