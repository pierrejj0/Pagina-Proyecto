class Calculo {
    venta() {
        let costo = document.getElementById("costo").value;
        let descuento = document.getElementById("descuento").value;
        let iva = document.getElementById("iva").checked;

        let resp = document.getElementById("resp");

        costo = parseFloat(costo);
        descuento = parseFloat(descuento) / 100;

        descuento = (descuento * costo);
        descuento = parseFloat(descuento.toFixed(2));

        let valorIva = 0;
        const IVA = 0.12;
        if (iva) {
            valorIva = (costo - descuento) * IVA;
            valorIva = parseFloat(valorIva.toFixed(2));
        }

        let subtotal = costo - descuento;
        let total = subtotal + valorIva;

resp.textContent = `subtotal:${subtotal.toFixed(2)}"\n"Descuento:${descuento.toFixed(2)}"\n"IVA:${valorIva.toFixed(2)}"\n"Total:${total.toFixed(2)}`;
    }
}

let cal = new Calculo();