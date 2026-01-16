// FULL SERVICE DATABASE WITH HIGH-END PROCESSES
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
                process: [
                    "Surface Inspection & Protection: We bag all outdoor outlets and pre-soak surrounding vegetation to prevent chemical burn.",
                    "Biodegradable Treatment: Application of professional-grade surfactant and sodium hypochlorite blend to kill mold at the root.",
                    "Low-Pressure Rinse: Gentle 150-PSI rinse to remove dirt and debris without damaging vinyl siding, brick, or stucco.",
                    "Final Wax & Shield: Spot-free rinse application to repel future dust and enhance siding luster."
                ],
                benefits: ["Eliminates mold spores", "Protects siding integrity", "Boosts curb value instantly"]
            },
            { 
                id: "driveway", 
                name: "Driveway & Parking Lot Cleaning", 
                price: "$0.22/sq ft", 
                pricing: "$0.22 per sq ft ($250 Minimum)",
                desc: "Industrial-strength concrete restoration for high-traffic surfaces using 4200 PSI equipment.",
                process: [
                    "Oil & Grease Pre-Treatment: Application of high-PH degreasers to lift deep-set petroleum stains.",
                    "Surface Cleaning: Uniform orbital cleaning using professional flat-surface tools to prevent 'tiger striping'.",
                    "Edge Detailing: Precision wand-work for joints, curbs, and perimeter corners.",
                    "Post-Treatment Brightening: Sodium-based treatment to leave concrete white and bright."
                ],
                benefits: ["Removes hazardous oil slips", "Prevents concrete pitting", "Clean, even finish"]
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                pricing: "$0.44 per sq ft ($500 Minimum)",
                desc: "The only shingle manufacturer-approved method for removing black streaks safely.",
                process: [
                    "Gutter Protection: Installation of temporary diversions to protect landscaping.",
                    "Eco-Friendly Kill-Coat: A non-pressure chemical application to kill moss and algae at the root.",
                    "Organic Dissolution: Allowing chemistry to break down roots without high pressure.",
                    "Nature-Rinse Protocol: Rain naturally washes away dead material over 4-6 weeks for zero-damage results."
                ],
                benefits: ["Extends roof life by 5-10 years", "Improves energy efficiency", "Removes damaging moss roots"]
            }
        ]
    },
    categoryB: {
        title: "Protection & Finishing",
        items: [
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                pricing: "$1.75 - $2.25 per sq ft",
                desc: "A premium 3-stage restoration for driveways, patios, and pool decks.",
                process: [
                    "Deep Extraction Clean: High-pressure washing to remove old sand, weeds, and debris.",
                    "Polymeric Sand Infill: Application of premium sand to stabilize joints and prevent shifting.",
                    "Vibratory Compaction: Ensuring sand is fully locked into the joints.",
                    "Flood-Coat Sealing: Application of two coats of premium acrylic sealer (Matte or Wet-look)."
                ],
                benefits: ["Prevents weed growth", "Locks pavers in place", "Enhances stone color"]
            }
        ]
    }
    // Note: Other services follow the same pattern...
};

// PAGE NAVIGATION
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
                <div class="grid lg:grid-cols-5 gap-16">
                    <div class="lg:col-span-3">
                        <h1 class="text-6xl font-black mb-6 leading-tight">${service.name}</h1>
                        <p class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-themeBlue to-buttonBlue mb-10">
                            Professional Pricing: ${service.pricing}
                        </p>
                        <div class="space-y-12">
                            ${service.process.map((step, index) => `
                                <div class="process-step">
                                    <div class="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-themeBlue text-white flex items-center justify-center font-black shadow-lg">
                                        0${index + 1}
                                    </div>
                                    <h4 class="font-bold text-xl mb-2">${step.split(':')[0]}</h4>
                                    <p class="text-gray-600 text-lg leading-relaxed">${step.split(':')[1]}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-32">
                            <h3 class="text-2xl font-black mb-6">Investment Value</h3>
                            <ul class="space-y-6 mb-10">
                                ${service.benefits.map(b => `
                                    <li class="flex items-start text-gray-700 font-medium text-lg">
                                        <i data-lucide="check-circle" class="text-green-500 mr-4 w-6 h-6 shrink-0 mt-1"></i>
                                        <span>${b}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <a href="#quote" onclick="showPage('home')" class="block text-center bg-buttonBlue text-white py-6 rounded-2xl font-black text-xl shadow-lg hover:shadow-2xl transition">
                                Request This Service
                            </a>
                        </div>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    }
    window.scrollTo(0,0);
}

// RENDER HOME CARDS
const container = document.getElementById('services-container');
const dropdown = document.getElementById('service-dropdown');

Object.values(servicesData).forEach(category => {
    const card = document.createElement('div');
    card.className = "service-category-card p-10 rounded-[2.5rem] border border-gray-100 shadow-sm";
    let itemsHtml = `<h3 class="text-2xl font-black mb-10 uppercase tracking-tighter text-themeBlue">${category.title}</h3><div class="grid md:grid-cols-2 gap-10">`;
    const optGroup = document.createElement('optgroup');
    optGroup.label = category.title;

    category.items.forEach(item => {
        itemsHtml += `
            <div class="group cursor-pointer flex justify-between items-center" onclick="showPage('${item.id}')">
                <div>
                    <h4 class="text-xl font-bold group-hover:text-themeBlue transition">${item.name}</h4>
                    <span class="text-xs font-black text-gray-400 uppercase tracking-widest">${item.price}</span>
                </div>
                <i data-lucide="arrow-right" class="w-5 h-5 text-gray-300 group-hover:text-themeBlue transition transform group-hover:translate-x-2"></i>
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

// SLIDER INTERACTION
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

// FORM SUBMIT
document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Quote request received! We'll reach out within 24 hours.");
    e.target.reset();
});