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
                pricingDetails: "Unit Rate: $0.22 per square foot (standard jobs)\nBulk Rate (Over 5k sq ft): $0.18 per sq ft\nMinimum Service Charge: $250"
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Sanitization and deodorizing for commercial waste areas.", 
                benefits: ["Eliminates foul odors", "Reduces pest attraction", "Health code compliance"],
                process: ["Area containment setup", "Heavy-duty degreaser application", "High-heat pressure extraction", "Post-cleaning sanitizer spray"],
                pricingDetails: "Custom Quote based on size and frequency.\nStarting at $250 per service."
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Removing black streaks and moss to extend roof lifespan.", 
                benefits: ["Extends roof life", "Lowers energy costs", "Manufacturer approved"],
                process: ["Gutter downspout bagging", "Non-pressure chemical application", "Dwell time for moss root termination", "Nature-rinse protocol (rain washes away dead moss)"],
                pricingDetails: "Unit Rate: $0.44 per square foot\nMinimum Service Charge: $500"
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "High-heat cleaning for residential trash and recycle bins.", 
                benefits: ["Kills bacteria", "Smells fresh", "No more maggots"],
                process: ["High-pressure interior blast", "Disinfectant coating", "Exterior wipe down", "Deodorizer spray"],
                pricingDetails: "$6 per bin (Add-on service)\nStand-alone minimum: 10 bins"
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Specialized chemical removal for paint on various surfaces.", 
                benefits: ["Restores property image", "Prevents copycats", "Safe for masonry"],
                process: ["Surface type identification", "Specific solvent application", "Pressure rinse extraction", "Shadow removal treatment"],
                pricingDetails: "Starting at $400\nPrice varies based on paint type and surface porosity."
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "Steam removal of gum wads from sidewalks and entryways.", 
                benefits: ["Cleaner entryway", "Prevents shoe tracking", "Improves customer experience"],
                process: ["Gum freezing/hardening", "Scraper removal of bulk", "Steam treatment for residue", "Spot clean rinse"],
                pricingDetails: "Minimum Service Charge: $300\nLarge areas: Custom quote"
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                desc: "Treatment for organic growth and mineral deposits.", 
                benefits: ["Restores color", "Prevents slip hazards", "Stops stone decay"],
                process: ["Chemical application", "Agitation scrubbing", "Rinse", "Post-treatment inhibitor"],
                pricingDetails: "$0.44 per square foot"
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
                desc: "Wash and seal to protect concrete from winter salt and cracking.", 
                benefits: ["Prevents salt damage", "Stops spalling", "Easier to clean"],
                process: ["Deep cleaning wash", "24-hour dry time", "Penetrating sealer application", "Hydrophobic test"],
                pricingDetails: "$0.90 per square foot (Includes cleaning)\nMinimum: $350"
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                desc: "Restoring paver patios with new sand and protective sealant.", 
                benefits: ["Stabilizes joints", "Enhances color", "Prevents weeds"],
                process: ["Old sand removal", "Pressure clean", "Install Polymeric Sand", "Apply Acrylic Sealer"],
                pricingDetails: "Range: $1.75 - $2.25 per square foot depending on sealer type."
            },
            { 
                id: "tennis-court", 
                name: "Tennis Court Cleaning", 
                price: "Custom Quote", 
                desc: "Specialized soft wash for recreational surfaces to maintain grip and appearance.", 
                benefits: ["Removes slippery algae", "Preserves court paint", "Brightens play lines"],
                process: ["Debris blowing", "Mild surfactant application", "Low-pressure surface cleaner", "Squeegee finish"],
                pricingDetails: "Custom Quote based on number of courts and condition."
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                desc: "Hardener application to stop concrete floors from creating dust.", 
                benefits: ["Dust-free environment", "Harder surface", "Professional look"],
                process: ["Strip wash", "Densifier application", "Micro-polish", "Guard coat"],
                pricingDetails: "$1.30 per square foot"
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                desc: "Binding loose stones for pathways and tree pits.", 
                benefits: ["No loose rocks", "Permeable surface", "Low maintenance"],
                process: ["Leveling", "Resin mixing", "Hand troweling", "Curing"],
                pricingDetails: "Custom Quote"
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
                desc: "Wood brightening and cleaning for weathered timber.", 
                benefits: ["Restores wood color", "Removes grey oxidation", "Prepares for stain"],
                process: ["Sodium Percarbonate application", "Low pressure rinse", "Oxalic acid brightening", "Neutralization"],
                pricingDetails: "$0.55 per square foot"
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                desc: "Debris removal and flow testing.", 
                benefits: ["Prevents water damage", "Stops overflow", "Protects fascia"],
                process: ["Hand removal of debris", "Bagging waste", "Downspout flush check", "Clean up"],
                pricingDetails: "From $150 depending on linear footage and height."
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                desc: "Customized low-pressure chemical cleaning for delicate or unique surfaces.", 
                benefits: ["Safe for all materials", "Deeper clean than pressure", "Eco-friendly approach"],
                process: ["Substrate Analysis", "Chemical Tailoring", "Dwell Time Management", "Neutralizing Rinse"],
                pricingDetails: "$0.25 per sq ft"
            }
        ]
    }
};

// --- RENDER LOGIC ---

// 1. Initial Page Load - Build the Home Services List
function initHome() {
    const container = document.getElementById('services-grid');
    if(!container) return; // Guard clause
    
    container.innerHTML = '';

    // Populate the dropdown in the contact form while we are looping
    const dropdown = document.getElementById('service-select');
    if(dropdown) dropdown.innerHTML = '<option value="">Select a Service...</option>';

    Object.values(servicesData).forEach(category => {
        // Create the Category Card
        const card = document.createElement('div');
        card.className = "bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm service-category-card h-full";
        
        // Add Category Title
        let itemsHtml = `<h3 class="text-2xl font-bold text-gray-900 mb-6">${category.title}</h3>`;
        
        // IMPORTANT: The container for items must be a Flex Column to prevent splitting
        itemsHtml += `<div class="flex flex-col space-y-3">`;

        // Create the Option Group for the dropdown
        const optGroup = document.createElement('optgroup');
        optGroup.label = category.title;

        category.items.forEach((item, index) => {
            // Check if it's the last item to remove the bottom border
            const isLast = index === category.items.length - 1;
            const borderClass = isLast ? '' : 'border-b border-blue-200';
            
            // Build the Service Item Row
            itemsHtml += `
            <div class="group flex justify-between items-center py-3 ${borderClass} hover:bg-blue-100/50 transition-colors rounded-lg px-2 -mx-2 cursor-pointer" onclick="showPage('${item.id}')">
                <span class="text-blue-600 font-bold text-lg group-hover:underline flex-1">${item.name}</span>
                <span class="text-gray-900 font-medium ml-4 whitespace-nowrap">${item.price}</span>
            </div>`;
            
            // Add to dropdown
            const opt = document.createElement('option');
            opt.value = item.id;
            opt.textContent = item.name;
            optGroup.appendChild(opt);
        });
        
        itemsHtml += `</div>`; // Close flex container
        card.innerHTML = itemsHtml;
        container.appendChild(card);
        
        if(dropdown) dropdown.appendChild(optGroup);
    });
    
    // Re-initialize Lucide icons for the newly created elements (if any)
    if(window.lucide) lucide.createIcons();
}

// 2. Navigation - Show Individual Service Page
function showPage(pageId) {
    if (pageId === 'home') {
        document.getElementById('detail-page').classList.add('hidden');
        document.getElementById('home-page').classList.remove('hidden');
        window.scrollTo(0, 0);
        return;
    }

    // Find the service data
    let selectedService = null;
    Object.values(servicesData).forEach(cat => {
        const found = cat.items.find(item => item.id === pageId);
        if (found) selectedService = found;
    });

    if (!selectedService) return;

    // Populate Detail View
    document.getElementById('detail-title').innerText = selectedService.name;
    document.getElementById('detail-desc').innerText = selectedService.desc;
    document.getElementById('detail-pricing').innerText = selectedService.pricingDetails;

    // Populate Process Steps
    const processContainer = document.getElementById('detail-process');
    processContainer.innerHTML = selectedService.process.map((step, i) => `
        <div class="flex">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mt-1">
                ${i + 1}
            </div>
            <div class="ml-4">
                <p class="text-gray-700 leading-relaxed">${step}</p>
            </div>
        </div>
    `).join('');

    // Populate Benefits
    const benefitsContainer = document.getElementById('detail-benefits');
    benefitsContainer.innerHTML = selectedService.benefits.map(benefit => `
        <li class="flex items-start text-gray-600">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mr-2 shrink-0"></i>
            ${benefit}
        </li>
    `).join('');

    // Switch Views
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('detail-page').classList.remove('hidden');
    
    // Refresh icons
    if(window.lucide) lucide.createIcons();
    
    window.scrollTo(0, 0);
}


// Slider logic
document.addEventListener('DOMContentLoaded', () => {
    initHome();
    if(window.lucide) lucide.createIcons();

    const slider = document.querySelector('.slider-container');
    const handle = document.getElementById('slider-handle');
    const afterWrap = document.getElementById('after-img-wrap');

    if (slider && handle && afterWrap) {
        function slide(e) {
            const rect = slider.getBoundingClientRect();
            let x = (e.pageX || (e.touches ? e.touches[0].pageX : 0)) - rect.left;
            // Prevent sliding outside
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            
            let pos = (x / rect.width) * 100;
            
            handle.style.left = `${pos}%`;
            afterWrap.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
        }

        slider.addEventListener('mousedown', () => {
            slider.addEventListener('mousemove', slide);
        });
        
        window.addEventListener('mouseup', () => {
            slider.removeEventListener('mousemove', slide);
        });
        
        slider.addEventListener('touchstart', () => {
            slider.addEventListener('touchmove', slide);
        });
    }
});