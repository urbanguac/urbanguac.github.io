var row = 0;
var column = 0;
var blockCount = 0;
var pattern = [
    [ 1 , 2 , 1 ],
    [ 1 , 2 , 1 ],
    [ 1 , 1 , 2 ],
    [ 2 , 1 , 1 ],
    [ 1 , 1 , 1 , 1 ],
    [ 1 , 1 , 2 ],
    [ 2 , 1 , 1]
];
var tempBlock = "";

color = 0;
colors = ['red','green','orange'/*, 'blue', 'yellow'/*,'purple'*/];

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
        addBlock("FBLA<br />American Enterprise Day<br />9th Place National Conf.");
        addBlock("FBLA<br />Intro to Business Communications<br />2nd Place State Conference");
        addBlock("FBLA <br />American Enterprise Day<br />1st Place State Conference");

        addBlock("Catapult Summer<br /><br />Most Investable");
        addBlock("Debate<br />UPenn Liberty Bell Classic Run-Off 2016<br />Triple-Octofinalist");
        addBlock("Debate<br />Public Forum Debate<br />Victory Brief #155 Nationally");

        addBlock("American Citizenship Teacher<br /><br />Baldwin Oaks Senior Home");
        addBlock("Office Admin. Assistant<br /><br />HuaXia Chinese School");
        addBlock("International Crescendo Music Competition<br /><br />First Place (twice)");
        
        addBlock("Volleyball Coach<br />HuaXia Chinese School<br />School Summer Sports Camp");
        addBlock("NJMTA Spring Recitals<br />10 Year Award<br />Honors/High Honors");
        addBlock("Allegro Club Volleyball<br /><br />Travel Team 13-15");

        addBlock("Scholastic Competition<br /><br />Regional Gold Key");
        addBlock("Next GenVest<br /><br />Internship 16-");
        addBlock("Future City<br /><br />2nd Place in NJ");
        addBlock("FTC State Championships<br /><br />Promote Runner Up 15-16");
        
        addBlock("FTC Qualifier<br /><br />INSPIRE 14-15, 15-16");
        addBlock("FTC Qualifier<br /><br />PTC Design Award 15-16");
        addBlock("FTC Qualifier<br /><br />Rockwell Collins Innovate Award");

        addBlock("World Maker Faire<br /><br />Maker Booth (Robot Tent) 15-16");
        addBlock("Mini Maker Faire<br />Barnes and Noble<br />Maker Booth 2016");
        addBlock("National Spanish Exam<br /><br />Gold and Silver Medal");
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