// Data structure updated with Tennis Courts [cite: 130-133]
const servicesData = {
    categoryA: {
        title: 'Pressure Wash & Treat',
        items: [
            { id: 'house-washing', name: 'House Washing', price: 'From $300' },
            { id: 'parking-lots', name: 'Driveway & Parking Lot Pressure Washing', price: '$0.22/sq ft' },
            { id: 'tennis-courts', name: 'Tennis Courts', price: 'Custom Quote' }, // NEW SERVICE
            { id: 'dumpster-pads', name: 'Dumpster Pads', price: 'Custom Quote' },
            { id: 'rooftops', name: 'Rooftop Softwash', price: '$0.44/sq ft' },
            { id: 'garbage-bins', name: 'Garbage Bins', price: '$6 per bin' },
            { id: 'graffiti-removal', name: 'Graffiti Removal', price: 'From $400' },
            { id: 'gum-removal', name: 'Chewing Gum Removal', price: '$300' },
            { id: 'efflorescence-removal', name: 'Efflorescence, Algae & Moss Removal', price: '$0.44/sq ft' }
        ]
    },
    categoryB: {
        title: 'Protection & Finishing',
        items: [
            { id: 'concrete-sealing', name: 'Concrete Cleaning & Resealing', price: '$0.90/sq ft' },
            { id: 'paver-sealing', name: 'Paver Sanding & Sealing', price: '$1.75/sq ft' },
            { id: 'concrete-resurfacing', name: 'Concrete Surface Dusting', price: '$1.30/sq ft' },
            { id: 'resin-bound-stone', name: 'Resin-Bound Stone & Rock Stabilization', price: 'Custom Quote' }
        ]
    },
    categoryC: {
        title: 'Restoration & Maintenance',
        items: [
            { id: 'deck-fence', name: 'Deck & Fence Restoration', price: '$0.55/sq ft' },
            { id: 'gutter-cleaning', name: 'Gutter Cleaning', price: 'Custom Quote' },
            { id: 'softwash', name: 'Softwash Any Surface', price: '$0.25/sq ft' }
        ]
    }
};

// Function to render the one-column layout [cite: 208, 209]
function renderServices() {
    const container = document.getElementById('services-grid');
    container.innerHTML = ''; // Clear current content

    Object.values(servicesData).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'service-category';

        const title = document.createElement('h3');
        title.className = 'category-title';
        title.innerText = category.title;
        categoryDiv.appendChild(title);

        const list = document.createElement('div');
        list.className = 'service-list';

        category.items.forEach(service => {
            const itemRow = document.createElement('div');
            itemRow.className = 'service-item-row';

            itemRow.innerHTML = `
                <a href="#" class="service-link" onclick="showPage('${service.id}')">${service.name}</a>
                <span class="service-price">${service.price}</span>
            `;
            list.appendChild(itemRow);
        });

        categoryDiv.appendChild(list);
        container.appendChild(categoryDiv);
    });
}

// Call on load
document.addEventListener('DOMContentLoaded', renderServices);
