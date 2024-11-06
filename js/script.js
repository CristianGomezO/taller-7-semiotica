const services = [
    {
        typeOfPlan: "Corte Básico",
        price: 10,
        duration: "30 min",
        features: [
            "Corte clásico",
            "Sin lavado",
            "Acceso al centro de ayuda"
        ]
    },
    {
        typeOfPlan: "Corte Premium",
        price: 20,
        duration: "45 min",
        features: [
            "Corte con lavado",
            "Producto de estilizado incluido",
            "Descuento en productos"
        ]
    },
    {
        typeOfPlan: "Paquete Completo",
        price: 40,
        duration: "60 min",
        features: [
            "Corte y afeitado completo",
            "Lavado y masaje capilar",
            "Bebida incluida"
        ]
    }
];

const addPlanToTable = (planName, serviceCost) => {

    const qtyService = $(`#${planName}Qty`).val(),
            totalService = qtyService * serviceCost,
            newRow = `<tr>
                        <td>${planName}</td>
                        <td>${serviceCost}</td>
                        <td>${qtyService}</td>
                        <td>${totalService}</td>
                    </tr>`;

    $('#servicesTableBody').append(newRow);
    $(`#${planName}Qty`).val('');

    let subTotalVal = $('#subTotal').text() ? parseInt($('#subTotal').text()) : 0;
    subTotalVal += totalService;
    $('#subTotal').text(subTotalVal);

    let iva = subTotalVal * 0.19;
    $('#iva').text(iva.toFixed(2));
    $('#total').text(subTotalVal + iva);
}

