
// HERO IMAGE CAROUSEL
let currentSlide = 0;
let carouselTimer;

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");

function showSlide(index) {

    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    restartCarousel();
}

function goToSlide(index) {
    showSlide(index);
    restartCarousel();
}

function startCarousel() {
    carouselTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

function restartCarousel() {
    clearInterval(carouselTimer);
    startCarousel();
}

showSlide(0);
startCarousel();

// PRODUCT DATABASE

const products = [

    // HARDWARE
    {
        name: "Screws & Nails",
        category: "Hardware",
        keywords: "screw screws nail nails fastener",
        image: "https://static.vecteezy.com/system/resources/previews/055/135/163/large_2x/close-up-view-of-a-variety-of-metal-screws-and-nails-with-different-sizes-and-finishes-suitable-for-construction-and-repair-work-free-png.png"
    },
    {
        name: "Nuts & Bolts",
        category: "Hardware",
        keywords: "nuts bolts nut bolt fastener",
        image: "https://jooinn.com/images/bolts-6.jpg"
    },
    {
        name: "Hinges",
        category: "Hardware",
        keywords: "hinge hinges door",
        image: "https://www.thespruce.com/thmb/7eHd3pgCBG3TZ99Fkaa2fYcHtz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-types-of-cabinet-hinges-7508637-HERO-d655544dfbfa44c2aa5012c566735d5d.jpg"
    },
    {
        name: "Locks",
        category: "Hardware",
        keywords: "lock locks door security",
        image: "https://cdn.vectorstock.com/i/1000v/13/27/realistic-modern-keys-different-locks-vector-44371327.jpg"
    },
    {
        name: "Handles",
        category: "Hardware",
        keywords: "handle handles door",
        image: "https://kitchenseer.com/wp-content/uploads/2022/09/Door-handles-in-a-kitchen-showroom.jpg"
    },
    {
        name: "Brackets",
        category: "Hardware",
        keywords: "bracket brackets shelf",
        image: "https://m.media-amazon.com/images/I/611VuZDWK1L.jpg"
    },

    // PAINT & PAINTING
    {
        name: "Wall Paints",
        category: "Paint & Painting",
        keywords: "paint wall colour colors",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Primers",
        category: "Paint & Painting",
        keywords: "primer primers wall paint",
        image: "https://www.bergerpaints.com/assets/images/products/primers/bp_white_primer-2272x1280.png"
    },
    {
        name: "Putty",
        category: "Paint & Painting",
        keywords: "putty wall putty",
        image: "https://m.media-amazon.com/images/I/71JQfawYJhL._AC_SL1500_.jpg"
    },
    {
        name: "Paint Brushes",
        category: "Paint & Painting",
        keywords: "brush brushes paint",
        image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Paint Rollers",
        category: "Paint & Painting",
        keywords: "roller rollers paint",
        image: "https://images.unsplash.com/photo-1562259949-1f5e1b5a4a8c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Sandpaper",
        category: "Paint & Painting",
        keywords: "sandpaper sanding paper",
        image: "https://image.made-in-china.com/2f0j00PtloLydnQAkB/2000p-Wet-and-Dry-Silicon-Carbide-Abrasive-Paper.jpg"
    },

    // PLUMBING
    {
        name: "PVC Pipes",
        category: "Plumbing",
        keywords: "pvc pipe pipes plumbing",
        image: "https://nfmplumbing.com/wp-content/uploads/2023/12/True-Sizes-for-ABS-and-PVC-Pipes.webp"
    },
    {
        name: "CP Fittings",
        category: "Plumbing",
        keywords: "cp fitting fittings bathroom",
        image: "https://3.imimg.com/data3/GV/GC/MY-3355974/jaquar-cp-fitting-500x500.jpg"
    },
    {
        name: "Taps",
        category: "Plumbing",
        keywords: "tap taps faucet water",
        image: "https://zeve.au/bigblue/uploads/2022/11/chrome-pillar-taps.jpg"
    },
    {
        name: "Valves",
        category: "Plumbing",
        keywords: "valve valves plumbing",
        image: "https://www.arrowhead-global.com/upload/image/2024/04/15/0f9c1c31-47b9-45d9-84b3-b201c18e3500.jpg"
    },
    {
        name: "Pipe Connectors",
        category: "Plumbing",
        keywords: "connector connectors pipe plumbing",
        image: "https://c8.alamy.com/comp/T3R4P6/set-of-pipe-fittings-connection-for-industry-assorted-plumbing-fixtures-and-piping-parts-T3R4P6.jpg"
    },
    {
        name: "Sealants",
        category: "Plumbing",
        keywords: "sealant sealants adhesive",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80"
    },

    // ELECTRICAL
    {
        name: "Wires & Cables",
        category: "Electrical",
        keywords: "wire wires cable cables electrical",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Switches",
        category: "Electrical",
        keywords: "switch switches electrical",
        image: "https://buildafricasa.co.za/wp-content/uploads/2026/02/Switches.jpg.jpeg"
    },
    {
        name: "Sockets",
        category: "Electrical",
        keywords: "socket sockets plug electrical wall outlet",
        image: "https://img.lazcdn.com/g/p/8e55d6cc443f2ae76104b836300bf983.png_720x720q80.png"
    },
    {
        name: "MCBs",
        category: "Electrical",
        keywords: "mcb mcbs circuit breaker electrical",
        image: "https://steelhardware.com.mv/v2/wp-content/uploads/2025/11/19678.png"
    },
    {
        name: "LED Bulbs",
        category: "Electrical",
        keywords: "led bulb bulbs light",
        image: "https://tse1.mm.bing.net/th/id/OIP.AtuzXBxHiLFbRMhIQJzXiAHaHa?r=0&pid=Api&h=220&P=0"
    },
    {
        name: "Electrical Holders",
        category: "Electrical",
        keywords: "holder holders bulb electrical",
        image: "https://www.ledsockets.com/wp-content/uploads/2022/05/james-products-scaled.jpg.webp"
    },

    // TOOLS
    {
        name: "Hammers",
        category: "Tools",
        keywords: "hammer hammers tool",
        image: "https://s3.amazonaws.com/media.woodsmithplans.com/images/WS23024_custom-brass-hammers/detail2-hd.jpg"
    },
    {
        name: "Screwdrivers",
        category: "Tools",
        keywords: "screwdriver screwdrivers driver",
        image: "https://c8.alamy.com/comp/2H3FBNN/screwdrivers-set-in-a-toolbox-home-repair-tools-set-background-diy-maintenance-service-works-concept-workshop-hardware-equipment-top-view-2H3FBNN.jpg"
    },
    {
        name: "Pliers",
        category: "Tools",
        keywords: "plier pliers tool",
        image: "https://www.pngkit.com/png/full/269-2690425_on-the-wire-cutter-hardware-tools-labor-saving.png"
    },
    {
        name: "Wrenches",
        category: "Tools",
        keywords: "wrench wrenches spanner",
        image: "https://img.freepik.com/premium-photo/set-chrome-wrenches-steel-surface-mechanic-tools-maintenance-hardware-tools-fix-tech_1048944-8350555.jpg"
    },
    {
        name: "Drills",
        category: "Tools",
        keywords: "drill drills power drill",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Measuring Tools",
        category: "Tools",
        keywords: "measure measuring tape scale",
        image: "https://ik.imagekit.io/toolbx/1747434391795"
    },
    {
        name: "Cutting Tools",
        category: "Tools",
        keywords: "cutting cutter blade tools",
        image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80"
    }
];

// DISPLAY PRODUCTS

function displayProducts(productList) {

    const productGrid = document.getElementById("productGrid");
    const noProducts = document.getElementById("noProducts");

    productGrid.innerHTML = "";

    if (productList.length === 0) {
        noProducts.style.display = "block";
        return;
    }

    noProducts.style.display = "none";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    loading="lazy"
                >
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-actions">

                    <button
                        class="quote-btn"
                        onclick="getQuote('${product.name}')">
                        Get Quote
                    </button>

                    <button
                        class="enquiry-btn"
                        onclick="addToEnquiry('${product.name}')">
                        Add to Enquiry
                    </button>

                </div>

            </div>
        `;

        productGrid.appendChild(card);
    });
}

// SEARCH PRODUCTS

function searchProducts() {

    const searchText =
        document.getElementById("productSearch")
        .value
        .toLowerCase()
        .trim();

    const selectedCategory =
        document.getElementById("categoryFilter").value;

    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText) ||
            product.keywords.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}
// CATEGORY FILTER

function filterProducts() {
    searchProducts();
}

// INITIAL DISPLAY

displayProducts(products);


function getQuote(productName) {
    const message = `Hi, I would like to get a quote for ${productName}.`;
    const url = `https://wa.me/919334298027?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}



let enquiryProducts = [];

function addToEnquiry(productName) {
    if (enquiryProducts.includes(productName)) {
        alert(productName + " is already in your enquiry!");
        return;
    }

    enquiryProducts.push(productName);
    addEnquiryList();

    alert(productName + " added to your enquiry!");
}

function addEnquiryList() {
    const enquiryList = document.getElementById("enquiryList");
    const enquiryCount = document.getElementById("enquiryCount");

    enquiryList.innerHTML = "";

    if (enquiryProducts.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-enquiry";
        emptyMessage.textContent = "Your enquiry is empty.";
        enquiryList.appendChild(emptyMessage);
    }

    enquiryProducts.forEach(function(product) {
        const item = document.createElement("div");
        item.className = "enquiry-item";

        const name = document.createElement("span");
        name.textContent = product;

        const cross = document.createElement("button");
        cross.textContent = "×";
        cross.type = "button";
        cross.className = "remove-enquiry";
        cross.setAttribute("aria-label", "Remove " + product);

        cross.onclick = function() {
            enquiryProducts = enquiryProducts.filter(function(p) {
                return p !== product;
            });

            addEnquiryList();
        };

        item.appendChild(name);
        item.appendChild(cross);
        enquiryList.appendChild(item);
    });

    if (enquiryCount) {
        enquiryCount.textContent = enquiryProducts.length;
    }
}

function sendEnquiry() {
    if (enquiryProducts.length === 0) {
        alert("Please add at least one product first.");
        return;
    }

    const message =
        "Hi New Santosh Hardware! I would like to enquire about:\n\n" +
        enquiryProducts.map(function(product) {
            return "- " + product;
        }).join("\n") +
        "\n\nPlease share the prices and availability.";

    const url =
        "https://wa.me/919334298027?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}







