$(document).ready(onReady)

let mathButton = ''
function onReady() {
    console.log('JQ'); 
    getHistory();
    $('.mathButton').on('click', function () {
        mathButton = $(this).html();
    })
    $('#equalsButton').on('click', evaluate)
    $('#clearButton').on('click', clear)
};

function getHistory() {
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(
        response => {
            $('historyList').empty()
            response.forEach(element => {
                let historyItem = $(`
                <li>${element.numerator} ${element.mathButton} ${element.denominator} = ${element.result}</li>
                `);
                $('#historyList').append(historyItem);
                historyItem.data('id', element.id);
            })
        }

    )
}

function evaluate() {
    let numerator = $('#numeratorInput').val()
    let denominator = $('#denominatorInput').val()
    let equalsObj = {
         numerator: numerator,
         denominator: denominator,
         mathButton: mathButton
        }
    if (numerator === '' || denominator === '' || mathButton === '') {
        return;
    }
    mathButton = ''
    $.ajax({
        method: 'POST',
        url: '/evaluate',
        data: equalsObj
    }).then(
            response => {
            let result = response.result
            console.log('POST response', response);
            $('#result').html(`<h3>${result}</h3>`);
            getHistory()

        });
}


function clear() {
    $('#numeratorInput').val('')
    $('#denominatorInput').val('')
    $('#result').empty();
}
