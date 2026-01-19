function debugServices() {
    console.log("=== DEBUG SERVICES ===");
    console.log("1. Checking if services-container exists...");
    const container = document.getElementById('services-container');
    console.log("services-container found:", container ? "YES" : "NO");
    
    if (container) {
        console.log("2. Checking servicesData...");
        console.log("servicesData exists:", servicesData ? "YES" : "NO");
        console.log("Number of categories:", Object.keys(servicesData).length);
    }
    
    console.log("3. Checking if initializeServices is called...");
}
const servicesData = {
    // ... (keep your existing servicesData exactly as is) ...
};

// Data storage for JSON content
let equipmentData = null;
let safetyData = null;
let proceduresData = null;

// Load JSON data
async function loadJSONData() {
    try {
        // Load equipment data
        const equipmentResponse = await fetch('equipment.json');
        equipmentData = await equipmentResponse.json();
        
        // Load safety data
        const safetyResponse = await fetch('safety.json');
        safetyData = await safetyResponse.json();
        
        // Load procedures data
        const proceduresResponse = await fetch('procedures.json');
        proceduresData = await proceduresResponse.json();
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

function showPage(pageId) {
    const home = document.getElementById('home-page');
    const detail = document.getElementById('detail-page');
    const blog = document.getElementById('blog-page');
    const equipment = document.getElementById('equipment-page');
    const safety = document.getElementById('safety-page');
    const procedures = document.getElementById('procedures-page');

    // Hide all pages first
    home.classList.add('hidden');
    detail.classList.add('hidden');
    blog.classList.add('hidden');
    equipment.classList.add('hidden');
    safety.classList.add('hidden');
    procedures.classList.add('hidden');

    if (pageId === 'home') {
        home.classList.remove('hidden');
        window.scrollTo(0,0);
    } else if (pageId === 'blog') {
        blog.classList.remove('hidden');
        window.scrollTo(0,0);
    } else if (pageId === 'equipment') {
        equipment.classList.remove('hidden');
        loadEquipmentPage();
        window.scrollTo(0,0);
    } else if (pageId === 'safety') {
        safety.classList.remove('hidden');
        loadSafetyPage();
        window.scrollTo(0,0);
    } else if (pageId === 'procedures') {
        procedures.classList.remove('hidden');
        loadProceduresPage();
        window.scrollTo(0,0);
    } else {
        detail.classList.remove('hidden');
        
        let service = null;
        Object.values(servicesData).forEach(cat => {
            const found = cat.items.find(i => i.id === pageId);
            if (found) service = found;
        });

        if (service) {
            // ... (keep your existing service detail rendering code exactly as is) ...
        }
    }
}

function loadEquipmentPage() {
    const content = document.getElementById('equipment-content');
    if (!equipmentData) {
        content.innerHTML = '<p class="text-center text-gray-600">Loading equipment data...</p>';
        return;
    }

    content.innerHTML = `
        <div class="text-center mb-16">
            <h1 class="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Professional Equipment</h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ${equipmentData.company_philosophy}
            </p>
        </div>

        <div class="space-y-12">
            <!-- Restorative Agents -->
            <div class="info-card">
                <div class="flex items-center gap-3 mb-6">
                    <i data-lucide="flask-conical" class="w-8 h-8 text-blue-600"></i>
                    <h2 class="text-3xl font-bold text-gray-900">Restorative Cleaning Agents</h2>
                </div>
                <p class="text-lg text-gray-700 mb-6">Specialized chemicals tailored to specific substrates for optimal cleaning results.</p>
                <div class="space-y-4">
                    ${equipmentData.restorative_agents.map(agent => `
                        <div class="info-item">
                            <h4 class="text-xl font-semibold text-blue-700 mb-2">${agent.name}</h4>
                            <p class="text-gray-700">${agent.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Wood & Specialty Cleaners -->
            <div class="info-card">
                <div class="flex items-center gap-3 mb-6">
                    <i data-lucide="trees" class="w-8 h-8 text-green-600"></i>
                    <h2 class="text-3xl font-bold text-gray-900">Wood & Specialty Cleaners</h2>
                </div>
                <div class="space-y-4">
                    ${equipmentData.wood_and_specialty.map(item => `
                        <div class="info-item">
                            <p class="text-gray-700">${item}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Masonry & Commercial Cleaners -->
            <div class="info-card">
                <div class="flex items-center gap-3 mb-6">
                    <i data-lucide="building" class="w-8 h-8 text-gray-600"></i>
                    <h2 class="text-3xl font-bold text-gray-900">Masonry & Commercial Cleaners</h2>
                </div>
                <div class="space-y-4">
                    ${equipmentData.masonry_and_commercial.map(item => `
                        <div class="info-item">
                            <p class="text-gray-700">${item}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Safety & Protection Products -->
            <div class="info-card">
                <div class="flex items-center gap-3 mb-6">
                    <i data-lucide="shield" class="w-8 h-8 text-red-600"></i>
                    <h2 class="text-3xl font-bold text-gray-900">Safety & Protection Products</h2>
                </div>
                <div class="space-y-4">
                    ${equipmentData.safety_and_protection_products.map(item => `
                        <div class="info-item">
                            <p class="text-gray-700">${item}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Industrial Hardware -->
            <div class="info-card">
                <div class="flex items-center gap-3 mb-6">
                    <i data-lucide="wrench" class="w-8 h-8 text-amber-600"></i>
                    <h2 class="text-3xl font-bold text-gray-900">Industrial-Grade Hardware</h2>
                </div>
                <div class="space-y-4">
                    ${equipmentData.industrial_hardware.map(item => `
                        <div class="info-item bg-gradient-to-r from-amber-50 to-white border-amber-200">
                            <div class="flex items-start gap-3">
                                <i data-lucide="check-circle" class="w-6 h-6 text-amber-600 flex-shrink-0 mt-1"></i>
                                <p class="text-gray-800 font-medium">${item}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Call to Action -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white text-center">
                <h3 class="text-3xl font-bold mb-4">Ready to Experience Professional Results?</h3>
                <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Our commercial-grade equipment and specialized chemicals ensure superior cleaning without damaging your property.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#quote" onclick="showPage('home')" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition shadow-lg">
                        Get Free Quote
                    </a>
                    <a href="tel:2483138955" onclick="trackPhoneCall()" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                        <i data-lucide="phone" class="w-5 h-5 inline mr-2"></i>
                        (248) 313-8955
                    </a>
                </div>
            </div>
        </div>
    `;

    // Recreate icons after content is loaded
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

function loadSafetyPage() {
    const content = document.getElementById('safety-content');
    if (!safetyData) {
        content.innerHTML = '<p class="text-center text-gray-600">Loading safety data...</p>';
        return;
    }

    content.innerHTML = `
        <div class="text-center mb-16">
            <h1 class="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Our Safety Standards</h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We prioritize safety above all else. Our comprehensive operational standards ensure every job is completed safely and professionally.
            </p>
        </div>

        <div class="info-card">
            <div class="flex items-center gap-3 mb-8">
                <i data-lucide="shield-check" class="w-10 h-10 text-green-600"></i>
                <h2 class="text-3xl font-bold text-gray-900">Operational Safety Standards</h2>
            </div>
            <p class="text-lg text-gray-700 mb-8">We follow strict protocols to ensure the safety of our team, your property, and the environment.</p>
            
            <div class="space-y-6">
                ${safetyData.operational_standards.map((standard, index) => `
                    <div class="procedure-step">
                        <div class="procedure-step-number">${index + 1}</div>
                        <p class="text-gray-800">${standard}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Safety Commitment -->
        <div class="grid md:grid-cols-3 gap-8 mt-12">
            <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
                <div class="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 mx-auto">
                    <i data-lucide="users" class="w-8 h-8 text-green-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Team Safety</h3>
                <p class="text-gray-700 text-center">Full PPE compliance and continuous training for all technicians.</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 border border-blue-200">
                <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                    <i data-lucide="home" class="w-8 h-8 text-blue-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Property Protection</h3>
                <p class="text-gray-700 text-center">Comprehensive measures to protect your home and landscaping.</p>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8 border border-purple-200">
                <div class="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 mx-auto">
                    <i data-lucide="leaf" class="w-8 h-8 text-purple-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">Environmental Care</h3>
                <p class="text-gray-700 text-center">Eco-friendly practices and proper chemical management.</p>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-white text-center">
            <h3 class="text-3xl font-bold mb-4">Safety is Our Priority</h3>
            <p class="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Experience peace of mind with our certified safety protocols and professional standards.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#quote" onclick="showPage('home')" class="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-xl hover:bg-green-50 transition shadow-lg">
                    Get Free Quote
                </a>
                <a href="tel:2483138955" onclick="trackPhoneCall()" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
                    <i data-lucide="phone" class="w-5 h-5 inline mr-2"></i>
                    (248) 313-8955
                </a>
            </div>
        </div>
    `;

    // Recreate icons after content is loaded
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

function loadProceduresPage() {
    const content = document.getElementById('procedures-content');
    if (!proceduresData) {
        content.innerHTML = '<p class="text-center text-gray-600">Loading procedures data...</p>';
        return;
    }

    const procedures = proceduresData.service_procedures;
    const procedureEntries = Object.entries(procedures);

    content.innerHTML = `
        <div class="text-center mb-16">
            <h1 class="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Professional Service Procedures</h1>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our detailed, step-by-step procedures ensure consistent, high-quality results on every project.
            </p>
        </div>

        <div class="space-y-16">
            ${procedureEntries.map(([procedureKey, steps]) => {
                const title = procedureKey.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                
                return `
                    <div class="info-card">
                        <div class="flex items-center gap-3 mb-8">
                            <i data-lucide="list-ordered" class="w-8 h-8 text-blue-600"></i>
                            <h2 class="text-3xl font-bold text-gray-900">${title}</h2>
                        </div>
                        
                        <div class="space-y-4">
                            ${steps.map((step, index) => {
                                // Extract citation if present
                                const hasCitation = step.includes('[cite:');
                                const stepText = hasCitation ? step.split('[')[0].trim() : step;
                                const citation = hasCitation ? step.match(/\[cite: (\d+)\]/)[1] : '';
                                
                                return `
                                    <div class="procedure-step">
                                        <div class="procedure-step-number">${index + 1}</div>
                                        <p class="text-gray-800">${stepText}</p>
                                        ${citation ? `<div class="procedure-cite">Reference: ${citation}</div>` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <!-- Professional Standards -->
        <div class="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white">
            <div class="flex flex-col md:flex-row items-center gap-8">
                <div class="flex-1">
                    <h3 class="text-3xl font-bold mb-4">Certified Professional Procedures</h3>
                    <p class="text-xl text-blue-100 mb-6">Every service follows our documented procedures to ensure consistent, high-quality results and customer satisfaction.</p>
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                            <i data-lucide="award" class="w-8 h-8"></i>
                        </div>
                        <div>
                            <p class="font-bold text-lg">Industry Best Practices</p>
                            <p class="text-blue-200">Following manufacturer specifications and industry standards</p>
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <a href="#quote" onclick="showPage('home')" class="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition shadow-2xl hover:shadow-3xl whitespace-nowrap">
                        Schedule Service
                    </a>
                </div>
            </div>
        </div>
    `;

    // Recreate icons after content is loaded
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
}

// Populate Home Page Services and Dropdown Groups
function initializeServices() {
    console.log("TESTING SERVICES LOAD");
    
    const container = document.getElementById('services-container');
    
    if (container) {
        // Simple test to see if container exists
        container.innerHTML = `
            <div class="service-category-card bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100">
                <h3 class="text-3xl font-black mb-8 tracking-tight">TEST: Pressure Wash & Treat</h3>
                <div class="space-y-4">
                    <div class="flex justify-between items-center group cursor-pointer border-b border-blue-100 pb-3" onclick="showPage('house-wash')">
                        <span class="text-blue-600 font-bold text-lg group-hover:underline">House Washing</span>
                        <span class="text-gray-900 font-medium">From $300</span>
                    </div>
                    <div class="flex justify-between items-center group cursor-pointer border-b border-blue-100 pb-3" onclick="showPage('driveway')">
                        <span class="text-blue-600 font-bold text-lg group-hover:underline">Driveway Pressure Washing</span>
                        <span class="text-gray-900 font-medium">$0.22/sq ft</span>
                    </div>
                </div>
            </div>
        `;
        console.log("Test services added to container");
    } else {
        console.error("ERROR: Could not find services-container element");
    }
}
    
    // Clear and reset dropdown
    dropdown.innerHTML = '<option value="">Select Service *</option>';

    Object.values(servicesData).forEach(category => {
        const card = document.createElement('div');
        card.className = "service-category-card bg-blue-50 rounded-2xl p-8 shadow-sm border border-blue-100";
        let itemsHtml = `<h3 class="text-3xl font-black mb-8 tracking-tight">${category.title}</h3><div class="space-y-4">`;
        
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
    console.log("DOMContentLoaded fired - starting initialization");
    
    // Run debug first
    debugServices();
    
    // Then initialize everything
    initializeServices();
    initializeSlider();
    initializeForm();
    lucide.createIcons();
    
    console.log("All initialization complete");
});

// Also initialize on window load for safety
window.addEventListener('load', function() {
    lucide.createIcons();

});

