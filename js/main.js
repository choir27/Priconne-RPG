/********************************************/
/********************************************/
/*Character Stats, moves, effects, and costs*/
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
        this.experiencePoint = experiencePoint
        this.turns = 1 
        //All characters have the SAME STATS: Name health attack defense Ultimate Damage Mana and Experience Points (last two enemies don't have)
    }

    prompt(){
        this.turns += 1 //adds to the turn counter
        document.querySelector('#turn').innerText = this.turns //shows the new turn counter on screen
        setTimeout(ele=>{
            document.querySelector('h2').innerText = 'Choose an action!' // after 3 machine seconds, it changes to choose an action
        },3500)
    }
}

let peko = new Character('Pecorine',4500,350,25,250,2000,100) //pecorine character object
let kyaru = new Character('Kyaru',3500,650,5,500,6000,200) //kyaru character object
let koko = new Character('Koko',4500,150,10,150,800,300) //koko character object

let enemy1 = new Character('Akino',4000,150,0,250,1500) //enemy1 character object
let enemy2 = new Character('Mitsuki',3500,50,0,250,1500) //enemy2 character object
let enemy3 = new Character('Neneka',2500,550,0,250,1500) //enemy3 character object

class SkillNames extends Character{
    constructor(skill1,skill2,skill3,ultimate,name,health,attack,defense,mana,ultimateDamage,experiencePoint){
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

//Skills do different things
class SkillEffect extends SkillNames{
    constructor(effect1,effect2,effect3,ultimateEffect,skill1,skill2,skill3,ultimate){
        super(skill1,skill2,skill3,ultimate)
        this.effect1 = effect1
        this.effect2 = effect2
        this.effect3 = effect3
        this.ultimateEffect = ultimateEffect
    } //The effect/damage that each skill does
}
let pekoSkills = new SkillNames('Slash Attack','Lunch Time','Princess Strike','Super Full Power ☆ Princess Strike')
let pekoSkillEffects = new SkillEffect(400,800,1000)
let kyaruSkills = new SkillNames('Thunder Ball','Shadow Bullet','Grim Burst','Dark Eclipse')
let kyaruSkillEffects = new SkillEffect(100,1000,3000)
let kokoSkills = new SkillNames('Tri Slash','Aurora Veil','Healing Revelation ','Bonds of Verdure Winds')
let kokoSkillEffects = new SkillEffect(600,.30,.50,.10)

let enemy1Skills = new SkillNames('Flare Rend','Flame Soul','Healing Jewel','Proud Slash')
let enemy1SkillEffects = new SkillEffect(600,.30,.10)
let enemy2Skills = new SkillNames('Dark Tear','Rose Field','Eye of the Devil','Bloody Rose')
let enemy2SkillEffects = new SkillEffect(80,.20,.10,.40)

/******************************************************************/
/******************************************************************/
/****Enemy prompts and their effects on your player characters*****/
/******************************************************************/
/******************************************************************/

// apply distinct effect and name for each character/enemy skills

class Enemy1Skill1 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy1SkillEffects.effect1 + (enemy1.attack - peko.defense)//damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1Skills.skill1} on ${enemy1.name} and dealt ${buffedEnemyAttack} damage!`//actual prompt of what is happening
    document.getElementById("pekoHP").value -= buffedEnemyAttack//apply effect/damage to HP bar
    }
}

class Enemy1Skill2 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy1SkillEffects.effect1 + (enemy1.attack += Math.round(enemy1.attack * .30))- peko.defense //damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1Skills.skill2}, ${enemy1.name}'s attack greatly increased by ${enemy1SkillEffects.effect2}!  ${enemy1.name} used ${enemy1Skills.skill1} on ${peko.name} and dealt ${buffedEnemyAttack} damage!`  //actual prompt of what is happening
    document.getElementById("pekoHP").value -= buffedEnemyAttack //apply effect/damage to HP bar
    }
}

class Enemy1Skill3 extends SkillNames{
    enemySkill(){
    let enemySkill = enemy1.health * enemy1SkillEffects.effect3  //damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1Skills.skill3}, ${enemy1.name} healed their team by ${enemy1SkillEffects.effect3}!` //actual prompt of what is happening
    document.getElementById("enemy1HP").value += enemySkill //apply effect/damage to HP bar
    document.getElementById("enemy2HP").value += enemySkill //apply effect/damage to HP bar
    document.getElementById("enemy3HP").value += enemySkill //apply effect/damage to HP bar
    }
}

class Enemy1Skill4 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy1.ultimateDamage + (enemy1.attack - peko.defense)  //damage formula
    document.querySelector('h2').innerText = `${enemy1.name} used ${enemy1Skills.ultimate}, ${enemy1.name} dealt ${buffedEnemyAttack} damage to ${peko.name}!` //actual prompt of what is happening
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


class Enemy2Skill1 extends SkillNames{
    enemySkill(){
        let buffedEnemyAttack1 = enemy2SkillEffects.effect1 + (enemy2.attack - peko.defense)
        let buffedEnemyAttack2 = enemy2SkillEffects.effect1 + (enemy2.attack - kyaru.defense)
        let buffedEnemyAttack3 = enemy2SkillEffects.effect1 + (enemy2.attack - koko.defense)
    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2Skills.skill1}, ${enemy2.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage to ${kyaru.name}, and ${buffedEnemyAttack3} to ${koko.name}!`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    }
}

class Enemy2Skill2 extends SkillNames{
    enemySkill(){
        let buffedEnemyAttack1 = enemy2SkillEffects.effect1 + (enemy2.attack - peko.defense)
        let buffedEnemyAttack2 = enemy2SkillEffects.effect1 + (enemy2.attack - kyaru.defense)
        let buffedEnemyAttack3 = enemy2SkillEffects.effect1 + (enemy2.attack - koko.defense)
    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2Skills.skill2}, ${enemy1.name}, ${enemy2.name}, and ${enemy3.name} defense increased by ${enemy2SkillEffects.effect2}! ${enemy2.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage to ${kyaru.name}, and ${buffedEnemyAttack3} to ${koko.name}!`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    enemy1.defense += enemy1.defense * enemy2SkillEffects.effect2
    enemy2.defense += enemy2.defense * enemy2SkillEffects.effect2
    enemy3.defense += enemy3.defense * enemy2SkillEffects.effect2
    }
}

class Enemy2Skill3 extends SkillNames{
    enemySkill(){
    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2Skills.skill3}, ${enemy2.name} decreased your defense by ${enemy2SkillEffects.effect3}!`
    peko.defense -= peko.defense * enemy2SkillEffects.effect2
    kyaru.defense -= kyaru.defense * enemy2SkillEffects.effect2
    koko.defense -= koko.defense * enemy2SkillEffects.effect2
    }
}

class Enemy2Skill4 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack1 = enemy1.ultimateDamage + (enemy2.attack - peko.defense)
    let buffedEnemyAttack2 = enemy2.ultimateDamage + (enemy2.attack - kyaru.defense)
    let buffedEnemyAttack3 = enemy3.ultimateDamage + (enemy2.attack - koko.defense)

    document.querySelector('h2').innerText = `${enemy2.name} used ${enemy2Skills.ultimate}, ${enemy2.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage ${kyaru.name}, and ${buffedEnemyAttack3} damage to ${koko.name}!  ${enemy1.name}'s, ${enemy2.name}'s, and ${enemy3.name}'s defense also increased by ${enemy2SkillEffects.ultimateEffect}`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    enemy1.defense += enemy1.defense * enemy2SkillEffects.effect2
    enemy2.defense += enemy2.defense * enemy2SkillEffects.effect2
    enemy3.defense += enemy3.defense * enemy2SkillEffects.effect2
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

let enemy3Skills = new SkillNames('Icy Burst','Satellite Ray','Instance Gem','Phantasmagoria')
let enemy3SkillEffects = new SkillEffect(400,800,2000)

class Enemy3Skill1 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack1 = enemy3SkillEffects.effect1 + (enemy3.attack - peko.defense)
    let buffedEnemyAttack2 = enemy3SkillEffects.effect1 + (enemy3.attack - kyaru.defense)
    let buffedEnemyAttack3 = enemy3SkillEffects.effect1 + (enemy3.attack - koko.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3Skills.skill1}, ${enemy3.name} dealt ${buffedEnemyAttack1} damage to ${peko.name}, ${buffedEnemyAttack2} damage ${kyaru.name}, and ${buffedEnemyAttack3} damage to ${koko.name}!`
    document.getElementById("pekoHP").value -= buffedEnemyAttack1
    document.getElementById("kyaruHP").value -= buffedEnemyAttack2
    document.getElementById("kokoHP").value -= buffedEnemyAttack3
    }
}

class Enemy3Skill2 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy3SkillEffects.effect2 + (enemy3.attack - kyaru.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3Skills.skill2} and dealt ${buffedEnemyAttack} damage to ${kyaru.name}!  Also recovered ${enemy1.name}'s, ${enemy2.name}'s and ${enemy3.name}'s health by ${buffedEnemyAttack}`
    document.getElementById("kyaruHP").value -= buffedEnemyAttack
    document.getElementById("enemy1HP").value += buffedEnemyAttack
    document.getElementById("enemy2HP").value += buffedEnemyAttack
    document.getElementById("enemy3HP").value += buffedEnemyAttack

    }
}

class Enemy3Skill3 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy3SkillEffects.effect3 + (enemy3.attack - koko.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3Skills.skill3}, ${enemy3.name} dealt ${buffedEnemyAttack} damage to ${koko.name}!`
    document.getElementById("kokoHP").value -= buffedEnemyAttack
    }
}

class Enemy3Skill4 extends SkillNames{
    enemySkill(){
    let buffedEnemyAttack = enemy3.ultimateDamage + (enemy3.attack - peko.defense)

    document.querySelector('h2').innerText = `${enemy3.name} used ${enemy3Skills.ultimate}, ${enemy3.name} dealt ${buffedEnemyAttack} damage to ${peko.name}, and drained the MP of ${koko.name}, ${kyaru.name}, and ${peko.name}`
    document.getElementById("pekoMP").value -= enemy3.ultimateDamage
    document.getElementById("kokoMP").value -= enemy3.ultimateDamage
    document.getElementById("kyaruMP").value -= enemy3.ultimateDamage

    }
}

let enemy3Skill1 = new Enemy3Skill1()
let enemy3Skill2 = new Enemy3Skill2()
let enemy3Skill3 = new Enemy3Skill3()
let enemy3Skill4 = new Enemy3Skill4()

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
        this._array[random].playEnemyTurn()
    }
}

let enemyActions = new EnemyAI()

class RemoveEnemyPromptWhenDeath extends EnemyAI{
    constructor(array){
       super(array)
    }
    check(){
        let enemy1 = document.querySelector('#enemy1HP').value
        let enemy2 = document.querySelector('#enemy2HP').value
        let enemy3 = document.querySelector('#enemy3HP').value

        if(enemy1<750){
           enemyActions._array = this.array.splice(this.array.indexOf(enemy1Turn),1)
           if(enemyActions._index>0){
            enemyActions._index -=1
           }
        }
        if(enemy2<750){
            enemyActions._array.splice(this.array.indexOf(enemy2Turn),1)
            if(enemyActions._index>0){
                enemyActions._index -=1
               }
        }
        if(enemy3<750){
            enemyActions._array = this.array.splice(this.array.indexOf(enemy3Turn),1)
            if(enemyActions._index>0){
                enemyActions._index -=1
               }
        }
    }
}



class SkillCost extends SkillNames{
    constructor(cost1,cost2,cost3,cost4,effect1,effect2,effect3){
        super(effect1,effect2,effect3)
        this._cost1 = cost1
        this._cost2 = cost2
        this._cost3 = cost3
        this._cost4 = cost4
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
    get cost4(){
        return this._cost4
    }
}  
let pekoSkillCosts = new SkillCost(50,80,180,250)
let kyaruSkillCosts = new SkillCost(80,130,220,500)
let kokoSkillCosts = new SkillCost(30,50,70,150)
//    if attack, attack opponent enemy and gain mp
class PekoUsesSkill1 extends SkillEffect{
    describe(){//character does action
    let buffedPekoAttack = pekoSkillEffects.effect1 + (peko.attack - enemy1.defense)
    document.getElementById("enemy1HP").value -= buffedPekoAttack 
    document.getElementById("pekoMP").value += pekoSkillCosts.cost1
    document.querySelector('h2').innerText = `${peko.name} used ${pekoSkills.skill1}, and dealt ${buffedPekoAttack} damage, recovering ${pekoSkillCosts.cost1} MP!`
    hideSkills.hideSkillsPeko()
    peko.prompt()
    hideSkills.hideUlt()
    enemyActions.AI()
    checkHealth.check()
    }
}


// if anything else, do specific action
// your opponent will than take their turn
class PekoUsesSkill2 extends SkillEffect{
    describe(){
    document.getElementById("pekoMP").value -= pekoSkillCosts.cost2
    document.getElementById("pekoHP").value += pekoSkillEffects.effect2
    document.querySelector('h2').innerText = `${peko.name} used ${pekoSkills.skill2}, and recovered ${pekoSkillEffects.effect2} health!`
    hideSkills.hideSkillsPeko()
    peko.prompt()
    hideSkills.hideUlt()
    enemyActions.AI()
    }
}

class PekoUsesSkill3 extends SkillEffect{
    describe(){
    let buffedPekoAttack = pekoSkillEffects.effect3 + (peko.attack - enemy1.defense)
    document.getElementById("pekoMP").value -= pekoSkillCosts.cost3
    document.getElementById("enemy1HP").value -= buffedPekoAttack
    document.querySelector('h2').innerText = `${peko.name} used ${pekoSkills.skill3}, and dealt ${buffedPekoAttack} damage!`
    hideSkills.hideSkillsPeko()
    peko.prompt()
    hideSkills.hideUlt()
    enemyActions.AI()
    }
}


class PekoUsesSkill4 extends SkillEffect{
    describe(){
    let buffedPekoAttack = peko.ultimateDamage + (peko.attack - enemy1.defense)
    document.getElementById("pekoMP").value -= pekoSkillCosts.cost4
    document.getElementById("enemy1HP").value -= buffedPekoAttack
    document.querySelector('h2').innerText = `${peko.name} used ${pekoSkills.ultimate}, and dealt ${buffedPekoAttack} damage!`
    hideSkills.hideSkillsPeko()
    peko.prompt()      
    hideSkills.hideUlt()
    enemyActions.AI()
    }
}

let pekoUsedSkill1 = new PekoUsesSkill1()
let pekoUsedSkill2 = new PekoUsesSkill2()
let pekoUsedSkill3 = new PekoUsesSkill3()
let pekoUsedUltimate = new PekoUsesSkill4()

class KyaruUsesSkill1 extends SkillEffect{
    describe(){
       let buffedKyaruAttack = kyaruSkillEffects.effect1 + (kyaru.attack - enemy2.defense)
       document.getElementById("kyaruMP").value += kyaruSkillCosts.cost1
       document.getElementById("enemy2HP").value -= buffedKyaruAttack
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaruSkills.skill1} and dealt ${buffedKyaruAttack} to ${enemy2.name}!`
       hideSkills.hideSkillsKyaru()
       kyaru.prompt()      
       hideSkills.hideUlt()
       enemyActions.AI()
       }
}

class KyaruUsesSkill2 extends SkillEffect{
    describe(){
       let buffedKyaruAttack = kyaruSkillEffects.effect2 + (kyaru.attack - enemy3.defense)
       document.getElementById("kyaruMP").value -= kyaruSkillCosts.cost2
       document.getElementById("enemy3HP").value -= buffedKyaruAttack
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaruSkills.skill2} and dealt ${buffedKyaruAttack} damage to ${enemy3.name}!`
       hideSkills.hideSkillsKyaru()
       kyaru.prompt()      
       hideSkills.hideUlt()
       enemyActions.AI()
       }
}

let checkHealth = new RemoveEnemyPromptWhenDeath()


class KyaruUsesSkill3 extends SkillEffect{
    describe(){
       let buffedKyaruAttack1 = kyaruSkillEffects.effect3 + (kyaru.attack - enemy1.defense)
       let buffedKyaruAttack2 = kyaruSkillEffects.effect3 + (kyaru.attack - enemy2.defense)
       document.getElementById("kyaruMP").value -= kyaruSkillCosts.cost3
       document.getElementById("enemy1HP").value -= buffedKyaruAttack1
       document.getElementById("enemy3HP").value -= buffedKyaruAttack2
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaruSkills.skill3}, and dealt ${buffedKyaruAttack1} damage to ${enemy1.name} and ${buffedKyaruAttack2} damage to ${enemy3.name}!`
       hideSkills.hideSkillsKyaru()
       kyaru.prompt()      
       hideSkills.hideUlt()
       enemyActions.AI()
       }
}

class KyaruUsesSkill4 extends SkillEffect{
    describe(){
        let buffedKyaruAttack = kyaru.ultimateDamage + (kyaru.attack - enemy2.defense)
       document.getElementById("kyaruMP").value -= kyaruSkillCosts.cost4
       document.getElementById("enemy2HP").value -= buffedKyaruAttack
       document.querySelector('h2').innerText = `${kyaru.name} used ${kyaruSkills.ultimate}, and dealt ${buffedKyaruAttack} damage to ${enemy2.name} and ${buffedKyaruAttack} to ${enemy2.name}!`
       hideSkills.hideSkillsKyaru()
       kyaru.prompt()      
       hideSkills.hideUlt()
       enemyActions.AI()
       }
}

let kyaruUsedSkill1  = new KyaruUsesSkill1()
let kyaruUsedSkill2  = new KyaruUsesSkill2()
let kyaruUsedSkill3  = new KyaruUsesSkill3()
let kyaruUsedUltimate = new KyaruUsesSkill4() 


class KokoUsesSkill1 extends SkillEffect{
    describe(){
        let buffedKokoAttack1 = kokoSkillEffects.effect1 + (koko.attack - enemy1.defense)
        let buffedKokoAttack2 = kokoSkillEffects.effect1 + (koko.attack - enemy2.defense)
        let buffedKokoAttack3 = kokoSkillEffects.effect1 + (koko.attack - enemy3.defense)
        document.getElementById("kokoMP").value += kyaruSkillCosts.cost1
        document.getElementById("enemy1HP").value -= buffedKokoAttack1
        document.getElementById("enemy2HP").value -= buffedKokoAttack2
        document.getElementById("enemy3HP").value -= buffedKokoAttack3
        document.querySelector('h2').innerText = `${koko.name} used ${kokoSkills.skill1} and dealt ${buffedKokoAttack1} damage to ${enemy1.name}, ${buffedKokoAttack2} damage to ${enemy2.name}, and ${buffedKokoAttack3} damage to ${enemy3.name}!`
        hideSkills.hideSkillsKoko()
        koko.prompt()      
        hideSkills.hideUlt()
        enemyActions.AI()
    }
}

class KokoUsesSkill2 extends SkillEffect{
    describe(){
        document.getElementById("kokoMP").value -= kyaruSkillCosts.cost2
        document.getElementById("pekoMP").value += (peko.mana * kokoSkillEffects.effect2)
        document.getElementById("kyaruMP").value += (kyaru.mana * kokoSkillEffects.effect2)
        document.getElementById("kokoMP").value += (koko.mana * kokoSkillEffects.effect2)
        document.querySelector('h2').innerText = `${koko.name} used ${kokoSkills.skill2} and increased ${peko.name}'s,${kyaru.name}'s, and ${koko.name}'s mana by ${kokoSkillEffects.effect2}!`
        hideSkills.hideSkillsKoko()
        koko.prompt()      
        hideSkills.hideUlt()
        enemyActions.AI()
    }
}


class KokoUsesSkill3 extends SkillEffect{
    describe(){
        document.getElementById("kokoMP").value -= kyaruSkillCosts.cost3
        document.getElementById("pekoHP").value += peko.health * kokoSkillEffects.effect3
        document.getElementById("kokoHP").value += koko.health * kokoSkillEffects.effect3
        document.getElementById("kyaruHP").value += kyaru.health * kokoSkillEffects.effect3
        document.querySelector('h2').innerText = `${koko.name} used ${kokoSkills.skill3} and increased ${peko.name}'s,${kyaru.name}'s, and ${koko.name}'s health by ${kokoSkillEffects.effect3}!`
        hideSkills.hideSkillsKoko()
        koko.prompt()      
        hideSkills.hideUlt()
        enemyActions.AI()
    }
}


class KokoUsesSkill4 extends SkillEffect{
    describe(){
        document.getElementById("kokoMP").value -= kyaruSkillCosts.cost4
        document.getElementById("pekoHP").value += koko.ultimateDamage
        document.getElementById("kokoHP").value += koko.ultimateDamage
        document.getElementById("kyaruHP").value += koko.ultimateDamage
        peko.defense  += peko.defense * kokoSkillEffects.ultimateEffect
        kyaru.defense += kyaru.defense * kokoSkillEffects.ultimateEffect
        koko.defense  += koko.defense * kokoSkillEffects.ultimateEffect
        peko.attack += peko.attack * kokoSkillEffects.ultimateEffect
        kyaru.attack += kyaru.attack * kokoSkillEffects.ultimateEffect
        koko.attack += koko.attack * kokoSkillEffects.ultimateEffect
        document.querySelector('h2').innerText = `${koko.name} used ${kokoSkills.ultimate} and increased ${peko.name}'s,${kyaru.name}'s, and ${koko.name}'s health by ${koko.ultimateDamage}, and increased their attack and defense by ${kokoSkillEffects.ultimateEffect}!`
        hideSkills.hideSkillsKoko()
        koko.prompt()      
        hideSkills.hideUlt()
        enemyActions.AI()
    }
}

let kokoUsedSkill1 = new KokoUsesSkill1()
let kokoUsedSkill2 = new KokoUsesSkill2()
let kokoUsedSkill3 = new KokoUsesSkill3()
let kokoUsedUltimate = new KokoUsesSkill4()


class HideSkills extends Character{
    hideUlt(){
        for(let i = 1;i<4;i++){
            document.querySelector(`.ult${i}`).classList.add('hidden')//hide all ultimate buttons
        }
    }
    hideSkillsKoko(){
        for(let i = 1;i<4;i++){
            document.querySelector(`.skills${i}`).classList.add('hidden')//hide all koko buttons
        }
    }
    hideSkillsKyaru(){
        for(let i = 4;i<7;i++){
            document.querySelector(`.skills${i}`).classList.add('hidden')//hide all kyaru buttons
        }
    }
    hideSkillsPeko(){
        for(let i = 7;i<10;i++){
            document.querySelector(`.skills${i}`).classList.add('hidden')//hide all peko buttons
        }
    }
}

let hideSkills = new HideSkills()


document.querySelector('.pekoAttack').addEventListener('click',pekoUsedSkill1.describe)
document.querySelector('#lunchTime').addEventListener('click',pekoUsedSkill2.describe)
document.querySelector('#princessStrike').addEventListener('click',pekoUsedSkill3.describe)
document.querySelector('#pekoUlt').addEventListener('click',pekoUsedUltimate.describe)

document.querySelector('.kyaruAttack').addEventListener('click',kyaruUsedSkill1.describe)
document.querySelector('#shadowBullet').addEventListener('click',kyaruUsedSkill2.describe)
document.querySelector('#grimBurst').addEventListener('click',kyaruUsedSkill3.describe)
document.querySelector('#kyaruUlt').addEventListener('click',kyaruUsedUltimate.describe)

document.querySelector('.kokoAttack').addEventListener('click',kokoUsedSkill1.describe)
document.querySelector('#aurora').addEventListener('click',kokoUsedSkill2.describe)
document.querySelector('#healing').addEventListener('click',kokoUsedSkill3.describe)
document.querySelector('#kokoUlt').addEventListener('click',kokoUsedUltimate.describe)

// document.querySelector('#hololive').onclick = test1


// function test1(){
// console.log('wah')
// document.querySelector('#hololive').onclick = test2;
// }


// function test2(){
//     console.log('tako')
//     document.querySelector('#hololive').onclick = test3;
// }


// function test3(){
//     console.log('owl')
//     document.querySelector('#hololive').onclick = test1;
// }