const serviceCategories = [
    {
        title: "Pressure Wash & Treat",
        items: [
            { id: 'house-washing', name: 'House Washing', price: 'From $300', desc: 'Professional soft washing for home exteriors. [cite: 28]', benefits: ['Curb appeal', 'Prevent damage'], rate: '$0.25/sq ft' },
            { id: 'tennis-courts', name: 'Tennis Courts', price: '$1100', desc: 'Deep cleaning and restoration for sports surfaces.', benefits: ['Improved traction', 'Surface longevity'], rate: '$1100 per court' },
            { id: 'parking-lots', name: 'Driveway & Parking Lot Pressure Washing', price: '$0.22/sq ft', desc: 'Commercial grade cleaning for concrete and asphalt. [cite: 29]', benefits: ['Safety', 'Professional look'], rate: '$0.22/sq ft' },
            { id: 'dumpster-pads', name: 'Dumpster Pads', price: 'Custom Quote', desc: 'Sanitization and odor removal. [cite: 31]', benefits: ['Health compliance'], rate: 'Custom' },
            { id: 'rooftops', name: 'Rooftop Softwash', price: '$0.44/sq ft', desc: 'Safe removal of algae and moss. [cite: 32]', benefits: ['Roof longevity'], rate: '$0.44/sq ft' },
            { id: 'garbage-bins', name: 'Garbage Bins', price: '$6 per bin', desc: 'Deep clean and sanitize waste bins. [cite: 33]', benefits: ['Odor removal'], rate: '$6/bin' },
            { id: 'graffiti-removal', name: 'Graffiti Removal', price: 'From $400', desc: 'Specialized removal without surface damage. [cite: 34]', benefits: ['Restore image'], rate: 'From $400' },
            { id: 'gum-removal', name: 'Chewing Gum Removal', price: '$300', desc: 'High-heat gum extraction. [cite: 35]', benefits: ['Clean surfaces'], rate: '$300' },
            { id: 'efflorescence-removal', name: 'Efflorescence, Algae & Moss Removal', price: '$0.44/sq ft', desc: 'Mineral deposit removal. [cite: 35]', benefits: ['Deep restoration'], rate: '$0.44/sq ft' }
        ]
    },
    {
        title: "Protection & Finishing",
        items: [
            { id: 'concrete-sealing', name: 'Concrete Cleaning & Resealing', price: '$0.90/sq ft', desc: 'Restore and protect concrete. [cite: 36]', benefits: ['Stain resistance'], rate: '$0.90/sq ft' },
            { id: 'paver-sealing', name: 'Paver Sanding & Sealing', price: '$1.75/sq ft', desc: 'Stabilize joints and enhance color. [cite: 37]', benefits: ['Weed prevention'], rate: '$1.75/sq ft' },
            { id: 'concrete-resurfacing', name: 'Concrete Surface Dusting', price: '$1.30/sq ft', desc: 'Eliminate surface dusting. [cite: 37]', benefits: ['Lower maintenance'], rate: '$1.30/sq ft' },
            { id: 'resin-bound-stone', name: 'Resin-Bound Stone Stabilization', price: 'Custom Quote', desc: 'Permanent rock stabilization. [cite: 41]', benefits: ['ADA-compliant'], rate: 'Custom' }
        ]
    },
    {
        title: "Restoration & Maintenance",
        items: [
            { id: 'deck-fence', name: 'Deck & Fence Restoration', price: '$0.55/sq ft', desc: 'Professional wood treatment. [cite: 38]', benefits: ['Prevent rot'], rate: '$0.55/sq ft' },
            { id: 'gutter-cleaning', name: 'Gutter Cleaning', price: 'Custom Quote', desc: 'Clear debris and ensure drainage. [cite: 39]', benefits: ['Protect foundation'], rate: 'Custom' },
            { id: 'softwash', name: 'Softwash Any Surface', price: '$0.25/sq ft', desc: 'Gentle cleaning for delicate areas. [cite: 40]', benefits: ['Safe results'], rate: '$0.25/sq ft' }
        ]
    }
];

// Initialize Services Grid (Single Column) [cite: 82-84]
function initServices() {
    const container = document.getElementById('services-container');
    const select = document.getElementById('service-select');

    serviceCategories.forEach(cat => {
        const group = document.createElement('div');
        group.className = 'category-group';
        group.innerHTML = `<h3>${cat.title}</h3>`;
        
        cat.items.forEach(item => {
            // Add to grid
            const row = document.createElement('div');
            row.className = 'service-row';
            row.innerHTML = `
                <span class="service-name" onclick="showPage('${item.id}')">${item.name}</span>
                <span class="service-price">${item.price}</span>
            `;
            group.appendChild(row);

            // Add to quote dropdown
            const opt = document.createElement('option');
                opt.value = item.id;
                opt.innerText = item.name;
            select.appendChild(opt);
        });
        container.appendChild(group);
    });
}

function showPage(pageId) {
    const home = document.getElementById('home-page');
    const detail = document.getElementById('service-page');
    
    if(pageId === 'home') {
        home.classList.remove('hidden');
        detail.classList.add('hidden');
    } else {
        const item = serviceCategories.flatMap(c => c.items).find(i => i.id === pageId);
        document.getElementById('service-title').innerText = item.name;
        document.getElementById('service-desc').innerText = item.desc;
        document.getElementById('service-pricing').innerText = `Rate: ${item.rate}`;
        document.getElementById('service-benefits').innerHTML = item.benefits.map(b => `<li>${b}</li>`).join('');
        
        home.classList.add('hidden');
        detail.classList.remove('hidden');
        window.scrollTo(0,0);
    }
}

// Slider Functionality [cite: 14-16]
const slider = document.getElementById('before-after-slider');
slider.addEventListener('mousemove', (e) => {
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    if (percent >= 0 && percent <= 100) {
        document.getElementById('after-img').style.width = `${percent}%`;
        document.getElementById('slider-handle').style.left = `${percent}%`;
    }
});

initServices();
lucide.createIcons();
