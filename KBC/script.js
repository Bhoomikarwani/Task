document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Script Loaded Successfully!"); 

    // --- 1. SETUP EVENT LISTENERS FOR TABS ---
    const tab2024 = document.getElementById('tab-2024');
    const tab2025 = document.getElementById('tab-2025');

    if(tab2024) {
        tab2024.addEventListener('click', function() {
            console.log("👉 Clicked 2024 Tab");
            openTab('kbc2024', this);
        });
    } else {
        console.error("❌ Error: Could not find element with id 'tab-2024'");
    }

    if(tab2025) {
        tab2025.addEventListener('click', function() {
            console.log("👉 Clicked 2025 Tab");
            openTab('kbc2025', this);
        });
    }

    // --- 2. SETUP EVENT LISTENERS FOR CAROUSEL NAVIGATION ---
    
    // Helper to add listener safely
    function addScrollListener(btnId, listId, direction) {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', function() {
                console.log(`👉 Clicked ${btnId}`);
                scrollCarousel(listId, direction);
            });
        } else {
            console.error(`❌ Error: Could not find button with id '${btnId}'`);
        }
    }

    // Add listeners for 2024
    addScrollListener('prev-2024', 'list-2024', -1);
    addScrollListener('next-2024', 'list-2024', 1);

    // Add listeners for 2025
    addScrollListener('prev-2025', 'list-2025', -1);
    addScrollListener('next-2025', 'list-2025', 1);

});

// --- HELPER FUNCTIONS ---

function openTab(tabName, clickedBtn) {
    // Hide all carousels
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(c => c.classList.remove('active-tab'));

    // Show selected carousel
    const selectedCarousel = document.getElementById(tabName);
    if(selectedCarousel) {
        selectedCarousel.classList.add('active-tab');
    } else {
        console.error(`❌ Error: Could not find carousel div with id '${tabName}'`);
    }

    // Update button styles
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if(clickedBtn) clickedBtn.classList.add('active');
}

function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    if(container) {
        const card = container.querySelector('.video-card');
        if (card) {
            const cardWidth = card.offsetWidth;
            const gap = 20; 
            const scrollAmount = (cardWidth + gap) * 3 * direction;
            
            console.log(`Checking scroll: Width=${cardWidth}, Gap=${gap}, ScrollAmount=${scrollAmount}`);
            
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else {
            console.error("❌ Error: No elements with class 'video-card' found inside the list.");
        }
    } else {
        console.error(`❌ Error: Could not find list with id '${containerId}'`);
    }
}