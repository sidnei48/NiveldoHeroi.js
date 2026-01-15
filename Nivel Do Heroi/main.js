let Hero = {
    name: "Test",
    experience: 0,
}

if (Hero.experience == 0) {
    console.log("Voce ainda não possui um nivel");
    }else if (Hero.experience < 1000) {
        console.log("O nivel do Heroi " + Hero.name + " é Ferro");
    }else if (Hero.experience >= 1001 && Hero.experience < 2000) {
        console.log("O nivel do Heroi " + Hero.name + " é Bronze");
    }else if (Hero.experience >= 2001 && Hero.experience < 5000) {
        console.log("O nivel do Heroi " + Hero.name + " é Prata");
    }else if (Hero.experience >= 5001 && Hero.experience < 7000) {
        console.log("O nivel do Heroi " + Hero.name + " é Ouro");
    }else if (Hero.experience >= 7001 && Hero.experience < 8000) {
        console.log("O nivel do Heroi " + Hero.name + " é Platina");
    }else if (Hero.experience >= 8001 && Hero.experience < 9000) {
        console.log("O nivel do Heroi " + Hero.name + " é Ascendente");
    }else if (Hero.experience >= 9001 && Hero.experience < 10000) {
        console.log("O nivel do Heroi " + Hero.name + " é Imortal");
    }else if (Hero.experience >= 10001) {
        console.log("O nivel do Heroi " + Hero.name + " é Radiante");
    }