const servicesData = {
    categoryA: {
        title: "Pressure Wash & Treat",
        items: [
            { id: "house-wash", name: "House Washing", price: "From $300", desc: "Safe soft washing for vinyl, brick, and stucco using low-pressure nozzles.", benefits: ["Prevents siding damage", "Removes mold/algae", "Instant curb appeal"], process: ["Property Inspection & Plant Protection", "Eco-friendly Detergent Application", "Low-Pressure Soft Wash Rinse", "Final Detail & Window Spot-Check"] },
            { id: 'tennis-courts', name: 'Tennis Courts', price: '$1100', desc: 'Deep cleaning and restoration for sports surfaces.', benefits: ['Improved traction', 'Surface longevity'], process: ["Surface Inspection & Preparation", "Specialized Sports Surface Cleaner Application", "Low-Pressure Rinse & Extraction"] },
            { id: "driveway", name: "Driveway & Parking Lot", price: "$0.22/sq ft", desc: "4200 PSI deep cleaning for concrete to remove years of grime.", benefits: ["Removes oil stains", "Eliminates tire marks"], process: ["Debris Removal & Edging", "Surface Pre-Treatment", "Commercial Surface Cleaner Pass"] },
            { id: "roof", name: "Rooftop Softwash", price: "$0.44/sq ft", desc: "Zero-pressure chemical treatment for shingle longevity.", benefits: ["Extends roof life", "Removes black streaks"], process: ["Gutter Protection", "Algaecide Application", "Neutralizing Rinse"] }
        ]
    },
    categoryB: {
        title: "Protection & Finishing",
        items: [
            { id: "paver-seal", name: "Paver Sanding & Sealing", price: "$1.75/sq ft", desc: "Re-sanding joints and wet-look or matte sealing.", benefits: ["Stabilizes joints", "Prevents weeds"], process: ["Bio-wash Clean", "Polymeric Sand Installation", "Premium Sealant Coating"] },
            { id: "stone", name: "Resin-Bound Stone Stabilization", price: "Custom Quote", desc: "Binding loose gravel for a permanent walkable surface.", benefits: ["ADA compliant", "100% permeable"], process: ["Substrate Preparation", "Resin-Aggregate Mixing", "Hand-Troweled Application"] }
        ]
    }
};

function showPage(pageId) {
    const pages = ['home-page', 'blog-page', 'detail-page', 'equipment-page', 'safety-page', 'procedures-page'];
    pages.forEach(id => {
        const page = document.getElementById(id);
        if (page) {
            if (id === pageId + '-page' || id === pageId) {
                page.classList.remove('hidden');
            } else {
                page.classList.add('hidden');
            }
        }
    });
    window.scrollTo(0, 0);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function showServiceDetail(serviceId) {
    let service;
    Object.values(servicesData).forEach(cat => {
        const found = cat.items.find(i => i.id === serviceId);
        if (found) service = found;
    });

    if (!service) return;

    const content = document.getElementById('service-detail-content');
    content.innerHTML = `
        <section class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-6">
                <button onclick="showPage('home')" class="mb-8 flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"><i data-lucide="arrow-left" class="w-5 h-5 mr-2"></i> Back to Services</button>
                <div class="flex flex-wrap justify-between items-start gap-4 mb-8">
                    <div>
                        <h2 class="text-4xl font-extrabold text-gray-900 mb-2">${service.name}</h2>
                        <p class="text-xl text-blue-600 font-bold">${service.price}</p>
                    </div>
                    <a href="#quote" onclick="showPageAndScrollToQuote()" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">Request This Service</a>
                </div>
                <div class="grid md:grid-cols-2 gap-12">
                    <div><h3 class="text-xl font-bold mb-4">Key Benefits</h3><ul class="space-y-3">${service.benefits.map(b => `<li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-5 h-5 text-green-500"></i> ${b}</li>`).join('')}</ul></div>
                    <div><h3 class="text-xl font-bold mb-4">Our Process</h3><ol class="space-y-4">${service.process.map((p, i) => `<li class="flex gap-4"><span class="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">${i + 1}</span><span class="text-gray-700">${p}</span></li>`).join('')}</ol></div>
                </div>
            </div>
        </section>
    `;
    showPage('detail');
}

function initializeServices() {
    const container = document.getElementById('services-container');
    const select = document.getElementById('quote-service-select');
    if (!container) return;

    Object.entries(servicesData).forEach(([key, category]) => {
        const section = document.createElement('div');
        section.innerHTML = `<h3 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">${category.title}</h3><div class="grid md:grid-cols-2 gap-6"></div>`;
        const grid = section.querySelector('div.grid');
        const optgroup = document.createElement('optgroup');
        optgroup.label = category.title;

        category.items.forEach(service => {
            const card = document.createElement('div');
            card.className = "bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer";
            card.onclick = () => showServiceDetail(service.id);
            card.innerHTML = `<div class="flex justify-between items-start mb-4"><h4 class="text-xl font-bold text-gray-900">${service.name}</h4><span class="text-blue-600 font-bold">${service.price}</span></div><p class="text-gray-600 mb-4">${service.desc}</p><span class="text-blue-600 font-semibold flex items-center gap-1">Learn More <i data-lucide="chevron-right" class="w-4 h-4"></i></span>`;
            grid.appendChild(card);
            
            const opt = document.createElement('option');
            opt.value = service.id;
            opt.textContent = service.name;
            optgroup.appendChild(opt);
        });
        container.appendChild(section);
        if (select) select.appendChild(optgroup);
    });
}

function showPageAndScrollToQuote() {
    showPage('home');
    setTimeout(() => {
        const quoteSection = document.getElementById('quote');
        if (quoteSection) quoteSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function scrollToSection(sectionId) {
    showPage('home');
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeServices();
    if (typeof lucide !== 'undefined') lucide.createIcons();
});
