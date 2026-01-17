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
                id: 'tennis-courts', 
                name: 'Tennis Courts', 
                price: '$1100', 
                desc: 'Deep cleaning and restoration for sports surfaces.', 
                benefits: ['Improved traction', 'Surface longevity'], 
                rate: 'Starting at $1100' 
            },
            { 
                id: "driveway", 
                name: "Driveway & Parking Lot Pressure Washing", 
                price: "$0.22/sq ft", 
                desc: "4200 PSI deep cleaning for concrete to remove years of grime.", 
                benefits: ["Removes oil stains", "Eliminates tire marks", "Safe for neighbors"],
                process: ["Debris Removal & Edging", "Surface Pre-Treatment for Stains", "Commercial Surface Cleaner Pass", "High-Volume Rinse & Sediment Flush"],
                pricingDetails: "Unit Rate: $0.22 per square foot (standard jobs)\nBulk Rate: $0.20 per square foot (large jobs)"
            },
            { 
                id: "dumpster", 
                name: "Dumpster Pads", 
                price: "Custom Quote", 
                desc: "Sanitization and odor removal for commercial pads.", 
                benefits: ["Health code compliance", "Pest reduction"],
                process: ["Degreasing Soak", "Hot Water High-Pressure Scrub", "Sanitization & Deodorizing", "Containment Inspection"],
                pricingDetails: "Custom quote based on size and frequency of cleaning."
            },
            { 
                id: "roof", 
                name: "Rooftop Softwash", 
                price: "$0.44/sq ft", 
                desc: "Zero-pressure chemical treatment for shingle longevity.", 
                benefits: ["Extends roof life", "Removes black streaks"],
                process: ["Gutter Protection Setup", "Algaecide Treatment Application", "Dwell Time Monitoring", "Neutralizing Rinse"],
                pricingDetails: "Flat Rate Pricing:\nSmall Roof $700\nMedium Roof $1,000\nLarge Roof $1,500\n\nUnit Rate: $0.44 per square foot"
            },
            { 
                id: "bins", 
                name: "Garbage Bins", 
                price: "$6 per bin", 
                desc: "High-heat sanitization and deodorizing.", 
                benefits: ["Bacteria removal", "No more smells"],
                process: ["High-Temp Pressure Wash", "Antibacterial Scrubbing", "Deodorizing Spray", "Exterior Polish"],
                pricingDetails: "Flat Rate Pricing:\nSingle Bin $6\n2 Bins $10"
            },
            { 
                id: "graffiti", 
                name: "Graffiti Removal", 
                price: "From $400", 
                desc: "Specialized chemical removal without ghosting.", 
                benefits: ["Fast response", "Surface preservation"],
                process: ["Paint Identification", "Eco-friendly Solvents Application", "Agitation & Steam Pressure Lift", "Neutralizing Wash"],
                pricingDetails: "Flat Rate Pricing:\nSmall Graffiti Area $400\nLarge Graffiti Area $550"
            },
            { 
                id: "gum", 
                name: "Chewing Gum Removal", 
                price: "$300", 
                desc: "High-temp steam removal for sidewalks.", 
                benefits: ["Spotless entrance", "Enhanced property value"],
                process: ["Area Cordoning", "Targeted Steam Treatment", "Pressure Extraction", "Uniform Rinse"],
                pricingDetails: "Flat Rate Pricing:\nStandard Service $300"
            },
            { 
                id: "algae", 
                name: "Efflorescence, Algae & Moss Removal", 
                price: "$0.44/sq ft", 
                desc: "Specific mineral and organic stain treatment.", 
                benefits: ["Restores color", "Stops structural erosion"],
                process: ["Organic Growth Assessment", "Mineral Dissolving Pre-treatment", "Pressure Clean", "Growth Inhibitor Application"],
                pricingDetails: "Unit Rate: $0.44 per square foot"
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
                desc: "Wash followed by premium siloxane sealer.", 
                benefits: ["Waterproofing", "Salt protection"],
                process: ["Deep Clean & Stain Extraction", "24-Hour Drying Window", "Siloxane Sealer Application", "Uniform Finish Inspection"],
                pricingDetails: "Unit Rate: $0.90 per square foot"
            },
            { 
                id: "paver-seal", 
                name: "Paver Sanding & Sealing", 
                price: "$1.75/sq ft", 
                desc: "Re-sanding joints and wet-look or matte sealing.", 
                benefits: ["Stabilizes joints", "Prevents weeds"],
                process: ["Bio-wash Clean", "Polymeric Sand Installation", "Compaction & Joint Setting", "Premium Sealant Coating"],
                pricingDetails: "Unit Rate: $1.75 per square foot"
            },
            { 
                id: "dusting", 
                name: "Concrete Surface Dusting", 
                price: "$1.30/sq ft", 
                desc: "Hardener treatment for dusting concrete floors.", 
                benefits: ["Industrial durability", "Easy cleaning"],
                process: ["Industrial Scrubber Prep", "Lithium Densifier Application", "Buffing & Polishing", "Dust-Proof Testing"],
                pricingDetails: "Unit Rate: $1.30 per square foot"
            },
            { 
                id: "stone", 
                name: "Resin-Bound Stone & Rock Stabilization", 
                price: "Custom Quote", 
                desc: "Binding loose gravel for a permanent walkable surface.", 
                benefits: ["ADA compliant", "100% permeable"],
                process: ["Substrate Preparation", "Resin-Aggregate Mixing", "Hand-Troweled Application", "Curing & Strength Check"],
                pricingDetails: "Custom quote based on project size, stone type, and site conditions."
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
                desc: "Restoring grey wood to natural color.", 
                benefits: ["Removes oxidation", "Prepares for stain"],
                process: ["Wood Conditioning Treatment", "Controlled Pressure Wash", "Brightener Application", "Grain Inspection & Sanding Advice"],
                pricingDetails: "Unit Rate: $0.55 per square foot"
            },
            { 
                id: "gutters", 
                name: "Gutter Cleaning", 
                price: "Custom Quote", 
                desc: "Debris removal and downspout flushing.", 
                benefits: ["Prevents water damage", "Foundation protection"],
                process: ["Manual Debris Removal", "Downspout Pressure Flush", "Structural Fastener Check", "Cleanup & Site Clearance"],
                pricingDetails: "Custom quote based on linear feet of gutters and number of stories."
            },
            { 
                id: "softwash-any", 
                name: "Softwash Any Surface", 
                price: "$0.25/sq ft", 
                desc: "Customized chemical cleaning for delicate areas.", 
                benefits: ["Safe & effective", "Kills spores at root"],
                process: ["Material Testing", "Chemical Dilution Setup", "Dwell-and-Rise Application", "Final PH Balance Check"],
                pricingDetails: "Unit Rate: $0.25 per square foot"
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
                <div class="mb-12">
                    <h1 class="text-5xl font-extrabold mb-4 text-gray-900">${service.name}</h1>
                    <p class="text-2xl text-blue-600 font-semibold mb-6">${service.price}</p>
                    <p class="text-xl
