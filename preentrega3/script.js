document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const calcularPrecioBtn = document.getElementById("calcular-precio");
    const totalPrecio = document.getElementById("total-precio");

    calcularPrecioBtn.addEventListener("click", () => {
        let precioTotal = 0;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                precioTotal += parseFloat(checkbox.getAttribute("data-precio"));
            }
        });

        totalPrecio.textContent = precioTotal.toFixed(2);
    });
});

