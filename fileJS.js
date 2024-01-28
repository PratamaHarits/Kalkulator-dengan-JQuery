$(document).ready(function(){

    var seluruhAngkaDiklik = 0;
    var seluruhAngkaDiklikSelanjutnya = 0;
    var kumpulanAngka = false;

    $('.cardBodyNumber').click(function(){
        var angkaDiklik = parseInt($(this).text());

        if (!kumpulanAngka) {
            seluruhAngkaDiklik = seluruhAngkaDiklik * 10 + angkaDiklik;
            $('#aritmatikaResult').html(seluruhAngkaDiklik);
        } else {
            seluruhAngkaDiklikSelanjutnya = seluruhAngkaDiklikSelanjutnya * 10 + angkaDiklik;
            $('#aritmatikaResult').html(seluruhAngkaDiklikSelanjutnya);
        }
    });

    var simbolAritmatika;
    $('#kali').click(function(){
        kumpulanAngka = true;
        simbolAritmatika = '*';
    });

    $('#bagi').click(function(){
        kumpulanAngka = true;
        simbolAritmatika = '/';
    });

    $('#tambah').click(function(){
        kumpulanAngka = true;
        simbolAritmatika = '+';
    });

    $('#kurang').click(function(){
        kumpulanAngka = true;
        simbolAritmatika = '-';
    });


    $('#hasil').click(function(){
        if(simbolAritmatika == '*'){
            $('#aritmatikaResult').html(seluruhAngkaDiklik + ' ' + simbolAritmatika + ' ' + seluruhAngkaDiklikSelanjutnya + ' = ' + (seluruhAngkaDiklik*seluruhAngkaDiklikSelanjutnya));
        }else if(simbolAritmatika == '/'){
            $('#aritmatikaResult').html(seluruhAngkaDiklik + ' ' + simbolAritmatika + ' ' + seluruhAngkaDiklikSelanjutnya + ' = ' + (seluruhAngkaDiklik/seluruhAngkaDiklikSelanjutnya));
        }else if(simbolAritmatika == '+'){
            $('#aritmatikaResult').html(seluruhAngkaDiklik + ' ' + simbolAritmatika + ' ' + seluruhAngkaDiklikSelanjutnya + ' = ' + (seluruhAngkaDiklik+seluruhAngkaDiklikSelanjutnya));
        }else if(simbolAritmatika == '-'){
            $('#aritmatikaResult').html(seluruhAngkaDiklik + ' ' + simbolAritmatika + ' ' + seluruhAngkaDiklikSelanjutnya + ' = ' + (seluruhAngkaDiklik-seluruhAngkaDiklikSelanjutnya));
        }
    });

    $('#clear').click(function(){
        seluruhAngkaDiklik = 0;
        seluruhAngkaDiklikSelanjutnya = 0;
        kumpulanAngka = false;
        $('#aritmatikaResult').html('');
    })
 
})