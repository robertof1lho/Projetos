var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var resposta = "Não, nunca tinha programado na minha vida antes de fazer essa atividade. Porém, essa primeira experiência foi muito divertida e descontraida para começar meus estudos de programação. O tutorial é bem explicado, consegui entender todas as partes dele com facilidade. Tudo no código funcionou corretamente. ";
console.log(resposta);


var game = new Phaser.Game(config);
var peixinho_roxo;
var alga1;
var alga2;
var alga3;
var alga4;
var submar;
var bubble;

function preload() {
    this.load.image('mar' , './assets/bg_azul-escuro.png');
    this.load.image('logo' , './assets/logo-inteli_branco.png');
    this.load.image('peixe' , './assets/peixe/peixinho_roxo.png');
    this.load.image('alga1' , './assets/outros/alga-1.png');
    this.load.image('alga2' , './assets/outros/alga-2.PNG');
    this.load.image('alga3' , './assets/outros/alga-3.PNG');
    this.load.image('alga4' , './assets/outros/alga-4.png');
    this.load.image('sand' , './assets/outros/sand.png');
    this.load.image('submar' , './assets/outros/submar.png');
    this.load.image('bubble' , './assets/outros/bubble.png');

}


function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(519, 525, 'logo').setScale(0.5);
    sand = this.add.image(300,480, 'sand').setScale(0.6);
    subamar = this.add.image(200,200, 'submar').setScale(0.04);
    bubble = this.add.image(320, 200, 'bubble').setScale(0.03);
    alga1 = this.add.image(700, 526, 'alga1').setScale(0.08);
    alga2 = this.add.image(275,530, 'alga2').setScale(0.035);
    alga3 = this.add.image(367, 560, 'alga3').setScale(0.02);
    alga4 = this.add.image(120, 480, 'alga4').setScale(0.03);
    peixinho_roxo = this.add.image(400, 300, 'peixe').setScale(0.8);

    
    peixinho_roxo.setFlip(true, false);
}


function update() {
    peixinho_roxo.x = this.input.x;
    peixinho_roxo.y = this.input.y;
}
