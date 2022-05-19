let pekoClick = document.querySelector('#peko')
let kyaruClick = document.querySelector('#kyaru')
let kokoClick = document.querySelector('#koko')

let enemy1Click = document.querySelector('#enemy1')
let enemy2Click = document.querySelector('#enemy2')
let enemy3Click = document.querySelector('#enemy3')


/********************************************/
/********************************************/
/*******Hide Skills**************/
/********************************************/
/********************************************/

class Hide{
    hidePeko(){
        for(let i = 7;i<10;i++){
            document.querySelector(`.skills${i}`).classList.add('hidden') 
        }
        document.querySelector('#pekoUlt').classList.add('hidden')
    }
    hideKyaru(){
        for(let i = 4;i<7;i++){
            document.querySelector(`.skills${i}`).classList.add('hidden') }
            document.querySelector('#kyaruUlt').classList.add('hidden')
    }

    hideKoko(){
        for(let i = 1;i<4;i++){
            document.querySelector(`.skills${i}`).classList.add('hidden') }
            document.querySelector('#kokoUlt').classList.add('hidden')
    }
}

let hide = new Hide()


/********************************************/
/********************************************/
/*******Show Skills**************/
/********************************************/
/********************************************/

class Show{
    showPeko(){
        if(document.querySelector('#pekoMP').value >= 250){ //check if pecorine mp bar is full
            document.querySelector('#pekoUlt').classList.remove('hidden') //hides peko ultimate button
        }
        for(let i = 7;i<10;i++){
            document.querySelector(`.skills${i}`).classList.remove('hidden') }
        hide.hideKyaru()
        hide.hideKoko()
    }
    showKyaru(){
        if(document.querySelector('#kyaruMP').value >= 500){ //check if kyaru mp bar is full
            document.querySelector('#kyaruUlt').classList.remove('hidden')//hides kyaru ultimate button
        }
        for(let i = 4;i<7;i++){
            document.querySelector(`.skills${i}`).classList.remove('hidden') }
        hide.hideKoko()
        hide.hidePeko()
    }
    showKoko(){
        if(document.querySelector('#kokoMP').value >= 150){//check if koko mp bar is full
            document.querySelector('#kokoUlt').classList.remove('hidden')//hides koko ultimate button
        }
        for(let i = 1;i<4;i++){
            document.querySelector(`.skills${i}`).classList.remove('hidden') }
        hide.hideKyaru()
        hide.hidePeko()
    }
}

let show = new Show()

/******************************************************************/
/******************************************************************/
/*Check that at least one enemy and one player character is chosen*/
/******************************************************************/
/******************************************************************/

class Check{
    constructor(){
        this.pekoAndEnemy1 = [pekoClick, enemy1Click]
        this.pekoAndEnemy2 = [pekoClick, enemy2Click]
        this.pekoAndEnemy3 = [pekoClick, enemy3Click]
        this.kyaruAndEnemy1 = [kyaruClick, enemy1Click]
        this.kyaruAndEnemy2 = [kyaruClick, enemy2Click]
        this.kyaruAndEnemy3 = [kyaruClick, enemy3Click]
        this.kokoAndEnemy1 = [kokoClick, enemy1Click]
        this.kokoAndEnemy2 = [kokoClick, enemy2Click]
        this.kokoAndEnemy3 = [kokoClick, enemy3Click]
    }
    isBelowThreshold(currentValue){ 
        return currentValue === true
    }
    clearClicked(){
        pekoClick.classList.remove('clicked')
        kyaruClick.classList.remove('clicked')
        kokoClick.classList.remove('clicked')
        enemy1Click.classList.remove('clicked')
        enemy2Click.classList.remove('clicked')
        enemy3Click.classList.remove('clicked')

    }
}
let check = new Check()


/********************************************/
/********************************************/
/*Check if Pecorine is clicked*/
/********************************************/
/********************************************/

class PekoEnemy1Check extends Check{
    check(){
        let array = check.pekoAndEnemy1.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showPeko()
        }else{
        hide.hidePeko()
        }
    }
}

class PekoEnemy2Check extends PekoEnemy1Check{
    check(){
    let array = check.pekoAndEnemy2.map(btn => btn.classList.contains("clicked"))
    if(array.every(check.isBelowThreshold)){
        check.clearClicked()
        show.showPeko()
    }else{
    hide.hidePeko()
    }
}
}

class PekoEnemy3Check extends PekoEnemy1Check{
    check(){
        let array = check.pekoAndEnemy3.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showPeko()
        }else{
        hide.hidePeko()
        }
    }
}


let pekoEnemy1Check = new PekoEnemy1Check()
let pekoEnemy2Check = new PekoEnemy2Check()
let pekoEnemy3Check = new PekoEnemy3Check()

/********************************************/
/********************************************/
/*Check if Kyaru is clicked*/
/********************************************/
/********************************************/


class KyaruEnemy1Check extends PekoEnemy1Check{
    check(){
        let array = check.kyaruAndEnemy1.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showKyaru()
        }else{
        hide.hideKyaru()
        }
    }
}

class KyaruEnemy2Check extends PekoEnemy1Check{
    check(){
        let array = check.kyaruAndEnemy2.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showKyaru()
        }else{
        hide.hideKyaru()
        }
    }
}

class KyaruEnemy3Check extends PekoEnemy1Check{
    check(){
        let array = check.kyaruAndEnemy3.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showKyaru()
        }else{
        hide.hideKyaru()
        }
    }
}

let kyaruEnemy1Check = new KyaruEnemy1Check()
let kyaruEnemy2Check = new KyaruEnemy2Check()
let kyaruEnemy3Check = new KyaruEnemy3Check()

/********************************************/
/********************************************/
/*Check if Koko is clicked*/
/********************************************/
/********************************************/


class KokoEnemy1Check extends PekoEnemy1Check{
    check(){
        let array = check.kokoAndEnemy1.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showKoko()
        }else{
        hide.hideKoko()
        }
    }
}

class KokoEnemy2Check extends PekoEnemy1Check{
    check(){
        let array = check.kokoAndEnemy2.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showKoko()
        }else{
        hide.hideKoko()
        }
    }
}

class KokoEnemy3Check extends PekoEnemy1Check{
    check(){
        let array = check.kokoAndEnemy3.map(btn => btn.classList.contains("clicked"))
        if(array.every(check.isBelowThreshold)){
            check.clearClicked()
            show.showKoko()
        }else{
        hide.hideKoko()
        }
    }
}

let kokoEnemy1Check = new KokoEnemy1Check()
let kokoEnemy2Check = new KokoEnemy2Check()
let kokoEnemy3Check = new KokoEnemy3Check()

/*********************************************************************************/
/*********************************************************************************/
/*Add clicked class if image is clicked, otherwise remove it if it already exists*/
/*********************************************************************************/
/*********************************************************************************/

class ClickPeko extends Check{
    showSkills(){
        pekoClick.classList.contains("clicked")? pekoClick.classList.remove("clicked") :  pekoClick.classList.add("clicked")
        pekoEnemy1Check.check()
        pekoEnemy2Check.check()
        pekoEnemy3Check.check()
        } 
}

class ClickKyaru extends Check{
    showSkills(){
        kyaruClick.classList.contains("clicked")? kyaruClick.classList.remove("clicked") :  kyaruClick.classList.add("clicked")
        kyaruEnemy1Check.check()
        kyaruEnemy2Check.check()
        kyaruEnemy3Check.check()
        } 
}

class ClickKoko extends Check{
    showSkills(){
        kokoClick.classList.contains("clicked")? kokoClick.classList.remove("clicked") :  kokoClick.classList.add("clicked")
        kokoEnemy1Check.check()
        kokoEnemy2Check.check()
        kokoEnemy3Check.check()
        } 
}

let pekoShow = new ClickPeko()
let kyaruShow = new ClickKyaru()
let kokoShow = new ClickKoko()

/********************************************/
/********************************************/
/*Click on Enemy in combination with players
/********************************************/
/********************************************/


class ClickEnemy1 extends ClickPeko{
    showSkills(){
        enemy1Click.classList.contains("clicked")? enemy1Click.classList.remove("clicked") :  enemy1Click.classList.add("clicked")
        pekoEnemy1Check.check()
        kyaruEnemy1Check.check()
        kokoEnemy1Check.check()
    }
}


class ClickEnemy2 extends ClickPeko{
    showSkills(){
        enemy2Click.classList.contains("clicked")? enemy2Click.classList.remove("clicked") :  enemy2Click.classList.add("clicked")
        pekoEnemy2Check.check()
        kyaruEnemy2Check.check()
        kokoEnemy2Check.check()
    }
}


class ClickEnemy3 extends ClickPeko{
    showSkills(){
        enemy3Click.classList.contains("clicked")? enemy3Click.classList.remove("clicked") :  enemy3Click.classList.add("clicked")
        pekoEnemy3Check.check()
        kyaruEnemy3Check.check()
        kokoEnemy3Check.check()
    }
}

let enemy1Show = new ClickEnemy1()
let enemy2Show = new ClickEnemy2()
let enemy3Show = new ClickEnemy3()


pekoClick.addEventListener('click',pekoShow.showSkills)
kyaruClick.addEventListener('click',kyaruShow.showSkills)
kokoClick.addEventListener('click',kokoShow.showSkills)

enemy1Click.addEventListener('click',enemy1Show.showSkills)
enemy2Click.addEventListener('click',enemy2Show.showSkills)
enemy3Click.addEventListener('click',enemy3Show.showSkills)

/********************************************/
/********************************************/
/*Character Stats
/********************************************/
/********************************************/

class Character{
    constructor(name,health,attack,defense,mana,ultimateDamage,experiencePoint){
        this.name = name //name of character
        this.health = health //health stat
        this.attack = attack //attack stat
        this.defense = defense //defense stat
        this.mana = mana //mana stat
        this.ultimateDamage = ultimateDamage //damage of ultimate
        this.experiencePoint = experiencePoint //experience points
        this.turns = 1 //current turn number
        //All characters have the SAME STATS: Name health attack defense Ultimate Damage Mana and Experience Points (last two enemies don't have)
    }

    prompt(){
        this.turns += 1 //adds to the turn counter
        document.querySelector('#turn').innerText = this.turns //shows the new turn counter on screen
        setTimeout(ele=>{
            document.querySelector('h2').innerText = 'Choose an action!' // after 3.5 machine seconds, it changes to choose an action
        },3500)
    }
}


/********************************************/
/********************************************/
/*Skill Names
/********************************************/
/********************************************/

class SkillNames extends Character{
    constructor(name,health,attack,defense,mana,ultimateDamage,experiencePoint,skill1,skill2,skill3,ultimate){
        super(name,health,attack,defense,mana,ultimateDamage,experiencePoint)
        this._skill1 = skill1
        this._skill2 = skill2
        this._skill3 = skill3
        this._ultimate = ultimate
    }//Names of skills and ultimate that all characters/enemys have
    get skill1(){
        return this._skill1
    }
    get skill2(){
        return this._skill2
    }
    get skill3(){
        return this._skill3
    }
    get ultimate(){
        return this._ultimate
    }
    
}

/********************************************/
/********************************************/
/*Skill Effects
/********************************************/
/********************************************/

//Skills do different things
class SkillEffect extends SkillNames{
    constructor(name,health,attack,defense,mana,ultimateDamage,experiencePoint,skill1,skill2,skill3,ultimate,effect1,effect2,effect3,ultimateEffect){
        super(name,health,attack,defense,mana,ultimateDamage,experiencePoint,skill1,skill2,skill3,ultimate,skill1,skill2,skill3,ultimate)
        this.effect1 = effect1
        this.effect2 = effect2
        this.effect3 = effect3
        this.ultimateEffect = ultimateEffect
    } //The effect/damage that each skill does
}

/******************************************************************/
/******************************************************************/
/****Skill Costs*****/
/******************************************************************/
/******************************************************************/


class SkillCost extends SkillEffect{
    constructor(name,health,attack,defense,mana,ultimateDamage,experiencePoint,skill1,skill2,skill3,ultimate,effect1,effect2,effect3,ultimateEffect,cost1,cost2,cost3,ultimateCost){
        super(name,health,attack,defense,mana,ultimateDamage,experiencePoint,skill1,skill2,skill3,ultimate,effect1,effect2,effect3,ultimateEffect)
        this._cost1 = cost1
        this._cost2 = cost2
        this._cost3 = cost3
        this._ultimateCost = ultimateCost
    }
    get cost1(){
        return this._cost1
    }
    get cost2(){
        return this._cost2
    }
    get cost3(){
        return this._cost3
    }
    get ultimateCost(){
        return this._ultimateCost
    }
}  

let peko = new SkillCost('Pecorine',4500,350,25,250,2000,100,'Slash Attack','Lunch Time','Princess Strike','Super Full Power ☆ Princess Strike',400,800,1000,0,50,80,180,250)
let kyaru = new SkillCost('Kyaru',3500,650,5,500,6000,200,'Thunder Ball','Shadow Bullet','Grim Burst','Dark Eclipse',100,1000,3000,0,80,130,220,500)
let koko = new SkillCost('Koko',4500,150,10,150,800,300,'Tri Slash','Aurora Veil','Healing Revelation ','Bonds of Verdure Winds',600,.30,.50,.10,30,50,70,150)

let enemy1 = new SkillCost('Akino',4000,150,400,0,1500,0,'Flare Rend','Flame Soul','Healing Jewel','Proud Slash',600,.30,.10)
let enemy2 = new SkillCost('Mitsuki',3500,250,50,0,1500,0,'Dark Tear','Rose Field','Eye of the Devil','Bloody Rose',80,.20,.10,.40)
let enemy3 = new SkillCost('Neneka',2500,550,25,0,1500,0,'Icy Burst','Satellite Ray','Instance Gem','Phantasmagoria',400,800,2000)

/********************************************/
/********************************************/
/*Enemy1 Uses a Skill*/
/********************************************/
/********************************************/

class Enemy1Skill1 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy1.effect1 + (enemy1.attack - peko.defense)//damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1.skill1} on ${enemy1.name} and dealt ${buffedEnemyAttack} damage!`//actual prompt of what is happening
    document.getElementById("pekoHP").value -= buffedEnemyAttack//apply effect/damage to HP bar
    }
}

class Enemy1Skill2 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy1.effect1 + (enemy1.attack += Math.round(enemy1.attack * .30))- peko.defense //damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1.skill2}, ${enemy1.name}'s attack greatly increased by ${enemy1.effect2}!  ${enemy1.name} used ${enemy1.skill1} on ${peko.name} and dealt ${buffedEnemyAttack} damage!`  //actual prompt of what is happening
    document.getElementById("pekoHP").value -= buffedEnemyAttack //apply effect/damage to HP bar
    }
}

class Enemy1Skill3 extends SkillNames{
    enemySkill(){
    let enemySkill = enemy1.health * enemy1.effect3  //damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1.skill3}, ${enemy1.name} healed their team by ${enemy1.effect3}!` //actual prompt of what is happening
    document.getElementById("enemy1HP").value += enemySkill //apply effect/damage to HP bar
    document.getElementById("enemy2HP").value += enemySkill //apply effect/damage to HP bar
    document.getElementById("enemy3HP").value += enemySkill //apply effect/damage to HP bar
    }
}

class Enemy1Skill4 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy1.ultimateDamage + (enemy1.attack - peko.defense)  //damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1.ultimate}, ${enemy1.name} dealt ${buffedEnemyAttack} damage to ${peko.name}!` //actual prompt of what is happening
    document.getElementById("pekoHP").value -= buffedEnemyAttack //apply effect/damage to HP bar
    }
}

//distinct action for each enemy1skills while sharing the same function name
    //all have a damage formula
    //all have a prompt that describes what's actually ocurring
    //all have an application of the effect/damage to either the stat/HP bar/Mp bar

let enemy1Skill1 = new Enemy1Skill1()
let enemy1Skill2 = new Enemy1Skill2()
let enemy1Skill3 = new Enemy1Skill3()
let enemy1Skill4 = new Enemy1Skill4()


/********************************************/
/********************************************/
/*Enemy2 Uses a Skill*/
/********************************************/
/********************************************/


class Enemy2Skill1 extends SkillNames{
    enemySkill(){
        let buffedEnemyAttack1 = enemy2.effect1 + (enemy2.attack - peko.defense)
        let buffedEnemyAttack2 = enemy2.effect1 + (enemy2.attack - kyaru.defense)
        let buffedEnemyAttack3 = enemy2.effect1 + (enemy2.attack - koko.defense)
    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2.skill1}, ${enemy2.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage to ${kyaru.name}, and ${buffedEnemyAttack3} to ${koko.name}!`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    }
}

class Enemy2Skill2 extends SkillNames{
    enemySkill(){
        let buffedEnemyAttack1 = enemy2.effect1 + (enemy2.attack - peko.defense)
        let buffedEnemyAttack2 = enemy2.effect1 + (enemy2.attack - kyaru.defense)
        let buffedEnemyAttack3 = enemy2.effect1 + (enemy2.attack - koko.defense)
    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2.skill2}, ${enemy1.name}, ${enemy2.name}, and ${enemy3.name} defense increased by ${enemy2.effect2}! ${enemy2.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage to ${kyaru.name}, and ${buffedEnemyAttack3} to ${koko.name}!`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    enemy1.defense += enemy1.defense * enemy2.effect2
    enemy2.defense += enemy2.defense * enemy2.effect2
    enemy3.defense += enemy3.defense * enemy2.effect2
    }
}

class Enemy2Skill3 extends SkillNames{
    enemySkill(){
    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2.skill3}, ${enemy2.name} decreased your defense by ${enemy2.effect3}!`
    peko.defense -= peko.defense * enemy2.effect3
    kyaru.defense -= kyaru.defense * enemy2.effect3
    koko.defense -= koko.defense * enemy2.effect3
    }
}

class Enemy2Skill4 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack1 = enemy1.ultimateDamage + (enemy2.attack - peko.defense)
    let buffedEnemyAttack2 = enemy2.ultimateDamage + (enemy2.attack - kyaru.defense)
    let buffedEnemyAttack3 = enemy3.ultimateDamage + (enemy2.attack - koko.defense)

    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2.ultimate}, ${enemy2.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage ${kyaru.name}, and ${buffedEnemyAttack3} damage to ${koko.name}!  ${enemy1.name}'s, ${enemy2.name}'s, and ${enemy3.name}'s defense also increased by ${enemy2.ultimateEffect}`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    enemy1.defense += enemy1.defense * enemy2.ultimateEffect
    enemy2.defense += enemy2.defense * enemy2.ultimateEffect
    enemy3.defense += enemy3.defense * enemy2.ultimateEffect
    }
}
//distinct action for each enemy2skills while sharing the same function name
    //all have a damage formula
    //all have a prompt that describes what's actually ocurring
    //all have an application of the effect/damage to either the stat/HP bar/Mp bar

let enemy2Skill1 = new Enemy2Skill1
let enemy2Skill2 = new Enemy2Skill2
let enemy2Skill3 = new Enemy2Skill3
let enemy2Skill4 = new Enemy2Skill4


/********************************************/
/********************************************/
/*Enemy3 uses a skill*/
/********************************************/
/********************************************/


class Enemy3Skill1 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack1 = enemy3.effect1 + (enemy3.attack - peko.defense)
    let buffedEnemyAttack2 = enemy3.effect1 + (enemy3.attack - kyaru.defense)
    let buffedEnemyAttack3 = enemy3.effect1 + (enemy3.attack - koko.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3.skill1}, ${enemy3.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage ${kyaru.name}, and ${buffedEnemyAttack3} damage to ${koko.name}!`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    }
}

class Enemy3Skill2 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy3.effect2 + (enemy3.attack - kyaru.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3.skill2} and dealt ${buffedEnemyAttack} damage to ${kyaru.name}!  Also recovered ${enemy1.name}'s, ${enemy2.name}'s and ${enemy3.name}'s health by ${buffedEnemyAttack}`
    document.getElementById("kyaruHP").value -= buffedEnemyAttack
    document.getElementById("enemy1HP").value += buffedEnemyAttack
    document.getElementById("enemy2HP").value += buffedEnemyAttack
    document.getElementById("enemy3HP").value += buffedEnemyAttack

    }
}

class Enemy3Skill3 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy3.effect3 + (enemy3.attack - koko.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3.skill3}, ${enemy3.name} dealt ${buffedEnemyAttack} damage to ${koko.name}!`
    document.getElementById("kokoHP").value -= buffedEnemyAttack
    }
}

class Enemy3Skill4 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy3.ultimateDamage + (enemy3.attack - peko.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3.ultimate}, ${enemy3.name} dealt ${buffedEnemyAttack} damage to ${peko.name}, and drained the MP of ${koko.name}, ${kyaru.name}, and ${peko.name}`
    document.getElementById("pekoMP").value -= enemy3.ultimateDamage
    document.getElementById("kokoMP").value -= enemy3.ultimateDamage
    document.getElementById("kyaruMP").value -= enemy3.ultimateDamage

    }
}

let enemy3Skill1 = new Enemy3Skill1()
let enemy3Skill2 = new Enemy3Skill2()
let enemy3Skill3 = new Enemy3Skill3()
let enemy3Skill4 = new Enemy3Skill4()


/********************************************/
/********************************************/
/*Enemy AI
/********************************************/
/********************************************/


class Enemy1Turn extends Character{
    playEnemyTurn(){
        setTimeout(ele=>{
            let array = [enemy1Skill1, enemy1Skill2, enemy1Skill3, enemy1Skill4] //store enemy1Skills into one place
            let random = Math.round(Math.random()*3) //random index to randomly choose an enemy skill
            array[random].enemySkill() //call the actual function
        },1800)
    }
}
let enemy1Turn = new Enemy1Turn()

class Enemy2Turn extends Character{
    playEnemyTurn(){
        setTimeout(ele=>{
        let array = [enemy2Skill1,enemy2Skill2,enemy2Skill3,enemy2Skill4]
        let random = Math.round(Math.random()*3)
        array[random].enemySkill()
    },1800)
    }
}

let enemy2Turn = new Enemy2Turn()

class Enemy3Turn extends Character{
    playEnemyTurn(){
    setTimeout(ele=>{
    let array = [enemy3Skill1,enemy3Skill2,enemy3Skill3,enemy3Skill4]
    let random = Math.round(Math.random()*3)
    array[random].enemySkill()
},1800)
}
}

let enemy3Turn = new Enemy3Turn()

class EnemyAI extends Character{
    constructor(name,health,attack,defense,mana,ultimateDamage,experiencePoint){
        super(name,health,attack,defense,mana,ultimateDamage,experiencePoint)
        this._array = [enemy1Turn,enemy2Turn,enemy3Turn]
        this._index = 2
    }
    get array(){
        return this._array
    }
    get index(){
        return this.index
    }
    AI(){
        let random = Math.round(Math.random()*this._index)
        console.log(this._array)
        this._array[random].playEnemyTurn()
    }
}

let enemyActions = new EnemyAI()

class RemoveEnemyPromptWhenDeath extends EnemyAI{
    constructor(array){
       super(array)
    }
    checkEnemy1(){
        let enemy1 = document.querySelector('#enemy1HP').value
        
        if(enemy1<250){
            document.querySelector('#enemy1').classList.add('hidden')
           enemyActions._array = this.array.splice(this.array.indexOf(enemy1Turn),1)
           if(enemyActions._index>0){
            enemyActions._index -=1
           }
        }
        if(enemy1<250 && enemy2<250 && enemy3<250){
            console.log('You win!')
        }
    }
    checkEnemy2(){
        let enemy2 = document.querySelector('#enemy2HP').value
        if(enemy2<250){
            document.querySelector('#enemy2').classList.add('hidden')
            enemyActions._array.splice(this.array.indexOf(enemy2Turn),1)
            if(enemyActions._index>0){
                enemyActions._index -=1
               }
        }
        if(enemy1<250 && enemy2<250 && enemy3<250){
            console.log('You win!')
        }
        
    }
    checkEnemy3(){
        let enemy3 = document.querySelector('#enemy3HP').value
        if(enemy3<250){
            document.querySelector('#enemy3').classList.add('hidden')
            enemyActions._array = this.array.splice(this.array.indexOf(enemy3Turn),1)
            if(enemyActions._index>0){
                enemyActions._index -=1
               }
        }
        if(enemy1<250 && enemy2<250 && enemy3<250){
            console.log('You win!')
        }
    }


}

let checkHealth = new RemoveEnemyPromptWhenDeath()

/********************************************/
/********************************************/
/*Pecorine Uses a Skill*/
/********************************************/
/********************************************/

//    if attack, attack opponent enemy and gain mp
class PekoUsesSkill1 extends SkillEffect{
    describe(){//character does action
    let buffedPekoAttack = peko.effect1 + (peko.attack - enemy1.defense)
    document.getElementById("enemy1HP").value -= buffedPekoAttack 
    document.getElementById("pekoMP").value += peko.cost1
    document.querySelector('h2').innerText = `${peko.name} used ${peko.skill1}, and dealt ${buffedPekoAttack} damage, recovering ${peko.cost1} MP!`
    hide.hidePeko()
    peko.prompt()
    enemyActions.AI()
    }
}


// if anything else, do specific action
// your opponent will than take their turn
class PekoUsesSkill2 extends SkillEffect{
    describe(){
    document.getElementById("pekoMP").value -= peko.cost2
    document.getElementById("pekoHP").value += peko.effect2
    document.querySelector('h2').innerText = `${peko.name} used ${peko.skill2}, and recovered ${peko.effect2} health!`
    hide.hidePeko()
    peko.prompt()
    enemyActions.AI()
    }
}

class PekoUsesSkill3 extends SkillEffect{
    describe(){
    let buffedPekoAttack = peko.effect3 + (peko.attack - enemy1.defense)
    document.getElementById("pekoMP").value -= peko.cost3
    document.getElementById("enemy1HP").value -= buffedPekoAttack
    document.querySelector('h2').innerText = `${peko.name} used ${peko.skill3}, and dealt ${buffedPekoAttack} damage!`
    hide.hidePeko()
    peko.prompt()
    enemyActions.AI()
    }
}


class PekoUsesSkill4 extends SkillEffect{
    describe(){
    let buffedPekoAttack = peko.ultimateDamage + (peko.attack - enemy1.defense)
    document.getElementById("pekoMP").value -= peko.ultimateCost
    document.getElementById("enemy1HP").value -= buffedPekoAttack
    document.querySelector('h2').innerText = `${peko.name} used ${peko.ultimate}, and dealt ${buffedPekoAttack} damage!`
    hide.hidePeko()
    peko.prompt()
    enemyActions.AI()
    }
}

let pekoUsedSkill1 = new PekoUsesSkill1()
let pekoUsedSkill2 = new PekoUsesSkill2()
let pekoUsedSkill3 = new PekoUsesSkill3()
let pekoUsedUltimate = new PekoUsesSkill4()

class KyaruUsesSkill1 extends SkillEffect{
    describe(){
       let buffedKyaruAttack = kyaru.effect1 + (kyaru.attack - enemy2.defense)
       document.getElementById("kyaruMP").value += kyaru.cost1
       document.getElementById("enemy2HP").value -= buffedKyaruAttack
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaru.skill1} and dealt ${buffedKyaruAttack} to ${enemy2.name}!`
       hide.hideKyaru()
       kyaru.prompt()
       enemyActions.AI()
       }
}

class KyaruUsesSkill2 extends SkillEffect{
    describe(){
       let buffedKyaruAttack = kyaru.effect2 + (kyaru.attack - enemy3.defense)
       document.getElementById("kyaruMP").value -= kyaru.cost2
       document.getElementById("enemy3HP").value -= buffedKyaruAttack
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaru.skill2} and dealt ${buffedKyaruAttack} damage to ${enemy3.name}!`
       hide.hideKyaru()
       kyaru.prompt()
       enemyActions.AI()
       }
}


class KyaruUsesSkill3 extends SkillEffect{
    describe(){
       let buffedKyaruAttack1 = kyaru.effect3 + (kyaru.attack - enemy1.defense)
       let buffedKyaruAttack2 = kyaru.effect3 + (kyaru.attack - enemy2.defense)
       document.getElementById("kyaruMP").value -= kyaru.cost3
       document.getElementById("enemy1HP").value -= buffedKyaruAttack1
       document.getElementById("enemy3HP").value -= buffedKyaruAttack2
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaru.skill3}, and dealt ${buffedKyaruAttack1} damage to ${enemy1.name} and ${buffedKyaruAttack2} damage to ${enemy3.name}!`
       hide.hideKyaru()
       kyaru.prompt()
       enemyActions.AI()
       }
}

class KyaruUsesSkill4 extends SkillEffect{
    describe(){
        let buffedKyaruAttack = kyaru.ultimateDamage + (kyaru.attack - enemy2.defense)
       document.querySelector("#kyaruMP").value -= kyaru.ultimateCost
       document.getElementById("enemy2HP").value -= buffedKyaruAttack
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaru.ultimate}, and dealt ${buffedKyaruAttack} damage to ${enemy2.name} and ${buffedKyaruAttack} to ${enemy2.name}!`
       hide.hideKyaru()
       kyaru.prompt() 
       enemyActions.AI()
       }
}

let kyaruUsedSkill1  = new KyaruUsesSkill1()
let kyaruUsedSkill2  = new KyaruUsesSkill2()
let kyaruUsedSkill3  = new KyaruUsesSkill3()
let kyaruUsedUltimate = new KyaruUsesSkill4() 


class KokoUsesSkill1 extends SkillEffect{
    describe(){
        let buffedKokoAttack1 = koko.effect1 + (koko.attack - enemy1.defense)
        let buffedKokoAttack2 = koko.effect1 + (koko.attack - enemy2.defense)
        let buffedKokoAttack3 = koko.effect1 + (koko.attack - enemy3.defense)
        document.getElementById("kokoMP").value += koko.cost1
        document.getElementById("enemy1HP").value -= buffedKokoAttack1
        document.getElementById("enemy2HP").value -= buffedKokoAttack2
        document.getElementById("enemy3HP").value -= buffedKokoAttack3
        document.querySelector('h2').innerText = `${koko.name} used ${koko.skill1} and dealt ${buffedKokoAttack1} damage to ${enemy1.name}, ${buffedKokoAttack2} damage to ${enemy2.name}, and ${buffedKokoAttack3} damage to ${enemy3.name}!`
        hide.hideKoko()
        koko.prompt()
        enemyActions.AI()
    }
}

class KokoUsesSkill2 extends SkillEffect{
    describe(){
        document.getElementById("kokoMP").value -= koko.cost2
        document.getElementById("pekoMP").value += (peko.mana * koko.effect2)
        document.getElementById("kyaruMP").value += (kyaru.mana * koko.effect2)
        document.getElementById("kokoMP").value += (koko.mana * koko.effect2)
        document.querySelector('h2').innerText = `${koko.name} used ${koko.skill2} and increased ${peko.name}'s,${kyaru.name}'s, and ${koko.name}'s mana by ${koko.effect2}!`
        hide.hideKoko()
        koko.prompt() 
        enemyActions.AI()
    }
}


class KokoUsesSkill3 extends SkillEffect{
    describe(){
        document.getElementById("kokoMP").value -= koko.cost3
        document.getElementById("pekoHP").value += peko.health * koko.effect3
        document.getElementById("kokoHP").value += koko.health * koko.effect3
        document.getElementById("kyaruHP").value += kyaru.health * koko.effect3
        document.querySelector('h2').innerText = `${koko.name} used ${koko.skill3} and increased ${peko.name}'s,${kyaru.name}'s, and ${koko.name}'s health by ${koko.effect3}!`
        hide.hideKoko()
        koko.prompt()
        enemyActions.AI()
    }
}


class KokoUsesSkill4 extends SkillEffect{
    describe(){
        document.getElementById("kokoMP").value -= koko.ultimateCost
        document.getElementById("pekoHP").value += koko.ultimateDamage
        document.getElementById("kokoHP").value += koko.ultimateDamage
        document.getElementById("kyaruHP").value += koko.ultimateDamage
        peko.defense  += peko.defense * koko.ultimateEffect
        kyaru.defense += kyaru.defense * koko.ultimateEffect
        koko.defense  += koko.defense * koko.ultimateEffect
        peko.attack += peko.attack * koko.ultimateEffect
        kyaru.attack += kyaru.attack * koko.ultimateEffect
        koko.attack += koko.attack * koko.ultimateEffect
        document.querySelector('h2').innerText = `${koko.name} used ${koko.ultimate} and increased ${peko.name}'s,${kyaru.name}'s, and ${koko.name}'s health by ${koko.ultimateDamage}, and increased their attack and defense by ${koko.skill4}!`
        hide.hideKoko()
        koko.prompt()    
        enemyActions.AI()
    }
}

let kokoUsedSkill1 = new KokoUsesSkill1()
let kokoUsedSkill2 = new KokoUsesSkill2()
let kokoUsedSkill3 = new KokoUsesSkill3()
let kokoUsedUltimate = new KokoUsesSkill4()

document.querySelector('.kokoAttack').addEventListener('click',kokoUsedSkill1.describe)
document.querySelector('.skills2').addEventListener('click',kokoUsedSkill2.describe)
document.querySelector('.skills3').addEventListener('click',kokoUsedSkill3.describe)
document.querySelector('#kokoUlt').addEventListener('click',kokoUsedUltimate.describe)

document.querySelector('.skills4').addEventListener('click',kyaruUsedSkill1.describe)
document.querySelector('.skills5').addEventListener('click',kyaruUsedSkill2.describe)
document.querySelector('.skills6').addEventListener('click',kyaruUsedSkill3.describe)
document.querySelector('#kyaruUlt').addEventListener('click',kyaruUsedUltimate.describe)

document.querySelector('.skills7').addEventListener('click',pekoUsedSkill1.describe)
document.querySelector('.skills8').addEventListener('click',pekoUsedSkill2.describe)
document.querySelector('.skills9').addEventListener('click',pekoUsedSkill3.describe)
document.querySelector('#pekoUlt').addEventListener('click',pekoUsedUltimate.describe)