const gifts = [
    {
        id: 1,
        name: "Birthday Cake",
        category: "Birthday",
        price: 25,
        popularity: 4.5,
        image: "https://th.bing.com/th/id/OIP.J96rcY0GJUH7bg6UpMcmNQHaHH?w=202&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Delicious chocolate birthday cake."
    },
    {
        id: 2,
        name: "Custom Mug",
        category: "Custom",
        price: 10,
        popularity: 4.8,
        image: "https://th.bing.com/th/id/OIP.7FTNPiDk8CuVGw9JUTTmUwHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Personalized mug with custom text."
    },
    {
        id: 3,
        name: "Anniversary Frame",
        category: "Anniversary",
        price: 30,
        popularity: 4.3,
        image: "https://th.bing.com/th/id/OIP.Tz4zRudnNam-RdgSvIS-kQHaJQ?w=147&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Elegant photo frame for anniversaries."
    },
    {
        id: 4,
        name: "Birthday Balloons",
        category: "Birthday",
        price: 15,
        popularity: 4.0,
        image: "https://th.bing.com/th/id/OIP.cBVpuWhCVJ7RUb4eUJWKTQHaHr?w=177&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Colorful birthday balloon set."
    },
    {
        id: 5,
        name: "Custom T-shirt",
        category: "Custom",
        price: 20,
        popularity: 4.6,
        image: "https://th.bing.com/th/id/OIP.qzw-OZoAeO5uz8fkl0oguQHaHa?w=190&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Customized t-shirt with design of your choice."
    },
    {
        id: 6,
        name: "Anniversary Chocolates",
        category: "Anniversary",
        price: 18,
        popularity: 4.9,
        image: "https://th.bing.com/th/id/OIP.tU5VeGHeFCa8y7ed-SAWnQHaHa?w=242&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Premium chocolates for your special one."
    },
    {
        id: 7,
        name: "Birthday Flowers",
        category: "Birthday",
        price: 22,
        popularity: 4.2,
        image: "https://th.bing.com/th/id/OIP.c7RgufyyyBbcBbTjhol1cAHaIx?w=170&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Fresh flower bouquet for birthdays."
    },
    {
        id: 8,
        name: "Custom Keychain",
        category: "Custom",
        price: 8,
        popularity: 4.4,
        image: "https://th.bing.com/th/id/OIP.dok_1kXHeM0v5OnHn83U0wAAAA?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Engraved keychain with custom message."
    },
    {
        id: 9,
        name: "Anniversary Lamp",
        category: "Anniversary",
        price: 35,
        popularity: 4.7,
        image: "https://th.bing.com/th/id/OIP.mFADdso5whqGmGhzyYSohAHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Romantic lamp for anniversaries."
    },
    {
        id: 10,
        name: "Birthday Card",
        category: "Birthday",
        price: 5,
        popularity: 4.1,
        image: "https://th.bing.com/th/id/OIP.mAwIuSvVJrC0zdqtACjggAHaFj?w=281&h=211&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        description: "Handmade birthday card."
    }
];

// Display Gifts
const displayGifts = (giftArray) => {
    const container = document.getElementById("giftContainer");
    container.innerHTML = giftArray.map(gift => `
        <div class="bg-white p-4 rounded shadow">
            <div class="image-container" style="height: 200px; overflow: hidden;">
                <img src="${gift.image}" alt="${gift.name}" class="w-full h-full object-contain rounded">
            </div>
            <h3 class="text-lg font-bold mt-2">${gift.name}</h3>
            <p class="text-sm text-gray-600">${gift.category} | $${gift.price} | ⭐ ${gift.popularity}</p>
            <p class="mt-2 text-gray-700">${gift.description}</p>
            <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
        </div>
    `).join('');
};

// Initial Display
window.onload = () => displayGifts(gifts);

// Filter by Category
const filterByCategory = () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    if (selectedCategory === "All") {
        displayGifts(gifts);
    } else {
        const filtered = gifts.filter(gift => gift.category === selectedCategory);
        displayGifts(filtered);
    }
};

// Search by Name
const searchGifts = () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const results = gifts.filter(gift => gift.name.toLowerCase().includes(query));
    displayGifts(results);
};

// Sort by Price
const sortByPrice = (order) => {
    const sorted = [...gifts].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    displayGifts(sorted);
};

// Sort by Popularity
const sortByPopularity = () => {
    const sorted = [...gifts].sort((a, b) => b.popularity - a.popularity);
    displayGifts(sorted);
};