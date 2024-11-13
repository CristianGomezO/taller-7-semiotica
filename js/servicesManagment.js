$(document).ready(() => {
    $('#emailSessionStorage').text(sessionStorage.getItem('email'));

    const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
    function changeTheme(ev){
        if(ev.target.checked){
            document.documentElement.setAttribute('theme', 'light');
        } else {
            document.documentElement.setAttribute('theme', 'dark');
        }
    }
    colorSwitch.addEventListener('change', changeTheme);
})

const buildStarsElement = (starsIndex) => {
    let starsElement = '<p class="classification-stars" style="direction: ltr !important;">';
    const radioSelected = document.querySelector(`input[name="stars${starsIndex}"]:checked`);
    for (let index = 0; index < 5; index++) {
        const element = `<input type="radio">
                        <label style="color: ${index + 1 <= radioSelected.value ? 'orange' : 'grey'};">★</label>`;
        starsElement += element;
    }
    starsElement += '</p>';
    return starsElement;
}

const addPlanToTable = (planName, serviceCost, starsIndex) => {
    const qtyService = $(`#${planName}Qty`).val(),
            totalService = qtyService * serviceCost,
            starsElement = buildStarsElement(starsIndex),
            newRow = `<tr>
                        <td>${planName}</td>
                        <td>${serviceCost}</td>
                        <td>${qtyService}</td>
                        <td>${totalService}</td>
                        <td>${starsElement}</td>
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

