const serviceData = {
    // Data for all 15 services 
    'house-washing': { title: 'House Washing', desc: 'Professional soft washing service that safely removes dirt and mildew.', benefits: ['Enhanced curb appeal', 'Prevents damage'], price: 'From $300 | $0.25/sq ft' },
    'parking-lots': { title: 'Driveway & Parking Lot Pressure Washing', desc: 'High-pressure cleaning for oil and grime.', benefits: ['Safety', 'Extended life'], price: '$0.22/sq ft' },
    'dumpster-pads': { title: 'Dumpster Pads', desc: 'Eliminate odors and bacteria.', benefits: ['Health code compliance'], price: 'Custom Quote' },
    'rooftops': { title: 'Rooftop Softwash', desc: 'Gentle cleaning for algae and moss.', benefits: ['Extended roof life'], price: '$0.44/sq ft' },
    'garbage-bins': { title: 'Garbage Bins', desc: 'Deep sanitization of waste containers.', benefits: ['Remove odors'], price: '$6 per bin' },
    'graffiti-removal': { title: 'Graffiti Removal', desc: 'Professional removal techniques.', benefits: ['Surface protection'], price: 'From $400' },
    'gum-removal': { title: 'Chewing Gum Removal', desc: 'Heat and pressure removal.', benefits: ['Improved appearance'], price: '$300' },
    'efflorescence-removal': { title: 'Efflorescence & Algae Removal', desc: 'Treatment for mineral deposits.', benefits: ['Prevents recurrence'], price: '$0.44/sq ft' },
    'concrete-sealing': { title: 'Concrete Cleaning & Resealing', desc: 'Deep cleaning and professional sealing.', benefits: ['Weather protection'], price: '$0.90/sq ft' },
    'paver-sealing': { title: 'Paver Sanding & Sealing', desc: 'Joint stabilization and protection.', benefits: ['Weed prevention'], price: '$1.75/sq ft' },
    'concrete-resurfacing': { title: 'Concrete Surface Dusting', desc: 'Treatment to eliminate concrete dusting.', benefits: ['Strengthen surface'], price: '$1.30/sq ft' },
    'resin-bound-stone': { title: 'Resin-Bound Stone Stabilization', desc: 'Premium landscape stabilization.', benefits: ['ADA-compliant'], price: 'Custom Quote' },
    'deck-fence': { title: 'Deck & Fence Restoration', desc: 'Expert wood cleaning.', benefits: ['Prevent rot'], price: '$0.55/sq ft' },
    'gutter-cleaning': { title: 'Gutter Cleaning', desc: 'Foundation protection.', benefits: ['Proper drainage'], price: 'Custom Quote' },
    'softwash': { title: 'Softwash Any Surface', desc: 'Gentle technique for delicate surfaces.', benefits: ['Safe cleaning'], price: '$0.25/sq ft' }
};

// Initialize Page and Slider
function showPage(pageId) {
    const home = document.getElementById('home-page');
    const servicePage = document.getElementById('service-page');
    
    if(pageId === 'home') {
        home.classList.remove('hidden');
        servicePage.classList.add('hidden');
        window.scrollTo(0,0);
    } else {
        const data = serviceData[pageId];
        document.getElementById('service-title').innerText = data.title;
        document.getElementById('service-desc').innerText = data.desc;
        document.getElementById('service-pricing').innerText = data.price;
        
        const benefitsList = document.getElementById('service-benefits');
        benefitsList.innerHTML = data.benefits.map(b => `<li>✓ ${b}</li>`).join('');
        
        home.classList.add('hidden');
        servicePage.classList.remove('hidden');
        window.scrollTo(0,0);
    }
}

// Slider Logic [cite: 266-268]
const slider = document.getElementById('before-after-slider');
const afterImg = document.getElementById('after-img');
const handle = document.getElementById('slider-handle');

slider.addEventListener('mousemove', (e) => {
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    
    if (percent >= 0 && percent <= 100) {
        afterImg.style.width = `${percent}%`;
        handle.style.left = `${percent}%`;
    }
});

// Populate Select and Grid
const select = document.getElementById('service-select');
Object.keys(serviceData).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.innerText = serviceData[key].title;
    select.appendChild(opt);
});

// Render Services on Home [cite: 335]
const grid = document.getElementById('services-grid');
const categories = ["Pressure Wash & Treat", "Protection & Finishing", "Restoration & Maintenance"];
// (Loop through data and append categories to grid here)

lucide.createIcons();
