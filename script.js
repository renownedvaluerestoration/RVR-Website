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
                desc: "Industrial-strength concrete restoration for high-traffic surfaces.",
                process: [
                    "Oil & Grease Pre-Treatment: Application of high-PH degreasers to lift deep-set petroleum stains.",
                    "Surface Cleaning: Uniform 4200-PSI orbital cleaning using professional flat-surface tools to prevent 'tiger striping'.",
                    "Edge Detailing: Precision wand-work for joints, curbs, and perimeter corners.",
                    "Post-Treatment Brightening: Sodium-based treatment to eliminate remaining organic streaks and leave concrete white and bright."
                ],
                benefits: ["Removes hazardous oil slips", "Prevents concrete pitting", "Professional, even finish"]
            }
            // ... the other 13 services would continue here with the same object structure ...
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
                <h1 class="text-5xl font-extrabold mb-4 text-gray-900">${service.name}</h1>
                <p class="text-2xl font-bold text-[#0052FF] mb-10">Professional Pricing: ${service.pricing}</p>
                
                <div class="grid lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-12">
                        <section>
                            <h3 class="text-2xl font-bold mb-6">Our High-End Process</h3>
                            <div class="space-y-6">
                                ${service.process.map((step, index) => `
                                    <div class="process-step">
                                        <div class="absolute left-0 top-0 w-8 h-8 rounded-full bg-themeBlue text-white flex items-center justify-center font-bold text-sm">
                                            ${index + 1}
                                        </div>
                                        <p class="text-lg text-gray-700 leading-relaxed">${step}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    </div>
                    <div class="space-y-8">
                        <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h4 class="text-xl font-bold mb-4">Key Benefits</h4>
                            <ul class="space-y-4">
                                ${service.benefits.map(b => `<li class="flex items-start text-gray-700"><i data-lucide="check" class="text-green-500 mr-3 w-5 h-5 shrink-0"></i>${b}</li>`).join('')}
                            </ul>
                        </div>
                        <a href="#quote" onclick="showPage('home')" class="block text-center bg-[#375BD2] text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:opacity-90 transition">Request Service</a>
                    </div>
                </div>
            `;
            lucide.createIcons();
        }
    }
    window.scrollTo(0,0);
}

// Initialization and Slider logic remains exactly as previous functional version...
