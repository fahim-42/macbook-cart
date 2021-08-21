// assign variable with id
    // table element
        let bestPrice = document.getElementById('best-price');
        let extraMemory = document.getElementById('extra-memory');
        let extraStorage = document.getElementById('extra-storage');
        let deliveryCharge = document.getElementById('delivery-charge');
        let totalPrice = document.getElementById('total-price');

    // promo element
        let promoInput = document.getElementById('promo-input');
        let applyButton = document.getElementById('apply-promo');

    // final price element
        let finalPrice = document.getElementById('final-price');

// get value from button-click(memory)
    document.getElementById('memory-sm').addEventListener('click', function () {
        extraMemory.innerText = 0;
        updatedTotal();
        discountedTotal();
    });
    document.getElementById('memory-lg').addEventListener('click', function () {
        extraMemory.innerText = 180;
        updatedTotal();
        discountedTotal();
    });

// get value from button-click(storage)
    document.getElementById('storage-sm').addEventListener('click', function () {
        extraStorage.innerText = 0;
        updatedTotal();
        discountedTotal();
    });
    document.getElementById('storage-md').addEventListener('click', function () {
        extraStorage.innerText = 100;
        updatedTotal();
        discountedTotal();
    });
    document.getElementById('storage-lg').addEventListener('click', function () {
        extraStorage.innerText = 180;
        updatedTotal();
        discountedTotal();
    });

// get value from button-click(delivery)
    document.getElementById('delivery-free').addEventListener('click', function () {
        deliveryCharge.innerText = 0;
        updatedTotal();
        discountedTotal();
    });
    document.getElementById('delivery-paid').addEventListener('click', function () {
        deliveryCharge.innerText = 20;
        updatedTotal();
        discountedTotal();
    });

//total price calculation
    function updatedTotal() {
        let bestPriceField = parseInt(bestPrice.innerText);
        let extraMemoryField = parseInt(extraMemory.innerText);
        let extraStorageField = parseInt(extraStorage.innerText);
        let deliveryOption = parseInt(deliveryCharge.innerText);

        totalPrice.innerText = bestPriceField + extraMemoryField + extraStorageField + deliveryOption;
        finalPrice.innerText = totalPrice.innerText;
    }

// discounted :: final-price
    function discountedTotal() {
        finalPrice = document.getElementById('final-price');
        finalDiscountedPrice.innerText = totalPrice.innerText;
    };

// promo-input section
    applyButton.addEventListener('click', function () {
        if (promoInput.value == 'stevekaku') {
            totalPrice = parseInt(totalPrice.innerText);
            let discountAmount = 20 / 100;
            let finalDiscountedPrice = totalPrice - (totalPrice * discountAmount);
            finalPrice.innerText = finalDiscountedPrice;
        };
        promoInput.value = '';
    });