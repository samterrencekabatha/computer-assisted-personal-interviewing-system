function loadDiscounts() {
    const discountSelect = document.getElementById("discountType");

    discounts.forEach(d => {
        const opt = document.createElement("option");
        opt.value = d.rate;
        opt.text = d.type + " (" + d.rate + "%)";
        discountSelect.appendChild(opt);
    });
}
total = subtotal - (subtotal * discountRate / 100);
total = subtotal - (subtotal * discountRate / 100);
