story.heroDefense;
story.defenseBonus = 0;
story.initialheroHP;
story.heroHP;
story.setheroHP = function() {
    story.heroHP = story.heroLevel*25 + story.resolve
    story.initialheroHP = story.heroHP;
    console.log(story.heroHP)
}
story.setHeroDefense = function() {
    story.heroDefense = 10 + story.agility + story.heroLevel + story.defenseBonus
    console.log(story.heroDefense);
}
story.enemyname;
story.setenemyname = function(name) {
    story.enemyname = name
}
story.enemystrength;
story.enemyagility;
story.enemyintelligence;
story.enemyresolve;
story.enemyspecial
story.initialenemyHP;
story.enemyHP;
story.enemyDefense;
story.enemyDefenseBonus = 0;
story.setenemyDefense = function() {
    story.enemyDefense = 10 + story.enemyagility + story.heroLevel + story.enemyDefenseBonus
    console.log(story.enemyDefense);
}
story.hitdamage = 0;
story.combatdistance;
story.initialcombatdistance;
story.specialuse =0;
story.companionactionuseR =0;
story.companionactionuseA =0;
story.companionactionuseM =0;
story.companionactionuseW =0;
story.companionactionuseB =0;
story.companionactionuseE =0;
story.companionactionuseT =0;
story.companionactionuseS =0;
story.turnaction =0;
story.optioncounter;
story.lastroll = 0;
var effects = {burn: 0, poison: 0, wrestle: 0, thorns: 0, bloody: 0, fallen: 0, caltrops: 0, nightmare: 0, robot: 0};
var enemyeffects = {burn: 0, poison: 0, wrestle: 0, thorns: 0, bloody: 0, fallen: 0, nightmare: 0, robot: 0};
story.herospecialMeagan = function() {
    if (story.enemyname == "testenemy") {
        story.enemyHP -= story.diceroll(6, story.heroLevel)
        story.combatdistance = 2
        $('.combat').empty()
        $('.combat').append("You've used your special")
    }
    story.specialuse =1
    story.turnaction +=1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next"  id="next" onclick="story.heroturn()">Take another action</div>')
    }
}
story.herospecialMaeri = function() {
    if (story.enemyname == "testenemy") {
        effects["poison"]=4
        story.specialuse =1
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
}; 
story.herospecialTamwen = function() {
    if (story.enemyname == "testenemy") {
        story.diceroll(6, story.heroLevel)
        story.enemyHP -= total
        effects["burn"] =4
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    story.specialuse = 1
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next"onclick="story.heroturn()">Take another action</div>')
    }
};
story.herospecialBriar = function() {
    if (story.enemyname == "testenemy") {
        effects["fallen"] =2
        story.enemyDefense -=10
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    story.specialuse =1
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
    if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }

};
story.herospecialTrystin = function() {
    if (story.enemyname == "testenemy") {
        story.diceroll(10, story.heroLevel)
        story.heroHP += total
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    story.specialuse =1
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
}
story.herospecialDaere = function() {
    if (story.enemyname == "testenemy") {
        effects["nightmare"] = 2
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    story.specialuse =1
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
};
story.herospecialGorawen = function() {
    if (story.enemyname == "testenemy") {
        effects["robot"] = 5
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    story.specialuse =1
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
    if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
};
story.herospecialAneira = function() {
    story.specialuse = 1
    if (story.enemyname == "testenemy") {
        effects["caltrops"] =4
        $('.combat').empty
        $('.combat').append("You've used your special")
    }
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
};
story.companionactionRhain = function() {
    if (story.enemyname == "sbire") {
        $('.combat').empty()
        $('.combat').append("<p>Rhain is quick to respond to your call for help. A small bolt of fire appears in his right palm and shoots towards the rough man, who seems too focused on fighting you to see the approaching threat. The blacksmith smiles as the bolt reaches his target, setting the fabric of his clothes on fire.</p>")
        story.enemyHP -= story.heroLevel * 5
        effects["burn"] = 4
    }
    if (story.enemyname =="testenemy") {
        $('.combat').empty()
        $('.combat').append("<p>Rhain attacks the enemy</p>")
        story.enemyHP -= story.heroLevel * 5
        effects["burn"] = 4
    }
    story.turnaction +=1
    story.companionactionuseR =1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
};
story.companionactionAerona = function() {
    if (story.enemyname == "sbire") {
        $('.combat').empty()
        story.enemyHP -= story.heroLevel * 10
        $('.combat').append("<p>Aerona nods gravely upon hearing her name called. Her heavy sword raised, she rushes towards your opponent and swings her blade. The wounded man is unable to dodge and takes a painful-looking blow to his right flank.</p>")
    }
    if (story.enemyname =="testenemy") {
        $('.combat').empty()
        story.enemyHP -= story.heroLevel * 10
        $('.combat').append("<p>Aerona attacks the enemy</p>")
    }
    story.turnaction+=1
    story.companionactionuseA =1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
}
story.companionactionMabyn = function() {
    story.turnaction +=1
    if (story.enemyname == "sbire") {
        effects["thorns"] = 4
        $('.combat').empty()
        $('.combat').append("<p>The old woman grumbles somewhat as you call her name, but raises her staff nonetheless. Thorny plant stems emerge from the ground between you and the man, forming a circle around you ; you are both imprisoned and protected by it. Crossing the circle wouldn't be impossible, but it would be painful.</p>")
    }
    if (story.enemyname == "testenemy") {
        effects["thorns"] = 4
        $('.combat').empty()
        $('.combat').append("<p>Mabyn has attacked the enemy</p>")
    }
    story.companionactionuseM =1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }
};
story.companionactionWooly = function() {
    story.turnaction+=1
    $('.combat').empty()
    if (story.enemyname == "sbire") {
        $('.combat').append("<p>The goat-like creature snaps his head towards you. He then makes his way towards your opponent, seeming casual. You're not sure he understood your need for help until he grapples the rough man, who has no choice but to try and wrestle himself free.</p>")
        story.enemyHP -= story.heroLevel * 5
        effects["wrestle"] = 2
        story.enemyDefense -=10
    }
    if (story.enemyname == "testenemy") {
        $('.combat').append("<p>Wooly has attacked the enemy</p>")
        story.enemyHP -= story.heroLevel * 5
        effects["wrestle"] = 2
        story.enemyDefense -=10
    }
    story.companionactionuseW =1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }

};
story.companionactionBeca = function() {
    $('.combat').empty()
    if (story.enemy == "testenemy") {
        story.enemyHP -= story.heroLevel * 5
        story.companionactionuseB =1
        effects["bloody"] = 2
        story.enemyDefense -=10
        $('.combat').append("Beca has attacked the enemy")
    }
    story.turnaction +=1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }

};
story.companionactionEmrys = function() {
    if (story.enemy == "testenemy") {
        $('.combat').empty()
        $('.combat').append("Emrys has attacked the enemy")
        if (Math.round(story.combatdistance/20)>10) {
        story.enemyHP -= story.heroLevel * 5 + 10
    }
        if (Math.round(story.combatdistance/20)<1) {
        story.enemyHP -= story.heroLevel * 5 + 1
    }
        if (Math.round(story.combatdistance/20)>=1 && Math.round(story.combatdistance/20)<=10) {
    story.enemyHP -= story.heroLevel * 5 + Math.round(story.combatdistance/20)
    } 
        }
    story.turnaction+=1
    story.companionactionuseE =1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }

};
story.companionactionThisbe = function() {
    story.turnaction +=1
    $('.combat').empty()
    if (story.enemyname == "testenemy") {
        if (Math.round(story.combatdistance/20)>10) {
        story.enemyHP -= story.heroLevel * 5 + 10
    }
        if (Math.round(story.combatdistance/20)<1) {
        story.enemyHP -= story.heroLevel * 5 + 1
    }
        if (Math.round(story.combatdistance/20)>=1 && Math.round(story.combatdistance/20)<=10) {
    story.enemyHP -= story.heroLevel * 5 + Math.round(story.combatdistance/20)
                                                    }
        $('.combat').append("Thisbe has attacked the enemy")
    }
    story.companionactionuseT =1
    console.log(story.enemyHP)
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }

    
}
story.companionactionSamset = function() {
    story.turnaction+=1
    story.companionactionuseS = 1
    story.heroHP += story.heroLevel * 10
    $('.combat').empty()
    $('.combat').append("Samset has healed you")
    if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
     if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
    }

};
story.attack= function(attribute, attacker) {
    console.log("enemy defense =" + story.enemyDefense)
    console.log(attribute)
    if (attacker == "Hero") {
        story.turnaction+=1
        story.lastroll = story.diceroll(20, 1)
        if (story.lastroll + attribute >= story.enemyDefense) {
            console.log("successful hit")
            $(".combat").empty()
            story.hitdamage = story.diceroll(6, story.heroLevel)
            story.enemyHP -= story.hitdamage
            console.log(story.enemyHP)
            if (story.enemyname == "sbire") {
                if (5*story.heroLevel < story.hitdamage && story.hitdamage <= 6*story.heroLevel) {
                 $(".combat").append("<p>Bypassing his own raised sword, you slice through the leather of the rough man's armour. Blood coats your blade and his midsection.</p>")
                 }
                if (3*story.heroLevel <= story.hitdamage && story.hitdamage <= 5*story.heroLevel) {
                 $(".combat").append("<p>You aim for the man's torso but his sword clashes with yours. His shaking arm gives way after some pushing and your blade finds time to slice his shoulder before he parries you once more.</p>")
                 }
                if (1*story.heroLevel <= story.hitdamage && story.hitdamage < 3*story.heroLevel) {
                    $('.combat').append('<p>The man parries you, your two swords grinding against one another as you both exert strength. You take another swing at him and miss ; only on your third hit do you slice through his glove, inflicting a cut on the back of his hand. An unpleasant but non-lethal wound.</p>')
                }
                    
                };
            if (story.enemyname =="testenemy") {
                if (attribute == "story.strength") {
                    if (5*story.heroLevel < story.hitdamage && story.hitdamage <= 6*story.heroLevel) {
                 $(".combat").append("<p>High damage placeholder</p>")
                 }
                    if (3*story.heroLevel <= story.hitdamage && story.hitdamage <= 5*story.heroLevel) {
                 $(".combat").append("<p>Medium damage placeholder</p>")
                 }
                    if (1*story.heroLevel <= story.hitdamage && story.hitdamage < 3*story.heroLevel) {
                    $('.combat').append('<p>Low damage placeholder</p>')
                }
                }
                if (attribute == "story.agility") {
                    if (5*story.heroLevel < story.hitdamage && story.hitdamage <= 6*story.heroLevel) {
                 $(".combat").append("<p>High damage placeholder</p>")
                 }
                    if (3*story.heroLevel <= story.hitdamage && story.hitdamage <= 5*story.heroLevel) {
                 $(".combat").append("<p>Medium damage placeholder</p>")
                 }
                    if (1*story.heroLevel <= story.hitdamage && story.hitdamage < 3*story.heroLevel) {
                    $('.combat').append('<p>Low damage placeholder</p>')
                }
                }
                if (attribute == "story.intelligence") {
                    if (5*story.heroLevel < story.hitdamage && story.hitdamage <= 6*story.heroLevel) {
                 $(".combat").append("<p>High damage placeholder</p>")
                 }
                    if (3*story.heroLevel <= story.hitdamage && story.hitdamage <= 5*story.heroLevel) {
                 $(".combat").append("<p>Medium damage placeholder</p>")
                 }
                    if (1*story.heroLevel <= story.hitdamage && story.hitdamage < 3*story.heroLevel) {
                    $('.combat').append('<p>Low damage placeholder</p>')
                }
            }
}
            }
        if (story.lastroll == 20) {
            console.log("crit")
            if (story.enemyname =="sbire") {
            $('.combat').empty()
            story.enemyHP -= story.diceroll(6, 2*story.heroLevel)
            $('.combat').append("<p>You swing your sword laboriously and feel it connect with the man's torso. Vibrations travel through your forearms as he's pushed back, and you must grip your sword harder to avoid dropping it. That was a good hit.</p>")
        }
            if (story.enemyname =="testenemy") {
                $(".combat").empty();
                story.enemyHP -= story.diceroll(6, story.heroLevel*2)
                $(".combat").append("<p>Critical hit placeholder</p>")
            }
        };
        if (story.lastroll + attribute < story.enemyDefense) {
            console.log("failure to hit")
            if (story.enemyname == "sbire") {
                $(".combat").empty()
                story.lastroll = story.diceroll(3,1)
                if (story.lastroll == 1) {
                   $(".combat").append("<p>You swing your sword towards the man with too much strength, and you tumble forward. You regain your balance, but not your dignity.</p>") 
                }
                if (story.lastroll == 2) {
                    $(".combat").append("<p>Your sword clashes with the the man's blade ; once, twice, thrice. You don't get a hit in, and this seems to surprise him.</p>") 
                }
                if (story.lastroll == 3) {
                    $(".combat").append("<p>You aim for the man's chest and he fails to avoid the blow. Your blade cuts a layer of his leather chestpiece but fails to reach the skin. Were you always this weak ?</p>")
                }
            }
            if (story.enemyname =="testenemy") {
                $(".combat").empty()
                $('.combat').append('<p>Failure placeholder</p>')
            }
        }
        if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
        if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
        }
        console.log(story.turnaction)
    }
    if (attacker == "enemy") {
        if (story.enemyname == "sbire") {
            story.lastroll = story.diceroll(20, 1)
            if (story.lastroll + attribute >= story.heroDefense) {
                story.hitdamage = story.diceroll(8, story.heroLevel)
                story.heroHP -= story.hitdamage
                console.log(story.heroHP)
                if (7*story.heroLevel < story.hitdamage && story.hitdamage <= 8*story.heroLevel) {
                 $(".combat").append("<p>You dodge one blow, parry another but feel the full brunt of the third. The blade penetrates a gap in your armour, stabbing your shoulder. Blood pours from the wound and a grunt escapes your mouth as the blade withdraws itself.</p>")
                 }
                if (3*story.heroLevel <= story.hitdamage && story.hitdamage <= 7*story.heroLevel) {
                 $(".combat").append("<p>The man hits your armour repeatedly, sounds of metal against metal filling the air. The blade does nothing to harm the strong plate, but it does stop you from noticing the dagger he draws with his other hand. He quickly stabs your inner thigh, inflicting a shallow but painful wound.")
                 }
                if (1*story.heroLevel <= story.hitdamage && story.hitdamage < 3*story.heroLevel) {
                    $('.combat').append("<p>The man forces you back with repeated blows, which you dodge or parry. Exasperated, he finally punches you in the face with his free hand, striking your undefended face.</p>")
                }
                
        }
            if (story.lastroll + attribute < story.heroDefense) {
                   $(".combat").append("<p>The man prepares a large swing, his arm reaching behind his body. Suddenly he interrupts the movement and grimaces, holding his wounded flank. The blow never comes.</p>")
                console.log("enemy fails")
            }
            if (story.lastroll == 20) {
                story.heroHP -= story.diceroll(8, story.heroLevel*2)
                $('.combat').append("<p>You don't even see the blow coming. It takes you completely by surprise ; strong, quick and efficient, it strikes where your shoulder connects to your chest. The pain is so sharp you almost forget to push your opponent away.</p>")
            }
        }
        if (story.enemyname =='testenemy') {
            story.lastroll = story.diceroll(20, 1)
            if (story.lastroll + attribute >= story.heroDefense) {
            story.hitdamage = story.diceroll(8, story.heroLevel)
            story.heroHP -= story.hitdamage
            console.log(story.heroHP)
                if (7*story.heroLevel < story.hitdamage && story.hitdamage <= 8*story.heroLevel) {
                 $(".combat").append("<p>High enemy damage placeholder</p>")
                 }
                if (3*story.heroLevel <= story.hitdamage && story.hitdamage <= 5*story.heroLevel) {
                 $(".combat").append("<p>Medium enemy damage placeholder</p>")
                 }
                if (1*story.heroLevel <= story.hitdamage && story.hitdamage < 3*story.heroLevel) {
                    $('.combat').append('<p> Low enemy damage placeholder</p>')
                }
            
        }
            if (story.lastroll + attribute < story.heroDefense) {
                if (story.diceroll(3, 1) == 1) {
                   $(".combat").append("<p>enemy failure placeholder</p>") 
                }
                if (story.diceroll(3, 1) == 2) {
                    $(".combat").append("<p>enemy failure placeholder</p>") 
                }
                if (story.diceroll(3, 1) == 3) {
                    $(".combat").append("<p>enemy failure placeholder</p>")
                }
            }
            if (story.lastroll == 20) {
                story.heroHP -= story.diceroll(8, story.heroLevel*2)
                $('.combat').append("<p>Enemy critical hit placeholder</p>")
            }
        }
    } // when enemy attacks it appends "take another action" ?
}
story.defend = function(user){
    story.turnaction +=1
    if (user == "hero") {
        story.defenseBonus = story.resolve
        $('.combat').empty()
        $('.combat').append("<p>You widen your stance, making sure you're grounded and well-balanced. This should make you better prepared for the strikes to come, at least for a short while.</p>")
    }
        if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
        if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
        }
    if (user == "enemy") {
        if (story.enemyname == "sbire") {
            story.enemyDefenseBonus = story.enemyresolve
            $('.combat').append("<p>You see the man raising his arms to protect his torso and straightening his posture. It seems like he's focusing on better defending himself.</p>")
        }
        if (story.enemyname == "testenemy") {
            story.enemyDefenseBonus = story.enemyresolve
            $('.combat').append("<p>enemy defends placeholder</p>")
        }
    };
}
story.diceroll = function(dice, numberOfTimes) {
    var total =0;
    for(var i = numberOfTimes; i >0; i--) {
        var roll = Math.floor((Math.random() * dice) + 1)
        console.log("dice =" + dice + "times =" + numberOfTimes + "roll=" +roll)
        total += roll
    }
    console.log("total="+total)
   return total
}
story.setdistance = function(number, user) {
    story.turnaction +=1
    story.initialcombatdistance = story.combatdistance
    story.combatdistance = story.combatdistance+number
    if (story.combatdistance <=0) {
        story.combatdistance = 1
    }
    console.log(story.combatdistance)
    if (user =='hero') {
        $(".combat").empty()
        if (number >0) {
            $('.combat').append("<p>You put some distance between you and your opponent.</p>")
        }
        if (number <0) {
            $('.combat').append("<p>You make your way towards your opponent.</p>")
        }
        if (story.combatdistance <=5) {
            if (effects["thorns"] >1 || enemyeffects["thorns"] >1) {
                story.heroHP -= story.diceroll(4,1)
                $(".combat").append("<p>You walk through the vegetal mass and towards your opponent. The thorns through your clothing where your armour doesn't reach, but ultimately do little damage.</p>")
            }
            if (effects["caltrops"] >1 || enemyeffects["thorns"] >1) {
                story.heroHP -= story.diceroll(4,1)
                $(".combat").append("<p>You walk towards your opponent, ignoring the caltrops on the ground. You avoid most, but one does stab through your shoe sole and cut your foot lightly.</p>")
            }
        }
        if (number >0 && story.combatdistance >=1 && story.combatdistance <14) {}
        if (story.turnaction ==2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
        if (story.turnaction <2) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.heroturn()">Take another action</div>')
        }
} 
    if (user == 'enemy'){
        if (story.enemyname == "sbire") {
            $('.combat').append("<p>The rough man limps towards you. 'Get back here, damnit', you hear him mutter.</p>")
            if (effects["thorns"] >1 || enemyeffects["thorns"] >1) {
                story.enemyHP -= story.diceroll(4,1)
                $(".combat").append("<p>The man walks through the mass of thorny stems and roots, seemingly not caring about the obstacle. You notice that a few of the larger thorns cut through his clothing and skin, drawing blood.</p>")
            }
        }
        if (story.enemyname == "testenemy") {
            $(".combat").append("enemy has moved")
            if (effects["thorns"] >1 || enemyeffects["thorns"] >1) {
                story.enemyHP -= story.diceroll(4,1)
                $(".combat").append("<p>enemy gets wounded by thorns</p>")
            }
            if (effects["caltrops"] >1 || enemyeffects["thorns"] >1) {
                story.enemyHP -= story.diceroll(4,1)
                $(".combat").append("<p>enemy gets wounded by caltrops</p>")
            }
        }
    } //this is not correct, you need to consider placement of the thorns or caltrops, direction of movement, position
} // Might need some variations in encounters with particular terrain or conditions.
story.showattacks = function() {
    $(".combat").empty()
    story.optioncounter = 1;
    if (story.heroclass == "no-class") {
    if (story.combatdistance <=2) {
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"' onclick='story.attack(story.strength, &quot;Hero&quot;)'>" + story.optioncounter + ". Hit the enemy with your sword.</div>")
        story.optioncounter++;
    }
    if (story.combatdistance >2) {
    $(".combat").append("<p>Your sword can't quite reach your enemy. To be in range, you'll have to get within two meters of him.</p>")
    }
    }
    if (story.heroclass == "Meagan") {
    if (story.combatdistance <=2) {
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"' onclick='story.attack(story.strength, &quot;Hero&quot;)'>" + story.optioncounter + ". Hit the enemy with your sword.</div>")
        story.optioncounter++;
    }
    if (story.combatdistance >2) {
    $(".combat").append("<p>Your sword can't quite reach your enemy. To be in range, you'll have to get within two meters of him.</p>")
    }
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.herospecialMeagan()'>" + story.optioncounter + ". [SPECIAL] Charge the enemy.</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>You've already charged your enemy once ; your body aches too much to do it once more.</p>")
    }
    }
    if (story.heroclass == "Maeri") {
    if (story.combatdistance <=2) {
    $(".combat").append("<div class='choice'onclick='story.attack(story.strength, &quot;Hero&quot;)'>" + story.optioncounter + ". Hit the enemy with your sword.</div>")
    $(".combat").append("<p>You're much too close to your enemy to use your bow. You'll have to put distance between the two of you to use it.</p>")
        story.optioncounter++
    }
    if (story.combatdistance >2) {
    $(".combat").append("<p>Your sword can't quite reach your enemy. To be in range, you'll have to get within two meters of him.</p>")
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.agility, &quot;Hero&quot;)'>" + story.optioncounter + ". Target the enemy with your bow.</div>")
        story.optioncounter++;
    }
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.herospecialMaeri()'>" + story.optioncounter + ". [SPECIAL] Give your enemy a poisoned kiss.</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>You've already used your poison, and your lips are no longer deadly.</p>")
    }
    }
    if (story.heroclass == "Daere"){
       $(".combat").append("<div class='choice' id='choice1' onclick='story.attack(story.intelligence, &quot;Hero&quot;)'>1. Target the enemy with magic.</div>")
        if (story.combatdistance <=2) {
        $(".combat").append("<p>You're much too close to your enemy to use your bow. You'll have to put distance between the two of you to use it.</p>")
            story.optioncounter = 2;
    }
        if (story.combatdistance >2) {
        $(".combat").append("<div class='choice' id='choice2' onclick='story.attack(story.agility, &quot;Hero&quot;)'>2. Target the enemy with your bow.</div>")
            story.optioncounter = 3
    }
         if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.herospecialTamwen()'>" + story.optioncounter + " .[SPECIAL] Plant the seed of a nightmare in your enemy's mind.</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>You've already plagued your enemy with horrible visions. You have none left to give.</p>")
    }
    } 
    if (story.heroclass == "Tamwen") {
        $(".combat").append("<div class='choice' id='choice1' onclick='story.attack(story.intelligence, &quot;Hero&quot;)'>1. Target your enemy with magic.</div>")
        story.optioncounter =2
    if (story.combatdistance <=2) {
    $(".combat").append("<div class='choice' id='choice2' onclick='story.attack(story.strength, &quot;Hero&quot;)'>2. Hit the enemy with your sword.</div>")
        story.optioncounter = 3;
    }
    if (story.combatdistance >2) {
    $(".combat").append("<p>Your sword can't quite reach your enemy. To be in range, you'll have to get within two meters of him.</p>")
        story.optioncounter = 2;
    }
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.herospecialTamwen()'>" + story.optioncounter + ". [SPECIAL] Breathe fire towards your enemy</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>Your throat is parched and free of fire.</p>")
    }
    }
    if (story.heroclass == "Briar") {
    $(".combat").append("<div class='choice' id='choice1' onclick='story.attack(story.intelligence, &quot;Hero&quot;)'>1. Target the enemy with magic.</div>")
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice2' onclick='story.herospecialBriar()'>2. [SPECIAL] Force the ground to shake beneath your enemy, forcing him down</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>You no longer have the focus to move the ground. You could perhaps move a pebble.</p>")
    }
}
    if (story.heroclass == "Aneira") {
    if (story.combatdistance <=2) {
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.strength, &quot;Hero&quot;)'>" + story.optioncounter + ". Hit the enemy with your sword.</div>")
    $(".combat").append("<p>You're much too close to your enemy to use your bow. You'll have to put distance between the two of you to use it.</p>")
    story.optioncounter ++
   }
    if (story.combatdistance >2) {
    $(".combat").append("<p>Your sword can't quite reach your enemy. To be in range, you'll have to get within two meters of him.</p>")
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.agility, &quot;Hero&quot;)'>" + story.optioncounter + ". Target the enemy with your bow.</div>")
        story.optioncounter ++
    }
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.herospecialAneira()'>" + story.optioncounter + ". [SPECIAL] Drop caltrops around yourself.</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>The pouch on your belt is empty. Let's hope you've got another trick up your sleeve.</p>")
    }
    }
    if (story.heroclass == "Gorawen") {
    if (story.combatdistance <=2) {
    $(".combat").append("<p>You're much too close to your enemy to use your bow. You'll have to put distance between the two of you to use it.</p>")
    }
    if (story.combatdistance >2) {
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.agility, &quot;Hero&quot;)'>" + story.optioncounter + ". Target the enemy with your bow.</div>")
        story.optioncounter++
    }
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.herospecialGorawen()'>" + story.optioncounter + ". [SPECIAL] Deploy your automaton and let it join the fight.</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>You've already deployed your automaton.</p>")
    }
    }
    if (story.heroclass == "Trystin") {
        $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.intelligence, &quot;Hero&quot;)'>" + story.optioncounter + ". Target your enemy with magic.</div>")
        story.optioncounter ++
    if (story.combatdistance <=2) {
    $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.strength, &quot;Hero&quot;)'>" + story.optioncounter + ". Hit the enemy with your sword.</div>")
        story.optioncounter ++
    }
    if (story.combatdistance >2) {
    $(".combat").append("<p>Your sword can't quite reach your enemy. To be in range, you'll have to get within two meters of him.</p>")
    }
    if (story.specialuse ==0) {
            $(".combat").append("<div class='choice' id='choice" + story.optioncounter +"'onclick='story.attack(story.herospecialTamwen()'>" + story.optioncounter + ". [SPECIAL] Heal yourself.</div>")
    }
    if (story.specialuse ==1) {
            $(".combat").append("<p>You've already healed your wounds once, and the divine energy that courses through you has been depleted.'</p>")
    }}
    $(".combat").append("<div class ='next' id='next' onclick ='$(&quot;.combat&quot;).empty(), story.showhealth(&quot;hero&quot;), story.showhealth(&quot;enemy&quot), story.showalloptions()'>Return</div>")
}
story.showcompanionactions = function(user) {
    $(".combat").empty();
    story.optioncounter = 1;
    if (party[0] == 'Rhain') {
        if (story.companionactionuseR == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"' onclick='story.companionactionRhain()'>" + story.optioncounter + ". Call for Rhain, so he can shoot a bolt of fire towards the enemy.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseR == 1) {
            $('.combat').append("<p>Rhain is now out of sight, likely occupied with his own battle.</p>")
        }
    }
    if (party[1] == 'Aerona') {
        if (story.companionactionuseA == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"'onclick='story.companionactionAerona()'>" + story.optioncounter + ". Call for Aerona, so she can strike the enemy.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseA == 1) {
             $('.combat').append("<p>You catch a glimpse of Aerona from the corner of your eye : she seems tired and straining to keep upright. She's in no condition to help you. </p>")
        }
    }
    if (party[2] == 'Mabyn') {
        if (story.companionactionuseM == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"'onclick='story.companionactionMabyn()'>" + story.optioncounter + ". Call for Mabyn, so she can summon thorns in your enemy's path.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseM == 1) {
            $('.combat').append("<p>Mabyn has vanished ; you don't find her, no matter where you turn your gaze.</p>")
        }
    }
    if (party[3] == 'Wooly') {
        if (story.companionactionuseW == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"'onclick='story.companionactionWooly()'>" + story.optioncounter + ". Call for Wooly, so he can wrestle with the enemy.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseW == 1) {
            $('.combat').append("<p>Wooly sometimes appears in your line of sight, fighting enemies.</p>")
        }
    }
    if (party[4] == 'Beca') {
        if (story.companionactionuseB == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"'onclick='story.companionactionBeca()'>" + story.optioncounter + ". Call for Beca, so she can blind the enemy.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseB == 1) {
            $('.combat').append("<p>You catch glimpses of Beca's black hair, always moving.</p>")
        }
    }
    if (party[5] == 'Emrys') {
        if (story.companionactionuseE == 0) {
                $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"'onclick='story.companionactionEmrys()'>" + story.optioncounter + ". Call for Emrys, so he can take a shot at the enemy.</div")
                story.optioncounter++;
        }
        if (story.companionactionuseE == 1) {
            $('.combat').append("<p>Emrys is nowhere to be found ; you assume he's hiding away somewhere, waiting for a perfect shot.</p>")
        }
    }
    if (party[6] == 'Thisbe') {
        if (story.companionactionuseT == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"' onclick='story.companionactionThisbe()'>" + story.optioncounter + ". Call for Thisbe, so she can charge the enemy.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseT == 1) {
            $('.combat').append("<p>Thisbe is out of sight, likely engaged with an enemy.</p>")
        }
    }
    if (party[7] == 'Samset') {
        if (story.companionactionuseS == 0) {
            $('.combat').append("<div class ='choice' id='choice" + story.optioncounter +"'onclick='story.companionactionSamset()'>" + story.optioncounter + ". Call for Samset, so he can heal you.</div")
            story.optioncounter ++
        }
        if (story.companionactionuseS == 1) {
            $('.combat').append("<p>Samset is near, but you can guess from his laboured breathing and slow moving that he has very little magic left in him.</p>")
        }
    }
    $(".combat").append("<div class ='next' id='next' onclick ='$(&quot;.combat&quot;).empty(), story.showhealth(&quot;hero&quot;), story.showhealth(&quot;enemy&quot), story.showalloptions()'>Return</div>")
}
story.showeffects = function(user) {
    if (user == 'enemy') {
    if (enemyeffects['burn'] ==1) {
        $(".combat").append("<p>The burning sensation stops, as abruptly as it first began. Your skin still tingles slightly, but the worst of it has passed.</p>")
        enemyeffects['burn']-= 1
    }
    if (enemyeffects['burn'] >1) {
        $(".combat").append("<p>Though no flames are trying to eat away at your body, a strong burning sensation travels through the upper layer of your skin. It is difficult to ignore.</p>")
        enemyeffects['burn']-= 1
        story.heroHPHP-=story.diceroll(4, story.heroLevel)
    };
    if (enemyeffects['poison'] ==1) {
        $(".combat").append("<p>Your next breath comes with only a hint of pain. The poison seems to have stopped affecting you, but it has taken a toll on your health.</p>")
        enemyeffects['poison']-= 1
    }
    if (enemyeffects['poison'] >1) {
        $(".combat").append("<p>Your throat is tight and every breath you take is pained. A numbness runs through your limbs along with poison in your veins.</p>")
        enemyeffects['poison']-= 1
        story.heroHP-=story.diceroll(4, story.heroLevel)
    };
    if (enemyeffects['fallen'] ==1) {
        enemyeffects['fallen']-=1
        story.heroDefense +=10
    }
    if (enemyeffects['fallen'] >1) {
        $(".combat").append("<p>You fell to the ground with a loud crash. As quickly as you can, you get back to your feet. You have no time to act or enter a better stance before your opponent acts once more.</p>")
        enemyeffects['fallen']-=1
    }
    if (enemyeffects['nightmare'] ==1) {
        $(".combat").append("<p>The visions abruptly stop. The newfound silence and stillness of your mind surprise you, at first, and a few seconds pass before you're in control of yourself again.</p>")
        enemyeffects['nightmare']-=1
    };
    if (enemyeffects['nightmare'] >1) {
        $(".combat").append("<p>Visions of dreadful things plague your mind. They flash before your eyes, each no longer than a second : your teeth falling out, bees in your chest, glowing eyes in the dark, fleshless fingers pointing at you, the flutter of wings.. You don't even feel your legs carry you away from your opponent. </p>")
        enemyeffects['nightmare']-=1
        story.combatdistance +=20
    };
    if (enemyeffects['thorns']==1) {
        $(".combat").append("<p>As quickly as they were summoned, the thorny plants disappear into the ground, leaving the area they occupied now unobscured.Only a few stray leaves have stayed behind.</p>")
        enemyeffects['thorns']-=1
    }
    if (enemyeffects['thorns']>1) {
        $(".combat").append("<p>Thorny plants stand between you and your opponent. The vegetal mass is too tight to allow either of you to walk through it without being harmed by the thorns.</p>")
        enemyeffects['thorns']-=1
        
    }
    if (enemyeffects['caltrops']==1) {
        $(".combat").append("<p>The caltrops seem to have been pushed out of the way by you and your opponent's movement, and no longer lay in your path.</p>")
        enemyeffects['caltrops']-=1
    }
    if (enemyeffects['caltrops']>1) {
        $(".combat").append("<p>Caltrops stand between you and your opponent. Too numerous to be avoided, they'll likely hurt whoever tries to walk through them.</p>")
        enemyeffects['caltrops']-=1
    }
    if (effects['thorns']==1) {
        $(".combat").append("<p>As quickly as they were summoned, the thorny plants disappear into the ground, leaving the area they occupied now unobscured.Only a few stray leaves have stayed behind.</p>")
        effects['thorns']-=1
    }
    if (effects['thorns']>1) {
        $(".combat").append("<p>Thorny plants stand between you and your opponent. The vegetal mass is too tight to allow either of you to walk through it without being harmed by the thorns.</p>")
        effects['thorns']-=1
    }
    if (effects['caltrops']==1) {
        $(".combat").append("<p>The caltrops seem to have been pushed out of the way by you and your opponent's movement, and no longer lay in your path.</p>")
        effects['caltrops']-=1
    }
    if (effects['caltrops']>1) {
        $(".combat").append("<p>Caltrops stand between you and your opponent. Too numerous to be avoided, they'll likely hurt whoever tries to walk through them.</p>")
        effects['caltrops']-=1
    }
        //for other effects like robot or wrestle, you'll make blocks depending on story.enemyname and write specific stuff.
        }
    if (user == 'hero') {
        if (story.enemyname == "sbire") {
            if(effects['wrestle'] ==1) {
         $(".combat").append("<p>The rugged man finally pushes Wooly away, kicking the goat-man in the stomach. A bleet escapes your companion's mouth before your opponent faces you again. 'Back to us, then.'</p>")
        effects['wrestle']-=1 
            story.enemyDefense +=10
    }
            if(effects['burn'] ==1) {
        $(".combat").append("<p>The man pats the last flames away, leaving only holes in his clothing and an acrid smell in the air.</p>")
        effects['burn']-= 1
        console.log(story.enemyHP)
    };
            if(effects['burn'] >1) {
        $(".combat").append("<p>The rough man attempts to pat the fire away. He seems strangely unbothered, though, as he doesn't drop to the ground and roll, but instead prepares to fight you.</p>")
        effects['burn']-= 1
        story.enemyHP-=story.diceroll(4, story.heroLevel)
        console.log(story.enemyHP)
    };
            if(effects['wrestle'] >1) {
         $(".combat").append('<p>Struggling against Wooly, the man seems much more vulnerable. "Fuck this," he swears. "Why do you have to do this shit, hero ?"</p>')
        effects['wrestle']-=1
            story.enemyDefense +=10
    }
        }
        if (story.enemyname == "testenemy") {
            if (effects['burn']==1) {
                $(".combat").append("<p>enemy is no longer burning</p>")
                effects['burn']-= 1
            }
            if (effects['burn'] >1) {
        $(".combat").append("<p>enemy is burned</p>")
        effects['burn']-= 1
        story.enemyHP-=story.diceroll(4, story.heroLevel)
        console.log(story.enemyHP)
    };
            if (effects['poison']==1) {
                $(".combat").append("<p>enemy is no longer poisoned</p>")
                effects['poison']-= 1
            }
            if (effects['poison'] >1) {
        $(".combat").append("<p>enemy is poisoned</p>")
        effects['poison']-= 1
        story.enemyHP-=story.diceroll(4, story.heroLevel)
        console.log(story.enemyHP)
    };
            if (effects['wrestle']==1) {
                $(".combat").append("<p>enemy is no longer being wrestled with</p>")
                effects['wrestle']-=1
            }
            if (effects['wrestle'] >1) {
         $(".combat").append("<p>enemy is being wrestled with</p>")
        effects['wrestle']-=1
        if (enemyeffects['wrestle'] == 0) {
            story.enemyDefense +=10
        }
    }
            if (effects['fallen']==1) {
                     $(".combat").append("<p>enemy has gotten up</p>")
                    effects['fallen']-=1
            }
            if (effects['fallen'] >1) {
        $(".combat").append("<p>enemy has fallen</p>")
        effects['fallen']-=1
        if (enemyeffects['fallen'] == 0) {
            story.enemyDefense +=10
        }
    }
            if (effects['bloody']==1) {
                $(".combat").append("<p>enemy is no longer blinded</p>")
                effects['bloody']-=1
            }
            if (effects['bloody'] >1) {
        $(".combat").append("<p>enemy is blinded</p>")
        effects['bloody']-=1
            if (enemyeffects['bloody'] == 0) {
            story.enemyDefense +=10
        }
    }
            if (effects['nightmare']==1) {
                $(".combat").append("<p>enemy is no longer stuck in a nightmare</p>")
                effects['nightmare']-=1
            }
            if (effects['nightmare'] >1) {
        $(".combat").append("<p>enemy is stuck in a nightmare</p>")
        effects['nightmare']-=1
        story.combatdistance +=20
    };
            if (effects['robot']==1) {
                $(".combat").append("<p>your robot is no longer functioning</p>")
        effects['robot']-=1
            }
            if (effects['robot'] >1) {
        $(".combat").append("<p>your robot attacks</p>")
        effects['robot']-=1
        story.enemyHP-=story.diceroll(4, story.heroLevel)
    }

        }
    }
}
story.showhealth = function (user) {
    if (user == 'hero') {
        if (0.9*story.initialheroHP < story.heroHP) {
            if (story.heroHP <= story.initialheroHP) {
                       $(".combat").append("<p>You are in perfect health, with not even one scratch on you.</p>")   
            }
        }
        if (story.initialheroHP*0.75 < story.heroHP && story.heroHP <= story.initialheroHP*0.9) {
    $(".combat").append("<p>You feel a slight pain somewhere in your body ; nothing a bit of rest won't heal.</p>") 
}
        if (story.initialheroHP*0.5 < story.heroHP && story.heroHP <= story.initialheroHP*0.75) {
    $(".combat").append("<p>You are noticeably wounded. You should take care to properly rest and heal yourself after this is over.</p>") 
}
        if (story.initialheroHP*0.35 < story.heroHP && story.heroHP <= story.initialheroHP*0.5) {
    $(".combat").append("<p>Your body is in pain, but you keep moving. The sooner you finish this, the sooner you can take care of your wounds.</p>") 
}
        if (story.initialheroHP*0.25 < story.heroHP && story.heroHP <= story.initialheroHP*0.35) {
    $(".combat").append("<p>The pain has turned into a strange numbness. Your legs won't stop quivering, and your mind tells you to flee.</p>") 
}
        if (story.initialheroHP*0.15 < story.heroHP && story.heroHP <= story.initialheroHP*0.25) {
            $(".combat").append("<p>Your tongue sticks to the roof of your mouth. Dry, so dry.You think you hear your teeth chatter, but it's hard to tell when your heart thumps so loudly.</p>")
}
        if (story.initialheroHP*0.05 < story.heroHP && story.heroHP <= story.initialheroHP*0.15) {
            $(".combat").append("<p>Run away. Run away. You're going to die if you don't run away, hero. Run away. Run away.</p>")
}
        if (0 < story.heroHP && story.heroHP <= story.initialheroHP*0.05) {
         $(".combat").append("<p>Everything has gone silent and still. Your body is free of pain, your heart at peace. Death comes to you calmly.</p>") 
    }
    }
    if (user == 'enemy') {
        if (story.enemyname == "sbire") {
            story.lastroll = story.diceroll(3,1)
            if (story.lastroll == 1) {
                $('.combat').append("<p>The rough man was already wounded before your fight, yet he doesn't seem close to giving up.</p>")
            }
            if (story.lastroll == 2) {
                $('.combat').append("<p>Obvious red stains mar his leather armour, but the rugged man still stands.</p>")
            }
            if (story.lastroll == 3) {
                $('.combat').append("<p>The man is relentless, gripping the hilt of his sword between bloody hands. Will he ever fall ?</p>")
            }
        }
        if (story.enemyname == "testenemy") {
        if (0.9*story.initialenemyHP < story.enemyHPHP && story.enemyHP <= story.initialenemyHP) {
                    $(".combat").append("<p>full health enemy</p>")   
            }
        if (story.initialenemyHP*0.75 < story.enemyHP && story.enemyHP <= story.initialenemyHP*0.9) {
    $(".combat").append("<p>slightly wounded enemy</p>") 
}
        if (story.initialenemyHP*0.5 < story.enemyHP && story.enemyHP <= story.initialenemyHP*0.75) {
    $(".combat").append("<p>somewhat wounded enemy</p>") 
}
        if (story.initialenemyHP*0.35 < story.enemyHP && story.enemyHP <= story.initialenemyHP*0.5) {
    $(".combat").append("<p>half health enemy</p>") 
}
        if (story.initialenemyHP*0.15 < story.enemyHP && story.enemyHP <= story.initialenemyHP*0.35) {
    $(".combat").append("<p>very wounded enemy</p>") 
}
        if (0 < story.enemyHP && story.enemyHP <= story.initialenemyHP*0.15) {
         $(".combat").append("<p>near death enemy</p>") 
    }
            }
    }
    }
story.showalloptions = function() {
    $(".combat").append("<div class='choice' id='choice1' onclick='story.setdistance(10, &quot;hero&quot;)'>1. Take steps away from your enemy, putting ten more meters between you.</div>")
    $(".combat").append("<div class='choice' id ='choice2' onclick='story.setdistance(-10, &quot;hero&quot;)'>2. Take steps towards your enemy, reducing the distance between you by ten meters.</div>")
    $(".combat").append("<div class='choice' id='choice3' onclick='story.showattacks()'>3. Prepare an attack.</div>")
    $(".combat").append("<div class='choice' id='choice4' onclick='story.defend(&quot;hero&quot;)'>4. Adopt a defensive stance.</div>")
    $(".combat").append("<div class='choice' id='choice5' onclick='story.showcompanionactions()'>5. Call a companion for help.</div>")
}//done
story.enemyturn = function() {
    story.enemyDefenseBonus =0;
    $('.combat').empty()
    story.showeffects('hero')
    if (story.combatdistance <=2 && effects['wrestle'] <1) {
        story.attack(story.enemystrength, "enemy")
        story.lastroll = story.diceroll(3,1)
        if (story.lastroll <3) {
            story.attack(story.enemystrength, "enemy")
        }
        if (story.lastroll ==3) {
            story.defend("enemy")
        }
    }
    if (story.combatdistance >2 && effects['wrestle'] <1) {
        story.setdistance(-10, "enemy")
        if (story.combatdistance >2) {
            story.combatdistance =+10
        }
        if (story.combatdistance <=2) {
            story.attack(story.enemystrength, "sbire")
        }
    }
    $(".combat").append('<div class="choice, next" id="next" onclick ="story.heroturn()">Next</turn></div>')
    story.turnaction =0;
}//done
story.heroturn = function() {
$(".combat").empty()
story.defenseBonus =0;
if (story.enemyHP <=0) {
    $(".combat").append("enemy is dead")
}
if (story.heroHP <=0) {
    if (story.enemyname == "sbire") {
        story.turnTo('22')
    }
    if (story.enemyname == "testenemy") {
        $(".combat").append("<p>You have died.</p>")
    }
}
if (story.enemyHP >0 && story.heroHP >0) {
    story.showeffects('enemy');
    story.showhealth('hero');
    story.showhealth('enemy');
    if (enemyeffects['fallen'] <=1) {
        story.showalloptions();
    }
    if (enemyeffects['fallen'] >1) {
        $('.combat').append('<div class="choice, next" id="next" onclick="story.enemyturn()">Finish your turn</div>')
    }
}
}//done
story.startcombat = function(n1, n2, n3, n4, special, distance) {
    $(".combat").empty()
    console.log("Combat started")
    story.setheroHP();
    story.setHeroDefense();
    story.specialuse =0;
    story.companionactionuseR =0;
    story.companionactionuseA =0;
    story.companionactionuseM =0;
    story.companionactionuseW =0;
    story.companionactionuseB =0;
    story.companionactionuseE =0;
    story.companionactionuseT =0;
    story.companionactionuseS =0;
    story.enemystrength = n1
    story.enemyagility = n2
    story.enemyintelligence = n3
    story.enemyresolve = n4
    story.enemyspecial = special
    story.combatdistance = distance
    story.enemyHP = 10*story.heroLevel + story.enemyresolve
    if (story.enemyname == "sbire") {
        story.enemyHP = 1000
    }
    story.initialenemyHP = story.enemyHP;
    if (story.enemyname == "sbire") {
        $(".combat").append("<p>You have no choice but to rise to your feet and face the man, your respective swords facing one another as you do.<br> This isn't your first fight. You know the drill.</p>")
        story.removecompanion("Emrys")
        story.removecompanion("Thisbe")
        story.removecompanion("Samset")
        story.removecompanion("Beca")
        story.addcompanion("Rhain")
        story.addcompanion("Aerona")
        story.addcompanion("Mabyn")
        story.addcompanion("Wooly")
    }
    if (story.enemyname == "testenemy") {
        story.addcompanion("Emrys")
        story.addcompanion("Thisbe")
        story.addcompanion("Samset")
        story.addcompanion("Beca")
        story.addcompanion("Rhain")
        story.addcompanion("Aerona")
        story.addcompanion("Mabyn")
        story.addcompanion("Wooly")
    }
    effects['burn']=0
    enemyeffects['burn']=0
    effects['poison']=0
    enemyeffects['poison']=0
    effects['wrestle']=0
    enemyeffects['wrestle']=0
    effects['thorns']=0
    enemyeffects['thorns']=0
    effects['bloody']=0
    enemyeffects['bloody']=0
    effects['fallen']=0
    enemyeffects['fallen']=0
    effects['caltrops']=0
    enemyeffects['caltrops']=0
    effects['nightmare']=0
    enemyeffects['nightmare']=0
    effects['robot']=0
    enemyeffects['robot']=0
    $(".combat").append("<div class='next' id='next' onclick='story.heroturn()'>Begin the fight</div>")
    
}


//test everything


//to do after that : 
//after combat and village scene 
//Draw the portraits and iterations for the four OG companions
//Fix cloud frame
//Combat frame
//Village frame
//Make the page for the journal and write a first entry.

// for new enemies: You need to make a new storyname value and corresponding if blocks in attacks (both for Hero variations and enemy attacks), a single line in defend, one line for each movement in setdistance (and check for thorns and caltrops when you do move), lines for each health state in showhealth, effect descriptions for the enemy in showeffects, a line for each hero special (except heal), and a line for each companion special (except Samset, plus if a companion is guaranteed to be unavailable. You'll have to be careful with this when writing things for the R and V paths). You might have to make new lines for the hero's setdistance if the setting is special.
//you might use 'wrestle" as an enemyeffect if you ever make an encounter that has two enemies, one could wrestle you while the other attacks. This'd be a bit of work but it could change up the pace.
