$(document).ready(function () {
	// when a hanburger menu is clicked
	let $list = $(".nav_list"),
		$menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$list.toggleClass("menu-click");
		$menu.toggleClass("selected");
	}); // end click event handler

	let $selectable = $("#selectable");

	$($selectable).click(function()
	{
		$selectable.toggleClass("selected");
	})
	
	let mons1 = ["Stone", "Usually dormant, will give chase when touched by sound waves, often found in groups.","red" ]
	let mons2 =["Creeper", "Acts like a watchtower, rallying sleeping Stones when it spots you, near-sighted","green"]
	let mons3 =["Wanderer", "Always hungry, always moving, known as the Hunter of the Labyrinth","blue"]

	let monsArray = [mons1, mons2, mons3]

	let monIndex = 1;

	let $nextMon = $(".monster-info-next"),
		$monType = $("#monster-type"),
		$monBehv = $("#monster-behavior"),
		$monMedia = $(".placeholder-mons");

	$($nextMon).click(function(){
		if(monIndex<2)
		{
			monIndex++;
		}
		else monIndex=0;
		$monType.html(monsArray[monIndex][0]);
		$monBehv.html(monsArray[monIndex][1]);
		$monMedia.css("background-color",monsArray[monIndex][2]);
		
	})
});