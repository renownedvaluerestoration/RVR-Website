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
                rate: 'Starting at $1100',
                process: ["Surface Inspection & Preparation", "Specialized Sports Surface Cleaner Application", "Low-Pressure Rinse & Extraction", "Traction & Line Inspection"],
                pricingDetails: "Flat Rate Pricing:\nStandard Court: $1,100\nMultiple Courts: Call for Quote"
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
                process: ["Gutter
