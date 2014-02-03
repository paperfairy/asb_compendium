//These exist to hide and display different parts of the Compendium.
function HideDIV(d) {    document.getElementById(d).style.display = "none";}
function DisplayDIV(d) {    document.getElementById(d).style.display = "block";}

function ShowPic() {
//This allows the sprite to change when the Pokémon is changed.

   // Get the select values
    var sprite_1 = document.calculator.pokemon_1.options[document.calculator.pokemon_1.selectedIndex].value;
    var sprite_2 = document.calculator.pokemon_2.options[document.calculator.pokemon_2.selectedIndex].value;
    var sprite_3 = document.calculator.pokemon_3.options[document.calculator.pokemon_3.selectedIndex].value;
    var sprite_4 = document.calculator.pokemon_4.options[document.calculator.pokemon_4.selectedIndex].value;
    var sprite_5 = document.calculator.pokemon_5.options[document.calculator.pokemon_5.selectedIndex].value;
    var sprite_6 = document.calculator.pokemon_6.options[document.calculator.pokemon_6.selectedIndex].value;
    

    //MegaEvolutions and Formes 
if (sprite_1 == 10001){sprite_1 ="386-attack";}
if (sprite_1 == 10002){sprite_1 ="386-defense";}
if (sprite_1 == 10003){sprite_1 ="386-speed";}
if (sprite_1 == 10004){sprite_1 ="413-sandy";}
if (sprite_1 == 10005){sprite_1 ="413-trash";}
if (sprite_1 == 10006){sprite_1 ="479-frost";}
if (sprite_1 == 10007){sprite_1 ="487-origin";}
if (sprite_1 == 10008){sprite_1 ="492-sky ";}
if (sprite_1 == 10009){sprite_1 ="555-zen";}
if (sprite_1 == 10010){sprite_1 ="648-pirouette";}
if (sprite_1 == 10011){sprite_1 ="646-black";}
if (sprite_1 == 10012){sprite_1 ="646-white";}
if (sprite_1 == 10013){sprite_1 ="681-blade";}
if (sprite_1 == 10014){sprite_1 ="710-average";}
if (sprite_1 == 10015){sprite_1 ="710-large";}
if (sprite_1 == 10016){sprite_1 ="710-super";}
if (sprite_1 == 10017){sprite_1 ="711-average";}
if (sprite_1 == 10018){sprite_1 ="711-large";}
if (sprite_1 == 10019){sprite_1 ="711-super";}
if (sprite_1 == 90000){sprite_1 ="3-mega";}
if (sprite_1 == 90001){sprite_1 ="6-mega-x";}
if (sprite_1 == 90002){sprite_1 ="6-mega-y";}
if (sprite_1 == 90003){sprite_1 ="9-mega";}
if (sprite_1 == 90004){sprite_1 ="65-mega";}
if (sprite_1 == 90005){sprite_1 ="94-mega";}
if (sprite_1 == 90006){sprite_1 ="115-mega";}
if (sprite_1 == 90007){sprite_1 ="127-mega";}
if (sprite_1 == 90008){sprite_1 ="130-mega";}
if (sprite_1 == 90009){sprite_1 ="142-mega";}
if (sprite_1 == 90010){sprite_1 ="150-mega-x";}
if (sprite_1 == 90011){sprite_1 ="150-mega-y";}
if (sprite_1 == 90012){sprite_1 ="181-mega";}
if (sprite_1 == 90013){sprite_1 ="212-mega";}
if (sprite_1 == 90014){sprite_1 ="214-mega";}
if (sprite_1 == 90015){sprite_1 ="229-mega";}
if (sprite_1 == 90016){sprite_1 ="284-mega";}
if (sprite_1 == 90017){sprite_1 ="257-mega";}
if (sprite_1 == 90018){sprite_1 ="282-mega";}
if (sprite_1 == 90019){sprite_1 ="303-mega";}
if (sprite_1 == 90020){sprite_1 ="306-mega";}
if (sprite_1 == 90021){sprite_1 ="308-mega";}
if (sprite_1 == 90022){sprite_1 ="310-mega";}
if (sprite_1 == 90023){sprite_1 ="354-mega";}
if (sprite_1 == 90024){sprite_1 ="359-mega";}
if (sprite_1 == 90025){sprite_1 ="380-mega";}
if (sprite_1 == 90026){sprite_1 ="381-mega";}
if (sprite_1 == 90027){sprite_1 ="445-mega";}
if (sprite_1 == 90028){sprite_1 ="448-mega";}
if (sprite_1 == 90029){sprite_1 ="460-mega";}
if (sprite_2 == 10001){sprite_2 ="386-attack";}
if (sprite_2 == 10002){sprite_2 ="386-defense";}
if (sprite_2 == 10003){sprite_2 ="386-speed";}
if (sprite_2 == 10004){sprite_2 ="413-sandy";}
if (sprite_2 == 10005){sprite_2 ="413-trash";}
if (sprite_2 == 10006){sprite_2 ="479-frost";}
if (sprite_2 == 10007){sprite_2 ="487-origin";}
if (sprite_2 == 10008){sprite_2 ="492-sky ";}
if (sprite_2 == 10009){sprite_2 ="555-zen";}
if (sprite_2 == 10010){sprite_2 ="648-pirouette";}
if (sprite_2 == 10011){sprite_2 ="646-black";}
if (sprite_2 == 10012){sprite_2 ="646-white";}
if (sprite_2 == 10013){sprite_2 ="681-blade";}
if (sprite_2 == 10014){sprite_2 ="710-average";}
if (sprite_2 == 10015){sprite_2 ="710-large";}
if (sprite_2 == 10016){sprite_2 ="710-super";}
if (sprite_2 == 10017){sprite_2 ="711-average";}
if (sprite_2 == 10018){sprite_2 ="711-large";}
if (sprite_2 == 10019){sprite_2 ="711-super";}
if (sprite_2 == 90000){sprite_2 ="3-mega";}
if (sprite_2 == 90001){sprite_2 ="6-mega-x";}
if (sprite_2 == 90002){sprite_2 ="6-mega-y";}
if (sprite_2 == 90003){sprite_2 ="9-mega";}
if (sprite_2 == 90004){sprite_2 ="65-mega";}
if (sprite_2 == 90005){sprite_2 ="94-mega";}
if (sprite_2 == 90006){sprite_2 ="115-mega";}
if (sprite_2 == 90007){sprite_2 ="127-mega";}
if (sprite_2 == 90008){sprite_2 ="130-mega";}
if (sprite_2 == 90009){sprite_2 ="142-mega";}
if (sprite_2 == 90010){sprite_2 ="150-mega-x";}
if (sprite_2 == 90011){sprite_2 ="150-mega-y";}
if (sprite_2 == 90012){sprite_2 ="181-mega";}
if (sprite_2 == 90013){sprite_2 ="212-mega";}
if (sprite_2 == 90014){sprite_2 ="214-mega";}
if (sprite_2 == 90015){sprite_2 ="229-mega";}
if (sprite_2 == 90016){sprite_2 ="284-mega";}
if (sprite_2 == 90017){sprite_2 ="257-mega";}
if (sprite_2 == 90018){sprite_2 ="282-mega";}
if (sprite_2 == 90019){sprite_2 ="303-mega";}
if (sprite_2 == 90020){sprite_2 ="306-mega";}
if (sprite_2 == 90021){sprite_2 ="308-mega";}
if (sprite_2 == 90022){sprite_2 ="310-mega";}
if (sprite_2 == 90023){sprite_2 ="354-mega";}
if (sprite_2 == 90024){sprite_2 ="359-mega";}
if (sprite_2 == 90025){sprite_2 ="380-mega";}
if (sprite_2 == 90026){sprite_2 ="381-mega";}
if (sprite_2 == 90027){sprite_2 ="445-mega";}
if (sprite_2 == 90028){sprite_2 ="448-mega";}
if (sprite_2 == 90029){sprite_2 ="460-mega";}
if (sprite_3 == 10001){sprite_3 ="386-attack";}
if (sprite_3 == 10002){sprite_3 ="386-defense";}
if (sprite_3 == 10003){sprite_3 ="386-speed";}
if (sprite_3 == 10004){sprite_3 ="413-sandy";}
if (sprite_3 == 10005){sprite_3 ="413-trash";}
if (sprite_3 == 10006){sprite_3 ="479-frost";}
if (sprite_3 == 10007){sprite_3 ="487-origin";}
if (sprite_3 == 10008){sprite_3 ="492-sky ";}
if (sprite_3 == 10009){sprite_3 ="555-zen";}
if (sprite_3 == 10010){sprite_3 ="648-pirouette";}
if (sprite_3 == 10011){sprite_3 ="646-black";}
if (sprite_3 == 10012){sprite_3 ="646-white";}
if (sprite_3 == 10013){sprite_3 ="681-blade";}
if (sprite_3 == 10014){sprite_3 ="710-average";}
if (sprite_3 == 10015){sprite_3 ="710-large";}
if (sprite_3 == 10016){sprite_3 ="710-super";}
if (sprite_3 == 10017){sprite_3 ="711-average";}
if (sprite_3 == 10018){sprite_3 ="711-large";}
if (sprite_3 == 10019){sprite_3 ="711-super";}
if (sprite_3 == 90000){sprite_3 ="3-mega";}
if (sprite_3 == 90001){sprite_3 ="6-mega-x";}
if (sprite_3 == 90002){sprite_3 ="6-mega-y";}
if (sprite_3 == 90003){sprite_3 ="9-mega";}
if (sprite_3 == 90004){sprite_3 ="65-mega";}
if (sprite_3 == 90005){sprite_3 ="94-mega";}
if (sprite_3 == 90006){sprite_3 ="115-mega";}
if (sprite_3 == 90007){sprite_3 ="127-mega";}
if (sprite_3 == 90008){sprite_3 ="130-mega";}
if (sprite_3 == 90009){sprite_3 ="142-mega";}
if (sprite_3 == 90010){sprite_3 ="150-mega-x";}
if (sprite_3 == 90011){sprite_3 ="150-mega-y";}
if (sprite_3 == 90012){sprite_3 ="181-mega";}
if (sprite_3 == 90013){sprite_3 ="212-mega";}
if (sprite_3 == 90014){sprite_3 ="214-mega";}
if (sprite_3 == 90015){sprite_3 ="229-mega";}
if (sprite_3 == 90016){sprite_3 ="284-mega";}
if (sprite_3 == 90017){sprite_3 ="257-mega";}
if (sprite_3 == 90018){sprite_3 ="282-mega";}
if (sprite_3 == 90019){sprite_3 ="303-mega";}
if (sprite_3 == 90020){sprite_3 ="306-mega";}
if (sprite_3 == 90021){sprite_3 ="308-mega";}
if (sprite_3 == 90022){sprite_3 ="310-mega";}
if (sprite_3 == 90023){sprite_3 ="354-mega";}
if (sprite_3 == 90024){sprite_3 ="359-mega";}
if (sprite_3 == 90025){sprite_3 ="380-mega";}
if (sprite_3 == 90026){sprite_3 ="381-mega";}
if (sprite_3 == 90027){sprite_3 ="445-mega";}
if (sprite_3 == 90028){sprite_3 ="448-mega";}
if (sprite_3 == 90029){sprite_3 ="460-mega";}
if (sprite_4 == 10001){sprite_4 ="386-attack";}
if (sprite_4 == 10002){sprite_4 ="386-defense";}
if (sprite_4 == 10003){sprite_4 ="386-speed";}
if (sprite_4 == 10004){sprite_4 ="413-sandy";}
if (sprite_4 == 10005){sprite_4 ="413-trash";}
if (sprite_4 == 10006){sprite_4 ="479-frost";}
if (sprite_4 == 10007){sprite_4 ="487-origin";}
if (sprite_4 == 10008){sprite_4 ="492-sky ";}
if (sprite_4 == 10009){sprite_4 ="555-zen";}
if (sprite_4 == 10010){sprite_4 ="648-pirouette";}
if (sprite_4 == 10011){sprite_4 ="646-black";}
if (sprite_4 == 10012){sprite_4 ="646-white";}
if (sprite_4 == 10013){sprite_4 ="681-blade";}
if (sprite_4 == 10014){sprite_4 ="710-average";}
if (sprite_4 == 10015){sprite_4 ="710-large";}
if (sprite_4 == 10016){sprite_4 ="710-super";}
if (sprite_4 == 10017){sprite_4 ="711-average";}
if (sprite_4 == 10018){sprite_4 ="711-large";}
if (sprite_4 == 10019){sprite_4 ="711-super";}
if (sprite_4 == 90000){sprite_4 ="3-mega";}
if (sprite_4 == 90001){sprite_4 ="6-mega-x";}
if (sprite_4 == 90002){sprite_4 ="6-mega-y";}
if (sprite_4 == 90003){sprite_4 ="9-mega";}
if (sprite_4 == 90004){sprite_4 ="65-mega";}
if (sprite_4 == 90005){sprite_4 ="94-mega";}
if (sprite_4 == 90006){sprite_4 ="115-mega";}
if (sprite_4 == 90007){sprite_4 ="127-mega";}
if (sprite_4 == 90008){sprite_4 ="130-mega";}
if (sprite_4 == 90009){sprite_4 ="142-mega";}
if (sprite_4 == 90010){sprite_4 ="150-mega-x";}
if (sprite_4 == 90011){sprite_4 ="150-mega-y";}
if (sprite_4 == 90012){sprite_4 ="181-mega";}
if (sprite_4 == 90013){sprite_4 ="212-mega";}
if (sprite_4 == 90014){sprite_4 ="214-mega";}
if (sprite_4 == 90015){sprite_4 ="229-mega";}
if (sprite_4 == 90016){sprite_4 ="284-mega";}
if (sprite_4 == 90017){sprite_4 ="257-mega";}
if (sprite_4 == 90018){sprite_4 ="282-mega";}
if (sprite_4 == 90019){sprite_4 ="303-mega";}
if (sprite_4 == 90020){sprite_4 ="306-mega";}
if (sprite_4 == 90021){sprite_4 ="308-mega";}
if (sprite_4 == 90022){sprite_4 ="310-mega";}
if (sprite_4 == 90023){sprite_4 ="354-mega";}
if (sprite_4 == 90024){sprite_4 ="359-mega";}
if (sprite_4 == 90025){sprite_4 ="380-mega";}
if (sprite_4 == 90026){sprite_4 ="381-mega";}
if (sprite_4 == 90027){sprite_4 ="445-mega";}
if (sprite_4 == 90028){sprite_4 ="448-mega";}
if (sprite_4 == 90029){sprite_4 ="460-mega";}
if (sprite_5 == 10001){sprite_5 ="386-attack";}
if (sprite_5 == 10002){sprite_5 ="386-defense";}
if (sprite_5 == 10003){sprite_5 ="386-speed";}
if (sprite_5 == 10004){sprite_5 ="413-sandy";}
if (sprite_5 == 10005){sprite_5 ="413-trash";}
if (sprite_5 == 10006){sprite_5 ="479-frost";}
if (sprite_5 == 10007){sprite_5 ="487-origin";}
if (sprite_5 == 10008){sprite_5 ="492-sky ";}
if (sprite_5 == 10009){sprite_5 ="555-zen";}
if (sprite_5 == 10010){sprite_5 ="648-pirouette";}
if (sprite_5 == 10011){sprite_5 ="646-black";}
if (sprite_5 == 10012){sprite_5 ="646-white";}
if (sprite_5 == 10013){sprite_5 ="681-blade";}
if (sprite_5 == 10014){sprite_5 ="710-average";}
if (sprite_5 == 10015){sprite_5 ="710-large";}
if (sprite_5 == 10016){sprite_5 ="710-super";}
if (sprite_5 == 10017){sprite_5 ="711-average";}
if (sprite_5 == 10018){sprite_5 ="711-large";}
if (sprite_5 == 10019){sprite_5 ="711-super";}
if (sprite_5 == 90000){sprite_5 ="3-mega";}
if (sprite_5 == 90001){sprite_5 ="6-mega-x";}
if (sprite_5 == 90002){sprite_5 ="6-mega-y";}
if (sprite_5 == 90003){sprite_5 ="9-mega";}
if (sprite_5 == 90004){sprite_5 ="65-mega";}
if (sprite_5 == 90005){sprite_5 ="94-mega";}
if (sprite_5 == 90006){sprite_5 ="115-mega";}
if (sprite_5 == 90007){sprite_5 ="127-mega";}
if (sprite_5 == 90008){sprite_5 ="130-mega";}
if (sprite_5 == 90009){sprite_5 ="142-mega";}
if (sprite_5 == 90010){sprite_5 ="150-mega-x";}
if (sprite_5 == 90011){sprite_5 ="150-mega-y";}
if (sprite_5 == 90012){sprite_5 ="181-mega";}
if (sprite_5 == 90013){sprite_5 ="212-mega";}
if (sprite_5 == 90014){sprite_5 ="214-mega";}
if (sprite_5 == 90015){sprite_5 ="229-mega";}
if (sprite_5 == 90016){sprite_5 ="284-mega";}
if (sprite_5 == 90017){sprite_5 ="257-mega";}
if (sprite_5 == 90018){sprite_5 ="282-mega";}
if (sprite_5 == 90019){sprite_5 ="303-mega";}
if (sprite_5 == 90020){sprite_5 ="306-mega";}
if (sprite_5 == 90021){sprite_5 ="308-mega";}
if (sprite_5 == 90022){sprite_5 ="310-mega";}
if (sprite_5 == 90023){sprite_5 ="354-mega";}
if (sprite_5 == 90024){sprite_5 ="359-mega";}
if (sprite_5 == 90025){sprite_5 ="380-mega";}
if (sprite_5 == 90026){sprite_5 ="381-mega";}
if (sprite_5 == 90027){sprite_5 ="445-mega";}
if (sprite_5 == 90028){sprite_5 ="448-mega";}
if (sprite_5 == 90029){sprite_5 ="460-mega";}
if (sprite_6 == 10001){sprite_6 ="386-attack";}
if (sprite_6 == 10002){sprite_6 ="386-defense";}
if (sprite_6 == 10003){sprite_6 ="386-speed";}
if (sprite_6 == 10004){sprite_6 ="413-sandy";}
if (sprite_6 == 10005){sprite_6 ="413-trash";}
if (sprite_6 == 10006){sprite_6 ="479-frost";}
if (sprite_6 == 10007){sprite_6 ="487-origin";}
if (sprite_6 == 10008){sprite_6 ="492-sky ";}
if (sprite_6 == 10009){sprite_6 ="555-zen";}
if (sprite_6 == 10010){sprite_6 ="648-pirouette";}
if (sprite_6 == 10011){sprite_6 ="646-black";}
if (sprite_6 == 10012){sprite_6 ="646-white";}
if (sprite_6 == 10013){sprite_6 ="681-blade";}
if (sprite_6 == 10014){sprite_6 ="710-average";}
if (sprite_6 == 10015){sprite_6 ="710-large";}
if (sprite_6 == 10016){sprite_6 ="710-super";}
if (sprite_6 == 10017){sprite_6 ="711-average";}
if (sprite_6 == 10018){sprite_6 ="711-large";}
if (sprite_6 == 10019){sprite_6 ="711-super";}
if (sprite_6 == 90000){sprite_6 ="3-mega";}
if (sprite_6 == 90001){sprite_6 ="6-mega-x";}
if (sprite_6 == 90002){sprite_6 ="6-mega-y";}
if (sprite_6 == 90003){sprite_6 ="9-mega";}
if (sprite_6 == 90004){sprite_6 ="65-mega";}
if (sprite_6 == 90005){sprite_6 ="94-mega";}
if (sprite_6 == 90006){sprite_6 ="115-mega";}
if (sprite_6 == 90007){sprite_6 ="127-mega";}
if (sprite_6 == 90008){sprite_6 ="130-mega";}
if (sprite_6 == 90009){sprite_6 ="142-mega";}
if (sprite_6 == 90010){sprite_6 ="150-mega-x";}
if (sprite_6 == 90011){sprite_6 ="150-mega-y";}
if (sprite_6 == 90012){sprite_6 ="181-mega";}
if (sprite_6 == 90013){sprite_6 ="212-mega";}
if (sprite_6 == 90014){sprite_6 ="214-mega";}
if (sprite_6 == 90015){sprite_6 ="229-mega";}
if (sprite_6 == 90016){sprite_6 ="284-mega";}
if (sprite_6 == 90017){sprite_6 ="257-mega";}
if (sprite_6 == 90018){sprite_6 ="282-mega";}
if (sprite_6 == 90019){sprite_6 ="303-mega";}
if (sprite_6 == 90020){sprite_6 ="306-mega";}
if (sprite_6 == 90021){sprite_6 ="308-mega";}
if (sprite_6 == 90022){sprite_6 ="310-mega";}
if (sprite_6 == 90023){sprite_6 ="354-mega";}
if (sprite_6 == 90024){sprite_6 ="359-mega";}
if (sprite_6 == 90025){sprite_6 ="380-mega";}
if (sprite_6 == 90026){sprite_6 ="381-mega";}
if (sprite_6 == 90027){sprite_6 ="445-mega";}
if (sprite_6 == 90028){sprite_6 ="448-mega";}
if (sprite_6 == 90029){sprite_6 ="460-mega";}
    // Create our Image
    var s1Image = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + sprite_1 + ".png";
    var s2Image = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + sprite_2 + ".png";
    var s3Image = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + sprite_3 + ".png";
    var s4Image = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + sprite_4 + ".png";
    var s5Image = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + sprite_5 + ".png";
    var s6Image = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + sprite_6 + ".png";

if (s1Image == "http://veekun.com/dex/media/pokemon/main-sprites/x-y/0.png" )
    {s1Image = "http://veekun.com/dex/media/pokemon/main-sprites/black-white/0.png";}
if (s2Image == "http://veekun.com/dex/media/pokemon/main-sprites/x-y/0.png" )
    {s2Image = "http://veekun.com/dex/media/pokemon/main-sprites/black-white/0.png";}
if (s3Image == "http://veekun.com/dex/media/pokemon/main-sprites/x-y/0.png" )
    {s3Image = "http://veekun.com/dex/media/pokemon/main-sprites/black-white/0.png";}
if (s4Image == "http://veekun.com/dex/media/pokemon/main-sprites/x-y/0.png" )
    {s4Image = "http://veekun.com/dex/media/pokemon/main-sprites/black-white/0.png";}
if (s5Image == "http://veekun.com/dex/media/pokemon/main-sprites/x-y/0.png" )
    {s5Image = "http://veekun.com/dex/media/pokemon/main-sprites/black-white/0.png";}
if (s6Image == "http://veekun.com/dex/media/pokemon/main-sprites/x-y/0.png" )
    {s6Image = "http://veekun.com/dex/media/pokemon/main-sprites/black-white/0.png";}

    // Assign the image
    document.getElementById('sprite_1').src = s1Image;
    document.getElementById('sprite_2').src = s2Image;
    document.getElementById('sprite_3').src = s3Image;
    document.getElementById('sprite_4').src = s4Image;
    document.getElementById('sprite_5').src = s5Image;
    document.getElementById('sprite_6').src = s6Image;
}

//This opens the anime description page for the attack being selected.
function openPopup(val) {
    if (document.calculator.atkdesc.value == 1)
        {
            window.open("http://bulbapedia.bulbagarden.net/wiki/"+val+"#In_the_anime");
        }
}
	