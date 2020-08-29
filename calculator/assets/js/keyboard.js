let reinit = false;

function writeValue(value) {
    if (reinit) {
        reinit = false;
        $(".calc-typed").html("");
        $(".calc-operation").html("");
    }

    if ($(".calc-typed").html() == "0") {
        $(".calc-typed").html(value);
    } else
        $(".calc-typed").append(value);
}

function writeOperation(text, value) {
    if (reinit) {
        reinit = false;
        $(".calc-operation").html($(".calc-typed").html());
        $(".calc-typed").html("");
        $(".complete-operation").val($(".complete-operation").val() + " ");
    }

    $(".calc-operation").append($(".calc-typed").html() + " " + text + " ");
    $(".complete-operation").val($(".complete-operation").val() + $(".calc-typed").html() + " " + value + " ");
    $(".calc-typed").html("0");
}

$(document).ready(function () {
    $(document).keypress(function (e) {
        const keyName = event.key;
        if (!isNaN(keyName) || keyName == ",") {
            writeValue(keyName);
        } else if (keyName == "+" || keyName == "-" || keyName == "*" || keyName == "/" || keyName == "%" || e.which == 13) {
            let signal = "";

            if (keyName == "+")
                signal = '<span class="mdi mdi-plus"></span>';
            else if (keyName == "-")
                signal = '<span class="mdi mdi-minus"></span>';
            else if (keyName == "*")
                signal = '<span class="mdi mdi-close"></span>';
            else if (keyName == "/")
                signal = '<span class="mdi mdi-division"></span>';
            else if (keyName == "%")
                signal = '<span class="mdi mdi-percent-outline"></span>';

            writeOperation(signal, keyName);

            if (e.which == 13) {
                calculate();
            }
        }
    });

    $(".number").click(function (e) {
        e.preventDefault();
        writeValue($(this).html());
    });

    $(".operation").click(function (e) {
        e.preventDefault();
        writeOperation($(this).html(), $(this).data("op"));
    });

    $(".clear").click(function (e) {
        e.preventDefault();
        $(".calc-typed").html("0");
    });

    $(".clear-all").click(function (e) {
        e.preventDefault();
        $(".calc-operation").html("");
        $(".complete-operation").val("");
        $(".calc-typed").html("0");
    });

    $(".backspace").click(function (e) {
        e.preventDefault();
        let typed = $(".calc-typed").html();
        if (typed !== "0") {
            typed = typed.substr(0, typed.length - 1);
            if (typed == "") typed = "0";
        }
        $(".calc-typed").html(typed);
    });

    $(".invert").click(function (e) {
        e.preventDefault();
        if ($(".calc-typed").html().indexOf("-") > -1)
            $(".calc-typed").html($(".calc-typed").html().substr(1));
        else
            $(".calc-typed").html("-" + $(".calc-typed").html())
    });

    $(".calculate").click(function (e) {
        e.preventDefault();

        $(".calc-operation").append($(".calc-typed").html() + ' <span class="mdi mdi-equal"></span> ');
        $(".complete-operation").val($(".complete-operation").val() + $(".calc-typed").html());

        $(".calc-typed").html(calculate($(".complete-operation").val()));

        $(".complete-operation").val("");
        reinit = true;
    });
});