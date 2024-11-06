$(document).ready(() => {
    $('#emailSessionStorage').text(sessionStorage.getItem('email'));
})

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

