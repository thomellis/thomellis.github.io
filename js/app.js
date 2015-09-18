/**
 * Created by tellis on 9/15/2015.
 */

$(function () {
    //$("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='tooltip']").each(function () {
        var id = $(this).attr('pid');
        var elem = $(this);
        $.ajax({
            url: "http://games.espn.go.com/ffl/format/playerpop/overview?leagueId=337385&playerId=" + id + "&playerIdType=playerId&seasonId=2015",
            success: function (result) {
                result += '<div class="pc_foot"><img onclick="test();" src="../img/close.gif" width="71" height="20" border="0" alt="CLOSE" class="close_btn"></div>';
                elem.attr('data-original-title', result);
            }
        });
        $(this).tooltip();
    });

});

function test() {
    $('div.in').each(function () {
        $(this).tooltip('hide');
    });
}