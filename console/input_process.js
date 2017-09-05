var command = "";
var commands = {
    help: '<br />      |*|*|*|  Priansh OS 1.6.7 |*|*|*|<br /><br />List of available commands:<br />help - displays help text' +
    '<br />hello - say hello!' +
    '<br />email - open an email contact form',
    hello: 'Good morning!',
    email: 'Sorry, this feature is not currently supported.'
};

function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console_holder').append(arguments[i]); }

function assign() {
    $('.cmd').ready(function () {
        $('.cmd').focus();
        $('.cmd').keypress(function (event) {
            console.log("entered");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                command = $('.cmd').val();
                $('input').removeClass('cmd');
                $('input').prop("disabled", true);
                //now, the input is stopped so we can input the result of the command
                if (!(command in commands)) {
                    type("<div></div><br />");
                    type("Sorry, I wasn't able to find the keywork, file or script \"" + command + "\". Try again!");
                    type(commands.help);
                    type("<div></div><br /><br />");
                }
                else {
                    type("<div></div><br />");
                    type(commands[command]);
                    type("<div></div><br /><br />");
                }
                type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
                assign();
            }
        });
    });
}

$(document).ready(function () {
    type(commands.help);
    type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
    $('.cmd').ready(function () {
        $('.cmd').focus();
        $('.cmd').keypress(function (event) {
            console.log("entered");
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                command = $('.cmd').val();
                $('input').removeClass('cmd');
                $('input').prop("disabled", true);
                //now, the input is stopped so we can input the result of the command
                if (!(command in commands)) {
                    type("<div></div><br />");
                    type("Sorry, I wasn't able to find the keywork, file or script \"" + command + "\". Try again!");
                    type(commands.help);
                    type("<div></div><br /><br />");
                }
                else {
                    type("<div></div><br />");
                    type(commands[command]);
                    type("<div></div><br /><br />");
                }
                type("<div>> <input class=\"cmd\" name=\"command\" type=\"text\" placeholder=\"Type a command here...\"></input></div>");
                assign();
            }
        });
    });
});