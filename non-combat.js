story.name;
story.setHeroName = function(name) {
            console.log(name);
            story.name = name;
};
story.getHeroName = function() {
   return story.name;
};
story.inputName = function() {
                story.name = prompt("She calls the name:", "Hero");
            }
story.gender;
story.setHeroGender = function(gender) {
  console.log(gender);
  story.gender = gender;
};
story.getHeroGender = function() {
    return story.gender;
};
story.heroLevel = 1;
story.strength = 0;
story.agility = 0;
story.charisma = 0;
story.intelligence = 0;
story.resolve = 0;
story.setHeroAttribute = function(attribute, number) {
    console.log(attribute)
    console.log(number)
    if (attribute === "strength") {
        story.strength += number
    console.log(story.strength)}
    if (attribute === "agility") {
        story.agility += number
        console.log(story.agility)}
    if (attribute === "charisma") {
        story.charisma += number
    console.log(story.charisma)}
    if (attribute === "intelligence") {
        story.intelligence += number
    console.log(story.intelligence)}
    if (attribute === "resolve") {
        story.resolve += number
    console.log(story.resolve)}
    };
story.hardcheck =0;
story.averagecheck =0;
story.easycheck =0;
story.calculateDifficulty = function() {
    if (story.heroLevel === 1) {
        story.hardcheck = 15;
        story.averagecheck =10;
        story.easycheck =5;
    }
    if (story.heroLevel === 2) {
        story.hardcheck = 20;
        story.averagecheck = 15;
        story.easycheck = 5;
    }
    if (story.heroLevel === 3) {
        story.hardcheck = 25
        story.averagecheck = 20
        story.easycheck = 10;
    }
    if (story.heroLevel === 4) {
        story.hardcheck = 30;
        story.averagecheck = 25;
        story.easycheck = 15;
    }
    if (story.heroLevel === 5) {
        story.hardcheck = 35;
        story.averagecheck = 30;
        story.easycheck = 15;
    }
    if (story.heroLevel === 6) {
        story.hardcheck = 40;
        story.averagecheck = 35;
        story.easycheck = 20;
    }
    if (story.heroLevel === 7) {
        story.hardcheck = 50;
        story.averagecheck = 40;
        story.easycheck = 20;
    }
    if (story.heroLevel === 8) {
        story.hardcheck = 60;
        story.averagecheck = 40;
        story.Easycheck = 25;
    }
    if (story.heroLevel === 9) {
        story.hardcheck = 65;
        story.averagecheck = 45;
        story.easycheck = 25;
    }
    if (story.heroLevel === 10) {
        story.hardcheck= 70;
        story.averagecheck = 50;
        story.easycheck = 30;
    }
};
story.skillcheck = function(attribute, difficulty) {
    story.calculateDifficulty;
    if (attribute === "strength") {
        if (difficulty == "hard") {
            if (story.strength >= story.hardcheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "average") {
            if (story.strength >= story.averagecheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "easy") {
            if (story.strength >= story.easycheck) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    if (attribute === "agility") {
        if (difficulty == "hard") {
            if (story.agility >= story.hardcheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "average") {
            if (story.agility >= story.averagecheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "easy") {
            if (story.agility >= story.easycheck) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    if (attribute == "charisma") {
        if (difficulty == "hard") {
            if (story.charisma >= story.hardcheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "average") {
            if (story.charisma >= story.averagecheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "easy") {
            if (story.charisma >= story.easycheck) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    if (attribute == "intelligence") {
        if (difficulty == "hard") {
            if (story.intelligence >= story.hardcheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "average") {
            if (story.intelligence >= story.averagecheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "easy") {
            if (story.intelligence >= story.easycheck) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    if (attribute == "resolve") {
        if (difficulty == "hard") {
            if (story.resolve >= story.hardcheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "average") {
            if (story.resolve >= story.averagecheck) {
                return true;
            }
            else {
                return false;
            }
        }
        if (difficulty == "easy") {
            if (story.resolve >= story.easycheck) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
story.currentpage;
story.aeronaRom = 0;
story.rhainRom = 0;
story.emrysRom =0;
story.ikemmaRom =false;
story.villainousPath = 0;
story.redeemedPath = 0;
story.advantage18 = false;
story.heroclass = 'no-class';
story.setheroclass = function(heroclass) {
    story.heroclass = heroclass;
}
var party = ["Rhain", "Aerona", "Mabyn", "Wooly", "Beca", "Emrys", "Thisbe", "Samset"]
story.addcompanion = function(companion) {
    if (companion === "Rhain") {
        party[0] = "Rhain"
    }
    if (companion === "Aerona") {
        party[1] = "Aerona"
    }
    if (companion === "Mabyn") {
        party[2] = "Mabyn"
    }
    if (companion === "Wooly") {
        party[3] = "Wooly"
    }
    if (companion === "Beca") {
        party[4] = "Beca"
    }
    if (companion === "Emrys") {
        party[4] = "Emrys"
    }
    if (companion === "Thisbe") {
        party[5] = "Thisbe"
    }
    if (companion === "Samset") {
        party[6] = "Samset"
    }
    console.log(party)}
story.removecompanion = function(companion){
    if (companion === "Rhain") {
        delete party[0]
    }
    if (companion === "Aerona") {
        delete party[1]
    }
    if (companion === "Mabyn") {
        delete party[2]
    }
    if (companion === "Wooly") {
        delete party[3]
    }
    if (companion === "Beca") {
        delete party[4]
    }
    if (companion === "Emrys") {
        delete party[5]
    }
    if (companion === "Thisbe") {
        delete party[6]
    }
    if (companion === "Samset") {
        delete party[7]
    }
    console.log(party)
}
story.changecss = function(type) {
    if (type == "sleep") {
        $("body").css({"background-color":"black", "color":"floralwhite"})
        $("#header").css({"border-color":"white"})
        $("#header").css("backgroundImage", "url(images/sleepheader.png)")
        $("#main").css({"border-color":"white"})
        $("#options").css({"border-color":"white"})
        $('#balloon').css({"background":"493A78"})
        $('#balloon:after').css({"border-right-color":"493A78"})
        
    }
    if (type=="combat") {
        $("#header").css("backgroundImage", "url(images/combatheader.png)")
        $("body").css({"background-color":"floralwhite", "color":"black"})
        $("#header").css({"border-color":"black"})
    }
    if (type == "mountains") {
        $("#header").css("backgroundImage", "url(images/mountainheader..png)")
        $("body").css({"background-color":"floralwhite", "color":"black"})
        $("#header").css({"border-color":"black"})
    }
    if (type == "title") {
        $("#header").css("backgroundImage", "url(images/titleheader.png)")
        $("body").css({"background-color":"floralwhite", "color":"black"})
        $("#header").css({"border-color":"black"})
    }
    if (type=="memory") {
        $("#header").css("backgroundImage", "url(images/memoryheader..png)")
        $("body").css({"background-color":"floralwhite", "color":"black"})
        $("#header").css({"border-color":"black"})
    }
    if (type=="nightsky") {
         $("body").css({"background-color":"black", "color":"floralwhite"})
        $("#header").css({"border-color":"white"})
        $("#header").css("backgroundImage", "url(images/nightskyheader.png)")
        $("#main").css({"border-color":"white"})
        $("#options").css({"border-color":"white"})
        $('#balloon').css({"background":"#493A78"})
        $('#balloon:after').css({"border-right-color":"#493A78"})
        $('#dialog').css({"border-color":"white"})
    }
    if (type=="innnight") {
        $("#header").css("backgroundImage", "url(images/innheader.png)")
        $("body").css({"background-color":"black", "color":"floralwhite"})
        $("#header").css({"border-color":"white"})
        $("#main").css({"border-color":"white"})
        $("#options").css({"border-color":"white"})
        $('#balloon').css({"background":"#493A78"})
        $('#balloon:after').css({"border-right-color":"#493A78"})
        $('#dialog').css({"border-color":"white"})
    }
    if (type=="bedroomnight") {
         $("#header").css("backgroundImage", "url(images/bedroomNightheader.png)")
        $("body").css({"background-color":"black", "color":"floralwhite"})
        $("#header").css({"border-color":"white"})
        $("#main").css({"border-color":"white"})
        $("#options").css({"border-color":"white"})
        $('#balloon').css({"background":"#493A78"})
        $('#balloon:after').css({"border-right-color":"#493A78"})
    }
    if (type=="bedroomday") {
        $("#header").css("backgroundImage", "url(images/bedroomDayheader.png)")
        $("body").css({"background-color":"floralwhite", "color":"black"})
        $("#header").css({"border-color":"black"})
        $('#dialog').css({"border-color":"white"})
    }
}
story.changeportrait = function(name) {
         $("#dialogue").css("backgroundImage", "url(/images/" + name +".png")
    }
window.onkeyup = function(event) {
    if(event.which ==49 || event.which ==97) {
        document.getElementById("choice1").click();
    }
    if(event.which ==50 || event.which ==98) {
         document.getElementById("choice2").click();
    }
    if(event.which ==51 || event.which ==99) {
         document.getElementById("choice3").click();
    }
    if(event.which ==52 || event.which ==100) {
         document.getElementById("choice4").click();
    }
    if(event.which ==53 || event.which ==101) {
         document.getElementById("choice5").click();
    }
    if(event.which ==54 || event.which ==102) {
         document.getElementById("choice6").click();
    }
    if(event.which == 13) {
         document.getElementById("next").click();
    }
}
story.opmemory1 =false;
story.firstdreamkey = false;
story.date = "day 1"
story.openjournal = function() {
    story.currentpage = story.getCurrentPageId()
    console.log(story.currentpage)
    story.turnTo("journal")
    console.log(story.getCurrentPageId())
}
story.closejournal = function() {
    console.log(story.currentpage)
    console.log(story.getCurrentPageId())
    story.turnTo(story.currentpage)
    console.log(story.getCurrentPageId())
}
story.checkpoint = function() {
    localStorage.setItem("currentpage", story.getCurrentPageId())
    story.changecss('title')
    console.log(story.getCurrentPageId())
    localStorage.setItem("name", story.name)
    localStorage.setItem("gender", story.gender)
    localStorage.setItem("HeroLevel", story.heroLevel)
    localStorage.setItem("strength", story.strength)
    localStorage.setItem("agility", story.agility)
    localStorage.setItem("charisma", story.charisma)
    localStorage.setItem("intelligence", story.intelligence)
    localStorage.setItem("resolve", story.resolve)
    localStorage.setItem("villainP", story.villainousPath)
    localStorage.setItem("redeemP", story.redeemedPath)
    localStorage.setItem("heroClass", story.heroclass)
    localStorage.setItem("aeronaRom", story.aeronaRom)
    localStorage.setItem("rhainRom", story.rhainRom)
    localStorage.setItem("emrysRom", story.emrysRom)
    localStorage.setItem("ikemmaRom", story.ikemmaRom)
    localStorage.setItem("date", story.date)
    localStorage.setItem("opMem1", story.opmemory1)
}
story.loadcheckpoint = function() {
    if (localStorage.currentpage != undefined) {
    story.turnTo(localStorage.currentpage)
    console.log(story.getCurrentPageId())
    story.name = localStorage.name
    story.gender = localStorage.gender
    story.HeroLevel = localStorage.HeroLevel
    story.strength = localStorage.strength
    story.agility = localStorage.agility
    story.charisma = localStorage.charisma
    story.intelligence = localStorage.intelligence
    story.resolve = localStorage.resolve
    story.villainousPath = localStorage.villainP
    story.redeemedPath = localStorage.redeemP
    story.heroclass = localStorage.heroClass
    story.aeronaRom = localStorage.aeronaRom
    story.rhainRom = localStorage.rhainRom
    story.emrysRom = localStorage.emrysRom
    story.ikemmaRom = localStorage.ikemmaRom
    story.date = localStorage.date
    story.opmemory1 = localStorage.opMem1
        }
    if (localStorage.currentpage == undefined) {
        window.alert('No checkpoint found')
    }
} //remember not to put a checkpoint in the middle of a section with a change in your party ; put it right before you choose the party
story.newgame = function() {
    var txt;
    var n = confirm('This will delete any saved checkpoint. Do you want to proceed anyway ?')
        console.log(n)
    if (n == true) {
        story.turnTo("intro1")
        story.changecss('sleep')
        console.log(story.getCurrentPageId())
        story.name;
        story.heroLevel = 1;
        story.strength = 0;
        story.agility = 0;
        story.charisma = 0;
        story.intelligence = 0;
        story.resolve = 0;
        story.aeronaRom = 0;
        story.rhainRom = 0;
        story.emrysRom =0;
        story.ikemmaRom =false;
        story.villainousPath = 0;
        story.redeemedPath = 0;
        story.advantage18 = false;
        story.heroclass = 'no-class';
        story.opmemory1 =false;
        story.date = "day 1"
            }
    else {
        console.log(n)
}
}