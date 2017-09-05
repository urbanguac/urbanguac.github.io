var row = 0;
var column = 0;
var blockCount = 0;
var pattern = [
    [ 2 , 1 , 1 ],
    [ 1 , 2 , 1 ],
    [ 1 , 1 , 1 , 1],
    [ 1 , 1 , 2 ],
    [ 2 , 1 , 1 ],
    [ 2 , 2 ]
];
var tempBlock = "";

color = 0;
colors = ['red','green','orange'/*,'blue'/*,'yellow','purple'*/];

function pickNextColor() {
    color = color + 1;
    if(color == colors.length) color = 0;
    return colors[color-1];
}

function addBlock(x) {
    if(blockCount == 4) {
        row = row + 1;
        blockCount = 0;
        column = 0;
    }
    if(row < pattern.length) {
        tempBlock = "<div class='";
        (pattern[row][column]==2)?tempBlock = tempBlock+"two-block":tempBlock = tempBlock + "block";
        tempBlock = tempBlock + " " + pickNextColor() + " " + "fadeable" + "'><br /><br /><br  />"+x+"</div>";
        $('.fullscreen').append(tempBlock);
        blockCount = blockCount + pattern[row][column];
        column = column + 1;
    }
}

$(document).ready(function() {
    $(".fullscreen").ready(function() {
        addBlock("FTC: Head of Code 2 Years, <br /><br />Co-Captain 2 Years<br /><br />Three Years Total");
        addBlock("VEX: Head of Code 1 Year");
        addBlock("Moonbots: Team Occultation");
        addBlock("FTC Team Lancer Robotics #3415<br /><br />Team Fawkes Robotics #10919");
        addBlock("FTC World Championships<br /><br />THINK Award 14-15");
        addBlock("FTC World Championships<br /><br />Semi-finalist Alliance 14-15");
        addBlock("FTC Super Regionals<br /><br />THINK Award 13-14");
        addBlock("FTC Super Regionals<br /><br />THINK Award 14-15");
        addBlock("FTC Super Regionals<br /><br />Finalist Alliance 14-15");
        addBlock("FTC State Championships<br /><br />THINK Award 13-14");
        addBlock("FTC State Championships<br /><br />Inspire Award 14-15");
        addBlock("FTC State Championships<br /><br />Winning Alliance 14-15");
        addBlock("FTC State Championships<br /><br />Promote Runner Up 15-16");
        addBlock("FTC Qualifier<br /><br />THINK Award 13-14");
        addBlock("FTC Qualifier<br /><br />INSPIRE 14-15, 15-16");
        addBlock("FTC Qualifier<br /><br />PTC Design Award 15-16");
        addBlock("VEX 15-16<br /><br />Robot Skills High Score<br /><br />Semi-Finalist Alliance");
        $(".fadeable").fadeTo('fast',0.5);
        $(".fadeable").mouseenter(function() {
            $(this).fadeTo('fast',1.0);
        });
        $(".fadeable").mouseleave(function() {
            $(this).fadeTo('fast',0.5);
        });
        $(".undefined").addClass("orange");
    });
});