function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console_holder').append(arguments[i]); }

function clear() { $('#console_holder').empty(); }

var buffer = [];
var iter = 0;

function add_normal(x) {
    buffer.unshift(x + "<br />");
    console.log("added");
}

function add(x) {
    buffer.unshift("> ");
    y = x.split(" ");
    for (var i = 0; i < y.length; i++)
        buffer.unshift(y[i] + " ");
    buffer.unshift("<br />");
}

function reorder() {
    var temp = [];
    for (var i = buffer.length; i > 0; i--)
        temp.unshift(buffer[i - 1]);
    for (var i = 0; i < buffer.length; i++)
        buffer[i] = temp[i];
    return buffer;
}

$(document).ready(function () {
    console.log("Document is ready.");
    add("Welcome to my personal resume.");
    add("It's not like other resumes.");
    add("I was inspired by bash and console/terminal environments.")
    add("From here, you can browse links to my portfolio.");
    add_normal("<a id='academic-link' target='_blank' href='newspaper/index.html'>Click here to view my academic skillset.</a>");
    add("The above portfolio covers my academic achievements, including standardized test scores and awards.");
    add_normal("");
    add("I'm also very involved in the robotics community. Robotics has become one of my passions in the last few years.");
    add_normal("<a id='robots-link' target='_blank' href='robots/index.html'>Click here to view a list of my achievements in the field of robotics.</a>");
    add_normal("");
    add("And most of all, I'm a coder.")
    add_normal("<a id='code-link' target='_blank' href='code/index.html'>Click here to see my life as a coder, minus the coffee.</a>")
    add_normal("<a id='github-link' target='_blank' href='https://www.github.com/urbanguac'>And a portfolio of my projects!</a>")
    add_normal("")
    add("Trying to get in contact with me professionally?")
    add_normal("Check out my <a id='linkedin-link' target='_blank' href='https://www.linkedin.com/in/priansh-shah-828890110/'>LinkedIn</a>!")
    add_normal("")
    add("Loading kernel: | / - | \\ | 100%")
    add_normal("")
    add_normal("<script src=\"input_process.js\"></script>");
    $("#console_holder").ready(function () {
        type("thing");
        type("i added this line as well");
        type("how's it feel?");
        clear();
        type("<div class='coral'>Loading: Priansh Shah...");
        type("<div>> Hello World!</div>");
//        type("<div>> Keep typing with your keyboard to view the page.</div>"); //UNCOMMENT to use keypress!


        buffer = reorder();
    });
    iter = buffer.length - 1;

    function typeItOut() {
        if (iter > -1) {
            type(buffer[iter]); iter--;
            setTimeout(typeItOut, 70);
        }
        else return;
    }

    setTimeout(typeItOut, 100); //comment this line out to use the keypress

/* Uncomment this to use the keypress.
    $(document).keypress(function () {
        if (iter > -1)
            type(buffer[iter]); iter--;
    });
*/
});